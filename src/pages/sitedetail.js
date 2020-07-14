import React, { Component, Fragment } from 'react'
import RightComp from '@/commonComp/RightComp'
import SiteDetail from '@/components/SiteDetail'
import axios from 'axios'
import { getSiteDetail, addView } from '@/store/actions'
// import Router from 'next/router'
import Router, { withRouter } from "next/router";
import { serverUrl } from '@/common/url'
import eventBus from '@/common/eventBus'
import routerMap from '@/common/router'
import { getServeAuthorization } from '@/common/common'
import { Head } from 'next/head';

class HomePage extends Component {
	
  componentDidMount () {
    const { id } = this.props.router.query
    const siteId = parseInt(id);
    addView({_id: siteId})

    eventBus.on('login#siteDetail', () => {
    	Router.push({
		    pathname: routerMap.sitedetail,
	    	query: { id },

		  })
    })
  }
  

  /*componentDidUpdate (prevProps) {
    const { query: prevParams } = prevProps.router
    const { query: curParams } = this.props.router
    // console.log(prevParams, curParams)
    if (prevParams.id !== curParams.id) {
      // this.handleOk();
      this.getSite$Add()
    }
  }
	getSite$Add = () => {
    const { id: t_id } = this.props.router.query
    // console.log(siteId, this.props)
    getSiteDetail({site_id: siteId})
      .then(({result={}}) => this.setState({siteData: result, isCollected: result.isCollected}))
      
  }*/
  render () {
    const { data } = this.props;
    // console.log(data.name+','+data.tags.join(','))
    return <Fragment>
      {/*<Head>
        <meta
          name="description"
          content={`${data.name+','+data.tags.join(',')}`}
        />
        <meta name="Keywords" content={data.desc} />
        <title>{'有趣实用网——' + data.name+','+data.tags.join(',')}</title>
      </Head>*/}
      <SiteDetail data={data} id={this.props.router.query.id} />
      <RightComp />
    </Fragment>
  }
}

export async function getServerSideProps(context) {
  // console.log('in getServerSideProps --------')
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // console.log(context.params)
  const { query: { id }, req } = context;
  // console.log(req.cookies)
  // console.log(' ------------------------ ')
  const res = await axios.get(serverUrl+'/getSiteDetail', { params: { site_id: id }, headers: getServeAuthorization(req) }, )
  const data = res.data.result || {}
  // console.log(' ------------------------ ')
  // console.log(res.data)
  // console.log('in getServerSideProps')
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data, 
      m_title: data.name && '有趣实用网——' + data.name,
      m_keywords: data.name && (data.name+','+data.tags.join(',')),
      m_description: data.desc && data.desc
      // defaultList: res.data.result.list,
      // defaultTotal: res.data.result.total
    },
  }
}

export default withRouter(HomePage);

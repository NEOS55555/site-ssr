import React, { Component, Fragment } from 'react'
import { withRouter } from "next/router";
// import Router from 'next/router'
// import { connect } from 'react-redux'
// import { addCountAct, subCountAct } from '@/store/actions'
import { Button } from 'antd';
import { serverUrl } from '@/common/url'
import axios from 'axios'
// import Link from 'next/Link'
import ComContent from '@/components/ComContent'
// import SiteItem from '@/commonComp/SiteItem'
import RightComp from '@/commonComp/RightComp'

class HomePage extends Component {
  
  componentDidMount () {
    console.log(this.props.router.query)
    // console.log(this.abc)
  }

  componentDidUpdate () {
    console.log(this.props.router.query)
  }

  render () {
    const { router: { query: { pageIndex=1, status=-1, catalog=-1, search } } } = this.props;
    const { list, total } = this.props;
    return <Fragment>
      <ComContent
        list={list}
        pageIndex={parseInt(pageIndex)}
        pageSize={10}
        status={parseInt(status)}
        catalog={parseInt(catalog)}
        total={total}
      />
      <RightComp />
    </Fragment>
  }
}

export async function getServerSideProps(context) {
  console.log('in getServerSideProps --------')
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // console.log(context.params)
  const { query: { pageIndex=1, status=-1, catalog=-1, search } } = context;
  // console.log('getServerSideProps ---', context.query)
  // console.log(url+'/getSiteDetail')
  const res = await axios.post(serverUrl+'/getSiteList', {
    pageIndex: parseInt(pageIndex),
    pageSize: 10,
    status,
    catalog,
    search,
    isTotal: true
  })
  // console.log(res)
  // console.log('in getServerSideProps')
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ...res.data.result
      // defaultList: res.data.result.list,
      // defaultTotal: res.data.result.total
    },
  }
}


export default withRouter(HomePage);

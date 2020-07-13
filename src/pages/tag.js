import React, { Component, Fragment } from 'react'
import { withRouter } from "next/router";
import Router from 'next/router'
// import { connect } from 'react-redux'
// import { addCountAct, subCountAct } from '@/store/actions'
import { Button } from 'antd';
import { serverUrl } from '@/common/url'
import axios from 'axios'
import ComContent from '@/components/ComContent'
// import SiteItem from '@/commonComp/SiteItem'
import RightComp from '@/commonComp/RightComp'

class HomePage extends Component {

  render () {
    const { router: { query: { pageIndex=1, words } } } = this.props;
    const { list, total } = this.props;
    return <Fragment>
      <ComContent
        isTag={true}
        list={list}
        total={total}
        pageIndex={parseInt(pageIndex)}
        pageSize={10}
        words={words}
      />
      <RightComp />
    </Fragment>
  }
}

export async function getServerSideProps(context) {
  // console.log('in getServerSideProps --------')
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // console.log(context.params)
  const { query: { pageIndex=1, words='' } } = context;
  // console.log('getServerSideProps ---', context.query)
  // console.log(url+'/getSiteDetail')
  const res = await axios.post(serverUrl+'/getSiteList', {
    pageIndex: parseInt(pageIndex),
    pageSize: 10,
    status: 1,
    tag_name: words,
    isTotal: true
  })
  // console.log(res.data)
  const { result } = res.data;
  // console.log('in getServerSideProps')
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      ...result,
      m_title: '有趣实用网——搜索结果' + words,
      // m_keywords: data.name+','+data.tags.join(','),
      // m_description: data.desc
      // defaultList: res.data.result.list,
      // defaultTotal: res.data.result.total
    },
  }
}


export default withRouter(HomePage);

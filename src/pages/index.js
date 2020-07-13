import React, { Component, Fragment } from 'react'
import { withRouter } from "next/router";
// import Router from 'next/router'
// import { connect } from 'react-redux'
// import { addCountAct, subCountAct } from '@/store/actions'
import { Button } from 'antd';
import { serverUrl } from '@/common/url'
import axios from 'axios'
import ComContent from '@/components/ComContent'
// import SiteItem from '@/commonComp/SiteItem'
import RightComp from '@/commonComp/RightComp'
import { getServeAuthorization } from '@/common/common'

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
  
  const { req, query: { pageIndex=1, status=-1, catalog=-1, search } } = context;
  // console.log(getServeAuthorization(req))
  const res = await axios.post(serverUrl+'/getSiteList', {
    pageIndex: parseInt(pageIndex),
    pageSize: 10,
    status,
    catalog,
    search,
    isTotal: true
  }, { headers: getServeAuthorization(req) })
  
  return {
    props: {
      ...res.data.result
      // defaultList: res.data.result.list,
      // defaultTotal: res.data.result.total
    },
  }
}


export default withRouter(HomePage);

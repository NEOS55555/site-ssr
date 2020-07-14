import React, { Component, Fragment } from 'react'
import { withRouter } from "next/router";
// import Router from 'next/router'
// import { connect } from 'react-redux'
import { getSiteListAxios } from '@/store/actions'
import { Button } from 'antd';
import { serverUrl } from '@/common/url'
// import axios from 'axios'
import ComContent from '@/components/ComContent'
// import SiteItem from '@/commonComp/SiteItem'
import RightComp from '@/commonComp/RightComp'

class HomePage extends Component {
  state = {
    list: [],
    total: 100
  }
  componentDidMount () {
    this.getList(true)
    // console.log(this.abc)
  }

  getList (isTotal) {
    const { router: { query: { pageIndex=1, status, catalog, search } } } = this.props;

    getSiteListAxios({
      pageIndex: parseInt(pageIndex),
      pageSize: 10,
      status,
      catalog,
      search,
      is_edit: true,
      isTotal
    }).then(res => {
      // console.log(res)
      this.setState({
        ...res.result
      })
    })
  }

  componentDidUpdate (prevProps) {
    // console.log(prevProps, this.props)
    const { router: { query: { pageIndex: prevPageIndex=1, status: prevStatus, catalog: prevCatalog, search: prevSearch, rand: prevRand } } } = prevProps;
    const { router: { query: { pageIndex=1, status, catalog, search, rand } } } = this.props;
    if (prevPageIndex !== pageIndex || prevStatus !== status || prevCatalog !== catalog || search !== search || rand !== prevRand) {
      this.getList(false)
    }
    // const { router: { query: { pageIndex=1, status=-1, catalog=-1, search } } } = this.props;
  }

  render () {
    const { router: { query: { pageIndex=1, status, catalog, search } } } = this.props;
    const { list, total } = this.state;
    return <Fragment>
      <ComContent
        isSystem
        list={list}
        pageIndex={parseInt(pageIndex)}
        pageSize={10}
        status={parseInt(status)}
        catalog={parseInt(catalog)}
        total={total}
      />
      <RightComp isSystem />
    </Fragment>
  }
}

export async function getServerSideProps(context) {

  return {
    props: {
      // defaultList: res.data.result.list,
      // defaultTotal: res.data.result.total
    },
  }
}


export default withRouter(HomePage);

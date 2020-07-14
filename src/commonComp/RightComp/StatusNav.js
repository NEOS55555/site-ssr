import React, {Component} from 'react';
// import {connect} from 'react-redux'
import { Menu } from 'antd';
// import { withRouter } from "react-router";
import { statusArr } from '@/common/constant'
import { getSiteList, updateSiteMngData } from '@/store/actions'
// import Link from 'next/link'
import Router, { withRouter } from "next/router";
import routerMap from '@/common/router'

// const { SubMenu } = Menu;

class StatusNav extends Component {
	
  onSelect = (a, b, c) => {
    const { router: { query: { pageIndex=1, catalog=-1, search } } } = this.props;
    // debugger;
    // console.log(a.key, b, c)
    Router.push({
      pathname: routerMap.system,
      query: { pageIndex, status: a.key, catalog, search },

    })
  }
	render () {
    const { router: { query: { pageIndex=1, status=-1, catalog=-1, search } } } = this.props;
		// console.log(match.params.catalog)
		return (
      <div className="nav-list status-nav">
        <div className="title">状态</div>
  			<Menu
          // mode="inline"
          // theme="dark"
          selectedKeys={[status+'']}
          // onOpenChange={this.onOpenChange}
          onSelect={this.onSelect}
          // style={{ width: 256 }}
        >
        	{
        		[{id: -1, name: '全部'}, ...statusArr].map(({id, name}) => <Menu.Item key={id}>{name}</Menu.Item>)
        	}
          
        </Menu>
      </div>
		)
	}
}
/*const mapStateToProps = state => {
  const { pageSize, catalog, status, search } = state.siteMng
  return {
    pageSize, catalog, search,
    status,
  };
};
*/

/*const mapDispatchToProps = dispatch => {
  return {
    updateDate (data) {
      return dispatch(updateSiteMngData(data))
    },
  	getSiteList (params) {
      return dispatch(getSiteList(params))
    },
  };
};*/
export default withRouter(StatusNav);

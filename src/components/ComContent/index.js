import React, { Component } from 'react';
import Content from '../Content/Content'
import Router from 'next/router'
// import Dialog from '@/commonComp/Dialog'
import { connect } from 'react-redux'
// import './SystemComp.scss';
// import { Button } from 'antd'
// import { LOG_OVERDUE_CODE } from '@/common/constant'
import { getSiteList, updateSiteMngData, updateSiteList, collectSite } from '@/store/actions'
import { withRouter } from "next/router";

import eventBus from '@/common/eventBus'
import routerMap from '@/common/router'


class ComContent extends Component {
		
	/*getsys () {

		const { isSystem, status, router: { query: { catalog, tagName, search } } } = this.props;
		return {
			catalog: parseInt(catalog) || -1,
			status: isSystem ? status : 1,
			is_edit: !!isSystem,
			tag_name: tagName,
			search
		}
	}*/


	/*constructor (props) {
		super(props)
		// console.log(props)
		this.state = {
			list: [],
			// status: props.isSystem ? -1 : 1,
		}
	}*/
	

	handleOk = () => {
		const { pageIndex, pageSize } = this.props;
		/*const { pageIndex: tPageindex, pageSize } = this.props;
		const { siteTotal } = this.props;
		const max = Math.ceil((siteTotal-dels) / pageSize)
		const pageIndex = tPageindex > max ? max : tPageindex;
		console.log(pageIndex, max, dels, siteTotal, pageSize)*/
	}

	/*getListAndSet = (params) => {
		const { pageIndex: sPageIndex, pageSize: sPageSize } = this.props;

		const { pageIndex=sPageIndex, pageSize=sPageSize, isTotal } = params;
		// console.log(catalog)
		this.props.updateSiteMngData({pageIndex, pageSize})
		this.props.getSiteList({
			pageIndex,
			pageSize, 
			// search,
			isTotal,
			...this.getsys()
		}).catch(res => {
      eventBus.emit('logout#toHome', res)
    })
	}*/
	
	onChange = pageIndex => {
		const { status, catalog, isSystem, isTag, words, search } = this.props;
		Router.push({
	    pathname: isSystem ? routerMap.system : isTag ? routerMap.tag : '/',
	    query: { status, pageIndex, catalog, words, search },
	  })
		
	}
  // onShowSizeChange = (pageIndex, pageSize) => this.getListAndSet({pageIndex, pageSize})

  collectClick = _id => {
		const { siteList } = this.props;
		return collectSite({_id})
  }

	render () {
		const { handleOk, collectClick } = this;
		// const { catalog } = this.state;
		const { pageIndex, pageSize, list, total, isSystem, isTag } = this.props;
		// console.log(list)

	  return (
		  	<Content 
		  		isSystem={isSystem}
		  		isTag={isTag}
		  		list={list} 
		  		// collectClick={collectClick}
		  		// handleOk={this.handleOk} 
		  		total={total} current={pageIndex} pageSize={pageSize}
			  	onChange={this.onChange} 
			  	onShowSizeChange={this.onShowSizeChange} 
		  	/>
	  )
	}
}
/*const mapStateToProps = state => {
	const { siteList, siteTotal, pageIndex, pageSize, status } = state.siteMng
  return {
  	siteList,
  	siteTotal,
  	pageIndex, pageSize,
  	status,
  	// search
  };
};


const mapDispatchToProps = dispatch => {
  return {
  	updateSiteMngData (data) {
  		return dispatch(updateSiteMngData(data))
  	},
  	updateSiteList (list) {
  		return dispatch(updateSiteList({list}))
  	},
 
  	getSiteList (params) {
			return dispatch(getSiteList(params))
  	},
  };
};*/
// export default ComContent;
export default withRouter(connect(null, null)(ComContent));

import React, {Component} from 'react';
import { CloseOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons'
// import Dialog from '@/commonComp/Dialog'
// import {connect} from 'react-redux'
import { withRouter } from "next/router";
import { message } from 'antd';
// import cookie from 'react-cookies';
// import url from '@/common/api'
import { NORMAL_CODE } from '@/common/constant'
import { delSite, updateSiteMngData, getSiteList } from '@/store/actions'
import Router from 'next/router'
import eventBus from '@/common/eventBus'
import routerMap from '@/common/router'



class CloseIcon extends Component {
	/*constructor (props) {
		super(props);
		this.state = {

		}
	}*/

	showModel = () => {
    const { data, router: { query: { pageIndex=1, status, catalog, search } } } = this.props;
		console.log(data)
		const { _id, status: cstatus, name } = data;
		const isdown = cstatus === NORMAL_CODE;
		const txt = isdown ? '下架' : '删除'
		/*let pageIndex = tPageindex
		if (!isdown) {
			const maxPages = Math.ceil((siteTotal-1) / pageSize)
			pageIndex = isdown ? tPageindex > maxPages ? maxPages : tPageindex : tPageindex;
		}*/

		const Dialog = eventBus.emit('getDialog#dialog')

		Dialog.open({
			title: txt,
			content: <span>确定{txt}“<span style={{color: '#F55'}}>{name}</span>”该网站吗？</span>,
			// footer: true,
			onOk () {
				Dialog.showLoading();
				delSite({_id, status: cstatus }).then(res => {
		    	// handleOk && handleOk(1)
		    	// updateSiteMngData({ pageIndex })
					message.success(txt + '成功')
	      	Dialog.close();
					Router.push({
	          pathname: routerMap.system, 
	          query: { catalog, pageIndex, search, status, rand: Math.random() }
	        })
					// getSiteList({catalog, status: listStatus , pageIndex, pageSize, isTotal: true, is_edit: true});
		    }).catch(res => {
		    	Dialog.hideLoading();
		    })
			}
		});
		// closeClick
	}
	render () {
		// console.log(this.props)
		const { data } = this.props;

		const {status} = data;

		return (
				status === NORMAL_CODE
				? <VerticalAlignBottomOutlined title="下架" onClick={this.showModel} />
				: <CloseOutlined title="删除" style={{color: '#fff'}} onClick={this.showModel} />
		)
	}
}
/*const mapStateToProps = state => {
	const { siteList, siteTotal, pageIndex, pageSize, catalog, status } = state.siteMng
  return {
  	siteList,
  	siteTotal,
  	pageIndex, pageSize, catalog,
  	status,
  };
};


const mapDispatchToProps = dispatch => {
  return {
  	updateSiteMngData (data) {
  		return dispatch(updateSiteMngData(data))
  	},
  	getSiteList (params) {
			return dispatch(getSiteList(params))
  	},
  };
};*/
export default withRouter(CloseIcon);
// export default connect(mapStateToProps, mapDispatchToProps)(CloseIcon);
// export default CloseIcon;
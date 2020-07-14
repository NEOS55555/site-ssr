import React, { Component, Fragment } from 'react';
import Link from 'next/link'
import Router from 'next/router'
// import { isSystemPage } from '@/common/common'
import { connect } from 'react-redux'
import Register from '@/commonComp/logReg/Register'
import Login from '@/commonComp/logReg/Login'
// import { addWebSite } from '@/components/AddWebSite/AddWebSite'
import { isLogOverdue } from '@/common/common'
// import cookie from 'react-cookies'
import { withRouter } from "next/router";
// import { withRouter } from "react-router";
import { getIP, updateComData, setUsername, updateSiteMngData, getSiteList, getAllCatalog, getTop10SiteList, dispatchCatalogList } from '@/store/actions'
// import { Link } from "react-router-dom";
import { Dropdown, Menu, Input, Button } from 'antd'
import { removeLoginCookie } from '@/commonComp/logReg/loginCookie'
import routerMap from '@/common/router'
import './Header.scss'
// import { AccountNavRoute } from '@/common/Routers'
// import { LOG_OVERDUE_CODE } from '@/common/constant'
// import logo from '@/assets/images/logo.png'
import eventBus from '@/common/eventBus'
// import CurContext from '@/components/ComContent/cur-context'
const logo = '/static/images/logo.png'

class Header extends Component {

  componentDidMount () {
    getIP().then(({result}) => {
      const { is_async, check_reply_num } = result;
      this.props.updateComData({is_async: !!is_async, check_reply_num})
    })
    this.props.getAllCatalog()
    this.props.getTop10SiteList()
    this.props.dispatchCatalogList()
    eventBus.on('logout#clear', res => {
      // console.log(res)
      if (isLogOverdue(res)) {
        this.clear()
      }
    })
    eventBus.on('logout#toHome', (res) => {
      if (isLogOverdue(res)) {
        this.toHome();
      }
    })

    // console.log('header did mount')
    // console.log(this.props)
  }
  
  clear = () => {
    removeLoginCookie();
    this.props.setUsername('')
  }

  toHome = () => Router.push({pathname: '/'})

  logout = () => {
    this.clear();
    this.toHome();
  }
  addNewSite = () => {
    // const { catalog } = this.state;
    // const catalog = parseInt(this.props.match.params.catalog) || -1
    // const { getSiteList, catalogList, pageIndex, pageSize, status, catalog } = this.props
    const { catalogList, router: { query: { catalog, pageIndex=1, search, status }, pathname } } = this.props;
    // eventBus.emit('getAddSite#addSite')
    // console.log(eventBus.emit('getAddSite#addSite'))
    eventBus.emit('getAddSite#addSite').open({
      catalogList,
      handleOk () {
        Router.push({
          pathname: routerMap.system, 
          query: { catalog, pageIndex, search, status, rand: Math.random() }
        })
      }
    });
  }
  
  
  // 搜索框
  onSearch = search => {
    const { router: { query: { catalog }, pathname } } = this.props;
    // console.log(this.props.router)
    // const { history, isSystem, catalog } = this.props;
    Router.push({pathname: pathname === routerMap.system ? routerMap.system : routerMap.index, query: { catalog, search }})
    // Router.push(`/?catalog=${catalog}&search=${search}`)
    /*const { updateSiteMngData } = this.props
    // const catalog = parseInt(match.params.catalog) || -1
    const { getSiteList, pageIndex, pageSize, status, catalog, isSystem } = this.props
    const search = value
    updateSiteMngData({
      search 
    })
    getSiteList({ catalog, status, pageIndex, pageSize, search, isTotal: true, is_edit: isSystem });*/
  }

  /*routerClick = () => {
    const { pathname } = this.props;
    if (pathname !== routerMap.system) {
      return
    }
    this.props.updateSiteMngData({
      isSystem: false
    })
  }*/

	render() {
    const { check_reply_num=0, is_async, router: {pathname} } = this.props

    const menu = (
      <Menu className="user-setting-list">
        <Menu.Item><Link href="/collect"><a >我的收藏</a></Link></Menu.Item>
        <Menu.Item><Link href="/replyme"><a >回复我的{ check_reply_num === 0 ? '' : `(${check_reply_num})`}</a></Link></Menu.Item>
        <Menu.Item><Link href="/account/portrait" ><a >账号管理</a></Link></Menu.Item>
        {
          is_async && <Menu.Item className="async-li"><Link  href="/catalogmng"><a>分类管理</a></Link></Menu.Item>}
            
          {is_async && <Menu.Item className="async-li"><Link href="/noticemng"><a>公告管理</a></Link></Menu.Item>}
        
        <Menu.Item><Link href="/system"><a>页面管理</a></Link></Menu.Item>
        <Menu.Item><span className="link-a" onClick={this.logout}>退出</span></Menu.Item>
      </Menu>
    )
		const { user_name } = this.props
    return (
      <div className="header">
        <div className="max-container">
          <div className="logo-ctn">
            <Link href="/"><a title="有趣实用网" className="logo"><img src={logo} alt="首页"/></a></Link>
            <ul className="top-nav-list">
              <li><Link href="/"><a title="首页">首页</a></Link></li>
              <li><Link href="/feedback"><a title="留言板">留言板</a></Link></li>
              <li><Link href="/standard"><a title="收录标准">收录标准</a></Link></li>
              {
                is_async && 
                <Fragment>
                  <li className="async-li"><Link href="/catalogmng" ><a>分类管理</a></Link></li>
                  <li className="async-li"><Link href="/noticemng" ><a>公告管理</a></Link></li>
                  <li className="async-li"><Link href="/system" ><a>页面管理</a></Link></li>
                </Fragment>
              }
            </ul>
          </div>
          <div className="user-ctn">
            <Input.Search placeholder="请输入关键词" onSearch={this.onSearch} style={{width: 200}}  enterButton />
          	{
              user_name 
              ? (<Fragment>
                  {
                    pathname === routerMap.system && 
                      <Button type="link" onClick={this.addNewSite}>新增网站</Button>
                  }

                  <Dropdown overlay={menu} placement="bottomRight" >
                    <Button type="link" className="user-btn">{user_name}{ check_reply_num === 0 ? '' : `(${check_reply_num})`}</Button>
                  </Dropdown>
                </Fragment>) 
              : (<Fragment><Login pathname={pathname} /><Register /></Fragment>)
            }
          </div>
        </div>
        
      </div>
	  );
	}
}


const mapStateToProps = state => {
	const { user_name, check_reply_num, is_async } = state.com
  const { pageIndex, pageSize, catalogList, status, catalog, isSystem } = state.siteMng
  return {
  	user_name, check_reply_num, is_async,
    pageIndex, pageSize, catalogList, status, catalog, isSystem
  };
};


const mapDispatchToProps = dispatch => {
  return {
  	updateComData (name) {
			return dispatch(updateComData(name))
  	},
    setUsername (name) {
      return dispatch(setUsername(name))
    },
    updateSiteMngData (data) {
      return dispatch(updateSiteMngData(data))
    },
    getSiteList (params) {
      return dispatch(getSiteList(params))
    },
    dispatchCatalogList (params) {
      return dispatch(dispatchCatalogList(params))
    },
    getAllCatalog (params) {
      return dispatch(getAllCatalog(params))
    },
    getTop10SiteList (params) {
      return dispatch(getTop10SiteList(params))
    },
  };
};
// Header = connect(mapStateToProps, mapDispatchToProps)(Header)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

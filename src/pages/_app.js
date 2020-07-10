import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import { ConfigProvider } from 'antd';
// import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux';
import store from '@/store/reducer'
// import Style from '@/styles/Style'
// import reset from '@/styles/reset'
// import media from '@/styles/media'

import '@/styles/index.css';
import 'antd/dist/antd.css';
import 'cropperjs/dist/cropper.css';
import 'braft-editor/dist/index.css'
import '@/styles/reset.scss';
import '@/styles/media.scss';

import Dialog from '@/commonComp/Dialog'
import Header from '@/commonComp/Header'
// import AddWebSite from '@/commonComp/AddWebSite'
import eventBus from '@/common/eventBus'

const Loading = dynamic(
  () => import('@/commonComp/Loading'),
  { ssr: false }
)
const AddWebSite = dynamic(
  () => import('@/commonComp/AddWebSite'),
  { ssr: false }
)
// const GloCss = Style(reset, media)

export default class MyApp extends Component {
	render () {
		const { Component, pageProps } = this.props;
	  return <Provider store={store}>
	    	{/*这里可以加公共头信息*/}
				<div id="root">
					<Header></Header>
					<div className="container main-content-wrapper">
						<Component {...pageProps} />
					</div>
				</div>
				<Loading />
				<Dialog />
				<AddWebSite isEdit={false} renderCb={ctx => eventBus.on('getAddSite#addSite', () => ctx) } />
				<AddWebSite isEdit={true} renderCb={ctx => eventBus.on('getEditSite#editSite', () => ctx) } />

	    </Provider>
	}
}
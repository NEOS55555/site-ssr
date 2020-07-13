import dynamic from 'next/dynamic'
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/store/reducer'
import Head from 'next/head';

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
import { filterHTMLTag } from '@/common/common'

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
		const { 
			m_title='有趣实用网——收藏各类好玩沙雕实用的网站', 
			m_description='收集各类，有趣、实用、新奇、沙雕、恶搞又好玩以及各类白嫖动漫，漫画的网站。',
			m_keywords='好玩,有趣,实用,有意思的网站,有趣的网站,好玩的网站,实用的网站,沙雕网站'
		} = pageProps;
		// console.log(pageProps)
	  return <Provider store={store}>
	    	<Head>
      		<title>{m_title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="baidu-site-verification" content="S6kx3QAdX2" />
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
          <meta
            name="description"
            content={filterHTMLTag(m_description)}
          />
          <meta name="keywords" content={m_keywords} />
        </Head>
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
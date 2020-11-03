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
	componentDidMount () {
	  /*window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-177435629-1');
	  console.log(dataLayer)*/
	  /*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-177435629-1', 'auto');
		ga('send', 'pageview');*/
		!function(e,t,n,g,i){
			var tag;
			e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},
			n=t.createElement("script"),
			tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.giocdn.com/2.1/gio.js","gio");
		  gio('init','856584e8e914748c', {});

		//custom page code begin here

		//custom page code end here

		gio('send');
	}
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
          <meta name="sogou_site_verification" content="OTrlpJrfft"/>
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover" />
          <meta
            name="description"
            content={filterHTMLTag(m_description)}
          />
          <meta name="keywords" content={m_keywords} />

					<meta http-equiv="x-dns-prefetch-control" content="on" />
					<link rel="dns-prefetch" href="http://bdimg.share.baidu.com" />
					<link rel="dns-prefetch" href="http://nsclick.baidu.com" />
					<link rel="dns-prefetch" href="http://hm.baidu.com" />
					<link rel="dns-prefetch" href="http://eiv.baidu.com" />


					{/*<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177435629-1"></script>*/}

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
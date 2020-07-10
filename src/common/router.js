/*/feedback
/standard
/catalogmng
/noticemng

/collect/:catalog
/collect

/account/portrait
/tag/:tagName
/sitedetail/:siteId
/replyme
/system
/*/
// index sitedetail tag 这几个路由是会提前调数据的
const routerMap = {
	feedback: '/feedback',
	standard: '/standard',
	catalogmng: '/catalogmng',
	noticemng: '/noticemng',
	collect: '/collect',
	portrait: '/account/portrait',
	tag: '/tag',					// words
	sitedetail: '/sitedetail',		// id
	replyme: '/replyme',
	system: '/system',
	index: '/',
}

export default routerMap
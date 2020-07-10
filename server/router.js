const express = require('express');
const router = express.Router();

const controler = require('./controler')

// 获取用户列表
// 获取网站类型列表
router.get('/getAllCatalog', controler.getAllCatalog)
// 分类+总数
router.get('/getCatalogList', controler.getCatalogList)

// 获取网站列表
router.post('/getSiteList', controler.getSiteList)


// 添加网站
router.post('/addSite', controler.addSite)

// 添加网站
router.post('/editSite', controler.editSite)
// 添加分类
router.post('/addCatalog', controler.addCatalog)
// 新增公告
router.post('/addNotice', controler.addNotice)
// 发表评论
router.post('/reportCommit', controler.reportCommit)
// 用户注册
router.post('/register', controler.register)
// 用户登录
router.post('/login', controler.login)

// 删除网站
router.post('/delSite', controler.delSite)
router.post('/sendRegMailCode', controler.sendRegMailCode)
router.post('/sendRestPswCode', controler.sendRestPswCode)
// 重置密码
router.post('/resetPassword', controler.resetPassword)
router.get('/getSiteDetail', controler.getSiteDetail)
router.get('/getReportCommit', controler.getReportCommit)
// 清除图片缓存
router.post('/clearImgCache', controler.clearImgCache)
router.get('/getIP', controler.getIP)
router.get('/getNoticeList', controler.getNoticeList)
// 删除公告
router.get('/delNotice', controler.delNotice)
router.post('/editNotice', controler.editNotice)
// 设置评分
router.post('/setRate', controler.setRate)
router.get('/addView', controler.addView)
router.get('/getsession', (req, res) => {
	console.log(req.cookies)
	console.log(req.session)
	console.log('-----------------------')
	res.send(req.session)
})
router.get('/getReplyCommit', controler.getReplyCommit)

// 获取验证码
router.get('/getCaptcha', controler.getCaptcha)
// 发表回复
router.post('/replyCommit', controler.replyCommit)
// 消息
router.get('/getReplyMeList', controler.getReplyMeList)
// 保存头像
router.post('/saveportrait', controler.saveportrait)
router.get('/clearreplynum', controler.clearreplynum)
router.get('/getNewestCommit', controler.getNewestCommit)
router.post('/getUserportrait', controler.getUserportrait)
router.post('/editCatalog', controler.editCatalog)
router.get('/delCatalog', controler.delCatalog)
router.get('/checkName', controler.checkName)
router.get('/getRecomdList', controler.getRecomdList)
router.get('/collectSite', controler.collectSite)
// 获取收藏列表
router.get('/getCollectList', controler.getCollectList)
// 跟新分类的顺序
router.post('/updateCatalogSort', controler.updateCatalogSort)
module.exports = router;
const sitedb = require('../model/currentDbs')
const md5 = require('../model/md5.js')
const {
	getClientIP, 
	getNextSequenceValue, 
} = require('../model/common.js')
const {
	isUserLogin,
	success, 
	failed,
} = require('./com')

module.exports = async (req, res, next) => {
	// req.session.destroy() 
	const sessionCookie = md5(Math.random() + Date.now())
	const ip = getClientIP(req);
	// const sessionStatus = md5(Math.random() + 2 + Date.now())
	req.session.token = sessionCookie;
	// console.log(sessionCookie)
	res.cookie('sessionCookie', sessionCookie)
	const {_id, name, is_async} = isUserLogin(req.headers.authorization)
	// 增加浏览次数
	try {
		/*const result = await sitedb.findOneAndUpdate('views',
			{ ip },
			{ $inc:{ count:1 } },
			{ new:true }
		)
		if (!result.value) {*/
			const view_id = await getNextSequenceValue(sitedb, 'site_views')
			sitedb.insertOne('views', {
				_id: view_id,
				user_id: _id,
				ip,
				create_time: new Date(),
				// count: 1,
			})
		// }
		let o = {}
		if (_id) {
			const [user] = await sitedb.find('users', {_id})
			o = {
				is_async,
				check_reply_num: user.check_reply_num
			}
		}
		res.json(success(o))
	} catch (e) {
		console.log(e)
		res.json(failed('', 'db err!'))
	}
	
	// res.cookie('sessionStatus', sessionStatus)
	// res.json(())
}
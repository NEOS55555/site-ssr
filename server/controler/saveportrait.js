const sitedb = require('../model/currentDbs')
const {
	prevCheck,
	success, 
	failed,
	checkUserLogin,
} = require('./com')
const images = require("images");
const {
	mkdir,
} = require('../model/common.js')
const {
	IMG_DIR,
} = require('./constant.js')
const fs = require('fs');
const path = require('path');

// 用户登录
module.exports = (req, res, next) => {
	if (!prevCheck(req, res)) {
		return;
	}
	const ust = checkUserLogin(req, res)
	if (!ust) {
		return;
	}
	const { _id: user_id, name: user_name } = ust

	var imgData = req.body.imgData;
	//过滤data:URL
	var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
	var dataBuffer = Buffer.from(base64Data, 'base64');
	// let fileurl = 
	fs.mkdirSync(`../../../online-images/images/users/${user_name}`)
	const pngPath = path.join(IMG_DIR, `/users/${user_name}/portrait.png`)
	// const pngName = '/portrait1.png';
	images(dataBuffer).size(112).save(pngPath, {            
        quality : 50                    //保存图片到文件,图片质量为50
    });
	/*fs.writeFile(pngPath + pngName, dataBuffer, function(err) {
		if(err){
			console.log(err)
			res.json(failed('', 'filed!'));
		}else{*/
			
			sitedb.updateOne('users', {_id: user_id}, {
				$set: {
					face: `/img/users/${user_name}/portrait.png`
				}
			}).then(result => {
				// console.log(result)
				res.json(success('', '保存成功！'));
			})
		/*}
	});*/
	
	// const ip = getClientIP(req);
	
}
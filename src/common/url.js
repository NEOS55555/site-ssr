const isDev = process.env.NODE_ENV !== 'production';
const url = `/api`;
const imgUrl = `${isDev ? process.env.API_HOST : 'http://www.uquwang.net'}:${process.env.IMG_PORT}`;
const serverUrl = `${process.env.API_HOST}:${process.env.PORT}${url}`
// console.log(location)
// 
// const getImrUrl = () => imgUrl
// console.log(getImrUrl)
export {
	serverUrl,
	imgUrl,
	// getImrUrl
}

export default url;


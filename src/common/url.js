const url = `/api`;
const imgUrl = `${process.env.API_HOST}:${process.env.IMG_PORT}`;
const serverUrl = `${process.env.API_HOST}:${process.env.PORT}${url}`
// console.log(location)
const getImrUrl = () => {
	const isDev = process.env.NODE_ENV !== 'production';
	return !isDev ? location.origin + '/' + process.env.IMG_PORT : imgUrl
}
// console.log(getImrUrl)
export {
	serverUrl,
	imgUrl,
	getImrUrl
}

export default url;


const url = `/api`;
const imgUrl = `${process.env.API_HOST}:${process.env.IMG_PORT}`;
const serverUrl = `${process.env.API_HOST}:${process.env.PORT}${url}`
// console.log(location)
export {
	serverUrl,
	imgUrl
}

export default url;


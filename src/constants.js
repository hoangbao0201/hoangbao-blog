// export const apiUrl = "https://hoangbao-blog.herokuapp.com" || ;


export const apiUrl =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:5000'
		: 'https://hoangbao-blog.herokuapp.com'

export const LOCAL_STORAGE_TOKEN_NAME = "TokenUser";
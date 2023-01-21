/**
 * Import Dependency
 */
import { api } from './axios'
import auth from '../stores/auth'

/**
 * Config
 */
api.interceptors.request.use(config => {
	let credential = auth.state.credential
	let isAuthorize = auth.state.isAuthorize
	if (credential && isAuthorize) {
		config.headers.common['Authorization'] = 'Bearer ' + credential
	}
	return config
}, error => {
	console.group('[Axios][Interceptor] Request Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
})

api.interceptors.response.use(data => {
		return data
}, error => {
	console.group('[Axios][Interceptor] Response Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
})

export default axios
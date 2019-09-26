import axios from 'axios'
import apiConfig from './api.config'

axios.defaults.baseURL = apiConfig.baseURL // 环境区分
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const getUser = params => { return axios.get('/users', { params: params }) }

export const getUserId = params => { return axios.get('/users/', { params: params }) }

export const getUserAdd = params => { return axios.post('/users', params).then(res => res.data) }

export const getUserDelete = params => { return axios.delete('/users/', params ).then(res => res.data) }

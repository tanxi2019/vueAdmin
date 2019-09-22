/* eslint-disable no-unused-vars */
import axios from 'axios'
import apiConfig from './api.config'

axios.defaults.baseURL = apiConfig.baseURL // 环境区分
axios.defaults.timeout = 2500
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// export const requestLogin = params => { return axios.post('/login', params).then(res => res.data) }


export const getUser = params => { return axios.get('/users', { params: params }) }

export const getUserId = params => { return axios.get('/users/', { params: params }) }
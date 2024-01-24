import axios, { type AxiosRequestConfig } from 'axios'
import type { CustomConfig, HttpResponseData } from './http.d'
import { showToast } from 'vant'


const ContentTypes = ['application/octet-stream', 'application/vnd.ms-excel']

const service = axios.create({
    baseURL: '',
    timeout: 6000 // 请求超时时间
})

// 请求响应器
service.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('ZD_TOKEN') // TODO:等后端确认， 存stores
        if (token) {
            config.headers['access-token'] = token  // TODO: 等后端确认
        }
        config.headers['platform'] = 'h5' // TODO: 等后端确认
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        const { status, data: result, headers } = response

        // 处理简历下载，后端返回流文件，返回数据格式问题前端处理
        if (ContentTypes.some((e) => headers['content-type'].indexOf(e) > -1)) return response
        // 网络错误处理
        if (status !== 200) {
            showToast(result?.message || '网络错误，请刷新重试！')
            return Promise.reject(response)
        }
        // TODO：业务状态吗处理 状态码 0 成功 1 失败 3 参数校验失败 4 无权限访问 10 需要登录 服务code根据自己业务定义
        if (result.code === 0) {
            return Promise.resolve(result)
        } else {
            if (result.code === 10) {
               // 未登录
            } else {
                showToast(result?.message || '网络错误，请刷新重试！')
            }
            return Promise.reject(result)
        }
    },
    (error) => {
        return Promise.reject(error)
    }
)


function request<T>(config: AxiosRequestConfig, customConfig?: CustomConfig ) {
    return service.request<T, HttpResponseData<T>>(config).then(res => {
        if (customConfig?.originData) {
            return res as T
        }
        return res?.data
    })
}

export default request

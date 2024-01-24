
// 请求返回类型
export interface HttpResponseData<T = any> {
    code: number
    message: string
    data: T
}

// 自定义配置
export interface CustomConfig {
    originData?: boolean
}
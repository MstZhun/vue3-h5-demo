import request from '@/utils/http/http'

export const testApi = (data: any) => {
    return request<{ hasMore: boolean; size: number }>({
        method: 'POST',
        url: '/api/miniapi/ia/job/recommend/page',
        data
    })
}

export const testGetApi = (data: { type: string;  displayChannel: number}) => {
    return request<{ flag: boolean; }>({
        method: 'GET',
        url: '/api/miniapi/ia/api/float/window/switch',
        params: data
    })
}
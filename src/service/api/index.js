import http from '@/service/http'


export const loginApi = (data) => http.post('/test/list', data);
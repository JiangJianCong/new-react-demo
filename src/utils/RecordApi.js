import axios from 'axios'
// export const api = 'https://5aef260e5139c80014f228dc.mockapi.io/api/v1'
export const api = 'http://localhost:3004'

export const getAll = () =>
  axios.get(`${api}/records`)

export const create = (body) =>
  axios.post(`${api}/records`,body)


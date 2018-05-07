import axios from 'axios'
export const api = 'http://localhost:3004'

export const getAll = () =>
  axios.get(`${api}/records`)


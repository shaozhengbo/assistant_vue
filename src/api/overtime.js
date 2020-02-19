import axios from 'axios'

export const getOvertimeListByUid = (uid) => {
  return axios.get('/api/overtime/uid/' + uid)
}

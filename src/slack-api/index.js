import axios from 'axios'

const http = axios

export function handleResponse(response) {
  // console.log('data - ', response.data)
  return response.data
}

export function handleError(error) {
  // console.log('error - ', JSON.stringify(error.response.data.error))
  // console.log('error - ', error)
  return error.response.data.error
}

export default function slackAPI({ token, host = 'slack.com' } = {}, httpClient = http) {
  const BASE_URL = `https://${host}/api`

  function request({ url, params = {}, method } = {}) {
    return httpClient({
      url,
      params,
      ...(method ? { method } : {}),
    })
      .then(handleResponse)
      .catch(e => Promise.reject(handleError(e)))
  }

  function getUsersList() {
    return request({ url: `${BASE_URL}/users.list` })
  }

  function getUsersPresence() {
    return request({ url: `${BASE_URL}/users.getPresence?token=${token}&pretty=1` })
  }

  function setUsersPresence(presence) {
    return request({ url: `${BASE_URL}/users.setPresence?token=${token}&presence=${presence}&pretty=1` })
  }

  function setUsersPresenceAway() {
    return setUsersPresence('away')
  }

  function setUsersPresenceAuto() {
    return setUsersPresence('auto')
  }

  return {
    request,
    getUsersList,
    getUsersPresence,
    setUsersPresence,
    setUsersPresenceAway,
    setUsersPresenceAuto,
  }
}

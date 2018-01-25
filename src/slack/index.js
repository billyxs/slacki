import slackAPI from '../slack-api'
import { getToken } from '../settings'

console.log('getToken = ', getToken())

export default slackAPI({
  token: getToken(),
})

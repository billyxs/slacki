import slackAPI from '../slack-api'
import { getToken } from '../settings'

export default slackAPI({
  token: getToken(),
})

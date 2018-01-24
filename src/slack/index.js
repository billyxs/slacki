import slackAPI from '../slack-api'

const token = process.env.TOKEN

export default slackAPI({
  token,
})

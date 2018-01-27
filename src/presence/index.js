import slack from '../slack'
import { logPresence } from '../log'

export default function presenceCommand(action) {
  let doAction = Promise.resolve()
  if (action === 'active') {
    doAction = slack.setUsersPresenceAuto()
  } else if (action === 'away') {
    doAction = slack.setUsersPresenceAway()
  }

  doAction
    .then(r => slack.getUsersPresence())
    .then(res => logPresence(res))
    .catch(e => console.log('error', e))
}

import slack from '../slack'
import { logPresence } from '../log'

export default function presenceCommand() {
  slack.getUsersPresence()
    .then(res => logPresence(res))
    .catch(e => console.log('error', e))
}

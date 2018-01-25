import chalk from 'chalk'

/*
{ ok: true,
  presence: 'active',
  online: true,
  auto_away: false,
  manual_away: false,
  connection_count: 1,
  last_activity: 1516831117
}
*/
export function logPresence({
  presence,
  online,
}) {
  console.log(`presence: ${
    presence === 'active' ?
      chalk.green(presence) :
      chalk.white(presence)} / ${(
    online ?
      chalk.green('online') :
      chalk.red('offline'))}
`)
}

export function log() {
}

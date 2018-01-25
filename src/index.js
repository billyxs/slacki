#!/usr/bin/env node
// import chalk from 'chalk'
import presenceCommand from './presence'
import configCommand from './config-cmd'
import { command } from './args'

console.log('configCommand = ', configCommand)


switch (command) {
  case 'presence': {
    presenceCommand()
    break
  }
  case 'setup': {
    configCommand()
      .catch(console.log)
    break
  }
  default:
    console.log('Nothing')
}

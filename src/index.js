#!/usr/bin/env node
// import chalk from 'chalk'
import presenceCommand from './presence'
import configCommand from './config-cmd'
console.log('configCommand = ', configCommand)

import { command } from './args'

switch (command) {
  case 'presence': {
    presenceCommand()
    break
  }
  case 'setup': {
    configCommand()
    break
  }
  default:
    console.log('Nothing')
}

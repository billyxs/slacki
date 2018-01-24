#!/usr/bin/env node
// import chalk from 'chalk'
import presenceCommand from './presence'

import { command } from './args'

switch (command) {
  case 'presence': {
    presenceCommand()
    break
  }
  default:
    console.log('Nothing')
}

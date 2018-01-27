import fs from 'fs'
import os from 'os'

export const HOME = os.homedir()

export function writeConfigFile(path, content) {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, content, 'utf8', err => (err ? reject(err) : resolve())))
}

export function formatConfigForSave(configJSON = {}) {
  return Object.keys(configJSON)
    .reduce((memo, curr) => {
      memo.push(`${curr.trim()}=${configJSON[curr].trim()}`)
      return memo
    }, [])
    .join('\n')
}

export function parseConfig(settings = '') {
  return settings.split('\n').reduce((memo, curr) => {
    const key = curr.substring(0, curr.indexOf('=')).trim()
    const value = curr.substring(curr.indexOf('=') + 1).trim()

    if (key && value) {
      return {
        ...memo,
        [key]: value,
      }
    }
    return memo
  }, {})
}

export default function dotJson({ filename, path = HOME } = {}) {
  const CONFIG_FILE_PATH = `${path}/.${filename}`

  function getConfigFile() {
    if (fs.existsSync(CONFIG_FILE_PATH)) {
      return fs.readFileSync(CONFIG_FILE_PATH, 'utf8')
    }

    throw new Error('file not found')
  }

  function get() {
    try {
      return parseConfig(getConfigFile()) || {}
    } catch (e) {
      return {}
    }
  }

  function save(data) {
    try {
      return writeConfigFile(
        CONFIG_FILE_PATH,
        formatConfigForSave(data),
      ) || {}
    } catch (e) {
      return {}
    }
  }

  return {
    get,
    save,
  }
}

import dotFile from '../dot-file'

const settingsFile = dotFile({ filename: 'slacki' })

export function getToken() {
  return settingsFile.get().TOKEN
}

export function saveToken(token) {
  settingsFile.save({ token })
}

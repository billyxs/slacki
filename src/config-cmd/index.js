import inquirer from 'inquirer'
import { saveToken } from '../settings'

export default async function configPrompt() {
  try {
    const { token } = await inquirer.prompt({
      type: 'input',
      name: 'token',
      message: 'What\'s your slack token?',
      validate: val => !!val,
      filter: val => val.trim(),
      when: () => true,
    })

    saveToken(token)

    return { success: true }
  } catch (e) {
    return Promise.reject(e)
  }
}

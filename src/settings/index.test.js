import { getToken, saveToken } from './index'

describe('settings', () => {
  describe('getToken', () => {
    it('should be defined', () => {
      expect(getToken).toBeDefined()
    })
  })

  describe('saveToken', () => {
    it('should be defined', () => {
      expect(saveToken).toBeDefined()
    })
  })
})

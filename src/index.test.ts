import { describe, test, expect } from '@jest/globals'
import { sum } from '.'

describe('test', () => {
  test('sum', () => {
    expect(sum(2, 3)).toBe(5)
  })
})

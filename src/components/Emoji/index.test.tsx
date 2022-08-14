import { render } from '@testing-library/react'

// Constants
import { AllEmojiNames } from '../../constants/allName'

import Emoji from './index'

test.skip('Emoji without props name -> has Error', () => {
  expect(() => render(<Emoji />)).toThrow('text')
})

test.skip('Emoji has props name -> show img', () => {
  const { container } = render(<Emoji name="grimacing-face" />)
  // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
  const element = container.querySelector('img')
  expect(element).toBeInTheDocument()
})

test.skip('Emoji has props name with unsupported name -> show Error', () => {
  // @ts-ignore
  expect(() => render(<Emoji name="grimacing-face" />)).toThrow(
    `The "name" property of Icon must be one of: ${AllEmojiNames.toString()}`
  )
})

test.skip('Emoji has props className="testImg" -> img has class "testImg"', () => {
  const CLASS_NAME = 'testImg'
  render(<Emoji className={CLASS_NAME} name="grimacing-face" />)
  // eslint-disable-next-line testing-library/no-node-access
  // expect(container.firstChild).toHaveClass(CLASS_NAME)
})

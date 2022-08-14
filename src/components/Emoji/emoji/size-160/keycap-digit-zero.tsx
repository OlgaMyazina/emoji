import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKeycapDigitZero = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-keycap-digit-zero"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiKeycapDigitZero.displayName = 'EmojiKeycapDigitZero'
EmojiKeycapDigitZero.defaultProps = {}

export default EmojiKeycapDigitZero

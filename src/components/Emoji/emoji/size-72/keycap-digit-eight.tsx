import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKeycapDigitEight = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-keycap-digit-eight"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiKeycapDigitEight.displayName = 'EmojiKeycapDigitEight'
EmojiKeycapDigitEight.defaultProps = {}

export default EmojiKeycapDigitEight

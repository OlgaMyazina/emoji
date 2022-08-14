import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCallMeHand = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-call-me-hand"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiCallMeHand.displayName = 'EmojiCallMeHand'
EmojiCallMeHand.defaultProps = {}

export default EmojiCallMeHand

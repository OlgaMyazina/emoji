import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiMoneyMouthFace = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-money-mouth-face"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiMoneyMouthFace.displayName = 'EmojiMoneyMouthFace'
EmojiMoneyMouthFace.defaultProps = {}

export default EmojiMoneyMouthFace

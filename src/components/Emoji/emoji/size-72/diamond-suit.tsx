import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiDiamondSuit = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-diamond-suit"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiDiamondSuit.displayName = 'EmojiDiamondSuit'
EmojiDiamondSuit.defaultProps = {}

export default EmojiDiamondSuit

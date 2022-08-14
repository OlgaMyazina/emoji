import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiBasketball = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-basketball"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiBasketball.displayName = 'EmojiBasketball'
EmojiBasketball.defaultProps = {}

export default EmojiBasketball

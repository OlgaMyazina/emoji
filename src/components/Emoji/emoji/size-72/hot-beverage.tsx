import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiHotBeverage = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-hot-beverage"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiHotBeverage.displayName = 'EmojiHotBeverage'
EmojiHotBeverage.defaultProps = {}

export default EmojiHotBeverage

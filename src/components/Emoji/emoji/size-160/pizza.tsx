import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPizza = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-pizza"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiPizza.displayName = 'EmojiPizza'
EmojiPizza.defaultProps = {}

export default EmojiPizza

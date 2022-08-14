import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiDollarBanknote = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-dollar-banknote"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiDollarBanknote.displayName = 'EmojiDollarBanknote'
EmojiDollarBanknote.defaultProps = {}

export default EmojiDollarBanknote

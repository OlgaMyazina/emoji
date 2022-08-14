import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanTippingHand = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-tipping-hand"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiWomanTippingHand.displayName = 'EmojiWomanTippingHand'
EmojiWomanTippingHand.defaultProps = {}

export default EmojiWomanTippingHand

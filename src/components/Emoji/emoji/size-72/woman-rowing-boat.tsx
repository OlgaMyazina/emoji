import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanRowingBoat = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-rowing-boat"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiWomanRowingBoat.displayName = 'EmojiWomanRowingBoat'
EmojiWomanRowingBoat.defaultProps = {}

export default EmojiWomanRowingBoat

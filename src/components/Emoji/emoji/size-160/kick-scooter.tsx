import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKickScooter = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kick-scooter"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiKickScooter.displayName = 'EmojiKickScooter'
EmojiKickScooter.defaultProps = {}

export default EmojiKickScooter

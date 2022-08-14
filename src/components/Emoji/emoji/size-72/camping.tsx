import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCamping = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-camping"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiCamping.displayName = 'EmojiCamping'
EmojiCamping.defaultProps = {}

export default EmojiCamping

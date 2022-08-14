import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiNineThirty = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-nine-thirty"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiNineThirty.displayName = 'EmojiNineThirty'
EmojiNineThirty.defaultProps = {}

export default EmojiNineThirty

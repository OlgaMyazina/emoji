import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiOm = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-om"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiOm.displayName = 'EmojiOm'
EmojiOm.defaultProps = {}

export default EmojiOm

import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiEarOfCorn = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-ear-of-corn"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiEarOfCorn.displayName = 'EmojiEarOfCorn'
EmojiEarOfCorn.defaultProps = {}

export default EmojiEarOfCorn

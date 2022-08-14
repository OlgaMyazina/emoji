import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCardIndex = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-card-index"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiCardIndex.displayName = 'EmojiCardIndex'
EmojiCardIndex.defaultProps = {}

export default EmojiCardIndex

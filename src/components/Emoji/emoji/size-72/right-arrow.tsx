import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiRightArrow = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-right-arrow"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiRightArrow.displayName = 'EmojiRightArrow'
EmojiRightArrow.defaultProps = {}

export default EmojiRightArrow

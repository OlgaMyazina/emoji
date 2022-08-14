import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiViolin = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-violin"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiViolin.displayName = 'EmojiViolin'
EmojiViolin.defaultProps = {}

export default EmojiViolin

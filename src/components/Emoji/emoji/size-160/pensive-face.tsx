import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPensiveFace = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-pensive-face"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPensiveFace.displayName = 'EmojiPensiveFace'
EmojiPensiveFace.defaultProps = {}

export default EmojiPensiveFace

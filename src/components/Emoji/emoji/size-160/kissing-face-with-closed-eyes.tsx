import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiKissingFaceWithClosedEyes = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-kissing-face-with-closed-eyes"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiKissingFaceWithClosedEyes.displayName = 'EmojiKissingFaceWithClosedEyes'
EmojiKissingFaceWithClosedEyes.defaultProps = {}

export default EmojiKissingFaceWithClosedEyes

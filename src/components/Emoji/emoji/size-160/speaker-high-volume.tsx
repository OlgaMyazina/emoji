import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSpeakerHighVolume = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-speaker-high-volume"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiSpeakerHighVolume.displayName = 'EmojiSpeakerHighVolume'
EmojiSpeakerHighVolume.defaultProps = {}

export default EmojiSpeakerHighVolume

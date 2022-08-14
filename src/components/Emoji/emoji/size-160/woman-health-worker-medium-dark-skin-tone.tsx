import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanHealthWorkerMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-health-worker-medium-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanHealthWorkerMediumDarkSkinTone.displayName =
  'EmojiWomanHealthWorkerMediumDarkSkinTone'
EmojiWomanHealthWorkerMediumDarkSkinTone.defaultProps = {}

export default EmojiWomanHealthWorkerMediumDarkSkinTone

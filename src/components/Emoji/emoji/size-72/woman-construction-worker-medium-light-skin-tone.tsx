import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanConstructionWorkerMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-construction-worker-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanConstructionWorkerMediumLightSkinTone.displayName =
  'EmojiWomanConstructionWorkerMediumLightSkinTone'
EmojiWomanConstructionWorkerMediumLightSkinTone.defaultProps = {}

export default EmojiWomanConstructionWorkerMediumLightSkinTone

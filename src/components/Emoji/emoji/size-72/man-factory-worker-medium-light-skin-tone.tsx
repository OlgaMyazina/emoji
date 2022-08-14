import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManFactoryWorkerMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-factory-worker-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManFactoryWorkerMediumLightSkinTone.displayName =
  'EmojiManFactoryWorkerMediumLightSkinTone'
EmojiManFactoryWorkerMediumLightSkinTone.defaultProps = {}

export default EmojiManFactoryWorkerMediumLightSkinTone

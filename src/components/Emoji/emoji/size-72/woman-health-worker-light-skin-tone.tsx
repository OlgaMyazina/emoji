import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanHealthWorkerLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-health-worker-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanHealthWorkerLightSkinTone.displayName =
  'EmojiWomanHealthWorkerLightSkinTone'
EmojiWomanHealthWorkerLightSkinTone.defaultProps = {}

export default EmojiWomanHealthWorkerLightSkinTone

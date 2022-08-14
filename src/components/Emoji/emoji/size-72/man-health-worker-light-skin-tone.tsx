import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManHealthWorkerLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-health-worker-light-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManHealthWorkerLightSkinTone.displayName =
  'EmojiManHealthWorkerLightSkinTone'
EmojiManHealthWorkerLightSkinTone.defaultProps = {}

export default EmojiManHealthWorkerLightSkinTone

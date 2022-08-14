import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCloudWithLightning = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-cloud-with-lightning"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCloudWithLightning.displayName = 'EmojiCloudWithLightning'
EmojiCloudWithLightning.defaultProps = {}

export default EmojiCloudWithLightning

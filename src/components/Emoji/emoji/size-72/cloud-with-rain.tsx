import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCloudWithRain = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-cloud-with-rain"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiCloudWithRain.displayName = 'EmojiCloudWithRain'
EmojiCloudWithRain.defaultProps = {}

export default EmojiCloudWithRain

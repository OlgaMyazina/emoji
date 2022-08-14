import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiOpticalDisk = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-optical-disk"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiOpticalDisk.displayName = 'EmojiOpticalDisk'
EmojiOpticalDisk.defaultProps = {}

export default EmojiOpticalDisk

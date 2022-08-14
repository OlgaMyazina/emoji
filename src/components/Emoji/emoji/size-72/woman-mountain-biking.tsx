import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanMountainBiking = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-mountain-biking"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanMountainBiking.displayName = 'EmojiWomanMountainBiking'
EmojiWomanMountainBiking.defaultProps = {}

export default EmojiWomanMountainBiking

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiLeftFacingFist = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-left-facing-fist"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiLeftFacingFist.displayName = 'EmojiLeftFacingFist'
EmojiLeftFacingFist.defaultProps = {}

export default EmojiLeftFacingFist

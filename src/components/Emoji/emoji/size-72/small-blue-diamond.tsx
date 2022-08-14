import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSmallBlueDiamond = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-small-blue-diamond"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiSmallBlueDiamond.displayName = 'EmojiSmallBlueDiamond'
EmojiSmallBlueDiamond.defaultProps = {}

export default EmojiSmallBlueDiamond

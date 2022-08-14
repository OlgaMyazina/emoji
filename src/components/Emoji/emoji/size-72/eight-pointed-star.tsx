import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiEightPointedStar = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-eight-pointed-star"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiEightPointedStar.displayName = 'EmojiEightPointedStar'
EmojiEightPointedStar.defaultProps = {}

export default EmojiEightPointedStar

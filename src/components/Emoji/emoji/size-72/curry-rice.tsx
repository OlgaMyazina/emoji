import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCurryRice = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-curry-rice"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCurryRice.displayName = 'EmojiCurryRice'
EmojiCurryRice.defaultProps = {}

export default EmojiCurryRice

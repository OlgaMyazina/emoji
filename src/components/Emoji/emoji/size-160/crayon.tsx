import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCrayon = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-crayon"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiCrayon.displayName = 'EmojiCrayon'
EmojiCrayon.defaultProps = {}

export default EmojiCrayon

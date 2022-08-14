import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPottedPlant = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-potted-plant"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPottedPlant.displayName = 'EmojiPottedPlant'
EmojiPottedPlant.defaultProps = {}

export default EmojiPottedPlant

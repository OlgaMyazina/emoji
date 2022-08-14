import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiMenWithBunnyEars = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-men-with-bunny-ears"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiMenWithBunnyEars.displayName = 'EmojiMenWithBunnyEars'
EmojiMenWithBunnyEars.defaultProps = {}

export default EmojiMenWithBunnyEars

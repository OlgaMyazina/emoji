import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSuperheroMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-superhero-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiSuperheroMediumLightSkinTone.displayName =
  'EmojiSuperheroMediumLightSkinTone'
EmojiSuperheroMediumLightSkinTone.defaultProps = {}

export default EmojiSuperheroMediumLightSkinTone

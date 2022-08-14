import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanPoliceOfficerDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-police-officer-dark-skin-tone"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWomanPoliceOfficerDarkSkinTone.displayName =
  'EmojiWomanPoliceOfficerDarkSkinTone'
EmojiWomanPoliceOfficerDarkSkinTone.defaultProps = {}

export default EmojiWomanPoliceOfficerDarkSkinTone

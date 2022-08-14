import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManPoliceOfficerMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-police-officer-medium-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManPoliceOfficerMediumSkinTone.displayName =
  'EmojiManPoliceOfficerMediumSkinTone'
EmojiManPoliceOfficerMediumSkinTone.defaultProps = {}

export default EmojiManPoliceOfficerMediumSkinTone

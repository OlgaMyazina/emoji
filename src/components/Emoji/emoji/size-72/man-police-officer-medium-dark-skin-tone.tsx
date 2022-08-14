import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManPoliceOfficerMediumDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-police-officer-medium-dark-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiManPoliceOfficerMediumDarkSkinTone.displayName =
  'EmojiManPoliceOfficerMediumDarkSkinTone'
EmojiManPoliceOfficerMediumDarkSkinTone.defaultProps = {}

export default EmojiManPoliceOfficerMediumDarkSkinTone

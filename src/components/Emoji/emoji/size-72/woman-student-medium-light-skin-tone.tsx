import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanStudentMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-student-medium-light-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanStudentMediumLightSkinTone.displayName =
  'EmojiWomanStudentMediumLightSkinTone'
EmojiWomanStudentMediumLightSkinTone.defaultProps = {}

export default EmojiWomanStudentMediumLightSkinTone

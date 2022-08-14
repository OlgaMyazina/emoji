import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanTeacherMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-teacher-medium-skin-tone"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiWomanTeacherMediumSkinTone.displayName = 'EmojiWomanTeacherMediumSkinTone'
EmojiWomanTeacherMediumSkinTone.defaultProps = {}

export default EmojiWomanTeacherMediumSkinTone
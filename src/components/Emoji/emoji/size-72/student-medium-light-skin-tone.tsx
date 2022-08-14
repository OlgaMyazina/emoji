import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiStudentMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-student-medium-light-skin-tone"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiStudentMediumLightSkinTone.displayName = 'EmojiStudentMediumLightSkinTone'
EmojiStudentMediumLightSkinTone.defaultProps = {}

export default EmojiStudentMediumLightSkinTone

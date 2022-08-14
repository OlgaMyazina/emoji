import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiStudentMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-student-medium-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiStudentMediumDarkSkinTone.displayName = 'EmojiStudentMediumDarkSkinTone'
EmojiStudentMediumDarkSkinTone.defaultProps = {}

export default EmojiStudentMediumDarkSkinTone

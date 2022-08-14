import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanStudentDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-student-dark-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiWomanStudentDarkSkinTone.displayName = 'EmojiWomanStudentDarkSkinTone'
EmojiWomanStudentDarkSkinTone.defaultProps = {}

export default EmojiWomanStudentDarkSkinTone

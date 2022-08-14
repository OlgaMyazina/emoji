import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanStudentLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-student-light-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiWomanStudentLightSkinTone.displayName = 'EmojiWomanStudentLightSkinTone'
EmojiWomanStudentLightSkinTone.defaultProps = {}

export default EmojiWomanStudentLightSkinTone

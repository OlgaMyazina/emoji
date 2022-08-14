import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanTeacherLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-teacher-light-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiWomanTeacherLightSkinTone.displayName = 'EmojiWomanTeacherLightSkinTone'
EmojiWomanTeacherLightSkinTone.defaultProps = {}

export default EmojiWomanTeacherLightSkinTone

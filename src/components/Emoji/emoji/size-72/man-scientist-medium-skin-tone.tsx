import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManScientistMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-scientist-medium-skin-tone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiManScientistMediumSkinTone.displayName = 'EmojiManScientistMediumSkinTone'
EmojiManScientistMediumSkinTone.defaultProps = {}

export default EmojiManScientistMediumSkinTone

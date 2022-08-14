import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManClimbingMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-climbing-medium-skin-tone"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiManClimbingMediumSkinTone.displayName = 'EmojiManClimbingMediumSkinTone'
EmojiManClimbingMediumSkinTone.defaultProps = {}

export default EmojiManClimbingMediumSkinTone

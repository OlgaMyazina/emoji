import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManMediumSkinToneBald = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-medium-skin-tone-bald"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiManMediumSkinToneBald.displayName = 'EmojiManMediumSkinToneBald'
EmojiManMediumSkinToneBald.defaultProps = {}

export default EmojiManMediumSkinToneBald

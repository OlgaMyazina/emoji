import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManLightSkinToneBlondHair = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-light-skin-tone-blond-hair"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiManLightSkinToneBlondHair.displayName = 'EmojiManLightSkinToneBlondHair'
EmojiManLightSkinToneBlondHair.defaultProps = {}

export default EmojiManLightSkinToneBlondHair

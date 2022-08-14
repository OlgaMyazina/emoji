import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManDarkSkinToneCurlyHair = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-dark-skin-tone-curly-hair"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiManDarkSkinToneCurlyHair.displayName = 'EmojiManDarkSkinToneCurlyHair'
EmojiManDarkSkinToneCurlyHair.defaultProps = {}

export default EmojiManDarkSkinToneCurlyHair

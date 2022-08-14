import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManGesturingNoMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-gesturing-no-medium-dark-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiManGesturingNoMediumDarkSkinTone.displayName = 'EmojiManGesturingNoMediumDarkSkinTone'
EmojiManGesturingNoMediumDarkSkinTone.defaultProps = {}

export default EmojiManGesturingNoMediumDarkSkinTone

import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiOpenHandsMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-open-hands-medium-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiOpenHandsMediumSkinTone.displayName = 'EmojiOpenHandsMediumSkinTone'
EmojiOpenHandsMediumSkinTone.defaultProps = {}

export default EmojiOpenHandsMediumSkinTone

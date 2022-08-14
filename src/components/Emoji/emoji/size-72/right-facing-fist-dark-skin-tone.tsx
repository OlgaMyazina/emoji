import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiRightFacingFistDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-right-facing-fist-dark-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiRightFacingFistDarkSkinTone.displayName = 'EmojiRightFacingFistDarkSkinTone'
EmojiRightFacingFistDarkSkinTone.defaultProps = {}

export default EmojiRightFacingFistDarkSkinTone

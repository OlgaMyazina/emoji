import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiGrinningFaceWithBigEyes = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-grinning-face-with-big-eyes"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiGrinningFaceWithBigEyes.displayName = 'EmojiGrinningFaceWithBigEyes'
EmojiGrinningFaceWithBigEyes.defaultProps = {}

export default EmojiGrinningFaceWithBigEyes

import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiSquintingFaceWithTongue = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-squinting-face-with-tongue"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiSquintingFaceWithTongue.displayName = 'EmojiSquintingFaceWithTongue'
EmojiSquintingFaceWithTongue.defaultProps = {}

export default EmojiSquintingFaceWithTongue

import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiSmilingFaceWithHalo = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-smiling-face-with-halo"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiSmilingFaceWithHalo.displayName = 'EmojiSmilingFaceWithHalo'
EmojiSmilingFaceWithHalo.defaultProps = {}

export default EmojiSmilingFaceWithHalo

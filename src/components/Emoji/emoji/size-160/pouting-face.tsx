import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPoutingFace = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-pouting-face"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiPoutingFace.displayName = 'EmojiPoutingFace'
EmojiPoutingFace.defaultProps = {}

export default EmojiPoutingFace

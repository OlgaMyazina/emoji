import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiHotPepper = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-hot-pepper"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiHotPepper.displayName = 'EmojiHotPepper'
EmojiHotPepper.defaultProps = {}

export default EmojiHotPepper

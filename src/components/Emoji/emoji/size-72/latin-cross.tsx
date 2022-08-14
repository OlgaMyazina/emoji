import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiLatinCross = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-latin-cross"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiLatinCross.displayName = 'EmojiLatinCross'
EmojiLatinCross.defaultProps = {}

export default EmojiLatinCross

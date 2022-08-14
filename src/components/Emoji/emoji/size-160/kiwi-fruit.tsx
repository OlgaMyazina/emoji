import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKiwiFruit = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kiwi-fruit"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiKiwiFruit.displayName = 'EmojiKiwiFruit'
EmojiKiwiFruit.defaultProps = {}

export default EmojiKiwiFruit

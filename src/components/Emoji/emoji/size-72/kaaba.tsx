import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiKaaba = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-kaaba"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiKaaba.displayName = 'EmojiKaaba'
EmojiKaaba.defaultProps = {}

export default EmojiKaaba

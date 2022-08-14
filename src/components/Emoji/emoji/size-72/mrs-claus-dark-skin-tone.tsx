import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiMrsClausDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-mrs-claus-dark-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiMrsClausDarkSkinTone.displayName = 'EmojiMrsClausDarkSkinTone'
EmojiMrsClausDarkSkinTone.defaultProps = {}

export default EmojiMrsClausDarkSkinTone

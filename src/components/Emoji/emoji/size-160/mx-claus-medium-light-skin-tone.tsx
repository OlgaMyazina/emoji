import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiMxClausMediumLightSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-mx-claus-medium-light-skin-tone"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiMxClausMediumLightSkinTone.displayName = 'EmojiMxClausMediumLightSkinTone'
EmojiMxClausMediumLightSkinTone.defaultProps = {}

export default EmojiMxClausMediumLightSkinTone

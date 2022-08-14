import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiCurlingStone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-curling-stone"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiCurlingStone.displayName = 'EmojiCurlingStone'
EmojiCurlingStone.defaultProps = {}

export default EmojiCurlingStone

import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiNinja = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-ninja"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiNinja.displayName = 'EmojiNinja'
EmojiNinja.defaultProps = {}

export default EmojiNinja

import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiRevolvingHearts = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-revolving-hearts"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiRevolvingHearts.displayName = 'EmojiRevolvingHearts'
EmojiRevolvingHearts.defaultProps = {}

export default EmojiRevolvingHearts

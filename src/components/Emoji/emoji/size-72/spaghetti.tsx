import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiSpaghetti = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-spaghetti"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiSpaghetti.displayName = 'EmojiSpaghetti'
EmojiSpaghetti.defaultProps = {}

export default EmojiSpaghetti

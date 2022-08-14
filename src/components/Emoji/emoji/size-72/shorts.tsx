import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiShorts = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-shorts"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiShorts.displayName = 'EmojiShorts'
EmojiShorts.defaultProps = {}

export default EmojiShorts

import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiAstronaut = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-astronaut"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiAstronaut.displayName = 'EmojiAstronaut'
EmojiAstronaut.defaultProps = {}

export default EmojiAstronaut

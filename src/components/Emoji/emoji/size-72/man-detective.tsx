import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManDetective = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-detective"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiManDetective.displayName = 'EmojiManDetective'
EmojiManDetective.defaultProps = {}

export default EmojiManDetective

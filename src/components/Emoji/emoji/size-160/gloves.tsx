import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiGloves = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-gloves"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiGloves.displayName = 'EmojiGloves'
EmojiGloves.defaultProps = {}

export default EmojiGloves

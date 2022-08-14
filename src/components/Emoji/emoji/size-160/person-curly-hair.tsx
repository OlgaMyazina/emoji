import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonCurlyHair = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-curly-hair"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiPersonCurlyHair.displayName = 'EmojiPersonCurlyHair'
EmojiPersonCurlyHair.defaultProps = {}

export default EmojiPersonCurlyHair

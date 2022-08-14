import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiRose = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-rose"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiRose.displayName = 'EmojiRose'
EmojiRose.defaultProps = {}

export default EmojiRose

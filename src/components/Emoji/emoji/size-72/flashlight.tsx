import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiFlashlight = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-flashlight"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiFlashlight.displayName = 'EmojiFlashlight'
EmojiFlashlight.defaultProps = {}

export default EmojiFlashlight

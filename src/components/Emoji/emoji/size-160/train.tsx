import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiTrain = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-train"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiTrain.displayName = 'EmojiTrain'
EmojiTrain.defaultProps = {}

export default EmojiTrain

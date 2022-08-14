import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWrench = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-wrench"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiWrench.displayName = 'EmojiWrench'
EmojiWrench.defaultProps = {}

export default EmojiWrench

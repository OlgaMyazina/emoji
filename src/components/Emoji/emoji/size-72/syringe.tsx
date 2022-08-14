import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiSyringe = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-syringe"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiSyringe.displayName = 'EmojiSyringe'
EmojiSyringe.defaultProps = {}

export default EmojiSyringe

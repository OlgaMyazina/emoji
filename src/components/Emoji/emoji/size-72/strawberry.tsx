import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiStrawberry = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-strawberry"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiStrawberry.displayName = 'EmojiStrawberry'
EmojiStrawberry.defaultProps = {}

export default EmojiStrawberry

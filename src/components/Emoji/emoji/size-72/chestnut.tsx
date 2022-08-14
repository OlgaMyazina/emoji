import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiChestnut = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-chestnut"
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

EmojiChestnut.displayName = 'EmojiChestnut'
EmojiChestnut.defaultProps = {}

export default EmojiChestnut

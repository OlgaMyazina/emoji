import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiDesktopComputer = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-desktop-computer"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiDesktopComputer.displayName = 'EmojiDesktopComputer'
EmojiDesktopComputer.defaultProps = {}

export default EmojiDesktopComputer

import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiComputerMouse = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-computer-mouse"
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

EmojiComputerMouse.displayName = 'EmojiComputerMouse'
EmojiComputerMouse.defaultProps = {}

export default EmojiComputerMouse

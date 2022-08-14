import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiClosedMailboxWithLoweredFlag = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-closed-mailbox-with-lowered-flag"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiClosedMailboxWithLoweredFlag.displayName = 'EmojiClosedMailboxWithLoweredFlag'
EmojiClosedMailboxWithLoweredFlag.defaultProps = {}

export default EmojiClosedMailboxWithLoweredFlag

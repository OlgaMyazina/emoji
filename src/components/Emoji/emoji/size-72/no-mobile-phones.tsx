import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiNoMobilePhones = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-no-mobile-phones"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiNoMobilePhones.displayName = 'EmojiNoMobilePhones'
EmojiNoMobilePhones.defaultProps = {}

export default EmojiNoMobilePhones

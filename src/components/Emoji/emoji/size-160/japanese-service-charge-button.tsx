import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiJapaneseServiceChargeButton = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-japanese-service-charge-button"
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

EmojiJapaneseServiceChargeButton.displayName = 'EmojiJapaneseServiceChargeButton'
EmojiJapaneseServiceChargeButton.defaultProps = {}

export default EmojiJapaneseServiceChargeButton

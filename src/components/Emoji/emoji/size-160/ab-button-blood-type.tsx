import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiAbButtonBloodType = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-ab-button-blood-type"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiAbButtonBloodType.displayName = 'EmojiAbButtonBloodType'
EmojiAbButtonBloodType.defaultProps = {}

export default EmojiAbButtonBloodType

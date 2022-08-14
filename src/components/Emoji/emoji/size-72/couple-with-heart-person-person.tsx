import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCoupleWithHeartPersonPerson = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-couple-with-heart-person-person"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCoupleWithHeartPersonPerson.displayName =
  'EmojiCoupleWithHeartPersonPerson'
EmojiCoupleWithHeartPersonPerson.defaultProps = {}

export default EmojiCoupleWithHeartPersonPerson

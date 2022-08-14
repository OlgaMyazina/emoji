import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManPoliceOfficer = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-police-officer"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManPoliceOfficer.displayName = 'EmojiManPoliceOfficer'
EmojiManPoliceOfficer.defaultProps = {}

export default EmojiManPoliceOfficer

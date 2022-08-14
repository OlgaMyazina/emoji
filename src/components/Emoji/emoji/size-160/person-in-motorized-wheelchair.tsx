import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPersonInMotorizedWheelchair = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-person-in-motorized-wheelchair"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiPersonInMotorizedWheelchair.displayName =
  'EmojiPersonInMotorizedWheelchair'
EmojiPersonInMotorizedWheelchair.defaultProps = {}

export default EmojiPersonInMotorizedWheelchair

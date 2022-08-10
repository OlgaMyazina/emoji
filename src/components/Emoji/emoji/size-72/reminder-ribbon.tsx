import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ReminderRibbon = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

ReminderRibbon.displayName = 'ReminderRibbon'
ReminderRibbon.defaultProps = {}

export default ReminderRibbon

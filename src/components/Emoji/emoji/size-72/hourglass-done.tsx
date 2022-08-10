import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const HourglassDone = forwardRef(
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

HourglassDone.displayName = 'HourglassDone'
HourglassDone.defaultProps = {}

export default HourglassDone

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ClosedMailboxWithRaisedFlag = forwardRef(
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

ClosedMailboxWithRaisedFlag.displayName = 'ClosedMailboxWithRaisedFlag'
ClosedMailboxWithRaisedFlag.defaultProps = {}

export default ClosedMailboxWithRaisedFlag

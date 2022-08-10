import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const RollerSkate = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

RollerSkate.displayName = 'RollerSkate'
RollerSkate.defaultProps = {}

export default RollerSkate

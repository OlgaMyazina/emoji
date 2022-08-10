import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CoupleWithHeartWomanMan = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

CoupleWithHeartWomanMan.displayName = 'CoupleWithHeartWomanMan'
CoupleWithHeartWomanMan.defaultProps = {}

export default CoupleWithHeartWomanMan

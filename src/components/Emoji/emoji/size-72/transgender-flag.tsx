import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const TransgenderFlag = forwardRef(
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

TransgenderFlag.displayName = 'TransgenderFlag'
TransgenderFlag.defaultProps = {}

export default TransgenderFlag

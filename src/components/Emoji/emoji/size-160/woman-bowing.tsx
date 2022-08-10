import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanBowing = forwardRef(
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

WomanBowing.displayName = 'WomanBowing'
WomanBowing.defaultProps = {}

export default WomanBowing

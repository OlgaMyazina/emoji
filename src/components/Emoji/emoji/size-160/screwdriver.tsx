import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Screwdriver = forwardRef(
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

Screwdriver.displayName = 'Screwdriver'
Screwdriver.defaultProps = {}

export default Screwdriver

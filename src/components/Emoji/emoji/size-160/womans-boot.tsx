import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomansBoot = forwardRef(
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

WomansBoot.displayName = 'WomansBoot'
WomansBoot.defaultProps = {}

export default WomansBoot

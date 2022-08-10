import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PoutingCat = forwardRef(
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

PoutingCat.displayName = 'PoutingCat'
PoutingCat.defaultProps = {}

export default PoutingCat

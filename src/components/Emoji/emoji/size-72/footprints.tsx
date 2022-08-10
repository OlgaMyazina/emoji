import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Footprints = forwardRef(
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

Footprints.displayName = 'Footprints'
Footprints.defaultProps = {}

export default Footprints

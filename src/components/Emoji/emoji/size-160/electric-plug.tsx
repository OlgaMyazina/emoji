import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ElectricPlug = forwardRef(
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

ElectricPlug.displayName = 'ElectricPlug'
ElectricPlug.defaultProps = {}

export default ElectricPlug

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FamilyManManBoy = forwardRef(
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

FamilyManManBoy.displayName = 'FamilyManManBoy'
FamilyManManBoy.defaultProps = {}

export default FamilyManManBoy

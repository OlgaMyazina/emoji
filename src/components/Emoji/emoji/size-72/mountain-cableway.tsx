import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const MountainCableway = forwardRef(
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

MountainCableway.displayName = 'MountainCableway'
MountainCableway.defaultProps = {}

export default MountainCableway

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FloppyDisk = forwardRef(
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

FloppyDisk.displayName = 'FloppyDisk'
FloppyDisk.defaultProps = {}

export default FloppyDisk

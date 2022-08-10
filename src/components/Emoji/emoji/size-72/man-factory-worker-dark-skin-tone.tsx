import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManFactoryWorkerDarkSkinTone = forwardRef(
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

ManFactoryWorkerDarkSkinTone.displayName = 'ManFactoryWorkerDarkSkinTone'
ManFactoryWorkerDarkSkinTone.defaultProps = {}

export default ManFactoryWorkerDarkSkinTone

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagGibraltar = forwardRef(
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

FlagGibraltar.displayName = 'FlagGibraltar'
FlagGibraltar.defaultProps = {}

export default FlagGibraltar

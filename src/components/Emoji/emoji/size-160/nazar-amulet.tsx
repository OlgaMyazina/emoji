import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const NazarAmulet = forwardRef(
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

NazarAmulet.displayName = 'NazarAmulet'
NazarAmulet.defaultProps = {}

export default NazarAmulet

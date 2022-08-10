import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonSwimming = forwardRef(
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

PersonSwimming.displayName = 'PersonSwimming'
PersonSwimming.defaultProps = {}

export default PersonSwimming

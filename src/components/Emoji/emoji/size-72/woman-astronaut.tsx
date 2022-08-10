import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanAstronaut = forwardRef(
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

WomanAstronaut.displayName = 'WomanAstronaut'
WomanAstronaut.defaultProps = {}

export default WomanAstronaut

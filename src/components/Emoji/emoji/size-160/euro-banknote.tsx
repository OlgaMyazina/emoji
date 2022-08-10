import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EuroBanknote = forwardRef(
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

EuroBanknote.displayName = 'EuroBanknote'
EuroBanknote.defaultProps = {}

export default EuroBanknote

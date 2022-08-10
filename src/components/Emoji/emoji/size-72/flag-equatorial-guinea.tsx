import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagEquatorialGuinea = forwardRef(
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

FlagEquatorialGuinea.displayName = 'FlagEquatorialGuinea'
FlagEquatorialGuinea.defaultProps = {}

export default FlagEquatorialGuinea

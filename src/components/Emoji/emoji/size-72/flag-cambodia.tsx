import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagCambodia = forwardRef(
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

FlagCambodia.displayName = 'FlagCambodia'
FlagCambodia.defaultProps = {}

export default FlagCambodia

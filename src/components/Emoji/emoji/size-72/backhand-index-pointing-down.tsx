import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const BackhandIndexPointingDown = forwardRef(
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

BackhandIndexPointingDown.displayName = 'BackhandIndexPointingDown'
BackhandIndexPointingDown.defaultProps = {}

export default BackhandIndexPointingDown

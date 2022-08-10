import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CarpStreamer = forwardRef(
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

CarpStreamer.displayName = 'CarpStreamer'
CarpStreamer.defaultProps = {}

export default CarpStreamer

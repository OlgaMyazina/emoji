import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CrossedSwords = forwardRef(
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

CrossedSwords.displayName = 'CrossedSwords'
CrossedSwords.defaultProps = {}

export default CrossedSwords

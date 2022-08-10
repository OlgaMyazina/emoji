import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Eagle = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

Eagle.displayName = 'Eagle'
Eagle.defaultProps = {}

export default Eagle

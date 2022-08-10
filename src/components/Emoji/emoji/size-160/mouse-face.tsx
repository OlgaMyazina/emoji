import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const MouseFace = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

MouseFace.displayName = 'MouseFace'
MouseFace.defaultProps = {}

export default MouseFace

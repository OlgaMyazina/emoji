import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PigFace = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,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&#x3D;"
      />
    </figure>
  )
})

PigFace.displayName = 'PigFace'
PigFace.defaultProps = {}

export default PigFace

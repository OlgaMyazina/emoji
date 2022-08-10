import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Moai = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Moai.displayName = 'Moai'
Moai.defaultProps = {}

export default Moai

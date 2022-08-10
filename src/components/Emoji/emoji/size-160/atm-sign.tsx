import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const AtmSign = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

AtmSign.displayName = 'AtmSign'
AtmSign.defaultProps = {}

export default AtmSign

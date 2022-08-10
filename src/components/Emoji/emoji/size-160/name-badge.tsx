import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const NameBadge = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

NameBadge.displayName = 'NameBadge'
NameBadge.defaultProps = {}

export default NameBadge

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Dagger = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Dagger.displayName = 'Dagger'
Dagger.defaultProps = {}

export default Dagger

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const NewMoon = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

NewMoon.displayName = 'NewMoon'
NewMoon.defaultProps = {}

export default NewMoon

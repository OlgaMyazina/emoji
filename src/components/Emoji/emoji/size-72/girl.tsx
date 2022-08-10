import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Girl = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
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

Girl.displayName = 'Girl'
Girl.defaultProps = {}

export default Girl

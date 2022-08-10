import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManArtist = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,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&#x3D;&#x3D;"
      />
    </figure>
  )
})

ManArtist.displayName = 'ManArtist'
ManArtist.defaultProps = {}

export default ManArtist

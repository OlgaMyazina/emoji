import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const RaisedFistMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

RaisedFistMediumSkinTone.displayName = 'RaisedFistMediumSkinTone'
RaisedFistMediumSkinTone.defaultProps = {}

export default RaisedFistMediumSkinTone

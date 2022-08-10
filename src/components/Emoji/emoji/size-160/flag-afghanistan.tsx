import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagAfghanistan = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

FlagAfghanistan.displayName = 'FlagAfghanistan'
FlagAfghanistan.defaultProps = {}

export default FlagAfghanistan

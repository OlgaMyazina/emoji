import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WomanPlayingHandball = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

WomanPlayingHandball.displayName = 'WomanPlayingHandball'
WomanPlayingHandball.defaultProps = {}

export default WomanPlayingHandball

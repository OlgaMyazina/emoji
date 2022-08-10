import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const GlobeShowingAsiaAustralia = forwardRef(
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

GlobeShowingAsiaAustralia.displayName = 'GlobeShowingAsiaAustralia'
GlobeShowingAsiaAustralia.defaultProps = {}

export default GlobeShowingAsiaAustralia

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManJugglingDarkSkinTone = forwardRef(
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

ManJugglingDarkSkinTone.displayName = 'ManJugglingDarkSkinTone'
ManJugglingDarkSkinTone.defaultProps = {}

export default ManJugglingDarkSkinTone

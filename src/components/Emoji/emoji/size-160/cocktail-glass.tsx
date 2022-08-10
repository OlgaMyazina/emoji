import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const CocktailGlass = forwardRef(
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

CocktailGlass.displayName = 'CocktailGlass'
CocktailGlass.defaultProps = {}

export default CocktailGlass

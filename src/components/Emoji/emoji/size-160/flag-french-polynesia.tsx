import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagFrenchPolynesia = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-french-polynesia"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagFrenchPolynesia.displayName = 'EmojiFlagFrenchPolynesia'
EmojiFlagFrenchPolynesia.defaultProps = {}

export default EmojiFlagFrenchPolynesia

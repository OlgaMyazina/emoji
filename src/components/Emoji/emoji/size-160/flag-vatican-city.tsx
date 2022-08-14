import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagVaticanCity = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-vatican-city"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagVaticanCity.displayName = 'EmojiFlagVaticanCity'
EmojiFlagVaticanCity.defaultProps = {}

export default EmojiFlagVaticanCity

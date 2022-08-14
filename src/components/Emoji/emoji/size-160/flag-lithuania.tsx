import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagLithuania = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-lithuania"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagLithuania.displayName = 'EmojiFlagLithuania'
EmojiFlagLithuania.defaultProps = {}

export default EmojiFlagLithuania

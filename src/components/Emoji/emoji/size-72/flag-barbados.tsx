import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagBarbados = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-barbados"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagBarbados.displayName = 'EmojiFlagBarbados'
EmojiFlagBarbados.defaultProps = {}

export default EmojiFlagBarbados

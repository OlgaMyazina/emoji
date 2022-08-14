import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagTrinidadTobago = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-trinidad-tobago"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiFlagTrinidadTobago.displayName = 'EmojiFlagTrinidadTobago'
EmojiFlagTrinidadTobago.defaultProps = {}

export default EmojiFlagTrinidadTobago

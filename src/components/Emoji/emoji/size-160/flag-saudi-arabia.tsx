import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagSaudiArabia = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-saudi-arabia"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagSaudiArabia.displayName = 'EmojiFlagSaudiArabia'
EmojiFlagSaudiArabia.defaultProps = {}

export default EmojiFlagSaudiArabia

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagFrenchGuiana = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-french-guiana"
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

EmojiFlagFrenchGuiana.displayName = 'EmojiFlagFrenchGuiana'
EmojiFlagFrenchGuiana.defaultProps = {}

export default EmojiFlagFrenchGuiana

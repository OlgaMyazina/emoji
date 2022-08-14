import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagTanzania = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-tanzania"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagTanzania.displayName = 'EmojiFlagTanzania'
EmojiFlagTanzania.defaultProps = {}

export default EmojiFlagTanzania

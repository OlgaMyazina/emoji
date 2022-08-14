import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagMauritania = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-mauritania"
          src="data:image/png;base64,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&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagMauritania.displayName = 'EmojiFlagMauritania'
EmojiFlagMauritania.defaultProps = {}

export default EmojiFlagMauritania

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagGuinea = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-guinea"
          src="data:image/png;base64,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&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagGuinea.displayName = 'EmojiFlagGuinea'
EmojiFlagGuinea.defaultProps = {}

export default EmojiFlagGuinea

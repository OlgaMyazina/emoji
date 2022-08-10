import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonPerson = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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"
        />
      </figure>
    )
  }
)

KissPersonPerson.displayName = 'KissPersonPerson'
KissPersonPerson.defaultProps = {}

export default KissPersonPerson

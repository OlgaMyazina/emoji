import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PetriDish = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,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"
      />
    </figure>
  )
})

PetriDish.displayName = 'PetriDish'
PetriDish.defaultProps = {}

export default PetriDish

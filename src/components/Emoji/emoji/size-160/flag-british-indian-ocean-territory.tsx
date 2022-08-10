import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const FlagBritishIndianOceanTerritory = forwardRef(
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

FlagBritishIndianOceanTerritory.displayName = 'FlagBritishIndianOceanTerritory'
FlagBritishIndianOceanTerritory.defaultProps = {}

export default FlagBritishIndianOceanTerritory

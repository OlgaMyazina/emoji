import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WhiteMediumSmallSquare = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQcFygoFJPd0wAAADZQTFRFAAAA2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2tra3Nzc3d3d39/f4+Pj5OTk////9HmnmgAAAAp0Uk5TAAAdHmRlfbb7/HqNEtIAAAABYktHRBHitT26AAAAcElEQVRYw+3XWw6AIAxEUaa8i4r7X60rAGrChyZzFnDTz45zRPRfgIRkFAQYh3yualSzx/igWNSsxOFJQFJtl0lTTfPQ2W+Dfi5D7TBZX2THEEMMMcQQQwwxxBBDO0ObHnYHeTMhBHtGjZ+MGiL6vgfYaFIE8TBOkAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOFQyMzo0MDozNCswMDowMMNO+EkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjhUMjM6NDA6MzQrMDA6MDCyE0D1AAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

WhiteMediumSmallSquare.displayName = 'WhiteMediumSmallSquare'
WhiteMediumSmallSquare.defaultProps = {}

export default WhiteMediumSmallSquare

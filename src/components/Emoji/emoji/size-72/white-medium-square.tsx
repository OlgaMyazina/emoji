import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const WhiteMediumSquare = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQcFi0OuivGXAAAADlQTFRFAAAA2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2tra3Nzc3d3d3t7e5OTk5eXl////k0GCKQAAAAt0Uk5TAAAJCh0hJ6Gi19vlMHsPAAAAAWJLR0QSe7xsAAAAAHdJREFUWIXt1zkCgCAMBVEiS4Swef/L2osUQQqLPwd4/RiD0M7IOq/MWRoZChyTssiBnhQdLAudxwC5uAJFN0A+iUhtiqqIJP8KlX4p6mUK5VYVtTyF9AECBAgQIECAAAECBAjQT6Bt47e2ojyu6K453rbrCH3pBsoogwxl2IoTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI4VDIyOjQ1OjA4KzAwOjAwsd6HHwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOFQyMjo0NTowOCswMDowMMCDP6MAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

WhiteMediumSquare.displayName = 'WhiteMediumSquare'
WhiteMediumSquare.defaultProps = {}

export default WhiteMediumSquare

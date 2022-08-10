import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Minus = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBB0EJQOrXSCSAAAArElEQVRo3u3VsQ3CMBSE4UtkKyKKFMEAtIzABLAM87AGezACG9ClSROC7BRUdkKBQI/m/zpbT76r/CQAAAAAAIAfKtLjUaq0V6Noke36+hqGS3LpZmNrnbVTMChUVrf28Lynl25h0Msb1JFU+nlQaRP9Qcl/F6AQhShkbeFjtNgar5y4kOXyY1A9+jGarI7V6PJlmhfaaOi2p7aJJss19I+u+P4dAAAAAACA9yaHlB2lYmyg4gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwNDozNjo1OCswMDowMNTRrRoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDQ6MzY6NTgrMDA6MDCljBWmAAAAAElFTkSuQmCC"
      />
    </figure>
  )
})

Minus.displayName = 'Minus'
Minus.defaultProps = {}

export default Minus

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const LargePurpleSquare = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFycqfQWgMAAAASNQTFRFuTH/uTH/uTH/uTH/uTH/uTH/uTH/uTH/uTD/uTH/uTL/ujL/ujP/ujT/ujX/ujb/uzX/uzb/uzf/uzj/uzn/vDn/vDr/vDv/vTz/vT3/vT7/vT//vj//vkD/vkH/v0L/v0T/wEX/wEb/wUb/wUf/wUj/wkr/wkv/wkz/wk3/w0//w1D/xFH/xFL/xFP/xVT/xVX/xlb/xlf/xln/x1n/x1v/yFv/yF3/yF7/yWD/yWL/ymL/ymP/ymT/ymX/y2T/y2X/y2b/y2f/zGj/zGn/zGr/zGv/zWn/zWr/zWv/zWz/zW3/zm7/zm//znD/znH/z3H/z3L/z3P/0HP/0HT/0HX/0Hb/0Hf/0Xj/0Xn/0nv/03//04D/1YP/14n/14v/////pJLcxAAAAAh0Uk5TGRqQkePr7PmxaoQNAAAAAWJLR0Rgxbd8EAAAAitJREFUWMPtmMGKGzEQRF/JDoGQn1jIPf//GbmG/MbCLrG6ctBo1Bo7sInmaGGGmWm5kLqqu2RLKsWsDUVYl2thfcSt6Awciq4CYGVzAtC13X/Vf+P41QBXAH3/trCiXz+8AfnLywJxevn5qm1FflsBemffGu+fF4DeRo6ICEa6vXNhYYF70Kg9uMctRVqRw0cFuF89ycNMb4zlDGTHPwpzzL8loFuYwI/FdP/ayAqM2l53IEf1Ybq1Z2iAbU+W1S+gSMmuj3PkkRznSnKLtLAqmbUF+gdrIn4vASnRf8yp+WgZOyfbYVr+ZdCmjUaImlSyChtfADKysyArhYBCUIKyKSVKUIg9BCUKBAVaakpcsiDjFqrCqshVVFlQUYX2QRVZVIWRK1uxVDmVSETd2ewfHxpnInzEDCZiKpEDFX58PxLziH5cV3Q0J/sUQZ6m7DOB6klASzma+lH4juRWLZuUxJggJ0nIUz+KyikrIhZOEq5zstXLutd32kZrB9t9niPwIdl7DT1yH6fosdamfsRCivqXN9ZWvD9Vv08U5AJrE/2t9Y/+n5xgMoVmirMzTLW2cobMQLfLvfjveqI2eaUGKTwB2dXq601NdDsbGfWzAM2Yuh81Y8od0tnnhxq9t/0hxHwdL0etNecqO32luZjMsLQ9RnSDG8v/dO2bfeTRH3FuA9yuuab+Ou0D45RfIk+gJ9AT6An0BHoCLQL5HByXlTPWGGFRzvn78A9yE4HONJ8+xwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOFQyMzozOTozNyswMDowMCeI3J0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjhUMjM6Mzk6MzcrMDA6MDBW1WQhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

LargePurpleSquare.displayName = 'LargePurpleSquare'
LargePurpleSquare.defaultProps = {}

export default LargePurpleSquare

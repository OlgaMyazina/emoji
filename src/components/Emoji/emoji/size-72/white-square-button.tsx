import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWhiteSquareButton = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-white-square-button"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQdAigJ+qvLcwAAA3dJREFUeNrtnM9u00AQxr9xN664c4InSJ8CuOeAeAZ4B3gBEE9SDoBU7hVPQdU7SKUgVRGVKE7xx8FJ/CfrjCc0sjfZnxTZsdeTmS/r2fHGjny/vHyQiLwUkacADhEBgD8EPuYHB68dyFcEnpNM+/ZqYLxAnkMuLi6+isjDvr0ZIiS/OZKHJPv2ZagcuijOehxAAIJiORSG409SLP7Dma3EsS1xaDZ9N6fYML7s7s4a/E06BcrKy7evi42Ovm/UhpVlc93ij+eYeQ8SrwMyf0Pv/kpDyuoHLW0UGxY2pNZIUP10tgggDbPCus1iZ9Of0rJwvf51+6zYANy6Q+lZg9JSs0HPXqt13S/Wlpt5z6pA3UmSBCL1LywEFj7neW46zllO0iRJcHb2Baenn5Hnf/uO2USSHODJ40cYH41NIimj2Go9cnLyCcfH7zAajfqO2cRsNsP19S+Mj8bz3r/MaMv1Zq4D1FOskTFITKdTXF1dwTnz2dkrt7e3mE6nKDpENa71Gc0cZZ7nyLIMWZb1HbMZa/4BAGfKtrRXooODNI0wzlpHBQ3ttaOxBxXlWahwqdDWelC44lRjYK1+97da7C/roOqo52trVH64sLym8Y3ry1G/2O86XWzugi6+WLRYWaukVy4JW9Z3Qa1mDM2CuHzv2sukVanDz0FlBmqPtf7emWK2jpFDY4M5IkfSm6u89hl2Hypyb1Eodo3DdRFmlzAXipY+EXb/KWOwxJGsSNqWr9jWICRYX22+PM2cb+NakbiuAh04WpL2aODaZ22l0VrmtsPtQQv/2SneYpvrJmdpfnfxl9X2Oih0jN9z0r3p7uBLt22XZc46oRg6iynpriLZZxRDFmmjGcWVq9gVSZQt4aD9flyn9tNz1/BDlqcaQ/e7JOIopqDmoOHc63U3WHOQOsxrM5S7zl7WQRaiQApRIIW9rKQtccQepBAFUogCKUSBFKJAClEghSiQQhRIIQqkEAVSiAIpRIEUzAKF/BDwJr6bBBIRpGm4/z+QpilEbDdfmJ7VIInJZAIAyLLM/GF9QRJpmmIymZh7kZyfn/8AcL/rAcUDdRLcqbbw2fhAy8+NnvbZJ+IophAFUogCKUSBFKJAClEghSiQQgLgpm8nBsxNApEPAMJ7xnv7ZAA+OI5Gb2Q2I8hnAO5hP+9yqSIAfgN4D+DtP7ylrglncgn0AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDAyOjQwOjA0KzAwOjAw31FzEwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwMjo0MDowNCswMDowMK4My68AAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

EmojiWhiteSquareButton.displayName = 'EmojiWhiteSquareButton'
EmojiWhiteSquareButton.defaultProps = {}

export default EmojiWhiteSquareButton

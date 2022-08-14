import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWhiteLargeSquare = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-white-large-square"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAyVBMVEXZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2trY39/Z2dnZ2dnZ2dnZ2trZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2trZ2dnZ2dnZ2dnY39/Z2trZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dna2trb29vb29vZ2dnZ2dng4ODm5ubm5ubm5ubZ2dna2trh4eHj4+Pj4+Pj4+PZ2dnZ2dnd3d3d3d3d3d3Z2dnZ2dna2tra2tra2trZ2dnZ2dn////zy0jpAAAAH3RSTlMakOPs6+vjkBqR+fmR4+Pr6+vj45H5+ZEZkOPs6+OQunLbyAAAAAFiS0dEQhDXPfQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBB0CExCicoyLAAAApElEQVRYw+3SOwoCUQyF4XMyGfEyhY0i2Ij7X5QoIoj1RRGZWAhuICkszr+AD/IgSJLIFDGQbNwgHe8c2hoFTU83AJYZLiJmBJ2AeWJNERHvGfS+QmMSGju6A1hkoejAD8rsKPCFxirocuApcfp9HAFw3FX8Ea6GogQJEiRIkCBBggQJEiRIkCBB/wdNNc5krIForJHMrFdID3fni7yllG3Y8vwBvUovvlwFEAIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDI6MTk6MTErMDA6MDDMgduiAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDAyOjE5OjExKzAwOjAwvdxjHgAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiWhiteLargeSquare.displayName = 'EmojiWhiteLargeSquare'
EmojiWhiteLargeSquare.defaultProps = {}

export default EmojiWhiteLargeSquare

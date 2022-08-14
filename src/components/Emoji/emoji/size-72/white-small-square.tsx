import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWhiteSmallSquare = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-white-small-square"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQcExMcDpxuggAAADNQTFRFAAAA2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ3Nzc3d3d4ODg4eHh////uGYNOQAAAAt0Uk5TAAAJCh0hJ6Gi19vlMHsPAAAAAWJLR0QQlbINLAAAAGlJREFUWMPt1sERgDAIBdFgSJCQaP/d2oADHHLR+a+APW8pAAD/R5WbiytlMtRFh0ulU5yiQyx0HokQq83bNU05EWrD1uVaNlouFEIIIYQQQgghhBB625pQamsyoyWZ0dq1fttmFADg6x4LdzqqGeiyZAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOFQxOToxOToyMiswMDowMKdICZgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjhUMTk6MTk6MjIrMDA6MDDWFbEkAAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

EmojiWhiteSmallSquare.displayName = 'EmojiWhiteSmallSquare'
EmojiWhiteSmallSquare.defaultProps = {}

export default EmojiWhiteSmallSquare

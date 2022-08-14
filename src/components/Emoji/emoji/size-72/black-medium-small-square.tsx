import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBlackMediumSmallSquare = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-black-medium-small-square"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBBwUOjaULi46AAABhklEQVRo3u2ZS07DMBRFj+04bsKvUmcI2EyBrYBYEGLGPmjZDEXMIhVoCWmchAFMjdLWogPemebp5vgzugZBEARBEKKiQh9ueOHotDovRxU1Hd3WP1JYHFnhpq+zY24Dc0koYMHwrLxbXi7NJzVthLVrLAOapnsYXi+eQlNBoU/M+ONibt74iCiUUxt1ocfN/dpCJWa0TN4pSdG04bPtSYcmoUSRJmbUBOeCQhUJFSUthm5rne8dMlSUVKzw6wt5oMazoGC19ZUGUKSk7FPjNxHqaOloqSmjCTWon9Rwnu4XFYN+Kb2E/hIREiEREqFdI0IiJEIitGtESIRESIR2jQiJ0P8UitEO9U35RShOK7RucrBB0yg0Bo1GR2rQ9E+i+mUfgkIWg8WS4iFScZ6SYrHYTYQchowcj8JG6qlTcnIyHBvUwjm6aP0qARuxOM84YM9nRTgvKDRATZlw6SI/LeTN3sRNwxcgKHTI82x4pc6TkcNHEkpwDAr3OJ+dRMgTBEEQBKEXXyRGcM1xiCaRAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI4VDIwOjU4OjQ4KzAwOjAwYbho3gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOFQyMDo1ODo0OCswMDowMBDl0GIAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

EmojiBlackMediumSmallSquare.displayName = 'EmojiBlackMediumSmallSquare'
EmojiBlackMediumSmallSquare.defaultProps = {}

export default EmojiBlackMediumSmallSquare

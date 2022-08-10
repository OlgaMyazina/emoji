import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Plus = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBB0HOjo7RBhdAAABqklEQVRo3u2YMU7DMBSGfztuSEurFhhgQOoC4gxdkECoF2DjEkxwCDZuAAtiQWJiQjByBtQLdEJRW6TSunksXXBtkjqUUPT+LU7e7+85TvLyABaLxSpWwi+sDQARGvazYTweruHWy1nlSOYQF7b4kq6f64eKp2keoCp2EZqDhGAUVhUCT1OZA4icwzSf0U8BLUQMxEAMxEBFi4EYiIEYaA4l9mEBkQAlT1OjhG0DEQ5Qy1DzJWjZ0hGYyLfWO4RspzmIoF9+Tob3RrwJtIVH7Lmy/yLprMh1tvjV1/Uj3b3+boWmY3lKf5erjUjN3th/takZiIEYaCmBLK8wytgrEM7mUhYHAbJep8zDBBVd0pT66hfQcqBsEweoZfx0lLWaScoA2sQo3j6r1ig1RZV0Wv3T2RUmrOjmZf0lSd8Mgvrj2ATybOnto4zJsbyxNayi0cYJ3QlceTl7buoIBOmMFdK/HvpzTxkDMRADMVDRYiAGYqAlBPKs+aby7nOQY2ZynlkoEKGO8aDRUZaaWulwIPHx20BN9J52jiqWH5kJenGErv8isVgsVqH6BGKPYDRNtNsvAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDA3OjU4OjUyKzAwOjAwOxdkagAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwNzo1ODo1MiswMDowMEpK3NYAAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

Plus.displayName = 'Plus'
Plus.defaultProps = {}

export default Plus

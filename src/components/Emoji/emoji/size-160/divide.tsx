import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Divide = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBB0JDB/zwnBlAAABl0lEQVRo3u2YwUrDQBCG/50kNS0ttYJaUDwJ+hqK9OBF8Cz4FF76Cj5FQdCT+ATqVfAB6kGviqeUaig23fXctBvM2G6szHfLhsx+XejM7ACCIAjFojgftQCgjgqMLaoXb/V6uGLE9pk/xEMbxxjZfKrXjfZwlC/k74QUmti2vyw1A+WxAhNTCNBZL43+aZjZCc0JERIhERKhomGWDpWZqA2YVZsv9IGGKlnLB9GS+nQr9KKPLlYfle2YSHffdZWpJAj/jFS6aAEh9lCztu8z3dvrl+/04GZscfJvv4xz7IDdguaAwqfGQfI2vjgtD/ns1j+vkR9MrrnZOodk0QIiJEIi5JopKdC4qRswU3fy048alSRI+NOLHFA58Sd675TQOr6izbNqzTg5JNMfRtzLgCAsDNw5NWEfu9a+ksLuxm2kLxmxub0h4QSn9qt0pbNyP2TlMn6zapBReDxDzHHDnGoZP6/+ueIqQiIkQiJUNOw5ddZVwPmc2iBGnQIoixShRLFboWd92Fl7UJZDUmrUfZU5tSAIC8o3PftYnzhqHmAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDk6MTI6MjYrMDA6MDCYgKabAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA5OjEyOjI2KzAwOjAw6d0eJwAAAABJRU5ErkJggg&#x3D;&#x3D;"
      />
    </figure>
  )
})

Divide.displayName = 'Divide'
Divide.defaultProps = {}

export default Divide

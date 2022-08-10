import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const LargeYellowSquare = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5QQdBDshqnxeqQAABCpJREFUeNrtXEuO1DAQfc5E8xE3QCxYcwPOwSXgAnAFNHdhrsFmxJILwBWYHka0H4s4HbdT5XIyTaeb+EmtJI5dKT/Xx3aidrzHSwAfAbwDcAOAWDccgA2ALwBuWwCfALwHcLm0ZieGDwCc4z1+AHi1tDYnip8NgOultThhXLdy+QXQ3KBzxzWAgN8A2I7uCARdAC/eAjdvVsUPNt+BX1+RkjQmqLkCrl4HC/JLq34cuKbr8+Yb4B/2bsku5h8AfwlwRQQlxPQQCCLA38EnV0IQm67PwhRQtiBuu9+kOSMxBK34vLROf10iZzIDhhyG/o7Rqg3gw1HriKZEONIDzil1+nMkpPioLK4TlZHh1CKOsrpEpBcBunAtG8OYILLrHH3UKG0sERfX84GkuF58lNrER02uiy6Z3M8QNnqk3x8EhgFlqYvBY7CgHFh4j3p9sW+UL13p80qQWqccb3WCWELQXCSsUCl/LgfFeswhCGmQdsZ1rjwTU9Sea8+Ly/XYYetUdl9J88HFqMWLNNsA5ugvjox+zqlZO+NiU9P8GYNTXYxHjkHLsDLo4Jy6amhFDrhCC6IfZi8R2jEFRBegt+K84L+EcxgnpQ4FS41kktZVEMricqm+M84l2SyUg4wMKHKi+0RmqaG62B+b+f8Jmovplf9lkD41ZIK0GINmrebPGbl5kOhi25W5WCCo2MV2E8W1IDNRHGdywjGk+TWBW5AssyCyX6yuCNNm0lsAF1hdkJYsSMpijvF2x/ytgrJ66fbFoIe+TXKogYv3pLwoNWNBDRjdHOa1bq8coazrBsUuxG1cpBR3EofzuZ13I4Ix0jOty3hgirMY4xjEuDgIxUjKQIuk1n6bMYWpzHkk7Q/luDSn726iKO1Jj8pc/wrkhLYjiurM3ULpCdrG7A0EifXXmsUEg2vFHQ1y4laH5B5TR3Nuu4MxJBMkV1yZ9QDQPEbf7lgVwlKjLEhjIKgkoVh7ZjnP0WRre1tTPDmnhzjt8qJOSpAO7+ZLwtDUl6sloFE2VW5JW3JikJ7UmyUC66GfWxykEb3ct/aEe0hlQHlWmzqfyS1ZSvewy5Yv4nbH7uuM7Dc8qXIWQTnCSr4byj0/JUj61qhvr72+lqc2chbbW5RIbwhSBXzyMGmUoNxzyfNydTV9YnilvECvchfTSEk7JO3E5T4wyK2Tch2QLNFDHhAtrUrhwWFsCAlBVC1IM2WqwuSHWSln6jc/luwSeeV6tLq85+b4Q4LG9aHkjtEeq4vnivZoRnCmqBZkoFqQgXYtX7jMRbO0AqeOakEGagwyULOYgWpBBipBBqqLGagWZKCmeQN1omigWpCBakEGqgUZqFnMQHUxA9XFDFQLMlAtyEAD4HFpJU4Yjw2IOxBPuxem9df/nkDctQA+hy9j6t8Edtj9TaADbv8CsJ+QSHJC73UAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDQ6NTk6MjcrMDA6MDAx4kUkAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA0OjU5OjI3KzAwOjAwQL/9mAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

LargeYellowSquare.displayName = 'LargeYellowSquare'
LargeYellowSquare.defaultProps = {}

export default LargeYellowSquare

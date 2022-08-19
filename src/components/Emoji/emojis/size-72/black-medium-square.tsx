import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiBlackMediumSquare = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-black-medium-square"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBBwUDDWEO+71AAABtElEQVRo3u3ZT27TQBSA8W88E3vGQm5v0UWXdMtJkJBYwg3gADkCW1acpFtygF6hi6okTsf/h0UqhJ2kRoKRhfQ+72LL7yfHKz+QJElaNnX801tSVxVetfSEKCM1K1yw28Z/mwN95BFzVX/yN940EUEprnMbu27vLvkyOmvGF5fkrvxcvtvyRE0XgXMYmpEzXCudfyh303OjGvrCv97xgxIfEeRoUJg3+mr4/iLIo1VlnijZo0kj/WWBPZCRW2OHI+yoloGGmprARaTnA/BATU1DywxoQNHT09NwH/Gl7p/nDPQvg8IvQsc+IiibTDsLGtMGYhRIfoNMSUmUmX8IO9WCoNMJSEACEtDSCUhAAhLQ0glIQAIS0NIJSEACEtDSCUhA/zFInfw1OX9ZjI/mx7OmrGR6yfiIxzg3Y/IlX5OgMc9HrA5312j0HChFk5GR0ULEXYfFYklZzW2DHEkYupwWRUrHv3+TFIeN4ityXGWrGVDKahs2F9eKlDrqNiinwN1mdzPrqYJHn60J5saZhj7SEzosge0mWze7yxPnJ71n5aqiirwmt8FuW/81wv0lSZL+rp+byIsPZnwr5wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOFQyMDoxMjo0NyswMDowMDAL+3wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjhUMjA6MTI6NDcrMDA6MDBBVkPAAAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

EmojiBlackMediumSquare.displayName = 'EmojiBlackMediumSquare'
EmojiBlackMediumSquare.defaultProps = {}

export default EmojiBlackMediumSquare

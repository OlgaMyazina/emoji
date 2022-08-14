import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagStBarthelemy = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-st-barthelemy"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdCBUJndQGGwAAAAZiS0dEAP8A/wD/oL2nkwAAEe9JREFUeNrtW1mMHMd5/qan575nuTt7L68lubxJkaYkU3RkRJKJyHBkIICdGDEQB0oe9KCX6CWCACF50mMegkQwEDgBggQwohxIlESRIMGUbdGSTIkixeXyWJK73Htm5756ZvL9tVOr3tHsQYsymGAK+FE91dXVVV99/1HVNUAndVIndVIndVIndVIndVIndVIn/bqT4//6AD788EOYpukolUquer3upjgbjYaDYvBaqvCyYVFqvLYMw6hK2ZkzZ/7/APTRRx/JKKWvAeYiEUqiKX0EYpDSz+seuc9rF3OTucG8QslTsnxe5DblmsPhmHQ6nbcI2Mzp06cLly5dwsGDBx98gD7++GPVr1qt5me+jQMbZr6Psp+ylwPra5aHmHsoboqhn2c5hDk6bxUpF0axapHgLFIu8vpd3nvXsqzLZGTqyJEjeOqpp9YC9Nprr63p6DPPPPNrYQY76GDHfPwpsz9kA2OMYIwIIKwTpDipSuCsyzNg+apoYFpBIchK2oFkB7RSqTQoGdb9S+Yv8T3W2bNn1X1TV8zn8/Kwm+lbHo+n/Prrr3/I61k+ZD355JNfCIhPP/0U+/btw4ULF8QueFnUTRlh23soB5pg7ODAE5QQQTAECJfLJfZlVZxOEWMNIHZQNCBaNIAt7FFlArK8Q64LhYKjWCxGyuXyEJ/TtmstQNIgZ9LJB7/Lzpzl72uU82zk/FtvvXWDDd1uUrLIsio7b504caLxySefqM4TVGSzWQdfIpQXEIKULkoil8sl3n///UG2McjfO5nvYjvdlDDbUsxYAcO1mgsQIiTOykCF7k3mCPHrdWsVCM0IO6s0s+y/7fU0QPJuaUMS+y5ANvSzawAiglKx0azg9fv9B/mwWK3vUwqUZb5gmvfnmOdYN3fu3LlM0yt4+IwSXoeZ91J6KHHe91O8FJd0SrNBgNAiv2XwqLODtSKqxeuAKwRPeJcCYnn2LZQLMyCvYLh64TTd8EePwPSEYdhY1AqIvE8zxg5auyTPkyCr9T8HEHVvlYY+n09JIBCQW06Wi0EMiY2wz0K7DumZ0fKZeth/kyFSpuq6UMhcw/Lcf7OXWdTKU8yTqDmGkHKGULfScDaus26ZpriBMs1Vw+GHN/TnMBxRULHWZU276zUeyvbbbpfsybQjqPVYKstAZXbbGUT7tb6vwbEDpK8/uyfqYpAN0yim5+DxD6CYmaB8AGflTb6f7TgsPsP2rQW4CAiLCKaBufka+wNEY244I8/AH+xHvYENWdKqcltRxXUZZE/amNn1tR0Q6/1uzUXqtQoKuTvILb5NFboJo3YFaYQJwhJ9tAWP14nx6xXaAeDYIQ9MVwMmgarVRX3o/q+UsH/UiZ7gUcSGnlZgN5q2o92gt8qqVia1ssxsfcF6FdupVSs47YXDrxawOPlXsIpT8BjX4TZY7qzzuTzcHnahIcximGsJk+l2yzS+BKXiWPnd4PXOESfCIaqn/xSZ5FO2SQFP9NYDpR147co3AqktgzZCfSOD176uqIhX5V7jU8wv0tpngMMHvWQVFDusqhjIOob6V54pFK1mW42mGjswkKCndfTQOB9T5WIzxai2MwHrTbhdhbbCprYAbQbIRlRup46Sm6YHsYHvITd1jQ3cwOSUhV3bXWqg7O6KC3c0ICEOrR+qNRNVy6A9pH2hEaKSKcbE+k/CF+xTrFlYWFAizqSvr0+9SzwxY7cNB7yZlqxrpNdrZD1GtXtZu3uaCYHwMPK+04iEbuDUMTcs2g8FCNUrV/IglQlgMR3Acs6HbNGDXJlxVdWHTDWAXD2IQs2DP3z6IPbR6Et7Pp9fsWF5eVnl8Xgcd+/eRXd3twKtdVLtXmozl7+hDWrVya0av82Z5UAg/hhy8/8GvzeFPEG5uxjFrfkuzC7HkSqFka4GkScYRcaYpYYfZfhxfOAqcoUYphb7UVTLM4eyaXdufYpopBclWnUGoirIE1laWlKMWg+ArdqnDRm0lYY3c5c6lUolFTqEQmEEI9txAw/jpxcmMD63C7P5BPKNKI1xAGUCcqT/OiKGhfPTgxDF6gks4XsP/QSpgg9/8ZOn6dZjij25hf+Cq/QGXPE/QM0VZPsZieJX4y2xT6Jqv8qYWpOxmZFul2+k03ZjKJSfmJhQIAmDpNOXUo/jR5e+i2XXdoztyCKDXjImipC3jG8f/hm+f+JN7IxOodYwcLRvgkv1NLIFxlVGQ7Enn3ofMzf/EZGuY/AFelXbjPpXg115rzDpXkDYqK65mV5upnKtz3Lhp2yA2AYxoiuuGMoYi1OqNkx43TU8PXYeDw3dRLoUxHtTh7G7awpBI4WZVFiBY9Bo//z2fuyNjuODmTHMkG3V8hwW7vwUoZ7fhif6NTKnwTXgZ0ZZmKq92/1K5hex8K1JvMjMzIwylGILBCiPx4Xpm2+iK/p1rq2GqCYGeoNJdPvmaX/8yFd8ih0XZ3fhF7FdyFSCuJkegCzN0lYYb9x8FNmcH/3laTQWphH6ylk4PKOKTcnkkvJoej0n7LGv4u87QFvV0XbskY4KKDKDU1NTqqM9PQlGyilYjv/B7LWPMLz/BTIDuJ3uxTvXD6A3lMTlxZ2QwlLDg3O3T8BZtTBYmkJ3OYm+0iL6r9HoFpOIF1PoeexbaHh2w0Uw5D16SaOB0arm9XrXXVvdV4C2ApROQmvtSeQ6HA4jn88hkSAb+n4fmdkfY3r8rzmw0wTMxC9nDiA6l8Ego+veyhL6iwvoyy6iu5KhZBGs0tAyklSmRzwXw2kHPFz1O9U7RJVFBKBkMolqtYpYLKbcvQBVsy1DvnSAtpKaeykKHAFOOrlirDmjkaPwh0dRLXyMwPQ7+Pa0hYHyMnpLaXRX8whaFZh8rnb8EOt3AxeXuIJfCRprzTkQG1YlYAJEnRIMBhVTxBGIrZOdB3ECUn6/2HNfAZKOi8jMyaxKZ8XDiMT9EtRFYDAOOuW5ga/c/Be15UE6oCEgUsUq/b0wdgzD2d2FqtcN470La7cjlM+tq425ejNCl/hH7F5vb696p96VuF/2574BpO2QgCPGUi8x9FaHgKR27ujNanUXAVnZ9oAOCbggdR47iMZALyxZqJWraDQ3zJUImxw1rmmpSpUyarRTMgGhUEi1LUBFo1HFIvsO4QPFIKG7zK54lEwms7ouEjuhdxLrsq3LGTZbP6vwfuXcL+AW1SiU4PjgIgyuQ+q0OxWCnGObC2Thzhjdutuk57No3woEJYJ0Oq08p7xfQLLvJz8wAOldyMHBQSwuLqqo9s6dOxgZGVEuX0BTgPm8XNpb0BZCtksNKHrAlc0h9+555AlWalsPChEX7vriuOPuw6RzCO4w8GL0BrxmDpnc26hiB/KF3asslfcJo0QeOIC0molhFjCE6uKGZXZlZsWjSblFYwwzSRtSQ9HpQtbjRcofQDriw0wgjgnndtQjTgz1zWPPwALqXMBOTI5hLhfD14aqGBzuQXrm3+F1VdUeUalUQU8iocAXQ33r1i3s3btXAfbAAaSZJJ0TdysACSgCjvJuNEB+n4F8wocf7zmDWe8Qwj15DPcnMZJIobgYw9XJAwi7c3gkfhlhI42cgy694obPWcITx3vRM3QAleIhmJ4Ybr33S4x/8PcYOvoIDhw4oFir94fuZ7qvrQndE5xRsT3ifmVmBaR8fhmN6jx8XGJ4ety4PPwIrgT3I+3txlB0DhFnmjGPLBEMBYjLoO0qxrBQ6kepauDRURNnjm9X3XX7EgTBjQC9YOTif2L5b/4WZRppUWURvUetXf0Xdfn3lUG6Q7IOk7ioUpGAroR66QpV4l2k64ewe/Q3cHo0i9c+rDAsoGGn8c7ktyFZ2oaYN4OAu4i3bx3EZHoIxaoL+xIV/PE3RxEOhlbdvWyeIZBD8HAXHPGH4fb72n413UpfN/r9pQAk4ExOTqqArZtLjXwui0BoP6KRgxxABaHYGH73iWlcmb6IG0sR/PDCN1GqeXAscRnP7H8bQVce56fGcGnBTXBK+JPfGcXo9oGVhWi5hHJxCYXFf0Up9zPEzzwMR+RReLy+z31O3giUrXzu+VJUTAJFvau3b2wM1uIsrv3zj1BfyMMb3s1oekxtwu8eGcCf/t4+PDRSR67sohpxsWlYiJuLXNFL8GfwnoWXWOfo2A62a2F2dgr5zB1Us9PIp2Wfey+8Qa7dXKG2dude1Mxe954YdK96LDZo9+7dyuXnuD6afvWH6ArMkEE/UEsOLmlXPhvTrR8Y3YE/+0EUb7x3Df/xQZoxkgtLVLV0OYwTewfx9NcPY6B3m6ovzFkeH4eTzCzPLMF3+iiCI0fo6n18p+dz3+rbsWm9/Fe2QZvRtHWGtAcTV2/IoQAGesGTh2B4cyhU3gHm52B4uHJ3uNQhhCBtSjwWx3e+cRJPnErh4kQC58cPYMfOOH7rq6MIMlRYCfoa8DIUCCzmkfy71xH9zhPwDHSj6orB5Q0xOPWvOZiwESva/d4MKLO18r2uY9rpdIMd9ocj2Hb2N+HIu5FN/hNKxeMIJ86i7gwx0q5hePsovGSadK8r3oXHH+7CYyeqq19f7RGxtB8+dZyGuY6uo4Mo1d3wx/rUp2v9PX09Bq3HrvVsVuuz5massTfY+nVgI7DUgQSTM+w/TMXqQvI2Y6Bz7wLFMnxHj8Pcs3+1vl5gGobZHERdI0PVq6OQz6DhKmDbQ8Nw1CqcgJpatjjasGA9sDaqs5HGGFuxPZvNSDt1UyC5fCjXqXKe7Qh198CYS8E6dxHdO3cpNWt9h/09AlqxkEdqkYY5cxOeBmMpRuJFyw2nr2d1B3Ej9mzUt63aI3OrsUI7FWy9Z2eZWp/5g7QVO2FVKzDMaUT/6CwyU1lUgi7kshnaD+/q+Z8VUNQZJdYvwSpnUS0msTRP75XLYO/uHag4wlyT9dMmhRSDNpukzSaynbdbV8W2Qsn12GQHpVUlvYxRqjTapYLsE9UQ38mlB+ZRWEpyKeGG6fY193L4XL0Kq1Jg3Qwvi5i4PkkWmlxvDaBsJhCI9DIy9ygV3Ox0mT56p3P7GaKN2LWhDVrPurezQ+2Y1Xptty8W/ChbVbghJ8PKmLo9i1Q6h65YRJ0VkoGUSmXFonyhqLxYd6IX4fgA4t0j8AXCzVirok/DKZHYS9Z9esNOl9uBaT2pog9w6X2rLxQHtWNIq7qtR1Pp4Mq3ehOhrhEUuSbLl8WW5Gj93CpeKhCUWq1AlWnA7aF3CkQQiffDF+pCKCrruoDaF5IIXYMggOj971bR4GiAWo/cCTCyb6UPiMlug36mnZaYmxnerYjdu2kq6+h2pbyuOheKbOO9OAdZxlBoGHWrpHYIoQ4nQB2tqzukS061+7iczpNVS2rRKyK7h3YwBKgmeySVOdAyB1qrr6RGM7nYP/nMarJPbrLHJYtpAUjvH0nfZFdS70C0PcSp4wm5KR2RnUBBWkQoaT8EsBmb7LnMjD7H81k5WWVygSmvb3hWGEGgShnan1JRvVuDIkIw6gQgz7ZSlCRlgTLHNucpM01ZpCQp5SZAApS8zC9nqpvnqqPspxwi3cMx7SJQg2RQjxztlTHqz9XC0s8BJDPCBx1s1KH3VQQoTUO9nWo/b7j2eJ2x5lOQXc3shlSriN7QF9HsaDKkxjpp9mGe9W+znXE+e4X5BOUOZYnlBZZV+JwVDocbL7/88paC2meffVb1i+ORvy0E2U4/33WMwDzOsq/ynhwud7QFSEDhgC12/iJn8FQ+n+9ZWFgwBSARWUIIUIKyiD6caT8PZFcxrdfakEputx3Nw9sVlgsr5PTsTco4nxcwrlHuCitI/eLJkycbL774Iq5evfqFFtOvvvrq6rqaknrhhRdSHNslAv0P/D3Ad/rkXPiaozL64qWXXlK7ctRNPwe0gxUf4aAfJwhHKX1kT0CoKCxqB5A9wNPANA1llXmFeYmSotxlB24IEKw+TpFrUZdUJBKpPP/883iQUtuF13PPPafYQqA8cuCbQA2J7vJ6L2WY13IAPCI5xaTI2WoxMvK9Rf4wMk+Zo9xl+SzzhWZZkpImGFk57i+T8qCnLa9MBTSpz4GJNzCdK2sFc8XsqO9bjSaThKLiTapS9sorr6CTOqmTOqmTOqmTOqmTOqmTOqmTOule0v8CYY1H9SygwXoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDg6MjE6MDIrMDA6MDCBqYFyAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA4OjIxOjAyKzAwOjAw8PQ5zgAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiFlagStBarthelemy.displayName = 'EmojiFlagStBarthelemy'
EmojiFlagStBarthelemy.defaultProps = {}

export default EmojiFlagStBarthelemy

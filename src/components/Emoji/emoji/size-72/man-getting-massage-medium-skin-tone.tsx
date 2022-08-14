import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiManGettingMassageMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-man-getting-massage-medium-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFgI39zJ2OQAAAAZiS0dEAP8A/wD/oL2nkwAAHfhJREFUeNrNXAmUXXV5/+729nXmzZZJZjKTZLICSSBs0QRRahUUhXL0UGxVPK1Hpaf0qAVcOFVrFXdF7SlYFBBP1XJo69FiUcISgcgWIJCFJCSzZPbl7Xf99/u+/73vvZlMzMIk+uDmznvvLv//7/8tv2+5T4FTeP3Ley8Fx3Uz7c3Z/+poa9mSziRBM3SwTAvKxQpMTc/A4Mg4DExM3rFrcPgjPbkm585tL8FCva7fug5i4RDYrntdeyZ9V1dbi97R0QKJZBx0HEe5VIbp8SkYm5juL1XNt6mKuuvGex88pXupp3KSkDtd07SQEdIRHAPwb1BVvJwiv/SEwAl4YnBiUpQQuIV8TZVKvLdsR7ieh/dV+N600Th0XQdVU0FRlTB+F/PAO+V76adykqEjGIqCi6WFDQRHx/egSGQU+k+RG75CqWjE/xPgnhuvoGOVIyMTRqFYTHmu14JA5jzPS7uuF/KEB0Ki7+HEqpqqFfHkKTx/LBqJTK/fcJa9d9du8eT+cZIeWihaYIXAIJAUAgn/JikyCCRVjbtCtMwUymcWoJBugKu6SVypFA2GBuV5gieH/xJ4vJqIS8rQdPWivlZtVUeibf/B/rMRkHPxEmepmrYcJa9FV5QUnhZHIPRZQqooFophFcEreJ47UTHNA9u379iF3z2/rNl4sa8j8tr2/WUdb6KS1PCiMFoSIB0l29C0CI6iM4uqd0YBioQNqFqiR9O1Vs2XHsGr79UHqdHiio7Nfe1vHZ2cuRQncakRifSGI+FEOBIFIxyG2sSUOQqM8OC/EbxgRAiRcV13iW3b681q9SqralbR1g3tGy39PqxBTEPR0WgxlLqa6SEDQmijDBRx/LzvxnsehC9ccwl8+mfbTj9An7lyM0Tx5qj/fagucZIeRkWQBEn90BggDSVN3RCL6PckUolUPJFQQgiKojBwfKxA+8Gbf16wn/ui62mRCERwo/VBqeq1TatXjEyLEKoSA832T6q2hp+FonR8iM5dfcs7L0qgShbPiASRUd727EvauSuXrUM9V6X0iIYN2B6QBEXC4UiurSkSjYbBQ5vhWJYEoQFMmAPKsUAKXixxCAZKB4TDYSUiJUU6iNox+D1+jtJK4+iJhIxm/P7MAESr2dnSlMAbLtcNjaUnAEe6N8GTCJHxVjV2/apw0UZ5EhioOToQIGa7RqXuIvnYxvfzAIUXhRiCEEYwNI3XivGm01SS4DA5EL0Vx9GJQB06IwCFyOYII2Foagu7U984BivPq4s2IEYqEQohJ6kCOl5UJXEMyuAjE6hZgEjjbl4VVHgBUok4SwqpWd0WSptE40MzlESJ7jDo+zMBEIlyNBLKop5nCQjSd2kg3RoPodVMoufIpVMwPIku2XIaZiwa5z+vWjXaJOFLZX0ffKdBJpWGTDoJRDUUX8V4IYLFIpevoxtV1BxTkTMBEBlfXO8m1PskDUzFG5PLURkYlBXDY8AIvA4vB6VqFSrVPJ7nzQJiPlsz93tpriQoXoOdIxuTiCWgozUH8UQMNMnLfNUNjsExKbRgKjm6bDIWgU9ecQHc9ounTr8NQs+TRAMd0gLjKKBGDgNXS1smm4Jupx0OHHbANAt4tluXhnnsi5AunvcBOOCDQzbM88FJJ9PQtXgxNDdncUEMCQ4hwnxBkeOB+ljwlXKnS7B8cfsZUDEUW6EoYVw1Jmi0SlLvaSKenCAjIJjNtrQ08QQGh0egWJoB2zblcTBHmhRllvo1ekamzKoOceRPTZlm6GhrhyyCTzbGh1NaMk/iI3mV9HYEHN6vU2TIpTj26QeIbghCkwsmhRpDBnbjrr9XheqLuccr2dSUgWgsCvmZAmCIAeVKGSpmBUwLwfIcPm6uyklpNCBshCERT6C9SUEKt3g8xsDQPS3XkuEF2T7d48VS0TYpGoGjSLCAAHI2HxmdXobmaPdpB8iXlDDu1Zp9cJDj2AiQ4yBIbk09HHxPIQhNgFwuqURTcwaPdaBUrsDExBSMTE7gMRU8Rsz2XBCCdCIDLXhOOpUgzsPXNKsmFKwiSqIUhnBI8h3iQmSLCDxaNg35WuDzMVTpxbG809CM3Z991znwuQd2nh6Avvfht0K1YoPj2u2O44aYBeNKEhAODti2bKjSBEplyCMAFn5GUkVRGYUnxISZ2OFESAJoxcuWy8c1J8O1+9iOB4WqA5mkgqC7MJMvguvlUeLw+sirTCScyOQBA1EgJp1BV59FEKPEnqNhVq+wqjA+ZLfwPMVx3XdUrModCPLUrrs/CWv/6rbTIUECEhkRKkzDetcPE1xWLZdXlKTitcER2DMwCOP5GQZPqoqGoKC6hEhlDAg4SQUnOpnPQ0c2Am5Mr4UKJCmj09MwOlOERDTKau3gvegeJm4EqI3mxPWktyLb1NPRBss62qEJbRN5V5JYeS2Q43PcteiB19m28xhJ8GmRIFYbC3I4v41B9I5LhKvsoehb0D88Bs/sP4iBrMV8xLYtlC5bGnFcVQFKzYpSKGKgrUhGULIQrwqeTw5AUyQjbktFYKxQhul8hcEJYjdUF/ZovDCeYBWuVkoosSW8lwvnYPyVQm4k7aXkRg4D5GTDIf08vNBj133467DzB/8A51z/9YW3QZ5QevEmbUJ4DR7HY7XaMzCE4NjMoMmGRHBlPRfVD40xBuG8+jQ5lT2Wyp4J7T2e47DHowg8bMjgM4HGuLUpDSSprg8Qu3rcLASCVK1YNmG6WEauZYFtluHVoSFY0paD1tbmGpUg/4bgkAQRmBvQnukvPHGH88LOV04IpBMG6N9uuBxtjEX37HI9N8UABV4MBz2RL8BEoYgxmDSScbQHTThJQ9P5ewKnVKlAvlTkfRVBK5s2T24cVYn4FdkmOj8kQwROxGmULfTvw+qC1yKJIGkx0TFUcEFoqXTdYMkdnpqG5a5b84Rsh1jimEctsxwnBhvXFQABokseD6QTlyCcQLlQgGgisdh1Hb0WdLK3cmFiJo8D91BdNGhOJ2B11yJoQVEnHKsIQrlqsZGlyVk8OYsnVDZJuky2K46vPmRYKxbuEUDFj84DIsr0Aii9G4I42q1kUjJ4C69bJptWKPH9Av4UsHBJNkUzOof01avekr/1H/9WWXAb9Iv7noSrrn9TigCp5UZJ5HFgM6hiNHii9GuXLobO1iy7XRpFIhVlfmSbCA6CZNtsNBlQWlnHtyk1W9MYZkBD7NYQ1zbGazT56XIZbFwkMvwkoR6qFTBJFIEhoGOj+DaxasXShTfSlMvZhlf/5ge2GmQooRYOoPqwqlQ5TutGG9CRS/vZQgiS5xQ5QjhOx0fRuwl285I7eezKXR8sXxXYyAeMOkiTSLUBaexrxFLGLBkzBhWUQqIXpUqVpZruywTW8wJ5D1GW0vNjteOknk4OIFQr/LdUM5S8uR6vsHS9DkpPFDpzWUnWCJOAzQZpVcr2UXI9JAcXDkD2fECkGvjvYRYwdRGqx3G1nBsen0VAplFySJLJgLMzALUervhnUtSiy1SvECeA0AkDJJhzJOCr79vsBnYiiL/IS5DLbckmIBWPSjDUhuqG79258qAEJk1+2JiPFo3Jstp7cVTiUYh6itdzJaC6p6HkZtCTjfCCzQGm5k9wzxb8rA98bWFVjG7295csZqLLcRZHy+glHMEEjjxNcyoOoZDup0UpN6zWVI1ApT2vHn7n+p6mlh2UmDaoTR0MrpT4gSerI1MFeV3XkU6CFiqTjCOxDLMzoAXUOGmm+fEje0Mbr2GKk7C7J65iqELNuVYia6bnh000UYLKQh5DnCyViMkinp/+HBmbgsGxCTgyNgl59C4k4MlYDJZ1dcDavm4/Gm+EY77cKnCoMjQyDi/uPghjU3k29BGMv1owCF6EnGcRqnUUYzUKZ0jNSaKJVFLiTvNZu2/uTQSoop4WgHDFOYoWYnqWB8GBlDD+IhWLURUBBzSNfOhX25+D3a8NcdykKoKlQ/Et444X9sL7r34LrFvZwxJxvCQ9xXoP/Pp3sK9/uJacJ1tFC6VgGJPD8OLNm9bBWcu7ZUmqIiVI4QynWpNEvHsVpajiCrHwAIHnBaowQWqGNzKCiJ28BqlONERJchW2P78HHn52DySjlMMxIIWuP46iT2SQeBCpZwxXHOZJcRyVYRSyCNCMIOTLVWbaNFMTpTZfqkChYsH+wTGYKjwNvZ1tXJIqFKsySKaKq6LWnApeZzQeixbK6HEXHKBP/ORJ+PK1F5Iej+AqllBSMjRSiuDLKEE08BACRCu7qqcTJ1OGtqYULO9qxxVOQwwBIvWjlSWbQFE9TWI+YObLg1/1529g1ZIVVIXVaDpfgoHhcXj18DDanyREKe2BNofJqG1LO0lVX9ItNBHIs/rPu2CT9fQzpynd4fuUQ5qiTeqqliE955iIOJAuk/UuGssV3R2wsmeRb4sUaa/8TB97MlDqVZCgpq8cyznUc+GhmO57T+DFQGmAxe0tsOmsPhmGoLrScWXqMkGppntoqsbZBKIhVdvd/d4bvuV84Za/PD3dHaphINkLDVuu96Igz4AAkbgWcTCUytBUpWYfOGZituyHD0HtvoEFHwucelih1GrujUn94Hi6bkAxpDQqPI4KAjRTKLH6B2lqHM+0p+k7rnxzH1z/xR8vPED3f/JaWN/RA925rlXhUFSTLtaFIhEzFH2yM/XEeWMBcHbTzHzgHAWIMqtDZK5TawCpnqQPviRHQW/Hp2agkC+yNyOIQ6Gw2Z7K9YaMVPKGt25ceICe23cYHt1zoBel4ge5bPYKRSgYYphoHIscKDalErMnpAQREBwlOaIBt+PZn6OZ0R/oWMJdlDOWOoxgVD8yOg5mxSQWBelEsm1pR+vtYUP760vXr4EPbl23sABxUOm4vWiQqWkBKqhao+OTcGRiitMTTSfYYhKAVa+W/gEPdpzrzDrFZ84kQS2ZJEf1R3B8lKcikpaMxylvHbEdb9P7v3avuuBGuirzy1a+WHEoSicRNlHHB8anYGl7DhlshAetq+rcqvs8k5JhuXwv/I6P+cEJgkoxjyQ1hiKcBCEHgDNajU6CCOXQ5DTHdAW0kYtbm5hho82qruxqErqmLrAEkdH13IlyxczHUYwPjo7CzgOvQQL/XrN4EdN6GuyBI+MwOl3kiYQ4AUb5aNVntXISnBjzk2HzVVTnq+bSdTS/k4w24lQhP8FG5JTs4F7kQ/myCR3NGTh3xVI23s8fPASHkc2nY3EolcmzwZHmZFLQHBZUgmiQOPSRqu1MGJq2JI7e4unhUVjR0QZ0M/JSBNLoVBEe2L6LJ9rVlsXBpiCXiSNhDHEemj6fLFTg1cFx/uwdm9fweXONd1CD290/Bg8/9yosW9QMnS1pJqM0ceI1EzMlGMdt/+AEIPuDzlwaLj9/NYdA3W3NoKGdvPs3B1mq45EIDE1MY1zrHcggJ2tBbragAKXiEZLiPN7hYKFUXb84l0OXGgHbz+0EKYuL1nTD+uWd8PKhEXhy92H4/Z4BdsdVn+RFwwbbiZVLWuBCPFZWZkUNmMZmBWp/WYQAdyPQv9t1iAGhFKtlu0hMNZYiGtcGvN+mvsXQhraH80yOHA9dMY22pxMliuI55EczSBYPUsbh5q/eCLfc95uFA4gKc7fc91vrc9ds3UOxF4UKq7s7ecLkxaJ+NpAGR4PftGoJb5xeRVtVKJtM8khq0okogmT4xj9IXomj/JLg/p8QvP3C1XDZpj6+Rr5U5boZnU+twAZ1cCBQlKUkR1Kr5yNAlLHsbMnComyG40W0o+PRSGggTPmqRVcsrARRK+8X3/MmmuQrpk0NvkIjtSNR9ysGfuMBV4L4MyUo7xhhXmk16EYDYClQVWVWfmc+Ok3HE8i0p1RGMhqW9/BLPpzyxWs19h8JnzhWqexEsR9etogA4bgPIYSjJ0WOT/TAf/7Px3lFEJi9tutOEYOllSPvxvkXP1UK80qCYElxgnRqkEz3J0Krb/kSINmxizFeIBF1ahBIRXCcaHRvUM8y0ud0jSIn72V9niQI/9x1yfrV5ZNppjqpUEPhXmRlP07ykO1KCaE92QXWe1c0MMPZ2cF6Dns2q3ZslICKw5nBRoZJTVfyc2+eBqvGZFq9L41zPp7MMlZNmysmwX1wIR387plfPfGCWJJrOj0AJRIRePvbzxvHPx+mFachEUAUHHLM5XoNXWGzc8pzU6aBRFQKJthV289JN0gCeaqSBZbpNFyjfsBR6Vi+oC+tjsclpQqCRCOQZSbnkKqqT5CafuTOX5x4P9TJAPQgutsYiq0rxGS+Urm0bFlNDg4oGgpBNh6DCLrgoOvdL2jVOu/rJE+pB5AoPUNDk1AsVsDAiBtIDamZoYqRdwnDmOkSp3DDUePovPUstaqDQ9JjITBUjByemWFVw/Hizv1+MhZ5ABdU7Nh/5PSlO8aLJcrUPStc93oc2Pm4/U3ZrK6gCDrpREHjRJUS1Ge4Il/Ld9RWvx6hUxVi3+Aw5NJJyHAlVqYmpvBzIqfnZ2Pzq5Yf0NW60kSgXh6fT0YZUaEc9J0Vy3oKr/s/w1N590ePvXx6+4PufVyWbK/bvOrRpkTi8bF8fnnZtFdwfRwHZoSQUHpUCwu8mg+UAg0twBIkArINyd2uQ4Pw9P5DDI7GLX2CWfPZ3YshGg3NCSkauJJsFqiD4wNE9ofqY67whvHGt+NRL9/16K4z08TZGF2PFwoertBTGIJ8qFCtaiRFpBJcUVVFkHGvWVNlFkpywi0tKUDPAq8cGsIQJc9Sk8S4rre9BXq72yCE6jVv4OrbHU/UVYucBBUQUP0Bx0Nx2D4Mbw4LIU51mqcO0D3bdwNKEQ3+KXrqCd1oF0kRpz2NQM0Cr4YqRSutQoPqSaA0JJUdnVloRaCoQkthBMVXZHdUQz2G7ZlbZKyrV4Wlpxrwn21IYouGqp4yQKd+ph83IVnch4PdRo0DlHqlFCzXqVwhGWMw+DkVVJ6mv+KVisWekDwi1beIeWNQDNUyOgTyll49nTGrdu/V3TrbHrwWZTdpw9GNGLr+v7GQ8XqmeOoSRC8KG5D6oyGE/0Au9O5CpZpMoXpQ0opyRtRMqZL0CL+U7JejKap+6KlXYGSyIB/4AjFvnVzxmw/o8aaLz+6FNRhzBeEEg+MGe49dO3WQUKWDFgtfD2UT0RfIYH/3kV2nPEft9QD09IER2LC0lQzrEVz9DTj/VdQ8xRUO7qGu9y8rDUyXjDGVgQbGZ2D34RE4ODwJ/aPT+H6aP6PtyCT1G5W5lW7jqm5Y3buo/sgDCWYjOLZsoJgqlGAsX0AbVJ3CQz9VrJj7rr5gI/x4+054Pbb2db+uvXglXegtCNRPOrLpHAWHuXQCYhh/UXeyqssOj8DuyEhb5nUomTU8mYcZ5EKuV0/KY1AJbdkkX0fneppX41aB9HAxACWHyGS+WOYE2ZGpGYob78RF+BiCaf7gkZf+eCpWi/Tl86qPWLZ992SxdGM0ZCjhwJsFzQqa4hffpURxXGW6EEYh7mlpBq1d5WOCMpHnyrYYB0mjS+RTV6UE+akVdukIDsVs1N9IrXjTyJ3Qfu3FoPjb6FnNHz768uuem7YQAO08PAZrO7NUutyFK30eDn4pt9TRsxt+00E9zhK1lhgGjVIevhQQA+a95bCt4SZxXUpgEKVDg/2h8wgckr4JJLBILgu269307GsD/7emsx2efHXoTwMgep27tI3yvQWc+F7H87Yin2liL0f1cT/kmK3VkhCR6hEAuqGyxJHbDzYpUVDrphW+sSeAqPmqUjHZKE+g7UGAbIy3voW277tdzVn39l8/uyDzWjCAnkcpOqe7laSmHwGiaH8LrmZK5bYTCZI6n8kTs2tdQTtRPWj1wfGBIcmR4FjMlsfzRTLMHvKwu3BBbkUQS3c8/MJCTWvhAKLXi/3jsHZxM5RtZ6+uKoeRrF2MkXRKNDSGqcFf8zZONaihD07Qbeb5rpzCmVJFtv+SxxqbKTholH+EwNxMXfSnGlKcEYACkM5F148qRkHbXsd1zjUdO2f7SS4InqsX9UhcNAadDaQyKFnTsyCUVKMYi5Lzk8UihyXjBaSmtvOveL1P4zax0OCcFoACkC7fkIbvP7R375q++/aWHX2zZZay1Ppr+Q2bQVo06HWsNXAGfzt1ialyk6jJkT+p1AiCM1MuD3iO87mE7n0FiejMHY+8fDqmsjA8aO7rpu/+EL700SHY/IHcxpmR4U8lCrsuazd3JpPI+il3RMl2YtxxjNsi9FyFrnNfUfD8uwLyIRQCyuSuDJkdRAKIwFRg0st6M5kN97oXXXub0dLZ/55lZuHlMVd87Zq+P12AbvrlGGzqiqv3bB9oGi6YfcX9e8/1Drz0wdbyc+ub7X2oJlWfM8mCH7FtAicSdNYTJdC0Wlc9RfUUm3HO2weJOuvp8xmRhkOhC8xy94UjSlfv/mjYeCYZUZ9YFCnv3NDu9B8ZHrNuv+Ev/rgAVb6RhMhYAe5eeUfov0sbc4NF7eyJorW1ZLpbrKrZF9n/UtPy4nb17Mir3IZSwUla9MyEKysU/EwXUQC/Sqo2tLp4vj3yas+q+ryJ2oipSoLnjHtZ2AlvgPKKC0A0tRAHLYc1GIgZ8EQyrD3UnlKfumZF6fC1f7bFLDx6KyS3fO7MAHThVTdBtDAYGlx++WI3FLvANuJbXC16gWl7yx1PJJDXKFphGpJ7d8Bl6WegJ0bsVqoKRelkg/jhElc+c+E2tBQHuSLFD1Q1/ycu6HmPoFwtJU0FDw/67eRaOJw9H7SVa2oJfE/SBjNiqIcTUH5MHTv8U/XQvh3v+/U/Tz+zbK0Qyqtgx7Lw851Hjt21dbKhxmd6N8Dn3/0QLH/+i5n+9LqL7PYtV7pGdKtQ9W5VqFHFEVx/jyiy9dcrEl+h4jzFUgpULf8BFKpi+A+jSKBkg5XT0GEf/DBBwMRrwOgy20h8it6XcejOFKV4HbRrGgPDjVTsBUW4ansryiK0Qk30XKX2dTzzjd4L71eN0C9zdv6w5QrvnxrAufVUJWgjLIbn9/TDsr/7dHO5bdXbnETuOhGJX6hqelrXiCUrvorIwDP41RevUoLy0zugyR6EK3qOwPK4yWUhTxbc2aU7vgQ5DR4syBPJ6yjyMXNNShFzce4eUcDBzx8eboanRjohsm49JHp6fMA9fgqRanCeX1HhmE9WOhwqeuLHP8Xx/iydCO8rI4r9X7ro5FXse7h99tq7oHVsf6TQufoyL5n7KETib9QNPcYD5t/mCGxHoA5KLYdDf5nDQ1DY9RLEnQnYvGgczmsuQELzZKsLNTGwOnictqgVAqGuXgxS0M3h554dPL6/pMOjQ1nYXeiAcE8f5Nauoki4BgR7v7ok+Y9P8Y89IYC8RwzFPvzqLrz2fR+/es3AT7YdhOdu3nhiAF2K22/3Cui67edLvWjqRiUaf58RMrIk1gQKeaHgGS6l4VGCxl5C8N20NTUBhd2vgDs1Bl3JPJzfMgGrMhZkY/I6ZKqDRDuXrjk2A99gB5UQgcxcQH9BhefGkvDieAbyRgvEl6+AbPcSBnFuvU0ENMHvleTqLT8lXQOJvrPxmOdw3N8Ja+r9eEp54MsX/WGAlnzsQXDyRcXIprYqkdjnUWIuDuNMAnA0+aNJNVd8vA4wftTFqkJpcAiKA4OglSahVZ+GpRkTlmQcaI1UIWkItCb04ImH9oV+0ERFSVGg4ukwVhJwpBSFgzNhGCyiydXSEOpYBKneXoikkjK6V2q/znOMvL6UJJIusnkWZQ4cz3cSDGIBv/933H8JrzM89c03zg9Q1yceBbdUVPVM9kpUoa8gT1lGXRqGNtsFn8xLNFRD6WnF8uQUVEdHUaImQa0UwPBMMBQbQrihyUWAXPROGlieAVUlxntHj4CeSkO0pRniba0QTia55/BkKxUiAMmV/Mq0pUSRbcTPUcjE/ah7H8e5HsYPYPLbW+oArbjhflAvfzfYj++4Em3M9xCYRVFD89vpYFY73KwK1bx55PqTS3P/5mc7aKCUoC+VwC6XwaG6Pj1Z6FhS5dClK8Ssw2EwolEIxaP8qLfKvzoTSAQc82dzjtspJ6SDMB3pSS1HsERJugE/x7cfUzxvxFjbByMfagP9khWrYHxoHJTvf6cbetbdbEQji8JoDHVPNDx9czzLPvuHOFSZhq99w+lV/1cQ6P8QPakTT4HAbba8KQ2GusGuIE0QplsDW224NjTc63jSzMGn8KstlJCjthrePH7UAj97l247O4rbnviqMjXNp/w/R3nhMK51DqMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMjI6MDI6NDgrMDA6MDBnkeEeAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDIyOjAyOjQ4KzAwOjAwFsxZogAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiManGettingMassageMediumSkinTone.displayName =
  'EmojiManGettingMassageMediumSkinTone'
EmojiManGettingMassageMediumSkinTone.defaultProps = {}

export default EmojiManGettingMassageMediumSkinTone

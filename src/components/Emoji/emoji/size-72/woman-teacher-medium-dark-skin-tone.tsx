import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiWomanTeacherMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-woman-teacher-medium-dark-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdAysTLSYL/QAAAAZiS0dEAP8A/wD/oL2nkwAAItlJREFUeNrtnGmsZelVnp9v2MM55863qququ3oeimq726Y9druxm8TgGIyDE0wMwQoKECCyCBAERAo/EiU/+AOI2CCFQQTiyAaZgE0w2LEBT7Lx1MZtu+dyTV3zne/Zwzes/Pj23ufcbqTYSkcCxJFO1b1Vt+7de+213vWud71fwd+//v7196//jy/1N+EiTtxwyORZltnM6txafAjEGCUzNpjM+FGRxQ9/9tG/2wHKgUaEh178DaU15lCR57caY25VSt1mjTlurV3JrM2VUqr1nrZtvfN+KrBRWHPKGPOEMforeZadm059/W3ffpwf+Ol3/90I0Le+7B5EZL0sizePy/K1mc1O5ll2fZHnE2tNllmLNQatNQA+hPR2HhcC3ntx3lUhhIso/lIp9YeZtR/c3t69tn5olV/7/T/92xmgB++9i6VxuXZla++eIs/fetvx6//F2sqyzTOLQqG1xmiNMRql0qWICCLpdxBiFHwINK2jcS2tc7TO1SLyCa3VL2ZWfyCE2P7WH/3Z354A/dCbXsehQ2vqmWcuPrCxtf3vz1y8+qo8yxZeds9JtbywgNEaFGiVgqOVOnglQgoSMgQsxogLHuc8Vd2wX1U47zeV5jeMUr/go1wY54Zff++Hn9d7Mc93cN72lu9gbW3FXLp05S0ivL318WWnzl8sYhR1eHWF8ajsgqLRWs09JcXsM4VS6W20HgJpjUnvriSDyKh1/pUhxLvzPPv8tPJX73/RXXzu0af/ZgboJ7//u/kn3/MW9bG/+Oj3SpRfWllaumFvf8qTZy/gQ6DMcxYnY4wxs8wQIUqfKYIgf016p2BppTDGYLTB2FSeIijnw50xxhfnuflc2/qLLzl5Bw8/fupvVoB+5Lu+jYsXL/HIF77wLQj/ZXVp+WiRZ2zt7vLVC5fwIRJjYFTkKKW64ERijENw4txbRIhduFSquhQqpdBaJVDvylNEcM7fJBJfmlnzmaZuLv7eb/887/jN9/w/35d99GPvp6mrImuv3nH0uuVSoihFTI9NZo9Rad0XgVJKI0QkRkmfK/LMynve/4lDH/zo5//T6tLS8cm4pGkdRmtya5k2DZu7+5y9eIUQI5PRiLLIybOMzBiMMVijUV3paTXLmqjTn6Wy64pRKTJrGZUF6TKEqm5eGuFXX//aV/7Hmxayy1ufeZcSif1NdHFWKIXqQi/S/VtAUIoYkfMXNuvRsTufKspRbbP2MiY2t15++nPvbJ8pji0tTUSlewalno3oc1mvDpSCC5EL58/n43K0PBmP0tXECAJ5Zpk2LSFGrmxuURYZzgfyOiPPMoo8I7OGzNqEOd3bdNnSdzutU8aoLoCQgD7PM0axRASatn3FV0+deddXv5RXi2WWAjE8aBEE1YVj+EW6X0SEzc1tdD66tHjjjW+RGL5stQ6YTOVFYY8++fS564IIi5MR+q8JkB7+SD0rQIpTV/Z54uw2a8urB7iMIB24akSgdZ7L17YwxhBjpHGOurVDgKy1WK1RWmO64OgOrI3paIE2B7qfAqwx5JklxsgTZ64svv/jYfEFxyfooTy71kgqb5jRCUHwUdjbq1hbmnD7iVURVBYFrGtblAQFSk0mY/7q8TN86exVdGZTl1GzjtIxlTkYTa/MWLyMGY2XMVoTfMB5T+NaYowDZoyswkeYNi1XN7a4bn2VLMtonMOHgPMBY9yQQX1g+o+17gNlsEPATMIhpOt2htZ5Hjm9xfkr19hv9gfM63lWClbCrhgjIUTwjgdO3swtx6/Dhah8CESlsKT8UiKitFZoa/nA6Q1kYYLNTHexpkttTZQEqn0maWO43gh3LmZYa2hci/ee1nla1+JDABGMMUwyKLRwtRF2qxq7tcOhtWWszQgxEqKgPAMFGDrXUHaqC1SfSX37110QpLs2RdU69qLmydbi1Azo+6YQY/pa7z1t7VhuK77lvqL/exW7UrQxBhSxi5OgUCytLZGvr5IVOR0KY7pRoP9B2hiiRApRHNt3GK2om4YYYjdsBkKMOO9TN9Ca0kJBZD0XNp2wvV+hteLw2irGWpwPRBEUccaRlBqyZ/5jrXpcUkOwlFJEiV15Ryxw2/oa1wqLNqnJhBgQicQohBCIwdM2jmJrMwU4dhWiUvXYrmo6xEkXYXNLVuaMJxOUVrgQyLNsAMUoEa01UYTVqUO3niaC8z6lsAioFMi6bQFFbhRjC4iiBNYQtn1ga2+KiHBkfY08y2hah0gkRDU8DIVC6e53xdDh+q6WgtXDQMokHwJVHVguc5aWJtQGjNJDq1FK473DtS1K19h9O7D3oR4RLM8mZ4ohpY2x2Myigk+jQVduRoHRBuUc+d4uznkkxqG7pKetiSEyrRoEYSFXlAYEQ2bA+IAmsus923tTQogcPbTGeDSibt3QulWHehJ73gGhbxZzDWqWcQxBihLZ29plsrqILC9gbZ8PQ+9CRDDOo7QeHocMzVphU98TDiBvB3qR2GFO4hJK65SqKvGicQWxqokhAAYtCmUMqJTOddsyrRoUsJwpMtMFD8itxpqAaT37zrM/nXLuUuDI+gpLS0uEKLTOE2X+ifYzGumah+csBM+sX3XdSSmQ2DDZ2qNYWUKMQaHw6YsHXEt4KsxFL2Wj1l0GzcVHAK0N1mSzVO7qu69zrRJHsXtT2tZ1mKS7r03/BgXbu/vUzjGxqbzyTFNYg9WpqzQ+MM0MZevJG89eU3H+sme/bjiyvsbiZETdepxzKVA9exUO8mvpPus+nWfnooXp1i6TaU2VWbSCGDusU4oyL1FBEfICUYCawYOIYKXjx2pu+DFGk2UZxtjZTNJFX2IEo8laD7tTfAhYa1KaqxkDruqGa9u7gLCcC7k1jDLLKDcUVmOURhAaF9lrHJPasVs7duqWnc1Nqqrm0NoK66urjMuCqmlo+1JWfbtOpUTXwfpONj+aRBGmVc14cxuzOAHbPWylMNqSG0t0kaA0c3k0GzUS/sgQt16nAXDeYa1Fa921xoBSGpGI3avwVTM8iSHTtCbGyMWrG+zXDcsZTIwiM5oyM4xzyyiz5FnXdaKw7HJWGsfWtGVSOfZqx56ruHypYXN7lyOH1lhdXSEKVHWbMqrLkh57JCbMQVLnUyJDFjjvmW7skB1aQRYXUkCjEEOgCbFrT3PsWgY4wvbAl7q+QhQdJwkYUfgQ0kVojQshZVII6N0pVeuGJ9cDswIub2xxaWObQsNKJpS5ZaHI0nuUMcoNxqiO4MEoWMaFZZJbFkvHdtWyW3umrWfq9rlwvuLKtU0Or6+xurKEGpfUTYtznihxmCJ8CAQCMTIQ2141qPcr7OY2dWYG9pyZLAWpaVNlMI9r6RfbjX5zjSwxpBgjEjwajQ9CkZcopQgxMvIRmTa03mO0GjBBARvbu3z1mSuoGFgrFGVm2HPCud19XIgUmeH61TEvOr7MSpkRRQhRyDNNnhnKwrJQZux2JTdtPJULVH7KmbP7nHom47q1VdZXl5iMCkSEEJMqYLzGKXA+JKYxlwzOB+LOlLg8IXRDsccTvMN5h3nWhGC0RpROARLUgfILEtAS0QIiiSQmvmHQxjBqGpo6YUJmDc57tNbs7E356oXLeO84UiZMOr3VglKsTXIOFZogilPXplzZd7zpvhsYWU0QIfiItZHMaoo8leJimTFtPPuN4+rUcWpjG2sadqVld+sayhaMRyMWJ2PGZU5uNVrZNDwjOEksPrV8iFVD4SP7RhGCR6UeRZSIkYP6k/cBUXREUTGfQMSQ6tsaO2gydGxaYiDuTanqJvGfDhQ3d/e5vLkDMbCeRcbWgNbcdXjELWtjViYZ49KS5xalNdu1Tx3NagxCNBobUoDyYCiyQOEsk8Kz5DJGhWN1nJOp1P0qF9iuGza3ply9dg10kj5GRU6ZZ0nn7u9HBK0E1zoW20BYXGBaTQmhD2CClAOab9e57BxzVMxP6wIxClEJEgKSSfomrUOqmqpuaX3aOmzvV+xXDTEGVnIFWcGeMozzDGcLzlSKM9MGa1omhWW5tCyNM/Yaz1h0evIdJ7FGk4mQZ4bcBfaMpiFggkaLZddF9oPDqQxKxWIW0I2jcoGd/SkbO3tkRlPkWSfPGjJjUGR4H2BaY9ZXMMbgXQuSRg4VIzIvACeyh5VZsHo0GjSYlJoBY1Iqtt5R+ICrW+rW0fo0gdetowmRLM+ospKmbRjrhsxE3LTh1J7HLq8xGhX4KrC7vcmhEtYXxxhrWMxgKROWJwWZtdRNy24T2HaGnaqlqVtyFdmZNlx2mvHiAkVZsLW1S7WxzVJhyNAwGuHQuLal8SHRjWmLCCyNR+SZIVQ1uDbxNq8JwSPdPSf6EBFQWmtFwqAOaOZeg+QpodssxPSNUBiXAuRDoHWeqmmpnSdqg0LjpnusqpbbDy9SFBlnfMmbvu+NlM0OX/n0X1I3LTe99kGeOHWO1ek5xkXB5y9WfPnMFVaXl1hZWebM2bNMRiX3HlvghgXD2nUZpzcrll/4Eh44tsqVJ59g8+o1vuk1r6TOF/nz//VeDknNjpuyaSYEFFXjQITlyQgfIlXTkk0Ni1UNVY1aGJHnOUFr6qomdOJeX2MxRhEV0V3uiKCkp9wheJx3czUqHZMVdOtomhYfI9Om7ab1JBsE57DRc3ixZDTKebLJ+fGf+w9MlOP4LXfy6jd8F4984VEe/dAHeMs/fSPj21/CzeslL71xgaIsqfZ2aHc2aFzkyGLBN6znnLxxDfKc4w+8gYceepBCF7z1x36Gcxc2+dC7fpe7j6zxwz/1s2yrgvWRwYqnbVuC9zjv2djZB2AyKtBK4VsHVYNz3f2hyGyGRs0p4AmHY4hYNTfkzO8Thg2DHFQOVetpnaNpux/QkTItEWKgLBQr45zHrtW89Sd+nBfdfTfv+Hc/w60n7qJ2nioK0+3LbD76cf75D/8E7/vln2NS7nLD6gL3rE44tFTypdWSPa9ZWijJM0O1ehs/+qP/ml/8qbdx7sxFdnanXNvZYUFanvzEe/g3v/o+zp49ywfe+RsUypD5mgULvruP7f0py+MR+dgkbcp5YghJsolJNCPGA0xad21ez89gvTQZO0Q32ib63gUw1wZqlzCndbMtlpox5TK3iERuu+eF/OM3fgd7Ozu46Q4f+uMP8NH//WFEhMkKGC5w8sRdnHjgWzm3WXHjkuHE8VXuPL7OA3ceoswtPiq2m8Br3/Q9HF5fZevCZR794pd592/9Dm1VYUpYX99EYstbv/9fMjlyfZJgcsVSaQdwFYHdqsZ1SqdyDh27ra1vaV3bEU41BCLGSIgR3ZVQL63MFWGnzmk9K7O2xdVNkiPmRox+BiuNAm2ZZIZ/9MoXoDSsHj7MXbfexPEVKHJYXoJXvwJuOnE7C0urvOj+h7jmMm5azlldHJPnlqMrI9YXcq7stSweOsp9L7+fhaVV7jh5J9cvwdIYshweuh/uvOc2iska6+trvPLeExAD40wPGnj/EHsc8iEgzqM78ax1LiXEkCFdQuhuvaSU7uZgdWCsF1LqKQRtNMZaqN1AEPtWqDrVJhDJCLRiicpw+eFPcvrub+Tka76T7/mxt/GhX/9ZTHaV208oDt90ghMP/jDGWDa3dsjEc2ylJMtMp3FrblsveeTcNi+MkRyPtQVv/pG3Ea/+FSo+xfW3Ku6653qO3veTjBZW+Nyf/HcuPfUYRoTSGradECMY0wv7imnT4kNEXIAQCMRBAlBKEYchOIlrojU2Eb3nziBRIiEENBqlVepkrcO1Dh/iQSFfJRVLK9ASuFBFjl7d4jO/919ptq/ygtd8O0dv/m0uPfkxinHJjS94A4eO3s4XPvUX/PavvYMjecvSZHE2eAI3rRU8eSXjU198krVf+8+85nvfxt0vfYB/9Qvv4tTDf4yxLYdveYCFhSN8/Hd+nk/86R/x5MVtlmzEGo1vwwHQVd24Ma1bVn1AnMObVEqxn8NmqyBCjIgE7KAN9NNvF81B/e/zC42KQtv64Wt6/OkFpjbAoVLY2G/53EXNRnuV8+/8TT775x/glhe+hKUjN1NNNac/+EG+9OVf5gsP/xUL7RYnblqhKLIDMkORWV564wIfe3qbd77vz/j0F77CyRffxw233UmWHWNnY5OvfPY9nH/qMc5evMKZzRbrG4rC0ETwomba0Rx27E47gS8E6HV2pYnxYKIolQZ020mPz9mCGW26jarCmM6NIeC9P6gLp6UIoqEOSX44Xmqa6HnqSsAJmNNfxn7yK6AVQcAqYTHT3LJccOP1q6wujbFGP2fte3h5xEN3Kh6/sMNTZy7w8ON/0Al3Ch8izke0UowMrFnIFzJ228i09jReev31wE3XrUsQESIhAPGgAjToSEMGodLWp1/LdvmotUYbk2THLEttzwdiFOzchlORRhJB8EHYd8LaSHP9UsniKMN2Y4RSCm3SzWU2dbsit1hrhv368OTmXqsLJffdmtG0nqpJo00IQujmxU5fpXWRjb2WnbaiDoIXMGpOyKf3G0WqumWkZluQGNPE2dfMYKboZzE1iI0yqIf9msdYizGGPM9pfGr/1sytgVUfIAhR2G4jh32k9ZHMWpYXc8o8fQ9rzYEde7/IaxrH3rShLDLKwgKKEAJtGxiPczJryK1hYVx0XiHB+zAs/ZrWs7FTU7tAGyK7jpl1RqcAxc6MFVSgbloWlMIaS+v9c1ehAtYaRNmUQSg1WJYi0m00DFmRo43BGovRZpA7D+zJFZhuJy0i7LvAdhNZbNITH5eW3ArGpIzvgXj+VTeOUxd2mJQZK5McrRV7tWO/ctx54yrjcTHgXucxmG01uuyZ1p5p45l6oQrpIfYPEkBHIaStPM4HNJDlOcF7oJ0JPl2sfAjIsBdjBtSgKPISbeyw9snyDGMMxIQ96IObzxTjbh8Vhat1YKUM7NWOhVFGkRuMicSo0XoWpEGNVAofI4+c3WCUW7RSND5ww+q4W//wHHtev9ZxPlI3nt3GUfnAdpseVtbt8fvHEXWvYiTJuBcFtdIHVNb+I9UvDhVz5KiTzlrXkseUwlEimc0w1iZhSWmUkQP7cgWInoHbvgtcqwLLZVIEy8JijWBMRETPb3EAGI1yjq6OubbbsFW1KKU4vFBwbG1Ckac+Ml+SMXTlEoTWBfZrx27l2G2FfZ+yp9/AqAPGC4Xusih6n67fpP3fEEqZjRpog50t0RKd6oVu6fdNMdK4lkIlK5y1OolnwzrogHEiXXgULlWRldKzULaMiyTSm6DQKoLVB0ots5qj6wtIFK7tNmilWF8qOLQyQhudWH335TGkESB0XWxae7anLbutZ8OlfZ2dc4X0NKYH3kGg7+QQa5KdT2k93HP/oJEwgHQ/siASE0ArRfAeY02qx7ZGKcizbGi1WqvOEJB+uI5qmPyr1nFuz7NUtIzzFKAh2yRtP1qfOojzkd1pw3blmJQZSsF+47m2U7MwCpRdt0vZE7sWH6gax860ZbtquVpDGxVZt1IyZv7nJeIXu16tlYKQyqz1bs4s2rvbQIIgSjp3BwclV+89OIdRFu892hikt5/YhLbDE0KIuu8QkVxsmpBF2Gk9Z3Y9k7wlz0xytwJWBK0in3niMo9f2MFoaH3aToyLxF2nbRg2sJk13HvTGrcfW8KHSAhC0wR29ls29xsuVZFdn3DHDmbPGUDHKOg4a+dGa0LriN2G1bkW+yzJtV/j267C1Lwy7bzDdnwgRqFtmo4LJQrAAaKY5A6lZOBlMuczvLgfGGdtB5oKIafI0ox09/FVdivH6St7hO7f7DW9GySBd+0CNx0qOLxU4nzX1l1ge79lc6/hmb2WK3XCnd6ElSx9cwAtnVLYmRO0UsMOO92BnsGKzAwTCaRVv2+VOSNW6hC5zjtBG2IbKZCBV/TatdKknbzIMPVYEfLekBkjp7ZarE5BkQhxnDpbbjUPnjzKzYf3OHt1n7r13ZwHRUcmj66MOX5ogtYK5xPn2Z2m4JzZaTi/L2hjO65kyW1ywM4/wGd7sOddIP26XGt9YK16YC/GnA6S+EaaT6TftCrdaURqxqDVQbtiAjCN6IjthKhgIsFaaud57FqLj3DnGvgYGZcZZZ6e9PH1CUeWRuxUjqr1IN2ysczIszQnOR9pmsC0dmzsNzyxUfHMfsTaFOi8I5PWmoEgatU1kVkLRACjFVGTgD76AX/m/XNaq8SDRCJInJdDBtFed10txOTu0N1c1tf27MhAR+KMJHDTCms1uZhuSxtpQuSxqzX7LnLXesmajzS5pcwNWQfgy+Oc5XE2U10EWhdxLtC4QNV4Lu+3fOXKlM1GKLJUTqm0Zt7p3nmmVW8hPMijjNZEIEY/8Lc0e8VhdOklZivEud08g0lKzRHABHRh8Cv2T2agBN3bKDUjRB04ZjYOm8/ohNObDdemjtvXSo4v5iyNcsqsB9X5m+lGihip28BO1XJ2u+bxaw1thDJLjtjBfW/MAUueHniQeta1dhmvVRekOCOgXTXNqR59ic1RAGE2BavZGjbGgO99M6r3TR8MkEjCGaUVKiRjgjURa2IqtxARUey3kaev7LK5Y1gd5xxaKFgZFxRZAnK6ua52gZ3KcXWv5tpeS+0jPupk4NQ6ZU8XnPmDMT1NGThPrzrESOzCELpxgs5215O5XuUJYX6z+uw+L52DUWYjhFKaMMrwuw0mJNOV6g6lpI2JQjpRUnVZZKPBmoDVGt9dfJDEakubMuTqXsO1/Ybc6KFN0/muXcd5YvfUM6PQofdMpjKeWYNT1tguOIOZQs2gQHrXh9a0hUWUdPt7Yb5BzZHnGUjPzNQM/pskJ6TyUEoRcsvm6ojxbs0oKnKl0CT6HqOgYlKWooAmkUmjejtvZ7ZUEbQmM5Gs51ZKDYqvC3Go9UwrrDbEjui1QYZr04MDtjd1JnkjnedIrH/e4B1RRKVoNFSlpSrtsD2WDvRmZ0X6ghJs+omK+TbWp1wMAfEJnZKBQeHKjE2r2A6RHE1psmRy8B7lAypEdCQJUs7hiARlUFZRliUL+QSIjPcukiu6cpk3Z86WlyGksSWIEKLCaOHEXS9mp3ZIsw2xRawiWkswBmUNWIO3Nv2uwGtQxmLKAqcVTfRUTZVIoqT0l3lHWpSZ+gqJSavBeJ7kjqquidMaZfTM6Kg12pou4hGFppHAXkyO10BAW4W2CRu0UpTFOqtL17G6epylxWMU+RImX4X9czzxB7+Enm5T5hl573tUsyWvdLYYHyM+JhPU5PAN3PLtP4hMjoLfpZpeYmPjaS5dfoqtrUvJ1qtAqUQffNcclARyn9ZUVT3FuZmvKQbBOU/RjT2DdCaDwyzFIHbAGEPgjuUx44V88B320e3be+Je+oDlF+k4hx3BwvWsHXsBR2+4m9HCdUCBC5L2+I3n+LF1ile8hrOf/BNGXQcz3eA7+Pm7Vhs6ccyM17n/LT/IxYVbubwLo6UV1tZu4cgtL+eOZosL577Ipa9+Gr13HqsiSpvBDy0iWJt8kd4WhGBnbvvOy61IamVad/UFJliFASWiULJXNdx8ZJ1vfvndZJl9zrlEJV1rUzL3FwmwpVikXr6DS+VdbOojNDGndYHGpVOC3qcLcT4gGF73vT/EX44LLjz8EWimyXGmDx7NTHKLYuHm2/nGN3wfN7zwFZx/+Bo+pC6ThmxDXh7izpPfwr0v+CaOxLMc3f8SdvcsRD+QxHntfmaD7sihUkynNafOXKJuWmRuY2G1SevYra0ddrZ3WZiMefrMxUSaBor83ANug9G6mFDc/DL80VdRlddTR43rD+N2bvvQSSCh03Cci6wcOsLrfvAnOfPFV3P6cx9h95mncfs7SEjqns5yyuXDHD3xjdz54OtYOnIj+/vTLjjp+ygl6JjeIQYaPeJCcZLt8hbG6ouEp/8Ct3FmkDkGTWY2VQ3sOskvgZ3tiv1pxXqnVNjtacA19daZ8xsf9o7D9XZNiFGJyECXRdRcS+xrMsb80M03LZ/8ztvDTS9VXuWdThwSqIrgIzOQlT5QKSuMUhRFyd33fzPf8LIHqfd3qHa2cNUeSimK8QKTlUMUkwWiKGIMZMbgO1wKUVBxPkBgOihozIRw5AHU+BaqL79/d/rkJx6R4GqllBLmKJ5SzPyyCqWVSIhy7vzGlUMnm21tc+zZ/TWmuztn7NF7v395sVTeOfBBBQmoTr0TScQqOd6FuHcxHnn9T9/lykO/gi3vCCGRQB/TZsN7DjzpENKfh47XiMyWAiIRbSwLK+ssrh4+MDfFXsNB0DqJWvPfDyUo3QcK1PAWtBay5eMsPPADdvGl/+z342d/51fq6aZoW6J6TUint1IKFZOCaDIj29tTOX2ZdrJYfP2nnv/wcxtYo49s7U7/mwvxdWiL92mYTGfcYyoxH9ibtmxv71FVU7xzeB8ILnL7dTmvfcWN2Cybc3RxwEXy3BN8MJ1WvO/j59jcj5RlgbE6OcjynKwsWFocMSr6w3mazCqshhjc5XFZ/NjpbfPuO5Zr3vzgLV/7kcyvJzjv/eQpqgDaNd/mo/yDqvEoo1On6YQsHyJBhL2q5bGHP8n2uUcorIfgiMB9C0u8iqNkH3tqtt9XnUFdJTInHTElRqJWgx3HhsCrrk0JEVSlEaXAOdTp0zx2/QvZue9BssyiQuy4lMJrIITrilz+7U3j3Y80Tl/4us6sfj1fvNuAitcWGjN6s48mmzaeLLeJ6YZeTAfnhbOPfIorD/8+r3/dQ9x190nK8ZhRWbI6HrM0Gg3jwzAMd6ZwIfkAksQSkZjME5LsqBxX6XQhIhhrqOuWrbe/ne3HP81j99zfKZup/CJpA0sURlHuVUFe7SS++39+9DHe9E0nnt8APXXmCh9+bAet1MtaH+5XxuKCDE9LJOFFBJqtq1z4yP/grjuup7Cas08/xb3r6xxaWCDLMsTaYesZRdDdMYa+zvrGbLr5Z96Ck/iYwWhFADZGi9S33YF66vPQncGIknAIJQQfMFpTOylMkNffuOTfc63S/nnPoI88tsGDx/bVh84svNErWcl0GnJC8Ggzd9YKqHeusfPVx/nso5/lQ+97LyNjeMexYxTWEhDabmAV6I49drynO2+tRIbz6rEbMs1wVInEllEo59h76B/C7XegYhiIq3RSn3QOVmML2gDayyuvTrlBkNPPe4Ccj3z0bHFdE+QhZdKTt1lG2zbkOq2LVTfTedfiQqCZVlQxYrTG7exSaYVXarh53/GRXj0OKgVHP5vYzX2uO6tFMpQ6wsYG5i6Dji7NVcMOquu+IXanIwUf1Y27jdwtIqd/98+/wnc/dPL/et/6awnO7/3Zl5m6yLSVk1H0rckvJGRZ1tGAOMxsyZVGt8JO03WmFLlO598HIO40Jd19HLthdTjDpdWBI+Kq+y8qVKeJD9N8D+TaHJCOEZV2W7rXmISIGdeO+z51oWRr+rVV2dcUoGt7nsuVwUVeiNLLajizng71Jjfs7FlH7zAx0v9XBKYb+npMEUnyg+qPMimVNp/d90ijcDIcBCDO7jmRxq4UI6TSUqoXbA6UegghnTLssUxpXFT3v2x9o/TueQxQkcHLly/oKNzbt+U+IFlmh6MLvdjk2xYT48BYBxmjWw2hEuu1gO7wRncmldgf10YIMtOp+gVgr54PAo0PRDQEN5TWsJmJXZb3unk65n6iCeaG2snzF6CmDZyvFpdjlBcMAu+gOdthhTKsbUOLRtBdG+8xJQiEbkW0by07KmHStsCO1lwzBqdguxPJdHezBsEB9YBXswFUggetMAeWD6nsTdftehWwW3Fd7yM3V/55BOnaBUKU5ShxBZHky5LZOTNtTHfeKj1mDRqljdIWLQGtDaINvv9fQUSI5Yjt1rEgkcsCi5llUSm2vKfNckbVlLIbMIPRXDUW3TrGIsR+GtGG6GPn8keQGGYzaOJJw9ZlyFAxInLznvvahoj/A90G0HVC3vUjAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDAzOjQzOjEyKzAwOjAwRookMQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwMzo0MzoxMiswMDowMDfXnI0AAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

EmojiWomanTeacherMediumDarkSkinTone.displayName = 'EmojiWomanTeacherMediumDarkSkinTone'
EmojiWomanTeacherMediumDarkSkinTone.defaultProps = {}

export default EmojiWomanTeacherMediumDarkSkinTone

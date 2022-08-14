import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPostbox = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-postbox"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBigmVnNe9gAAAAZiS0dEAP8A/wD/oL2nkwAAEqZJREFUeNrtXGuMHFeVPreq+jEznqdf48R4PHZiJ0AcB4d4pZBEKxsJJBS0kVhEJBKiKAIk+LVZIWX/5ccKQVB+IKEohJV2A0REqxU/FhSJwC7KLoQkXhOvnRgHO2PPjGc848e8PN0z3VV3z1d9T+f0dfdMj12xtBYtXVVPVfWte797Ht8559YQ/eXzl8+1fMy1dlCxliz3E3Az1ppgdpYoDIn4fHpMEqIoIlpeJiqXa9+7uogWFmodBEHtvqWl2t+5XO23xtRaoVD7LfrB73Gto6N2rbOz1k+pVOsXv+3pwXe+idJmjLn+AC3/6EcU790b5l988SPm1KlPmPn5j9Pi4maeQJ4qlYBkUP7gZOIABd/lHn2/fMd1gCJHOaf7BSj6GbgeRQmDukTF4hQDeZSGhv6HHnlklA4fjs3Xv77muUZruXmRB1DgAS2dODGU++EPHzfj4w+ZINhOfX0d1Nsb8LE26CD4YLLtNH2/TFRafSlN43ctZZBADVKlQjQ/n9D0dIlOnhyhQ4f+je6//wW+cgbX1yJVbd85d/gwBXfdRck3vrGv8Morz+Smp+8zW7eGdNttRBs21FQBA8VkpfkA+MdmUuZLVKujliYBS1RWFgmq9+c/E73+esygvWYPHHjS/OAHh5I//pHCvXuzA8jyACYefpiCnTuHO3/2s3/uGh+/L9i+neiWW2p6LyogA24GCJoGQE+qmYr5EtPuqsvzMC7YKtipCxeIXn2VbJK8Vv3iFx+lU6fej378Ywra6LOtp85fvEjl/v5o+b77/rHvrbee7BgYMGbnTmI9bxR1HxAfHH2vnrQPXjNQmk1Gq+RKQAGkiQmyv/2treza9UzptdeeKs7OVoswCVnYoLPf/S6ZYvGWzpGRhxh1Y9ExdHlxsTlAzZqedKtz7ajZSpLjG3GMJ5+veUH2nKavzxDPwT799D+VSqXjmRnpi888Q92PPrqvY2FhG8Q24YcaNoSWdRxgWaxSENSM3ypgmFZS4o64bt2xpY1qZQqUSlgx8qxeUW9vzUYODJCdmtpWPX58X/Wll7IDKGEw4kplyFarObtuHRkGZCaO6fDUFCWTk3Vd1U0ma2Sy6rtpmK/3dxOpsO4eK9Ja414NQCROeqy7hoZzHaxen7jjDipCmhgkW6nklmdnt4dZuvl13JYWFnowUMsPwiAi9hQ33XQTwTwHanJG6b9xtqUOkExUQFHHlurUyvYIIIoWWO8ePK+TFzOH++H62ZkkoCkzM92bsgSoExxoeblg3QrFrNOd/LBd+JslKQWGzweyonxOG2UjqrWSx1rN5rQCSpyAqBSoBuyOtkMYjxsXFrS6uFjozBIgPCqJ41AAAiipJPEgYqwMnytVq3SGbdL5y5dpGSGBrCIkSVRJ1Eya2B2tXh4FaLArCnRRKXCeVFJ5wdinUh971o8wL1vHpgAezICCACA0HiPVFjU0WQIUaFfqqL91x5gHO82g/Cvbo/9kYKZhD5SIN9gf1QKtYm3wDm1zrPo7cWMyDADsynru84GZGXp4eJgGN226ImRJf58kbRPktgHijk1dgvhBGBAUCWvyOw5Qn2PpGZEB86fAoo6VLcPFXsdPwOM7wgu2/tw5eoS9FhxKXcUAkJtDkiVA1g84HUjk1Owcq9mYAgefv+IQ5LEvfIHeOn2aDr/9NsUcrQcATSTL0QKRMCsq5Rloq5+r1cxNdGD9ehrasoVe/vnPaZoJLcYwym0MHA0qJUxfxqy1Istg1Wo36h4Iqp5nXf8Uhxy7332X/ldJS5lB+9SuXfQ3Dz5IsyxdZR5wwKDk2NVGbEQBVgoYjCrsiMRxfLTCqRzx1NwpgRS45wPkIvMy2MSTo6P0yq9+larobu7jwMaNZMB9xAZp05C1BGlJEtuDBs+V50Hu27+f/oVBevXoUZpmIGI+38kTujQ6RgMsSd082HUMQsy/qfKqQkoAVJ5bCHAcGACsbti1hPEHv4VhTm0YXwtV+AJAv/rpT9PH33uPNjNjPshh0J0sWcRqRqxuMl7rvKttYvuyUTGtXm4lLQNi33knHdBeJmQJBsEDvsTSdPzcJFUYkBATZ1EHGBFfw2QrfL3MkgWgOtjz5PiadeCkqutAieGaIa2QPvShMwGORAKgz33mM/T5998nA7VC8u3SpTr3SYFxY/5Q8kHWZ7buYWDY+J7wgKqs/0apRImvTfHAti0sUCfSIZi0kxKAUWBQoC5LDNQ8rzLOd/HqA8AqnwOAAAVS1gF37ehCw5hEEqAymzeT4WcFJ082BsdKxawz0lfY1SwlSHTYqoeaJsFqhQGaPXOG5jgU6UJqxI+vuIU88S7YCe5nmQG5zNJ4mScJu9Lf38+RQaEWmznV0mRRgLGOpBq+P2F1tseOkYHaetREFrUp616N4rSbE6l7Gq1iWD35DnWA++dWxaRZqqaQsGKxbwBRAZlyIv4bMdMAT3JwcDAFZm5ujmaZPgA48Xot0x24DhXdt48Svi/h56UNhNa1+njdPDIFyHfzViRJxNc9XIACQBU+hqx6E7yiCQylytmYVvEWvCKD09fXl0oQgJlh0neBI/ISMgfWruRmiW6/nSw7BA5IG8BJm3i/tfKqtd5klaEWoOoPd0eAU+WW5wlO/ulPVGKWnbplzWVWirEQDLNN6u3tpY08Ydiss2fPpmrbOuXAqg7m/NGPptIjYwJQiRhqBXDmEmQVSWsASdRMgQVwYgfQ3MQEXWDDabwBtiu1JbZLM6xqACqPINSXGn3k6/aTn6ypkOe99FgzByjxwVLSQ570pNG+U7cIQSUb3THmR1YCWK9iYbXKynf3rEvsqs+x9K1nCtHd3X0FcbXKUNf7YKrB+pmqWV3tlZqttVoRrVkplfQYFyJIxJ2C4+IzDAxxUY6PY2yHKufPU76np3EFxTtJgksNHHanzKBu4TACkpO0sh/aI0Fitm4lywweOei0uqGlzEuqZSZBDcZZg6TVzLnQ2LWU3HFDJm+SCdwcNyu2QdmwRJrrA17rONut8wzoAAebIJmx84xiT1q1tE+EHuzN6mkZT71siyzCNQNkNXv1mtbx2KmYdaFIkX+HqsgkS1GqZnqwDiiRjnlWx3eYlYMt97GBPsehAozz3Px8GqIASAGr3jRIrs/krrvIMuls8F5iBkTYslYxnQwXe2F0xO1WJ3Y5IrkH6U7L7v4M26FdbGxzSGR5UTlUdZIJJcDYyioCyUlTvXxviUGdYYDP82TBtGGLxFjbZtQB49ixgwjk9PDhmpp5KrYWZ9EWQLGfqBKp8SoXiYuSZUUhQUhiYTrjHEiWx8Yod/PNDQOs8sRPnzpFi+ytdnKQ2cEqEscfrG+RQxKcg+rNsySNctQOgEABAFjgcuSS0E+BYluX3H03BYcONQIjkvuhEEVjrG+LfBsUKw8mEhahssADOs8ScunEiTQFKulWgHKUJQv37969OwXDqnCAlAqCC8GbQcI6mXXDRp1iYKGGwrZJVT7s/v1kUdjULPoqeNBaYjGj3bzxNhuI5MRe7IYVwIaHC8ymJ959l7az+w144FPsvkc4VruZJ7wJ7FekoIUbtkIGua8elhC0JagfM+3TIyNpRqCfVTOVKoAKwjg0RAHbNIvYzBFV204R8irdvG0gii6jSGrlEk0qMSCEG8gZYUy8kiMsQfewmoxNT9NFntjuW29NJ2SdVK3ET4y/hQbqx6p2E8duUNN5tm9TbMPwnD7mQT0AHVJ05EjdTiombz+cfJCqMtRVwYEEvU6UETeOB8EGFVA64vvG2X6cfP11Wsdk7s69e2sJMm87illlhRsCZycRhVyOigzIBm6L7AkvsjrPsWHvHx5O62LkFqBuGvi31SwBSppEwNpYp4ZcAFIeI3A2CCFHNwM0xZLz9u9/T8MsNRMjI1fEY2aF77oagvJOzjVMIFQN7L2fn1lllU7YSEsWMl1Y5eaTrAEi381ro9ikHBO4znNuQl18fxdzmTdffJH+6yc/aSzdCC1oUguTvsSboK/NfB/KOz38HcB3o28+Is0LSS26+4qukpqmS7wNWZkn7dMdiDqiVxIlYYJVaoABpPYHu9IcQL0uiERCXwfAEmI0y/bpWj/67EJxkFVzHcAACMg68ndkIkNVLdE1M1Ls2T3TZu7FrM7EyWqoFbfeigMcqFdObBC3CtSQJ1DwALWtck9e1RX9Qlp6uA8A1eE8JNQqdNdTNULSjM8FGngXzsi44w9BxSw1214itkelRo0r4KUqxucFEBlUGYl7FbTaFm7d3/WB/iA5kMaiI6Bii0Jt7B2JTVQeu753oEZPLGUuQU6lmhpq5YIFIDGaOT+fhBVXEmRXyl56IOWdqhadVApAIj2BA0m2vgQgiVq1VBSffWXVoW6VVyCP92hVCMSr+ADhvBPxZsx2JRWDrQErxzHvebFAeI6iCMJ97JX7jrKVoLqKedk4f+K+vQhbpFdxrepiopXA0Z/QAQSbk9OqpRbEKJBsCwlNnxMENlMeVK1NLtH2wvq1cw+cRAPk+YxA8SZqoWZ+DSxUKhVp/gMDrQyyZtu+fatTlCBIMgVoWQDS6dIWEXHD9hY3CZ8MBg50P7O3ElChkxzxWJogBm6fgGmSr7Z6z5H0GYZJJUuAyrXtLIldYSKkJEsDRMo26RauIEHNuFCowAmVCmv10oSyQXr8RH0UJUtZAlSpARRbVfi3TYBpZod8yZLzsWPQK1U5dZ+hB06ggDNNKEHLml4NoDjJGiDrOrWeW7feNjp/kIEXT5EyplZXa1dJWgWur6CJ1Oijaad8FQTVTCXoMreBQmE5aRFl25XSE16oUAfIZSBtG/21A4pplUPyzqe7covFynyWAOHNriSfLy0zf2AGbKI1ZORMk8BzNXCbSZBRnqoZOKvyOFc9gTbEUVRazLRw2NFBpXz+/EI+nyy76sFqMVQrl91gj5ps7my22XM1QNpNfiEdzPOIF6Po/FKWAG385jcpHho6dqm/f2pByjoqzUGrlHNXDCc8UmebhCZkrvnFyHRRsbiz3d1Tyzt2HMt9+cvZAXTH44/TriefPLZ4662/PpfPU9kHSUf7Ki9kW9T3m4FgmzQ/pUJtxm9+iTpxxczZMKTFrVt/vf6JJ44NPfZYdgB19PbSvx88WOq6//7vn9ux471z4EbI2klF1IGSSBCqioqJ2tiQNGvi8t0q10tH8jt9TS1Gos7bFi1R4FzmNrNp03vRnj3fP/7gg6V8GGZnpLcPDtKbv/wl3f3Zz77x0unT3xqtVL5XHh0d3litpgmrQKnBFRKCQbpUSOLIYeI4UNwkE6mzAoFKU+jvkk7xCWI9olecB4t4mcd4ecOG983tt3/r4AsvvHH02Wdp5wMPrKlg2tbnzZ/+lO7+0pfMy1/72r0XDx36Oxof/+vOhYWezjg2kYry6yur0hoCSmq03f5qfa0Ve9b5pTpwLoXa4PoVYMZJ5XIU2Wp391xu48b/6Nu+/XsHn332v488/7y989vfbj+RejUG77mnnqJN27b1nD169J7Lk5P3mHL5turi4kBlaSmUHfmphMDj6WDVppZqy4WpqT3lhQUj5K/BM6ndIqTqWJ1dXXZg/fojDMzEBzl9r5BQs102YFJb7Oq6mO/pOd43OPjGxh073rg0OTn3le98Z81zvSb3IEZ6No5zx0dG8lPj46bK0mTdZnDsYI2lysqtd3g4Hn3uub/9wy9+8fzU2FiuIVWqBpSogoBkIbcODVX3HTjwxMaHHnp5fnQ0tG4vdeLSq2lmEyWeQsH2Dw7a/R/72PKWXK4iQF7tJ7oWgNSDK66t+PmHe++lnXv2LA/gp9j33CR0kK3EYlyxW41cFaOrXF4+8fTTi3//m9/Q9fpEdB0/2NeRZ6nqca8c5JQEpTkdpGOjKN2QkNoQdgJoiUvW47fddH0/1xWgIk82KpXwMp6FpBRcQj/ncj15VpH09QQGDxtBFxkQhDll/t6JIsDSEhXi+MYFKMQujHKZOnjCBRT4XG45crmeAnbg43UDBgj8qotbBwOCuAn1taBSoehGBghVBmwuyLGnI5VblmRYJOlTVw3NOSlL3H1SSrpxJYhqhb3AS2OEfs7HuXedJAuFA61hd1gmi3qdF0QieKs3lsvEZQ9P4IOny0NXsVv+/40EwXOZ2mtPpmHHrJBFAUnCCreFJlDZy+RGBijAf2zANjv3zpiuz6fv2QMQ2b3mthGnW/YEFPdO2Q0LkAVAnZ0p+8W2Xn9PkZE3GdXf8lp3Gn7gPycEwY0LUOL+ZQ2Awba5qsoHGfdqd+Be77autm7knXfchk3iYXiDA8QqBmDk3dV6/Qov+QIcgORULH2dQQCCCgKgKLqBAar9g5GEg8tFtkGRLu6lnsztrRaPFotNqu3SqAb8W3OdAfo/LkIiSU4hvaUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDY6NDA6MzIrMDA6MDDytytcAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA2OjQwOjMyKzAwOjAwg+qT4AAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPostbox.displayName = 'EmojiPostbox'
EmojiPostbox.defaultProps = {}

export default EmojiPostbox

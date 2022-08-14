import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCamel = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-camel"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBAE7crd5qgAAAAZiS0dEAP8A/wD/oL2nkwAAGdBJREFUeNrtmnm4ZGV957/ves6pU1V3v910s7bIJhoFlVUWQUAwI2iCZoxxgmFT0UFxCGKYwCTRCAYiEFwHjQIBRUgMCDpoWIe1WdvuZmtpmr59b9+ltrO8e/44dW8zPqhNw6RJ0r/neZ+qe+ut8771Ob/9vMA22SbbZJtsk22yTbbJNtkm22SbbJNtsk22yX8oIf8eNnnHX7wXPhABGhYTEoYIwEKgeQA2Ws9alDj/zs/f+J8L0M++9N8g8lVwcrtBAn8Qo/S/UM4PZJwPgxAWnCu8tS84a2/3PlyjQvoLDuPf+Wc/+I8P6J/POw7jMcGsDvvEgv6ZkPIImaQNUW+CyRgA4I2CLTKYrBd0kT+ptf2yCuzvGQnqmAtuftX2wl5rcH74uWNAbImOcm/gBF+P4vjIpDkcxUNjkM1B8CQFkzGojEC5AKGUBOtGrS4Ptlr9sh66j59wxCG45l8ef1X2Q19rgCgCAq+NIoQLGOf7xfUmZGMQvJaCyQiMMVBGwRgHkxF4LYWsNyCiZCggfHaqYLvZzvOvnond880zwTlBCCTJs2xpa3Ymbrc7mbZ20ookH4oIb6S17aMo3p5SmhFCVoXgiyPO/ParDuf757wbniWMljPnRIKdNzQ8LOrD44iaQ+BxAso5gADvPYL3CM7C6RI2y5C3Z9Ge3ohell+ch+hsSYP54N/8/BXvifemJxAI232uV3yuLNTBi0Ya0kiaUWdXQXdWgdaGGciBcSSXBPjSFMU11NuLAEyEDQ+BLN73VYFz1bnHI596FiRqHC6Y/3i91hBCRGBCgDCKQAAfQgXGOyAEIACEEIBRMCEhoggkyz/IXPlDp/VdG1pdLB5svDIN+v7nTxiop9GlDvTDxhikksJbDa1KGEPwyLOzaKmAI/ZdhkVjDRTdts20u9MEduvSxePf8s5PH3Da5a9oE1eecSiCKQDK96DBfquRRgcODw8hbQ4hHhgGT+ugXIIQCh884D1C8AACgjWwZQHd6yJvz2JuehrtbvHtktROE7DqpK/e88pMPhHhPEbJ+zkJCEah05qD1QpRFEHIGCsmevjxE1NYO9UF8R6F8fyxVWsOX7Nm7SemJyeWbJyceEUb+Nan3gFDA2VSvplT/5VaLA9s1FNEUQzKeaUhfZPy3iF4Bx88AvpmBgIQCkIZuJCIoxickWOZ7R1BTYFvnbzPKzOxqY2ze3d6Rey8RyQoBAViTlCvJYjTJn7v0D1xjKPYY8kgnDeA1RhPGSJJJtY/9+ykc/5lL3r+KcfjgPFZzCkhBQm7++B+nxL+ASmT3WpRhChOIKIEXMYAreJICKHKSQJAQCswcJUZUAYmJXiUIElT1LUa9z6/0IMwzvit3z397frDV9y/ZYBKkn4GVP0vWLNXu1tG3tqlw42YS84gZInxwQZ2qjdAEGC1BvMaAwkHZWyk2RgZ8CFMbu5i/3jesSC6RGB5vbTsHanA7zPGDxci2VFEEZVSgnEBJiKwOAGLElAhAMZBKAUI6SdupPJBpNIe2tcgEAZCCAKlIKy1V1mU33Le3xgovfq7nzr4PqE6RW/R3viT86/efB8UQiBXnHX8QLfVGVLapLY7fW4jIh9cNNzEwEAdycAwZK0OGjxM3kPZa6MoCmjrWjJJ3ued+3lzeATHnHvDb4bz5++Het1RiFd+/y002P/BOT8mipLBqJZCJDWwfl5DmQDhHJRzUCZBGAMhFCD9jISQfn4bgOARQgBCQAge3ho4XcLkGcpuG1mnhSLLYbWaNs792Hl83RBxL0Wwf3TpXS8vk54IARcdswyyMbQHLTtXjg0k+y8aaaBeTyHjGkLwsFqBBgfrPHp5EQKh56xZufqv93rrPnjfF376axe5/ux3Yq4EGUtwFCfhQsH5G+O0jihtQNab4HENRFRwKGULmkEoreAsbJNUPgnY5KTDPK4qunln4YyGKwuoXhdlr4My66EsMpSlWq+N+ztD5VeJ0zN/vBlmt5BJf/n88/G2Q44AffbO6VwMrSzK8tBSmeGiUOj1MpRlCcmANInBpYS1jhhr7ZJly34EQtS1dz7zkgvceN7xoPUxVnPdEznxl0gpdo9qKeJ6A7IxVEUoGVdmJSQoEwCloIyD9E2m0qB55ZmH1Y9kIQAkvOhuk8ocKQVlDJQAlBAwzsEYbVhrDtZKL7Ngy4/eLZn7o/cfhR/c/sTmZdJfufJ61A74r/jbW568R5P4svXTXbVuqoWNMx0UeYngA5iQiNMU9UYKztm+ZVG+ocyyX6M5R8N6xL71/KkM7mLB2c5CSnAZgUUJWFSrwjet7lMVqSyCswu5TghV9EJfO7wz8M5Uc5xdmF/9f9P3CCGVgycVbBklSNImmgMDUgr6AWf0N2VzdP/d9t6b/MPnfnfza7Hb730U+pk7ETWGn6S2WMYJ3sgpIDlDFAkktQRxvQERRXBGp875rD6y+GcnHvw6d+3tT1b11A/+D04YXQ7P4lFq83MkJ+dIzkYYZxBRDC4j8KgGFsegjFUm4l0fjAG8W/Ax86F9AUY/UQzB9TPq+c83De8cvLUIVsNpBWctSF+jGOMI8CgLtYsx5tDpdWs27Pr616167347hWt+vnLzitXPnX8B1t33o3Jk6S4riFPvCMEvpgiQgkNKhiStI6oPgBECZ/TrjdFPx7sctPLEt43gPfsshXrhfkYoe5ug/ktJHH0kSZIaZRSMMnAhKmcsJQjjVUDyHt4YBGfgjYa3GsFaBG+r13mNmYcRKmDwDnAWwRp4Y+CsgTMKTit4XcLpAqYo4IwBoQSUclDKQBmDcxZFrkaCx8G6zCd+Z689V5yw/07hOz994rcDuuraG3DCe96FF669YXpw790knHmXd4YKzsAIgRQccb2JKG2AEiTB6v3MzHMjTpdNEuw+AvrkWNDPp2lt//rgEJNRBNLPY6oNVhslhPThaHij4JSCVTlcmcNpDWf6oJytzMeZ6m/7Iih9IFapqi5TCl4pWF3CagWjSnhrQPqmxoWAEBKMMRitkReqQQjZr1Tl00ede/3qOy87GVfevHzz+kF/c9phoCJaptoz/2jz3t71iKNZjzE02MTYkiVIh8cBAKrbRpl1g9VKe+copURwGSGqNSCSBK7IoLIunDGVmssIPEpAuUAAgbca3rlNvgehMr0FkP0caN5JVz75Rdm1h18YfVPzDt47OFslkzyKEdXqkEkKHsWwxmBy/TqsW/sClLZYvGjksdHR0ROtNauPPveHm9cPOvaAZRjfe89WPjk55q071DtLpOAgCKDeg3MGHscQaQNRvUni+gCvNQZY0hxE3ByETJsgjFV3tixhnUGAX3Ce3ntYXULlPegyhykLWF3CWwvnLIJzcFbDWQNvK41yutIOozWsKmG0qt5rBWP6n6kCWhUwSsEoDeurNeOkBllLweMYXAiQEFDkGVqdDM77ccHp1HH/85/uODBaie/dtuK3A7rl/jU4cIkEZWIyeH+kUWqUEYAzBucdiDWgAChnYCIGjxOIpAYe18CEBEiA16pKMLMujDEIPiCgCt0heFhVQqscVitYo2G1hjUazlZm5bSBs3rT50bDGgWjFKyp/mf65miNhi41dFlCKwNVKuSFhg8ecRKjljYgkhRMiMr3WQNdZMiy3HQzlUtOxyYe+tHNWpWda+54avM6iscc9EY03vLuGTP5TNMZfZhWinLOQAmp/ILVCEZXDtZWd73KaBVMnkFnXRSdFrJeF9YYBFQhmFAKEirnbLSCNQZGayilYfsaZI2B1QZWa5g+CGtMf2gYpaF19T2tNcpCoSgUytJAKYNeoVGUBoxRNBs1JPUKEKG02qfR0EWBoiimu7m+EiEcDEJWqLy74vjD3oQb7n4K/LcB+vRXbsKFp6rA44HvsrJ4jzb2gE6vAGUUlFGEbg9aKSR5BhH1kz3K4EOAtwZalch7PRR5CUIJhPeVP6EUgbF+5HHQ2sJoC20s4AMoI2CMghACOp8chrDgOX0I8D7AB1Sv3sNYD20dtPWw1sN5D8Eo6iEGCQBBqLLv+Z4SAjil4IwyKcWd063sqJ71H5CDzZtDp9UF8NsBAQBEAjf77PMsHfui8O6bqtcba3fzKmONBLwy0NqAM7bwowJItWljUJQa2lgwxmCdhweBD1WG67SFUgrGVHCUtrDOgQSAMQpKCRilmyAhIADw3sP5AOcrUMZ6KOugjYN1AQEBjBKwWIJRspBwBu+rui4EwPuFxJwStFu5+mWNkiMHBDuwLItbLz3jkM0D9NnLfoSvnHUiEDd/TP3KCwnw5yrr1uZaXbhGiqS/CW0t6Pxd6t9wax1KZfqAHAyncCHAaAN4wDkHayy0dTDOQWkLbdxCt7ACVA1CCEII8CHAuQqOdX7h1fRHAMAZQSI5GCMAKLwL8KZKGQit/N+LomDufWhnhc4CpY1aLfrDHXd9/e1K25Jvbtn/yYuuw9+efojhQlxOKSGg5L+rXm+7mbkOakmEOJKQvKp95vs3znsY46AWABEwRqCNA6MU8NUc61x/BCjjoIzraxjA+pBov9XhQ2Ve89rjvH/RCHD9IBnAkFSVWbUP5yrHb1TloJ2tXECpYayb9CAbrXWFVgbW+gPbszM7AOQp/nKaR5+64g5cesYReRRFF4OQeyljp+mifFev1CNZmRE+/0NIpT6V6js45+FDgOC0ShaJQ1UqUQDzmlCZR2ksSl0BqubOA6qcT9WKDpt8kJ9/39dbQsD7uZI2Dtp5FNoiKxSSooSMS3Dv4Z2DKUsUZYlCmQ2O8NkA0jLOw1i3SJflbt6ZlwcIAM649DYAMBefeugdcaP5IBXyrdaY44JzhwTnd7beDTrnhPeOOOuCcUQ7G5SzNmUKYt5cBKMQgoFTupCtGudRKodSO1jfr9ApASOk72D7rQ4s9OwXkkdKN5kjpwTaesz0SjhUj4gozSGkAOMcURTBe4s8L5AVCqUyiZCMhhAmnPWwxqXeY9+y17uJb2mv9syv3Q4A+RVnHXeHEOKurNcbCc5v74Pb0Tk/bI0V1tqSWTfb62UtrewxztpPckoaghHQSCAiqMwuVB0dwfq+hpIFbQEBHCFAqODQvsPeBISCUQJKaf894L3zc52SltphYjaHYFW7hHEGQhlqSYwQPPKiRF4qWOuHJLUxCHnYe99RyjSttUv32P9wtsWA5uX0i26qmjPAxv54+FfnfPzwpWCMLlc6zDrv/9R7OlaLgEhwSMnhrIP1DhFnCAkBEwEWBL7f26GkH+7nezwVEM8YdYwxxSnRjNOSEcwwEh7SSj+al+Z9IQvvyJTFxFwOwavGmw8EzUZVm5WlQqksvA+NQFAHsCaEMFOUulkWdmBmw4R4xYA2Ry7/+Qs45ZDtch6JS02p1xgf/tQFvKWWRCJNk2qjxoEyoC5lqPGoDFyoQJmhhCpQ1qaUbqSUrqOUzICQaUJomzHS4UJMMU7bjJIeJ2G23kinbrrhNj0yNjzNu2o/raxsZxqTPF8wY20dokhAa4NCWwSEujW2QYV8Jhi9Qmu7S6+Xl6Y36/9NAAHA1++YwEcOWmTapblxOJIPxpE4td6ofWZoeCjOuhk6uYa2Gp7Q5QPN+pdIVJtkMioIQka5aEspuiOLx/PXv2EPt8dhn/TAcyBk55dc67wT3wQh5f1ZodaWurur9QGtXENwihEArRAQRdF8MgLGSARC0mGJvO3prda643pZ+fzV19yr/80AAcB37p4EgPC9Mw543jn//WazflJ9YHA7QjniuS46hcFcR7VUjf/YdjrdL177wK+Lp79xnbElS7Bkyfiabrf3k26udu1lCtYGdAqDJIk6IzXeovA7xnEEEgtkWVHX1u8oBLtXWP8gIZihFJ099xjfOocX6rUI9URMSiEmmOAQcQwhZeVjKN1JUD8eR1t+78645BYsv3+5aTQb/7ueRs8RSmB9gPVA6cnaKE7OHqjJp8cGU4wNNZBIHgH+7R+54DpwyVZLyf4vpTROYrZ1AHHGQQlpEULWwAcwxqpTG5TCOz9uVLGszLq47Ozjt3iNHXZehoMOevsjtSS6IZK8n1x6+BDIVGHv5lJezChRjXqKei0CJ+QdN1740UXDaW2OMXq2EPyhqFZnW+f4C2U4/sIvlAhh9XxzbD46OWebWum3XnX9Eyh6+RYv0W23ccstP3f1eu3mNJFtQgi8B5wPKUBjKqLrtHX3gVI0mnVEku1F4d5e58BAfWBlWktvoQRuqwAKgeCnF3wBPoQ13nlLCKnO/FAK5xxUoQ448xNHp0bpLV7js9+4HWOjwxgeGni2WY+nIsmrUsX5pjV6dP2GyWlj3E1Gq5CmNdTTpB4JdtzAkl344uE6vnjjL/wlNz+1dUzsd//yFnjnAR/mnLU2OA/af+7lnUeRFwdsWLfugI0Tr+xghOAUI4PN9WkSPZAmAowSwPs6vN8JVMI6f6e1bpoLiUajjkiwt+nOxlE4/Ro5YUZI6Z3z1VPSfnHKKLTSo2WefXLp0vGRv/rIfltuyZTj0UeeKITgN6eJVFJQkBAkvN++0y1gA/kFQB4WUYKBoSEIwbez1i7yLzqQsVUAXfPJ/auKGiGhlNDq6YYDJUDEGRglMNoclfV6712z6hf4zl+etEXrDNRjjI4OYbCRhsFGjSSxqNox3rG52TmcfObH2jKuLU+ag6gPDkEIbuC9IvNPBbYWoGaziaHxxeBC7Bw3mpGIJCozI4gkQyQYQgiR0WbPb9zXRdntbGEs4JCcol5PR+tpTUSCgVKSI4TVUZLgwdv+BUyI50GIV9pAG7fWOLfRha0MiFCGpx5ZzqO0vmcyOESiWopaIhf6P/1uCZwLveNfz9CemdyidTin+OzfLwfndIwgEAKAMvYg4fyeqFZDq9MFQB7vzM21JzdMIsvV7Q+vC7PWk60MiDBQLgkCocEFOOvgrAchdAOldI33fafNaLHdknHU0toWrRPFMX5y6akxAfaqHhiQaZnEF7VmZ6d2eN1SgDKIKJrL8ryYm51TxtiH91mKcNZVj2xdQCEE7PqGNxpdFo9mc7O+MzeHblYAhFwla+nJkeS/ZJQCIUStDRPwsrll63iLrDO3g3f2TUYbcMavbo6O37po6fb4xCU/g5ARhJSSEsqd87l1fsL+yom5rQLo2AtuwszGKVhj787arenWzAysta2kVrv5O9c9dlu9nl4vOEVwbvsTz/wMc2XvZa9x6yWnIG/Pwlu7b1mUOxnrfiljeWUxM6V3e/ObFqImIST13sXW2pYxdsr2n8Ru9TBPKAelfIoAs8F7+IB1Moqe/NiHfgcDjfqdaSQ0vNvluSceS22Rvfx6b2Q7HPkHZzBnzCFFXggfcF3UaD7GhcAfnvPtBUCU8hHvfeKdnwOlXforLTK+tQBRxgCQSUL8Q4zSPbwPU6X13ebQMCghq4NVG7p5uSxrzS3yxrzsMKY6G/HkAz/bviyKQ/O83BCAH5RzM/4L//z0JhN0FpTxureWI/gWY7Rkv1J9bTUNOurz14MSX1LGHyCUglCyIYg0rw8OY3B0dEOSyDWCYmev1eHLb3wUXzv79zb72g9e+1c4/GOXo2jPvr/Xbu9prLmHy2iFkPL/mVfmPSD4cWsNIQgdzrl+zQACqh4xF3wjofCUkCwdHne1WoKRRePlwOBAK4kEC0b9wUEfOmiktf65zS9UNzyNO6/42F5ZZ+5Pep1eCAG3mrmpfMnrdlmYs/w7n8Z2u70x8d7v540BAQyPk8CFeO0Aqh4rU1El08HNTK4D5xRSSDIwOMhqtRq8s3uWWXdHo4rNuuadXz0DQ8v2ZTbvfJg4syej6EpKVyZpitMuvGlhnilzFJ3W7s6og7wziCQfjxniqnf9GgB09xWnIxpc1KRCHs0oIYIz2RzZjhhtAWedKYvMWANtXaGNLZSxv/F6v7j5a7jlvCMBU6azq+/54+7czEl5lkEw1qnV4lZa35RL3f/103HFqV+FLrJ3lnm22FuLyrQcIfBb30nfdfnJkMTCOfteivDe6mhdGMkn18qkKQu53VhKgo9oCEji+Kna8NB6Z1669aEnHsLap1cjHRpL56befmxv/VMfUr3OYa2ZmYGZVtd6Kr43uGSHVabIcNsXT0JjkMFpL0+//KPHqiL7uM4zZoxFL1dPthTtpBJbH1BvegNmjY7r9cbR8L7W62UolWHNUSmWLln6ls7G9WcJ4o9u1iJwwXui2TDh15jYU6tW4vFr/wLLDv/wB7zTXx7ccY/BjeueRXftCwBhdzeGhi/T7RnzsW/eh9U//RBoVNthasU9ZxetmQ9Yo0a9NaCEgDO2YcfUuJwmW8/E1q+8HWU2wRo77/0GWHNu2Wsf1ZmbRa+XgzG6cvc373twNLL4atQGT9DWJ4wSKznLqFNgcC+tQWWOy766Cu2NEw9Y7/9a+3CJqA9+Psj0dMLkp0+5/Pb1ca2OZ+6+DunYzrLszpxtgY8jHRx1URM9A3TzUlvnV7VUQGN0ZOto0GO3XIHZF54Sc8+tOMkU2VnRwNgygkC1mkQzjbwO9BmWNNaoMv87JxISaoOFbvcmA2XL03Sg1Hn3Ja/7lnefAgD4yV23PU6Cf3xuukO+cdvEQjl+5lVV4bnqhI8ghNl4dv1zKeGyN7R4x7TXmg3aBZ9pf69qt+/iQuCjF/9s6wByRoNQFrU2rN2HC7HLwJ5vpUWvjUJp5O3nZwOTKx/56Q0rT/7Ggyu35PoX/sPC18JLmnV7DlFjqNvaOPWZ+sjYP01PvLC9LrKSct7dftc9HnA+Wiu4Bb732NYBNLn6MYzstEuv6HXPTweHyvbM5LtUnpMga88riFsZFQ+Levr/bf23Hv+peXizAG7Y3O/9K1tM93nKIeKDAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDA0OjAxOjUzKzAwOjAwreiEmAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwNDowMTo1MyswMDowMNy1PCQAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCamel.displayName = 'EmojiCamel'
EmojiCamel.defaultProps = {}

export default EmojiCamel

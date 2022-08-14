import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiThumbsUpMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-thumbs-up-medium-light-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBSYjutw5rgAAAAZiS0dEAP8A/wD/oL2nkwAAFNRJREFUeNrdXHmQZXV1/s5vuct7r193z8IwwsgmI4hKQFREZBMlRZUhyVRpAhrRwgWj4FIVBQmlCRrBEJFQimDiAlFKhaKCAZNMVNRIQFFAlkEQHIaZcdbuft3vvXvvbzn54/7uW7p7NraBflVd/ar79Xv3fvec73znO+c2YS8+fvONC6CStEFCnEBEp5GURwJoMnPbW3s3AbfIKL7D5lnn8LddvFeOkfYWOPd9/RMgon1Jyk9F9cZbdZKOkZRERPDew5uCTTfb6orsJnbu8nV3/fyRl5x6Og79079Z+AD9+pqPgr3XJMQ/Js3RDyVj46SSBBCifAED7B1cnqNoz6CYmfkVO/vRV777sts33nEdlr/uHc/ZsYq9FbZCiMNJiFVCR0RS9sEJLyApIaMIulaHrtWOdtZe86uvfOSk+79zDZiLhQ2QMwVcURwIYBHAOwZSSkitodMa4pHmSnb282MHv2LlL648b2ED5J2Dd3bKFXnOzmGHIBFBKAUZRYjqDei0dowz5iO6Vo/u/vL5CxcgZgYDj7qi2OCMAXveST4ShJQQSkHXG5Bar8pbU68p2jMLF6Co3kBt8dItILrHmQLs/Y4zjQgkBEhKqCiGTmtLmfnPjz3nA+I337xwYQK05NDDsPXhBwt29l5vLdhZgHceRRTSTacpiOikX173r0vy6emFCdD+J56D2pKlkFH8ADvX8c6B2e8SICKCjGJIHR1o8+wwm2cLEyAA8NbCWfuod3aCndt5BA0CJSVI0JgzxSGtDU/i96u/tDAB0kkKKeVWMK/1uwsQuFS2RCSUXrbmtttgu92FCdD4wYdgv1cfN8XMj7Fzu4tP+TpmgERy4wMACVqYAI0eeBCevPNnFsBj7D12Jhj7+DDY+1JHmcIeFwOm01mYAC0+/Ax45yCjaD0zu10IJ3jvwZ7hrYEzBbxzU0ee8TJEjZGFCRAACClBJKaIyO+sb2ZmsHdgZ0twjC28tev3WXkY4tHRZ/UY1d4ESKU1kBBaKEVEO+GSkFbOGNhuF9aaCRlFa1UcY7/jzl6YEfSHO78FAoPZHyKUUtgJ2bL34JJ3YLodOGPWOmsec9YuXB30h/vuBjPGpdInSx2BSOy4cnkPdh6uKGCyLrxzdy1+8YqpZ7uC7V0OKuv662QUv0roCNhhinGPg5wxcNYW3vn/2/DgQ/7Q409amADdc+3HYItCC6VWqSRpCK126W2W8scDjCmp5IMqirD8xPcsPIB+e+Nn4K2FUPJVMopPl3EMknLXLQZQpiFhmzP2Dzu1SF7IALU2rIfptOtC6fN0mu67U/4ZOlIBEgJCyA4JMmJXoL4QAfrd9y/Hxnvuha7VztJpeoZKUgitd5leZScvKuOsoeMkllovLICYGdseXYN9XvHy1wsdXahr9ZranfQKAAkpIKIIOo6X6Sg6VC00gO6+6q8hVLRSJ+nn45HmATpJIaJo9/6YCCQkZBQjqjdGZRy/Q6fpyB2XvQsP3/S5Z/W45XMROaePbQRA+5EUV8XN5ilJswlVq4HE7lwfApiDocalH0Q4gp1bIaPodwK07V0nHcHX/uCXz8rxP6tKq/XE/+CBG66HSpJ9wLgyGR17azI2TlGjsfvRE1oNl+dBBxl4Y2C6HbZZdy07f5OQ8jtRY+S+qXVruwef/CYse81ZLwyA7rjsXdD1+r7emM/HzeaZ6dhiETUakHG8E2E4v6hk68p5mjHw1sBbV3b2Rc7OmC3e2p+yd993ef7TrDX1xMi+L4JOUy2jWDMgXZFLdo6ElCyUtqbTzrY9siY7+XO38PWnjOMdP5p8bgG664vvh1BqmbfuirjReFsZOSNQSbJn4PSiqFTT3hiYLIPNunBFDm9t2YqUDa0B+PcA3S+jSEqtR0AUg1mCWTIgQq5aME8z8xPs3X2m2/0JiO6XStuj3veFZx+gX/zzBwBgCYB/iur1s5LRcRE1RqDieHjEvEdkBnhToLt9G/LWFJg9SCpIHUFGEaTWIKVAZQsMIQRIqsG2ZlbrwqUvnmdcdNobbNb9ctFuXymknH7tR6/dfYB4lhdKu7j6d3/pgwBjBMClut54X9IcFVG9AflUIyc8bLeLmU0bwdZCKAWhNITWJUBxDBXHJelXn7GzzwrnxM6VDXC3g7w1lWetqctdUXxaSFW85sNX7xyg+6+7CAAUe3cqO3cae08kREto3SIhJgCaYO8mwTypkrRNUnZdnnW994Vpz5yv0tonk+ZYpGu1Peec2dlVFGitXwehFFSchDGQAEkBIRVkHENG0VNMXR+2SNpob908aTrtM023c9vSlS/DylUXzG+YPXLzpUgWLaHWk2vPJsLnIOXigYhi9t4DcGB2AHVtnrdBmGHnp02nnet6/ch0bDzStXpQyk8jk71HZ9tWsGfEI00ANCeqn54SFP1NkjQdc3l2VtwYWT29aaPZoaPojUF365Y3qjj5OyJaXO6jDKWlHNBQKRiLQASXZ2DvkI4vgq41IJR8euAwYLMMWWsSSXOs5C8uD6ACicFg58De75Yqn7dCeg9mD2aGs/aPdFpbIpTaOC9Aj95yOYhoGXt3EUgvryaaYSDVO+EeFxFA4efdIkcytghRY+SpHezsY3cORXsGtpuBxgTY+T5/hBkZO8CTg3BumIN2Wz5YeGvhjYXLc9giT3Raq1VTliGA1t1+LbKJCcg4fhu0Pl4I0eui55D0rANh5xDV69D1xjMCDso1vBKgPAsWiSo3QSicHBGIuATJlqmyW5/N5YDNW1uKzyKH6bZRtGfgjd0utJ6szlnMPqhkdHQfGcdnqjiRIoogtO59cG8TrLpSA18kJfQzFDnVwduigM0zFFkXptMur7SthKKFN6WqdqY8UV8UYOsAHyLN+94XOwe2FhxeZ7MMNstgOm3k0y10J7aj22qxZ/6PI9992TY2Zm4EQUgAOJYIr9hzTU67lAB7Ao4rilIIFgY2yzG9ZXM5JpIq+Iv9VCdpy7GQ95DOgoScK1MqrvG+FJzWleC3p5FPTyObbsEU5mdJo/G1n3zmLJx40beGAVr3k69WBPxGALW9ZlV7X0ZG6LnYO3jvMLlpE5wxSEeapSgUohw7V52+1mU0KTUsRkM6MZfGv3c2qPEuivYM8k4HJssz791qnaQX3v+ftz1x+ic/BeBbmI+kRwEcs9eMfD9AmtaVbQQDQioYM4PN6zcgrU0irdegtC4jShCEkBC6VNVCqoGiUkUOw4c2xRYFTJ4h63TRaXdQ5IVJkvhrtUb9kiIvNpx7+1bg9g/2Dmk2QMsBHLB3Qqdc/fWhZLMvd4ZIEJTWiOMYRTGDqckp5FmGOI4gleqlNRHKqMJAxUU1lfVwzsFZW353Hh6AEBKNsVEVx9FbBJAp4i/818ffsq42No7jL/jmvADtD6C5l5KrzxFBkyAY9VIr6DhCamJESYJacwRRGhR6jwJF2YuJoL24Py7yPqyFEEGGfUelNWSkIUiQd3b/ot3+cNGeebmz9j1EtHaoFwv8AwBvB/D158JIm1fyF0X5FWwNl+cwnRnk0y3MTEyASGBkyRLEI02oJAnyIyx5ag2VpP2erNQCcwrJvNUyz2GzLvKpSRTtmavBfJ7Q2hx97pXzpthzDw7PEz3MIELZlKqSbxqLl6A2vggyiiGUGhCtolwXVgqk1B6ZFSRkmZphWdRZ+ycAvuI93zNfii3am9WLw4pL78KHxU0QQSqNeKQJoaPe6/vyhMFewDsH4f38lgrPelJVN++AcFFCBd3H5PkKEM0BSIQqhr0RQRVnDJ1EEKHe+dDliD63DLyWfClcvSwroJBqIJ0GdBD3ua56Hx8KQ9iZhPeOnDWiIn81y8BvPm/A6c3DSi4p24IcUquhCgVwmLgSvDRwhQArNzSM7DW25ei6TOMwme3pLhOEqXOZEKI9H0C0twRiPyJ4Bzwh4IxBd3ISQlT9VvgbRq9XdEIAJMoImaPqOYDTF45ghnc+9GJdmG4X3toHVJw8UG2OzAYo2Rv6B9ViZjmBH+ZXIsjAQzPbtwPM1TJ5LzKElPCRCZHhIULPSENvxH1w/ADnlLZredtVtzvpnPvilkce2bjvSw6ZFyDxnALTR2fAKu33dQwCgSB1BB0nmJ6YwMSmTYjTFFJJAGHBXApIpaCiBCqOIJQKlUkEVT0AkudeirErOctkGUyebXCF+ayx5rtjy5bh+AuuGwCoYi8i+5yCw9zzd6i3TV+eGIPKXosFpNaI63Xk3S5ak5OYmWlDSAkZyvPwBJYgqFp0KL9IhPs9BtKZmcu1PufacRR9Wyp1bZSmdyuk7oSLrp+n1SDyYG4NuGDPPBnPfl4BxMOOAFUeFDMgAKE1dJpCCIE0TRElCaTWkEqBEW6v8gzPgGffTyEGmDBky4hK80hRpbaI4+ixkUXjvy7y3L36vKuHDlv1ymmSWHQ6W3phzgOZR7uKhIEcr7K+urKz/WMu3cDh3w38nSAQl+YXytumQFLCu3KRc3TpUtTGxyF11DPOgFIvqSgu/atA2szcczsH+7PeyZXqPTVZ9+POFA+pOLl5zY2fxWGrLpwbQX5qiknKx2kH7D+v+q068OqqBfHWcyDD4tOccUvlTBINVzEigPupBiFAXJZxW+SI63U0lu6DqFYHydKCZe+CoNRQcQIVB5U9X4vBg3Ox0kQDCXj2o+z9B22e/bizZdPknAhaccI5WLv6y2DPvwWhDXB9TtT0tER19QPR9SqCKwUd84BZP4+JFkDjHhHPSruBNGOWoKr98B5pswmdJCXAPJw6NHBfWQkQhQZ1Vg9WcZBzcMw9MgdwNAlxOAF3zE2xSkQBD4OxGUQHVaW3VxrBfTUaNEuvIjgP70tL0xUFZBxCnUTAqVez+6AMDAN6FsVsLiICk+iNnXuR6T38gOgjooFWpR/JzNyLVOp1+AMRG84rjK1Tb8x+s/WTGjTdGdhAwD1EdFAl3CoxxoOKt1cJwgH1TC4L02mDup2ybwr6pZ9ONHTAPOv77MaJQlWqLo4zBt5VKnngWEozqHQLB3anewANpj33U8xXPrWz5RKENXY2nfQAihoNdLdv7wqtV7P3ZwAQs4VVz7oMhjj7KnKqTYsCtsiRt2fgnSu5Qsm+JqnKcqVPBPW0Cg+NlzDgB5VaCADymWnoJCkXIKqGNShpIqpuFu551hwcgaFC07vYHs5a2KCibZa1IOj3bN38AO13/Lvx2K1XAMCP2Pt1AB/Q5xgfCNGD2Q2lVsk9Ya5U5LB5jrzdQZFlaIwvgk5rkFHUsyxISoDKtIAf4A4SsyKJhzQLCYms3Yb3jHRkpBSDAVAhVGmPCAlHBJaqn7I019b13oNdAKc9g3xmBs6a1XGt/rCftVA6RPdSa6g0faSzbeutYD63F4auskIHLNHqZ+GqVTMmm+ewxqA71YEtCtRHxxA3GtBpCugoVKV50qvSJ+Wq75ANi8AzADC9fTvyTgdREkNK1ZvP6yiCNgVUkYTUFvP0YZVxb8LWfoai2/He2B+SoEvaWdY96dPf3fn6y5rvXgKS8ihvzPeY+WAOsyg3OIuyNoRzACc8d9bBGoMiz9HtdgEQRseaqDVHkYyMIAqz+moCSgO8VE0oUKVURarew2ZddLZvQ3tiAtNTU+h2M0gpEUUaSitIqSCVhNK61EJSgqTovU95Twiq0TLYOeedbXnvH3TG3Oicu0FJtfHUf7h5jpqZM3quLVqMFae8/9cPXHfRJd6aK7xzzWpG1VuBsw5uEJhgiFtbPi+nCEBeFHDbp0qVG2ZRupaG6YMcKPUVcWOAzKti2W9AVRRBSok0SQJ5A9ZYmMKU/xDFM3ylzKsqH96XgfAaDwJtrNWS88cXL/7xQUcfs33z44/htR+5Zl4tPAegF7/xXNz71UchdXR90Z4Zt0Vxsbdm1BYG1hTlZMBaOBtAca4HjC/HwhkRTRBocxzpxz3waFEUy9BqrbJFUYvzGqJaHTpJ+sZWJSgHwOkRdfCNKzUcRRHSJc2e91wODDmokjDBCBfQWRv4clabw345EV655EXLb37ivntw4sU37NiS3dEvfn7p2ZBa6aKb/WWRZRfYIn+pM5aMsTDWwloL79l45i3MvE4IsYaEeEgADyVp8oSK4/WNSE6feM578x985ZrUdNvvFSQuUFrvE6cpoloNOo4hdRQ2V/stAVUrLqFqVo5fNt0CMzCydCl0rd7v14jK3iyKw1S1r5R5UJKEhami3UY+3Vpji/yPicTaEy7+9p4DBAB3XfUhvPjVx9LD/33ryk5r6u15J3uTdS5x3v+OiH7DwP3E/HBar69fPN6cet1Fl7hN37gK+559xdD73HL+myGFkIW1p7H3F0qljo3iSEZhM0yGCidkaFIHrNVB3ZJ32hBSob6orI7V7QgUlqhUkkAq3QOOMSx2vXM97yebmmwV7ZlVRGL1cZ/4xlMDqHrc+cX3Q0gpJtavXySkjMb333/r9g2bi1Pffjpo5e79L5/9IoGrzz0VxtrlYLwThL+SUh6qlFJKa0gl+1WpInEMq+C82wEJifr4OHSSlqt4UoLC5plKygpW6aa5AFnYLEMx3UI23Wq7ongriG59/dMF6Jl8/PBvV0FpJbZv3nagtfYtDKwSgo6SQjaEFOUtB0JABH0kRBlZzAyT5xBSoTE+FgDSkFpBRjFUnEBGEUiqHilXY+eK6J0xMJ02stYUbJ5tYs+nAbj3DRf92/MHoOpxwznHgz0TCbEIhNcCOM0zvwHAIQCaovp/HUJAhpLNYCgl0Wg2EaUppNKQUQSVpCXp66gEE9QDhV3gnqD0q4UF79y/A3wmQO1T/v57zz+Aqsfqj70Zaze3kEZSCCmXGmMP98xHOOcPIaIDpBTLlBANKUWNCIkgkSS1RKVpWhNSxVJrqIrLqq0P0BC5e1eK2CLLkHe6cNY+IIQ4F8BPpya24i/+5c7nL0CzHyc3gLPOOAZPbtyKIw47WDVGGjVnTN0URWqti5k5TpJIJmn6Umb+MyI6Uki1r5QyISEUidIuqGZeoexb52yHPT/OwK0AvrloybI1MzNTeNNnbtr55BUvwMf/XvpObHjoISxasaJmsnw/qdThzH4lgOXeuaZzXoROnqUUMzpNNwgdPyiluG/FK49ab/LcrVx1wW591v8DOvD92/uFpfEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDU6Mzg6MjkrMDA6MDC7PEaBAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA1OjM4OjI5KzAwOjAwymH+PQAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

EmojiThumbsUpMediumLightSkinTone.displayName =
  'EmojiThumbsUpMediumLightSkinTone'
EmojiThumbsUpMediumLightSkinTone.defaultProps = {}

export default EmojiThumbsUpMediumLightSkinTone

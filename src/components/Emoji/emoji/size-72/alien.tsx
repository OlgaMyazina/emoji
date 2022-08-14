import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiAlien = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-alien"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdCSkDDzD8zQAAAAZiS0dEAP8A/wD/oL2nkwAAG+NJREFUeNrtXAmUFNd1fVXV1dt0zz4ww8ywDDuIbcCAQEQCJMCAhYyPwY4tW5Lt2FIcO068xyd2To6P4ziOz4kVW+fIMVK0YCEjYVlSEALZFouQBMO+DPs6w6w9Mz29d1XlvV//V/1qBi0YkJKjPir19Fb1/33v3Xff+79Q4IPHgA/LfvJ/gMQHjz/vobxnLmxZ8EN8/iqA2mdYejaX0wzDwPfxDU0Bn0+3inxarkKBfB6/pyvK/2+ATvUnIeTX1Vi8vziXzdWapjHaMM3hlmmOQLCq8QiZhBoCRFgoqmIqitKtKOo5VVVP4XHS5/OdCYdCXQ2RcCaO5yy+AaBd1ysc6YrhRFUtnU7X5nO56fl8fg56yXTTMEaaplmFAAUQINW0THIp5j3OoHDyCBAgMHTk8OhTNe28pmqH8XmbT/ft9Pv9xzLJZGLG8KH/dwC6hLPc27QfaoZURxCYGfl8bkU+byw08vlRhpEPmYYJCA47mMPww8kb0tCYJzGgVBks0HyaoWm+S5rP9yZ61fMI1Jay8rJzeD1zQkX5+xOg/a1t0NfXC4FgqDibySxEb/lMLpebh8BUIDDAgEFPsUwXFBZPBI4lw2O5w1IYTA5Q9IfKAWNgaRpylS/r0/VmfH5a1/WnosXFJ/Da5pSawe8fgHaeOAX+QCCQSCRuzeWyDyDHLEDPiRp5g3sKeQz3FAcYr+KwCgZlgTfcuE/x0AOPV2kaeZVuIEDHdL/+SMAfeHz2qIaWw+3dMGFQ+XsH0Bunz8Jrf3oVpt88e0Q2nf6bbDb7acxGVeg1CIhhe4lpA0LPAhDP5CVvuZJaE79RCsIPCsJPI4/S9RyG3Gt4/KSoqGhT3shnZ49suPEA7Tx1GnTdr/X19CzEkPpBJpuZhZ6jmoYNjEu8l3ML/8+eoPOe4hmMzEt2FAqvKzgf+51CWc8BCsMN/P5AJx6/CIaCP89kMp0Lp0y6cQD96dBhAieEIfV5vPi3s5n0kHwu74ST5WQkS5qHUkC87uEi5vUewVF2ZLpk7oaqh9KlzKegN/lA9/tzgWDwuWAw8L329s6jUyZPhLGVldcXoFf2HSQLRZOpxLcy6czfovcUISliCJle8i1I1/JBVnazEzi84hmOAIYDYpO76TybAjALrnA9m5sQJAgEgjuCweBXYt1du2uG1MLccWOuD0Cb9+ylOI+kkqnvpjOZryE4QZah+KA9ISC5vkpAUAjwNO285gAp/LvgCD/LC5DJATEtngm5TBCvLcsJS4fOFX5tVUOQdAgGgm8EgoEH4vH47vLyCpg/+aZrC9Dmpr2UViPJZPK7mXTqaxkGjuFa1hoIGAGK5mgY++DvO0C54VcYXjIwDiim4WipQk3lqE1ww42uj+QN6EVvIifdn0qmdxeXRGHBlMlvO2/fOwFny559FNOB/v74N9IETtrrOTY4LvkKj3D0ispFHqVjCSxFdcPNAxC4nKMSSAiAaqpgKgiMYhaYlUBRbCDF79jbJjuviZ+prqd9CD95MBwOfS6TTh++Jh70h30HoLpmiHLyxPH7UqnUv6P3FOdJ33A+kENKBdetbTBsMSdSMB3itQ0M9ybBG3w4Nu8IHrLDy/EW9FoDRadBXmTYhyF9ZhZ6tDCYahvHH/BDKBT+HUqALyF3Xloyc8bVA7QLdc6Z06fohHNSqeTjCNAIOVuBJavdgcHRnMPHAVILwk29PJs5mcueqCecODgGAyePpT4HjQFm2vqrgJsESMJQmNmMcDj8s9Kysu+lU6nMHdMbr4iB+lYAtV1qhUgkOgjDik40AnUO2KFlOALQlTG2lQT3MJAEOD6f87ePHT6mVejQpMMnvsf+pjJCd95nB4HsE+cgsH0sUwnQBfELoznZ0LSJnjyPvB/DS0ul0p/r6+1dfuH8BXhl7753D9CmXbth1sxZSjqVvCedSt+RzWRtqwnvkVKrIpGzTbycmLnnsAnhxDSdA6FL4AjAGDBaAXAaB8V9z/0d/43wTEH6Tt0mgSS4ybQ9jINUhsXt14fUDqnHhPPuANqKQjCZSMLOnTunpNOZL+IJfOQ5FvccMMHVIC4FOaFCsS68hSZpT1bnk9c9HsNeE3C67nqKz+thDCTNC5L7t8xr3ItFuDp1nqvPLM5VWEgTSB9CkO4bOWq0Slz7jrNYCsEZNKjK19LSei+epAELT0cIuvU2DYAyigqO+hCh5dOcCdmASGGmalJIFHAQt7oLvtA/LgcpBmYmRfyGe69D6JadscB06jfTsqRek+AkAsmCbEbBYWU+c+L48WfRAfa/Y4D6+/shlU5PRnA+igUoiPpKlvdCraqKpH9UT8/mcm4RWUwbgKQLyw2mgVQpzdscQt81MN3zuHZSO2UyVaXDkPQU11KmKekrly+xkEWQMg0ZXV998+y5B/6wd781f+rktw6xTbuaYPqsmWomk16FoVVvk7LpsaIrzkxXnFluNnNAEtwjHwVZzSVyzfu64FA1meh90m98NtfxEIOCGk8IkcuadPw1OQCCtKJpz67hiUT/23NQEr1n3+6mOiTlpTkMLbkDaJqW50LsBJyQaRh2djNdkLhQFJxkk7YtATTVFY3aAIfqfG6Hpcb7PsIDNZl3FDuTuaSsOF5MGRWkzqWnYce80oBsLjsGneH2jo5O1H373zrEKLz8fv/sXDY72szb3gPMU8BuYUgFIRIcXDxxEs6fPwfdsRgDEwUYYGaAcePGw8jRo6DEX+aGnmKLQ8UhVMURjIriDTGFT4aubQJX5kAhZ5uVuIUpZZxgR9slOHrkCJw6dQpi3THI4biLisJQUzMEhg8fBqh3bJBwfBZSgmLa17UFN6b+XE7H+S6rr69/EuvMxBUBen7bDigrL/edOX16IXpP0NO+4OJL9G2O4IC2bdsGrRdb2MX9mInIWnkcxE4cIIoxGDd+HCxe8mGYPvNDUBSNitUK3jYVxaqkpgv6ZCZJGpOAZYjh5EToABtP68WLsPmll2D7tu3Q0dHBwkFHvqPvEEg5BC+C1502bSrcPGcOCt6QzWcssVg20GB7EWa1aVhnNhj5/IErAkQe0dHeVolZa7rTLmWCEE/CXZIuvmt3E2zevJlZr6qsFAZVVEBJcTFL60ju0N3bC53d3dCE3zt48BDMXzAfVn/yk1BbV88GB6roL/M/wa3hPJ1pmgP+zxCtEMsOYyx3YNurr8JvnnwSzpw5C+FAAKpxDJXlZRCNRJh34GShE726vasLXnnlD3DxwkW4864VEEXAyNAst1i2F9E8EZgaWnnBauHAZuTh22c0Xg5QNpvBL/swreeH2xUzd3HLlvg0gRMnTjjgVFdWQMPQoTBs2FAYVFVFXTzAC0B7ezucO38ezqGF29HlX3j+BTh39hx86YH7YdzEiQwVRqjCWxS51aG4DVbFclI4jYEsnYjHYf26p2HdunWkY6CipBhqBw+GYUPrYQiGVGlpKTtVDxrpIl4/iACea2mFo83NEERvu3PFCsZfdDWVey0BlDcMHec9be4tc//7yOEjpsBEE3/8fus2SCQSBMJfYLW+Cr1IE2RM6ZWes1hqbNz4EnR2dkIxck1ddTWMamiAkSNHYqwPh9raWqhCoMibAlgUksdl0xkkwRxcwMEeaz4GY0aPgYqKcju8NNXtCcke5FTmwI1jEE9AAvlx7eNPwJNr17L3ytAbhiHfjR83FiZOmABjxoyBuvo6qCgvh2AwxMAlEPsxO6VQLbeh4WqG1DBjEoepjv5yWrXd6HkbkLSza9f82utBFEpHDx+GCRNvGobe4xfgiDAj7mjF2uzCxQtM1+jIOWGMaSLl4uIolJWWIRmWsguSG1MGoU4jKnFIo2fm0SOPHT8ODz/0EPz9N78JNXV1HCAShirvWliu/uWZhq6f4+fZ9OKL8Nunn2bvFyHHDUYPHoEkPHrUKDTSKBK3lGAgiV5MSjkajUBROAxBfI+8JpNKw8EDBxmQwEWkIvSdXYbUY71ZhtHSf1maJzL++KrVGlpsmKMXeEpkMYsIX7hwgXmRsDiJMwKBDoPxk0rLPwygiopKGIyuT4MuKymBAJYSBOqevXthwzPr0RvikM/meMvCXTMzTUk5G4wbIId14NHDh2Dt2t8wb9RxslHMUlXIO9V4jaqqQSy0QqEwMx4wryfizVPoME9kIYVGprCjMkruOTltFdMsw9+VWpYJAwBkQSwW03Gk5W5/2fSUGKQTRP1FFya+icf7oKenB48Y9Pb14sUTzHo0GMpkkaIIRIQVeTrftOllOLhvH3P/fF4SooLvLItrLpwkCrlePPeG9c+wECFP0NE7yXsjkSII47kJePouJZk+5CgaTyzWA73IQ0QbGDK2t6CR+/sTEEfjUHh5NJF9hPDtYllvOCHGmJyEHnN0kH7s5l2aPEsmROg4sX583YUkHG1rp1UOZrVIJMrAoYHQ5NhFsB7zo2VFZ5EIdBNy2ajRo1krlAZugVpQfdveSZX2QRRvb7z5pkOupKT9eE4SkXTNZDKFoPSy8RDo3ZhBL126xLiSrkX8Y3IjU11JmZa83bIMCRw2T4w4SwOpj+ST82ooEKRf9IG0vCKqYJoECyPODzmUAf2YSrtwMMFggIUdlicsvMjNM2T53j42QYuHKEvxWEeRMt6LHnQSM2IUw4+qeV4kcQ6yw5uac/3oEVu3bmWT93GNo6l2oUqTJUN0d3ex69B7KeSZWAwBamuD9s4O6MXf01iEyBXRYAtst0wSiRz/7rcGAojevGXyTfmTJ0/E6NeiRSBiiqxHBCh+SmAl0RIxtBANnEKCBkfESN+jECRVHseDeIOtOHA9QziRZfcjSGPHj2dLM+CzXBFo2QqXQqO1pQUOHTpkK253FZqHeBrP08NeBwJ9DIQUGo28qRP1T1dXDOLkVQi0AwyeJ4A8aUl6y3KbfqSi4wMKRQLgwUcfs4qLi88oJDAtm5+E+5HV8TOnKU4hmcGJx5HwaPDEAcRJxAsB1EP0vTR6VF9fH3NpQyJLi0v85qPNyC89EMJMKApd0b8hgsYiEk5hKdOFkxWlAf2YjEGgU/r2dfuY95CRSNwmGS/GmQF6+uJ47QwzpuhxkzGi0WJ2fbnxz0m8Heu9mEzSDkB3LbgNHln/LAF1FkMhjcMNg4Qz/Wjw4EEepUtlRYp34wgASsU0aD/ykZD7BBoNOku9bCJ9cC3Z2toK3Tj5CtQlrMBVVAkgg6Xls2fOMDBIpVvOdfFaeN04hheFIqlmhZU5thxI4GsK/wT+PkNJQFo3IwogWULZUeEnFJ1QNMIFlC39FM4Dlhp2+0A9jV/sxuuFHbWGDyLcelTNVOtYUljmcFCQsT2KJkJg6LrOvcpksoBCMccGKi+CKMzSBBCdW7RIxHkNniUvYSEqkyaBl8fzpjH1q0qSETm1VERmpfYFfZamNgaXHyK8aDy1KCwpxBL4ucINQo7LFxqOzG+cln7ptZ0DAxRAy/t033lNSxzHCdTJhSO5cTUq58rKKiwl2thk7FBDkCzbO2iARIg+3ooQXJF19IgbYwQQhWgv8gXJAmqsqRIHGcwbUozoHeJRRIjZ4U1gZbmkEIqfClQyBl3PKNw8gecZh5xnyuHFW8VIISnMjk1P/c9GNHBg4H4QIfvR2xf24ARfYylVVNg0KLwgec9Nk25iA5H38ZALU7jRoJNovQR6DLk3HWRNGrDBuwKKtEDItAvyFLk7lRKUtWzhmbOFHoLNspO0mUooYJIkdD0KcXY9PJKZjO05EjhOhwBBoRKEVDRJAWmjCS8ztPPoHAeJHhbMmDYwQCsWzodHfrueQmQrghRXFG8DgjJEY2Mji2FTar8KkAzuRSQByL2zvOVg8lSqOn1k9xksm7+MfN5V5eg99FpeznaWkvk5bC8z7evkxLVESHn75yLrNk5vROFaZPOP00FQxQLDa6WlZedI3L5lR7EIlW8gENyNWWG/pqqeHjEt/ZRhvTVz5kzmUZftWOFr6iYvT+RdFyqv4DXWx7Z9gQYmejQMHJqgYS/L0DOFKill4JW3piie5R3ZOPZhp9/CLUnkPVSWzJ49G9LIa/K46bwYWhkUrC+fP3c2u/SWOW8P0G/WPtGBXvQc8oLp6dHgpBPxfrhl3jyow8qdvOXKS7RinYxXyipfBuJtV/qMrFlWXmareMNdSraXlw2msgdjLcfA5C1XHz+cNX7eKVHkNboBlo8XLV7EMhjxnbMCI7bIYGgF/YE/UhXwtj3pZbfeAnd9dCVpmef8un5KE+tMXHWSNiElu/JjK6EET2gKdS3DwhthzOo0AJ/G+MvPDyo2yfZ1dbVQjrxg8cLUPuy+Nh0EJpUjAarjcBx+XmLYh8aAskFSPP1o+UFt43nzboFpSA2sKc9btcx4Km1Y91nIO88uv+0vLpYWl7yzhUPqyo0bO/o4Dmy97tMtZ5WAhw7J/+qaGvjkp/4SivG7LENdtoXX9RwCh6p5miiCziaOFoMZM2awClwuadyQscOHSLVhxHAGqM7OodudAQRJ56sZiqfhBk45RGDPnTMHli5fzvjT5B6vOGv1Go3pWCgYXP/sy1vgVomc3xKgyspK2H/goBEMBNcEAv7DPsZFitv2xAv1xmKsIX7vffdBLYKVZzcMeDfFOeFFFTjWWzpfCaVzEDiTpkzxcpZpgtxJIO+MonpftHgxMwR5pc57UWw5SfIeRdJJFJ702ZIli+Eu9HTKWqxwtuQGmULGymPmXrN8/q3NpaUlA66sagO9+euHHoJPffZeWLV8adeh5mMaesgCJFCf2zuxD0rB1PdpbJwGBmaSttY2poMUZzlI4dxhL7+YTB4oMHVaIyxe+mEIIkG7i5BuC9Zt1NkgVaLSphRNfWXSRiCtdbGtMFxY5tnyuAVD6+pg1epVMOvm2YwzCRy26sq7CTQm8kZMANswWr5/5OSpvg9jGL7r7S9PbNhAKFfEenrXYNH5EQLE4Gnb4v0Vmjx1FSNo6RacwOuvvw7HsUqPYw1GE6AwCAb8rI6rrx8Kk6ZOQV4Zw5Srs64mQsVZVwfPQqU9ORU629thT1MTHG9uhs6OTruE4aUEabiaIUOYsaZMncpqMxqDLBfEWhx9VhQOd2JhfW93LPb88GFDYdHcue8eoB179sGefXtpcnOw6HwskUg0kHI1+Z5Bdz1eYxYpwjAgr0jzngw1q8jU4aIwekAFhkuU92Ty0qIjXwxUFC9AouVquLpGrNZSCUIFLDXEqGtI4FC7t6y0lP2WetckScRebXEtjYd7MBg0opHoj+vran+ARW1u+fzbrn6H2bMbN8HsmTOVjS9v+hx60c+wMIzkCmocsRFB46uZOhIwtTxETQbS0i9jC9W7RO2sz6tKQdMMHC6S26PCKIpUt1H6pjpM7Li1xam9yUts7CJwKFFgWL1QUlzyefzNpZVLFv35mzjX/f55yhqhrlj3PyNIX0UL+nKGWHX13pmjqJfvIPO8r3j3JiqCaD07zeSVjYK2qLyYUMBVpvS50/8BsW9aY12GaKToIHrPZ3P5XNPq5cuuzSbOSRMmwBtNTSkUWj9Ga9XisdpMm4pIzKKxRngpYoVAbP9VvBsKWI0neY0bZqLj6C4SWmKXqzxxvkfA3WRecIC7lib2X4vd9+FQ8DwS87e2/PGVpq888OV3tLv3HQE0fmQDbHz1VcoiHcXR6PfQWhV43GFy0nb2FCqGs86u0M5TxfIsJxtYhFLvhlI3LTLKoalq0hr9FTyHkS5eL4xcpznSw/K0Up02KttUanMkK1mCwU5U7t9HY2/EOcDYoXXXfiP5lu07kLT3ofwfNL4vHv8lhtutlNYNSSgW7q537sGghhbyw4u/f46Jw7HjxrFFvFC4SPIe7xo960Mht8SQ8E9hZmxuPooSYRrcRPrJtC4LR3n/kiqSB2WsUCgWiUS+M6y+/r+QlPPL3oKUr8qDxGPh3Dmw68BB2L5z5xHMGH+HVn0YLdaY4RuYmIiU7KqwZQI3xGgjQd3QYbBz+3Y4f+4cKzOoCUfpuaSsjGUj8iq2UoEZsIOWsM+ehZaWFqbei0tKYMTIUczTUP0ASH0dj0TldRYJXFTJiUhR5F+rBw1e09nVnV9xx8LrfzPLhZZW+I+HfwUTx4+bhan2l/FEchpbeyKekO/x8mwRtnmAPn9m3Tpou3SJkTW9Qe+HwiHqIjCAyGuoNMiw5Rp7QZLOuXjpUpg4aRJTxp5GWMHONyJlHeu2UCiUwHD6Uc3gwT9FyZG+847b3/Vc1asBqA5DoxEFH07ydSTu+4vCoSax7USRl4ssd+c7a4liiFEttnjpMighzWLZbV76Dmkmar92dnSgvumxFx/5Riki/pk33wwTJ09mxbIDh0PMrrVVvok0GAzEo0VFP6ooK7tqcK4aIHp8YsWd0NAwEl57Y+frSH5fCIdCfxIgyfsDLRA3utjeRSKvorICVn7841BTO8QmeQXcLXV8Kx55F4lE0lK3LlwI8267jYFjOhs8Xd4BSbQSeYcCgc6iUPgfyhGcFKrWqwXnmtySuXHLFti1/yBUD6oa39sX/2kilVyM1lc9llWlOwN5uIXCYfbctGsX7N+7B/pQFYteMfkh3TIwdNhwmDNvHuMo2vZif24V3GAHzi2alK1CgWArap1/HDqk9tGevr7cyqVL3vt7VgmMn/znL2jby1DMbD/EGml1Np/TxXZeJzs52sfuDJDaLsZQo340bSpob2tjf1P41dbXQ3lFOaRTaUhh+FkF2crROcJzCJxg8DjWWN8aVlf7XG9vn/GxZUvfP3c9P7XhOWjFCWK4VfT09X4bQfoS1m0R4Umem+ok1UwHLeaFseClLMa2+dK6F4aiTMbylhh58I7nBAMY6pGvz5s7e/vR5uPWR25feE3mdc3vm//lI48Sb4TRgvck06nvoE6qs9fFvdqosDh1N4dKmU9qgcAA+7TpHMh72WAgsIFE4PmLLUfHoqj9xF0rrtl8rsu/vPDwY4/D4KpB2okzp+ejJ/0TgjTbMA3VWbgRhanirb/kHffeOy2ciHJVMu1F0vVO9JwHMZU/2Nbe0XX3KiT+qsprOhf1egD0hbs/DcFwyHj00cc2Y6q9G7PKr2gZya2d3P6zc/eg5b3lacBN65zEMVNZAb++OxwO/dWgqqofoUjt+uZf33/NwbluHuTcTtUVgzVPPE7kHcaMshKF3zdy+fwkTNW2MxSGk3Rzr+e2cQWcFRIUlb3IVU+hrPi3+z9z9/EdTU0wp7Hxus3hhvzrL79YswYmjBkFb+49MA51yf1I3qvQ6tVs3xFIty5JHCQrcXt1RMvoum9HwB/4eTQSeQlFZxIBuu5jv6H/KM+//PxBalb5sWCcjSDdg5NchN5Ujb6kwWVAOU3/fiTivSgJnsQ0/syX772n7XebXoa7Fi+6IWO+4f9q0TMvvAibt26FMQ0NwUQyORGBWoAEPg+5aSw6FG3Hp0dWVbWLPp+2R/fpm5CId8yaOqOztf2StXLZkhs63vfsX6Cix68efZw2dyotXR0h9KZq9KYSylG000LTfB3RaCSWSCSNbzzwRfjg8X59oMX81gcwXPHxvzP5Blo/Mc/ZAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDA5OjQwOjU3KzAwOjAwQZDYSQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwOTo0MDo1NyswMDowMDDNYPUAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC"
      />
    </figure>
  )
})

EmojiAlien.displayName = 'EmojiAlien'
EmojiAlien.defaultProps = {}

export default EmojiAlien

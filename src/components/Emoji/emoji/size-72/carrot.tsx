import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCarrot = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-carrot"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBR4sPfyYxAAAAAZiS0dEAP8A/wD/oL2nkwAAF8RJREFUGBnlwQnU53Vd6PH35/vb/9uzL/PMyrAMDHiBAPViIi5IbljumolZmiG5hFHi0cSullaKpogH3Lqh5HJDy2yxAiISDUlkmRmGdfZn/2+/7btdvOdyD4djN1MHHvT1Etaw3/mbzRw37dS/3J0dUw3tq9Mw3BBG/urN7fCrA+2Kd5+zgx+E954HCBAAhgdc8g/PJQoyOXnj89XpR77SHujdydzIMTycsEb9+TfOZ0tn3ci7b/zkr+4bVOfaKjg2ylSYheHSaCC/d3w7+Oie0tnPnbuT7+mV99NONsoXbv2dycXyTn/G5iOW3nfDH/uXHnfBnAhje1bv2r6nd89TB/Xqpy951r03fepbrz9xYXjHU6eb63dZ2btXVwsLL9zwyn3/vvpN/8yTvsKDhDVocf7bTD75Z/jwx37p9VfuvOaSFW0SqRRxI0JUhC/ULZGX53jYe/MFO3j/DS9ly+jj2t/Y+5Vze9X+X2w3zMKTNjzjwqVV97iD+Y7zRxqdzj3LezZ0y3xyKlt/ZTsdvatX7Xz1WBaON8L03mG1Z0qM3zkerf/1yvZvf/PTD/CgkDXo1sWv4Hd4+cWrTjxy1VRJGAc44/FlgMSCM4wUpW+i4Nr7PssZm14evvHvn/Tm+1Z3vb0RkSQurW64+5a5pUHvqDRxI0tVl4WhoSxTnF598Up1vxpplOHQGnKtTwjwaM1MXS+84OKrVm7/9DXP4dVnfpXvUaxBS3aFsQ80fRnEN4ZhNBQfEBLCIMANBVt6M9eanGvm6foLz/tqcPm/v2373t7e1xgviXEpB5eDZNf80ilLuR5Zrmr29SpWhlDVGqPzWDkbGgeFgdKG9OuIbhXQL9W26897X1zVwoNC1pjrvnsxsTPBuduOfrpPW7sW8tF/7naHP6fKAN0HXwoKmeoW/cu683l+7DPuvmnPwIT9upgLJKGXB5hK4TxEscHUCmM84ixZCCEWZTymVlhCjBWqylP0DA1LVbVit7BU8aCQNeauwa2cPPWzwS0LwxccKufdtvEjvl0s1GfbHHG55/8IfKc7yDtJJiy17jnpxn17XG1EYQN0pbAGRED7kMhbIoQQhXgD3mOMohoqCgvD3DIYWIZddFSrb7789reYs9c9jQcFrDF7TzrAUsnjrO+d5VE/P6jMNjNkxOQitu9gKHyPqz3pxgomCyqNWBtSVwpdCdYonBWCSJOGAYFTRMqRBo5QFLUL6ZfCas+x2rWsrFh6y/xTqKfen7q0//Xfv4UHhawxmzrHcmi40tu9NDguCNRoVehRKQOwgncWV1hw4JzFpx5jQ3wd4I3C1YKrBbFC1q5ohAplFHHkSQIBF9OrPHlp6efW9/vaDfs2z1ftNXnPvePu7u79zz/x5dzK53iQsMZcfcdH+Pnjzuepl59y7qGV7gddLWNhESBDQa9q9IrDBgarLKOPB9+22FzhaoWrQJmQ5lhNpw3ehKQJJIGADTDa48uY/ffmlHV1bxAEXykKfcNwxf7DxHS8eMfHDvFwAWvMVR/9az74rd/ieSefueOOA3cWvdXiCeSSqhpc5bCFxViDxRLPBmjnMLlgciCPaHQMI6MWp0PiUEhDhfIx1nhKXVNqzXDBsnogj0xVj21aLzNPO3n29nZ57/5Tnxfxna87HipgDfrby2/g2Bdusi8888xv77xnjx4uFk/yhY+88ZjC4DyMTnUwTYPWFjcUVBXRbHtGp2q8CWkkAe00IlIhxhiGVU2/V9Nb0qzsKxkOdWxx03h/3DBfPT1N5LZBKfftut7yUCFr0Gdu+GUmszD64l9fetZYJ1lIZiau2b208GwMeO9xzsFkjcGih45QRzSais5kTlUqRloRI43Ieyv0+rWsLlT05x39BUe14qm0h0hhS8+h/VaqgT/aTcmGfiE8XMgalPuMzsimcLVqvnbv0soz1iXRwU4a+ZWhFRGH95airrGBQ5mQRhrSmS4pcmg3EjvVau+vllC771ie6s3rOHJN5pdXsNoRhRFRHOPFEkUBEtqVqqz+bN+8/ToIDxeyBm3MTuHJW3+leNWnzr7ODIfPPZQXR+IE8R4Cj3MW0QlJEiORZ2SmJi8NYrP7plvrP1PuDNPrbrjlV4ZFGWdZShTkKBWQjTaIRiOCUUjailZLaMXu29un45u17m6LHUv2mSPmY689xIOENepll55NK2vM3rJ718dt154jXcjLmtIX5Lqmva7j09FMsvEcI32qYZT7xfjSdWrT3r0HD1yw2utvjMIYhSBKoZqKYEIRTgpJ29JKDWOxYyqhnzobKeMW8fwScI2xjo+/fpHvCVmjXnPaL3LuR88/ePrxp73l4MoChdbnIIIEAVEQ9pIwLVojMmPCimo1Jb/bJXrRvK5M9iYiQTLSGEVCgQwYcQQTnnTE08g0rcjQCRyZeHCunVuP8iTK+TEPKM//I6xxr/rd59JopNtvuXXX53smP74KNM12dtvMEVNBPzxw7FCXHNM8ll3XHqDUBgkFCQTVEGTUwagjbHjS1NBINI3QEitP6MF7h7Oe0ItvqegvRes3oeTeK37tEA9SrHEfvuCP+diFX7hj4+z6r0VJQIDadfTWjQfDdjW32i9I0yb5yAqN8YhQQuJmRDYXkG6CeBLSJjSbmmajJk0tEoLBU3mP8aDABM7vc7reLdYNsZaHUqxxo51tyBbxmzds3pc01N4t0xsvas0ExZ5D8x2R2GVBxuBeje4J6VhMNKFQI0LYFhoThpHJik7bkEUQePDW4x0o74mdJ0Ouj+AXcP7tdcDCFect8lAha5z3HlFCv14ac0b/09xx6bG33L3jadJvfTftBbO9nX5KTAAJ0HJEExCPO6K0IlSGAI+ygAc8KA+hh9CB0mCM17rwd3nvyy++bYmHU6xx/3rj33LTzf842i0Xjx9tt3o7Du58rVlqrU72Zp2shGOBiaAJwSZP40ihOWPIsppUPLFXBE4hTiFOIVahjGAG0Jv3pr/iv1QWXOxq33WO7yvkUea9p/tsofl7/yu0+29vUA+SQGpU1ijU9Mzw2X//S/4lx7zlrKLIjypbq0ctH/Cb2r1m1atWZhGn6rgepFvC26IJ01FBuUGsb4lDPIIDLUiAE+Ut6IFn4c7adOdNT9f8I/i3eOv3xtMpd1+5wPcjPEqKz74FyVqp2bfrODNYfqK1+iTBHaG8HQ3EoeJwIeiMfitvb73pIzvueuM38ttOu6/OmxyaCht1tMdj3KHlQ3FJ8Z4tz1z/5yNTVVsZvc0Z+0Rv/RO9U8dGYfTnIuqg1e4kU/tjdO5GVu+vrj5wW/lXKmbn2ESytOfuIcVtBf8R4RFWfPl/kJ7zdgYffflJbnHP+W6w8HOuHs46IRDxKByBCBIoJMm8SccH/7ziw0sXd8f7hp1gxExeQ6r/baG79JTuoP+BlX7vC1mEXf03ePklbdqhlbuHYcvYYLN1HIhbamlwKIuCQI044xtJMzi0slpVl/zRk3mafJ7/jPAIKq+7nM+e8Vpe9L6zz7aLez/oe4eOEzQShRCGiAgSKERABLwI1gi1Drh2oeSv8qlr5xvBny7q3ssGlb28Xy5+KYub7s6vLnC4CI+g1YtOg7T1eL+8508ZLm6T0KOiCIljVBCjAoVKQ7wKwHm8t9jaYkpDlWv6za07PiGz+/9m582ftjK4MpGm+9bV93A4CY+Q7sVPgbQ1YvfecYUMl14koUclESpJCeIUFURIlECSIEGA9x6cxdUVelhQD0ry3NOdPfm+9Gdf8srbPvHu68/54i5EhMNJ8Qjovvcsgq0nhm7/rl+XfOU5EnhUHKKSGBUnqKyBNJqQNiBp4IMU7xO8icFFqCAiVCERnuy+mzdz09f/6Ix3/OmxB67+JN57DifFYbby3mfjb/h79Lf/4efor/ym8iYLYkWQhgRJhApiUDHEGZI1kTBCRBDAe8G5EGcCvFOIB7Qmv+NbT1i+7i8vmnnqOa1y93c4nBSH0eL9XTi0G7/9lE30F98mppwSBaIUEoSoKEW1mkgjQ6IQxAMCUcj3iKsRo8EqnA3xRsCAG3RZveOm59/3V1edefdfXMnhpDiMgk8/Hzn1rED6869TNn+iikBFColCVBCDikECRAQiARy+GOBXuuAs3np83ocqx1mwTuEs4Dy6u9JZvX/36Vdf+Id857Mf4nBRHEb+/lvx3/raqZT9c0W8kihEkhQVJUiUIXGCSAAOqC2+rsFqvM5xywuQ5/ggQ9caWwxx1gOCd+B0he4tj7/MO2XzAYdLyGGy8NYTsUkjiQ7d+TrxeoMkCpUESBIjSQOJm0iYQagAD9pBpXG6xlcaV1VQ53gfIT6hNI6yqHEOHIIKFErhm4jP44jDRXEY3PMnbyI+dBvB4j1PEVM9TwWCKIWEASoOUUmEJApJAiROwAd4bfB1ha80Lq9xlcNUlmowpO71EOMoDCyXnloiVBwTpVH3GhEft5ocLiGHwch3r8K2ZraoYnCRiJuSUCFRiEQpkmSQZZDGoDy4GhTgFL4y+KrAW4urDbq01LWntpa8NDivKKxgiBlvtFzYaNy35ZU/w7YXvIHDRfFjtnz+FnxzZFyq/GKFPUNFgkQBKo5QaYLEMaJAvMMbi9caXxZ4U4GE4ANsqTG1oaodReUZlp6+hl7lcRKhGm3s6MQ9Qat5fevxZ3A4KX6Mli7YjmuPpaq/9FvK6ZdLgBAqVCNGNTIkS5E4RAIFeNAGP6jwwxJXFrjhAK8tXmLKEorSUxgYGmGghVJifGuEbGpqPpmaftfk8156W7j+CA4nxY/J6u+eir/rdtRg8Rzx+jwJiSRWqCRGsgxpNpA0RkTAeXxl8bXBVzW+1lAZbKXR/SG2qHASMjTCQMPQCpWKcVmbdHqqn85M/37rtDOuOvC3X3bHvvBNHE4hPyZ+z07U3Nwxqh6+WYV0VChIHKKaGSptIFGKBBGI4K3HG4MvNN4YnLH42uCtwWhHUTlKG2AlYGA9tcSoVptsZjpvb1j/h6Pbjvp4eesN5r+ddwmHm+LHYPnNW3ATG9pKl+9Upv7vQeAJkgiVZBCkEKQQxnin8EbACd/jjcPXFl9pbFmjh5aqFAqt6NeQW8GHCaozSmv9zGDsiM3vm33y2R/wNii2n3cJj4SQH9H875xI+/rv0D9h+kVi619QEUigkDhBZS0ka0OcQhCCB19VUGhcrfHWYkuNrzQm11SVI69hUHv6VihVSDQywtiGdSvNddO/P7Jl60fKHf9aHHnepTxSFD+iYHWR7olHbJaiOk+Jb0igkDhCkgzSDNIISQLEBUCM9xG2NriiwvYrbKHRpUEbqJwiN8LQCBURYWuEkbnpXmdu+vdmn3TWh1QYFlvPu5RHkuJHsHzRyYxfto/A5C8JxJysIkHiEEkbSJRCEIAHFCAanw+Q2uAJqfslZphjKk1dOYoahpVnaIU6SIg6HUbXT/Y766beM3Hk1o8VO2+qZ1/0dh5pwg+pe/FR+LsOwWhzuwyKzwZiTpRUoRpNVHMUyTIIQ0RCUAoEfFnj+jluoNG5ZdgbYrVFayE3MNDC0Eeo9ggjc1N5a3b6PRNbN3+gWFktN5x/OY8GxQ/J7V3GjY1vlkHxwQB9osoUKkshSLEuxKsQVAiRAhw+r3BFja1q6tUedligVEyvDlgqPX0NuQ9RzTad2Ym6s3H9hzunP+tDQ+mUG86/nEdLyA9h+Y1H4NJGO1zc/06l9VmSKSSJUVkTiRoQxXiJcS5AKo04jatrbK/AdAt0YdHaoL0lEMXAKYY2IG62GJ0Zt+3ZyU81Nm39g3LHjcMtb7iMR5Piv2jholPpP+WlSq3Mv0bq6hUSikgWIUmGBClEKZKmBFlEkMU4F6JXK0x3iO4X6FyjtafQ0Ks8vdITBjHSGiWbmXQjG+Y+19qy9R31wv7u5tf8Oo+2kP+icGkvrX+88hRVl29WAamkISrNUFED4hTCCEThtcXbGqU1zkLVrdGDCquhNMLQQK+GgoC43WJm3VSezc18orX5yPcU8/cvbL3gzxARHm2K/4KVC4/DzW5sBaZ4rQrcFtIAyVKIWxBlEMZIFIKA1wbXyzErXdxKj8AotI3o1bBawmol9G2ATZpkU+O2MzvxyWTr9otWusNDR771SkSEtUDxA1q86ERG338HwfyeV6mqfKVECqIIawOcU/ggRsIIUPja4PISmxeYXkm5WlD0S7yFyiiWtaLnI3yjQ3t2wnRmxz81MjPx7vTAzsEJv/Fh1hLFD2Dvh19B2J9n5YKtRytdvF4pn0kcEjTbhM02EkRYB9YrvPP4WmMHBXZQYoYVdWXJK0u/NBgvSJQioxOMbZrNJ7duvLSzafNvDwf1wvqnnM5aE/IDyJZ3o9cfm8R3ffc8ZfQJkkVI1kLSDhImSBJDHOHw6EEFwxJXlbiywlSGSnsGtTD0oKOYbGSEsfXr9rXnZt4/e/zJn6z63cHcaz8CfIa1RvGfOHjF68iu/ybh/rueo2x1LpESsgYqa6OyFGkm0IghClB4lK2peyXFSkldGooaBkboGRj4CFodOnNTS+ObNlx49Fs/8yfO28HUS9/FWqX4T4Q7/5n8tBM2+aJ4q8ePkWSotI0kGagA4gBiBVhcXeIGQwKj8S5gZSAsDWG5EoYqQXVGaM1MrLbnZt+94fSnfaH/tQ/50ee8lbUs5P9j8beOx6fNkWD+vncqVz9B4hivIpwDpRReFFQeX1b4usQNhuh+gelXYANQActOkauYxugIY+unl8fmZi6e2Lb9su5dt+nJV7yXtU7xH5h/2yl8/v23Ikv7X6Xq8pVBGKig2SZqd1BBiK001ji8dbhBTr1vmXJfl2q1JM89q7kl10Kr0yJbN8PIxtn7xzdvvGDjU555mTG+nnzFe3ksEP4DB990DEhwZLhy6OoQc0LQaRE2O6hGE+IYghDnPLpf4FZX0asDqoFGa8idom8UOmmSTU3S3jD379Hk1Ju3jIbXzQ+0n33DJ3isUHwfe9/xDMY/tAsp86d76492KsQTImGMdwHeC955fFUjeUnd0xS5I69gtRSWKsUwyJDRcVrrZ/Z15ube5b75lWsHp73Mz77hEzyWhHwfcmA3C68/els0WHpjGEmisgxEYZxHeaC2OF3iBkP0UhdlBOtDVoyn7wJM0iCbmmRs09zO1szkb8++5NV/qX/mycTbz+SxRvEwB//gxUxdcS+BKV+gxG+XKCFIMuLOKCpt4uIUoz16ZUCx0KPKNfmgpioNRiVUrTGyuVkzeeSmr40dddSr1p9/xZfzPUsufsIreCxSPIxdup/5C0+f9dY8X6JIJE6RuIFPG0iaIHjssGLYLcgHmmHuWcphSYeozgizWzfsnzzmyHdObjvul1dvvvGbsI/mSc/msUrxMG55L14XTxTlT5A4RuIUwhhrLHpYUC6tUK+sQG3oVooDpWKZBD85SWvT+vmJLZsu3P7b//MPgomNh7Z/+HpENvBYpniIPVe8Dfemr4VW67NBmhI1kKSBD0J0rikXB1QrOf1uRbdX40VRpC3czAztLZt3d4444k0bTzr5qt4X3+Unn/lr/CQIeYhqx/W4u2/eltT5U0VFEGV4FWNrgx7W1HnJsFvSH1gKH0K7xfj09FDNrL+qs37usk2vu+Sm7je+5Edf/Bv8pAj5v26/+KV0jzwj7PzLx381snZbkLZxkqELh6tKym7OoF/QHxjqOEWNjtGYndnXnpn9wNjjHn+Z7i7nIsJPGuEBty8agot/FhdlJzW6e76cRdEmohTCmKqsyXs9in7BUINJmyQzM3ljevrvGlMzHxw5/tQbzKBr1p3zm/wkUjzAvP8FHPMn3yDozj8n9GzyQYLWhqLfpequMiwMw7hFtHGzGT3uuBvHjt523vixj3v1fX/3peva07Nm3Tm/yU8q4QHfed0TKDpz8cjBWz+XiH8BYYLWNcaDVhG0x6yMTd6ajU9e2Zicumr9qy7cM7j287TPfD0/6UIeUEhCtW6b6e/fcW9laq9MLS6M8a1OJaOTO9OJyS80pmf/bOOzfuG+4d27vMg4Py1CHrC88RSC6//C5e2JD8ZuEKZZemo6Nn5nNDr+9WRq9rqJk568N99/j5Ppx/PTRniIL7zlxRjr0/HxTntq06begW9cWx3z4nM5+qxX89PqfwNU+UyAaRBXgAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwNTozMDozNyswMDowMDR+fbYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDU6MzA6MzcrMDA6MDBFI8UKAAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

EmojiCarrot.displayName = 'EmojiCarrot'
EmojiCarrot.defaultProps = {}

export default EmojiCarrot
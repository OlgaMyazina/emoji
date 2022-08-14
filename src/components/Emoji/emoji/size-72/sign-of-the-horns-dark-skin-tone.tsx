import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiSignOfTheHornsDarkSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-sign-of-the-horns-dark-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBAUwgQllJgAAAAZiS0dEAP8A/wD/oL2nkwAAELxJREFUeNrtXF2MXVd1/tbae59z750f///E8V/ixCFJExoiIASatlRQDLRFLakEQn1pUR8qiqr2AVWVqqoSrXioqlbwVCGeqgpQkaCICrVUEQWKDFUCxEn8E9t1Jp7EdmY8c+f+nLPXWn3Y59yZsWfujO3rm0bpsWZGHt255+zvfOtba31r30N4Ax7ve9vPYX5xcXrr5OTbsyzcZbCr/aJ8dmmpe4qZy+8/f2Zk56I3GjgfesdbsdTr3Ts10frzRp59wDmeACAi+nK3V/zj4lLn771zV/796RMjOZ97I4HzngfvwXx7acfOrVs+PzXZfDIE32Jmz8yZ926H9+49qhZevnT5qcN7dsjMlau3fE5+o4BzaNcUdm3bholm41fzPLyf+fpL9975LPhPbJ2aerTVaI7kvG8YgCYaTXztP48759wTjl1jvddlwe9qZNnbJltN/OJD9715AJpqtfDggT25Zz5AQ5STHTEzH336xCl+UzGojAIiahmwc3jWIRBh/517d+VvKoBEFGbWgGHShrzOAJhh0jvn31QAGQwAOQM8bH2IzAxmRolKbyKAquUTzGgIPjAzqCnUDKZ2y2e8KRrev28XlvoF75ieaoqozC90+1nwdvrSpdsHjVVfFQjDYwzRbBTw3CBAj9y9H1fbbd69Y/vbW438oyH4hwB0o8j3ur3iKx//4C+f/+b3fogfnz4/coCIDEQgM6ONQxEdM5NhoThygN5x9DAuXr5ER/Yf+Nhkq/nZiVbjoPcpQlX114P3x7779E8/feeunT8jBn50ctQgEYjIA/AVCOszDVAABqLxaNADB3ZjstnEob13PJqH8JfNRnYwBAciAhHBOcfNRvbeZp792cuXL0975tvAIAIxBdpceyRVsI0HoDzL8JaDh0FM7wvB3+XcmmU+QvDHWnn+xPTE1MgBYiYwkTfAbXbpNDaAQsAXvvEtcuwOOOZ1meu9m2bmD//sxZP+gQO7RswggIgCAGcbFAQAPDONJM1vSoMcM/Ztb4KJ3LD4947hHT92x45de5h5ZpQAZT5AzRxtdFNtxfdxMcjMMHOlY1FkMUaBrpMdmBmJZe5wI2QjZZBjB8+OARBsYwRMbXg5MEqAekWBD7/zUYjq+aKMFqNiLSYREdjxNDPd60dT6V8bYh4AW10UrfNCGrxmTAxqd7tod5dgZqeiSKcsI0zXXoRj9t65+7/zzAkc2bt1xIWiZWbmhzGDqhs11hA7+fIVRBEQ0UtmNhejwNZCqNIhInrgnju2TuTZaMJs3/Rk1T5oboBTGx4+BgvEQ7LJ7SgUS4mAYdY5d0FU94sYnFszxOCY794yMbXdObd0Mxf1yJH9WR7CtBlyAJ1Or7vARBLVcjNzqrZuhFn65pmIaVxZrD46RW8+C+GkqL5LVNfNeM65O5j5cHD+wmbedzIHPvjOx3Bu9uK2Rp4f885/gIneAmBKza408/wpUf0HjTGomVNVqF5/g1aEWEY0mkZ80wC1Ox186LFfiD848cwLpgZVhZldF++JQW7SO3e39/67h3dvwa6tWyEivpk3DgE4bGZTRNQx2KlX5ubP7922Tc/Nzh5qNZqfa2TZr4Xgm1WoQtQgIo8XZXxvr98/ripIDFKY8dp6Q3BETEw8PoCWel0cf+FZAHTCzDqq1lpT1IgQvAuO3X1P/eR5/OLD96Es451TzdYfhOB/yzm3j4mCmcUo8mIjZJ+fby/+00Sz9cd5lj3ZauYUgkMtIWaAqlEoynf2i/zhIkZfM2hI15ZVGW98AJ2/tIg7dvQhqme9c/MAWuv1TN47MPPRg7um8r3bd2ybaDT/rtnIP9LIM3aOQUwAkEuUhzq94nNZv/dWM/1Q8I58cHCekQSEqvrKQBRootVqlQuLyfOp6pzVDBoUH55GNNK6IZSJCASaMdgFM9u3Xr3iHCN4d8+WicntzrmPZyH8RiPPOMscmFcunNAwTGc+fLKUyESJgSvBqc/rHCPPPIgICsOwDEUEHlWuv6EgLWPEUq/bVtGzIrp+1esY3vkDmQ8PEejd3rHznquw4YELwEzwjpFnwYsqq9aMoLWZ6RLAZpaAXgOD9BvijXyj2wLQ/OIi/uRjn+gbcDqKrKkDy3c7bPXO/X5Zlg8y1+DQtVpRgcUQUayXGVcmgHpg6LgOw2vgIYKZkapCTccL0OJSD1/61r8AwAsiWgxL9c1GxnkWPlJKvJeZat1ZMySZCWopKw7rwLliUQJ1I3dkNK79DQH0ymIXIgJReU5U59YLs1qom42cXRKddS+VBpqTmuJhiyKiAXPWlhir6iBMEfEk0ZgBqnsiAOfN7EWJgvXsD2ZCHgK8q/wtGrLoVH1v2H2nBLA+g5b/nCaJsGXsGgQA/bLAlYWrc6r6XBTFsDAPwcM5BzNdlxlEgHcuAWk21MpJDLo+y63xnhmACXo9AJp55TIO7N4ravZ8jGLDhDCl+6FzvkH/FrxHVEVZyppMqgaC6b3WCZ3671KrQVvweoTYxYUORARR4hlRLVRsqBOZ+QCtWpM13XVRmBq8c4hR0On20e0W6BclijKiKCL6/RK9XomlpT6KslyHaYb6twRqENGdTIRfevgt4wUIAEQFAM6K6ryIDtWhLHiYGopCUBQRMQpiFJRlWnin20en14eooigLLHV7aC91sdjuYnEx/Vxod7HQ7mChvYROr5eYtJZfpMkkqxrVAx9/3wfQL4rxVdIrC0Yzu2Jmr6nqnuq2rRk+IXh0ewV6/XI5TCrPVE0hoogilenvYWapHiICc0rtjlOtBAAZAmBAWQo4qy0fWwHa4GJ2f/5rX3atvCljByg4DzMIAWXl9K3XVQ/EtyxLRE3DzqmJJvIswJDm57WsUFXopSKZVnwNHMVBQRnLxMYQHIJ3K27QIMNtbYbcM9H4AZJU1JHBbxiiVLUGRdItNLIMjUaWFnWDnjSQSoJakGMUFGUK3dTeuNq7BhPtMKLczPpjB6hfFDCYz7MsDC1WbZkJ/bKAiKAxsGENtzLaq8M3BI8yCnpVGNc+EgjbzWxCgYXXRaRF1JMhUJrCrOcNg6p6SETRLfroFQXS6Ghl3rm1I3iHyYkGJpo5RBS9fgFV3QbYtlsd/dwUQFnIkIfgmTlsVGoQAcF7ZMEjRsFSt4ter0AsBTFqld1KFEVEWQqiyEC464xX7S7bkFF5HrBluoWJVgNEtNXMjigUj99/ZLwhxkQwwBFVppSt6+wNqt9Wo4FeUaDb76Pd6VZDRl6V1QYdP6W8bVY36ITgHeoNE8O7VMbkRAPO0TQTfWap23s2C/7FmwXoply3g7t2gEB7shB+J8/ClPcOxLi+nSAsu3+a6iIiQpQ42BBVTyh0UCnXqV8HbFJNocqc3MjNdOmOHcxwoIwxvjo3951Du3fqxdeujodB6Z5bfVQMIFyPz4pUzQTvPBpZjm6/j4WlNrIQkIdshYWRlq5mA8CICJ4ZjgkxKogTIzeT9bIQkPnwm9MTE18MPpwYW4hVfrBWN36oztbgDPYSMSc9koiFpTYAQvAewXs4Xk7h9fw/OI9GnsMJgyMnpnqqrNthCCXGOub9Zvbz3rnxAVRKCTNEVS21ZtC6egW4dKFJcxwjwCPPMogqekUf/U6xXAlX2a3WZMeMqYkWtk9PgymFGLNWzuLGIIEoMLt7Hzl6FOcuvoxzlxZuP0BFWcKAqKblxpsE0t12nuGFAXgQCBbS9TtmlLFMeqM2cBYHlbMq5hYWoWrYu8PBewcVg7oE/rAarL4uJrrzb7/6dXd49xYZC4MqqzWaWZkGiNgws3hvUPUAIgBDgB8Ib5SQnEozmOqAQaKKGGMaFnS7WOr20Gzk2Ow8UCvRV9O85cGqJmPSIAVSH9Zf9mlsaApO2lPpQmRwlDTiYYZ3OpjU1qJvVTMbY0QpEUUZUcYSqobNbB6rs2ell4tLEbLH0Xg0KIoCsA5gV1WrjLOJ1sD5WkMSMMxJeOsJRB1WK5kq3iNXQxkiHPNAvIeVQ1WOhabG1szswpNPPKbHn3tuTGneDGWMHTPMSjUGru/8UNMdBMcAoTLeK/FO71GHqg38nQSch5kiCz4Vk7XBP0SiU3ga0mhKo5pduHjlMs5dGlMd1O9HHHvX4/FnZ0+dXbW4TfWfyecBEUKdipWv2zK3DNCyd2SWnMeNbp6pQaKmNkXlqqqeL2McX6sxM9/G+dkZiOopVRERdaYKY9rkxDd5PsYMIoNyldavAciMB+lfK7fQ+6odWeNmGFK4iyRwogiiyIUixnO1KTcWgACg3euCQM+p2lwU3SlqcMPMs/WKSALIKkfgWoCwDJySVcUfr8nS2nxTUcSoKGPyn1Tt+Hx74ZVGdnMfH7vpDTSdXg9FLM+p6Xmpe6ZVtuemnZ3K4ErmWv1VbRwf9G9U/Z9WdDS1XVKDk8oCRVmm0qCM0heV7x7cfUc8fXFuvABFEbw6P3dZVI8PAKpT9c1ZYKv/1bZrlbF4Ra82+MSPAVo1vCKKWCZwiqp2iiJn+mX5g3a3M14/qHYV7z94WFT1P0SlF6NAYhrhJJ/5Vo0wWuUzo5oV1qFYOwCqComKMmoaE5URMUZEiRCVr597ZfZsryzGD9Dp2TnMtxdRxPhfUfRkGeMKcwurUvat4USrW4faJqkN/EpvyjKiLCOiCEqJKKP8T4zxK/ftP6Ddbn/8ANWF3OmZly5EkW+UA1qnqYOpQW8VpGucgmXWrACnXA1O7USKylevdjo/6ZclLrzWvulLuKVtarNzi3j4roMQlctE/H4i2l7vEBsYW5Wq0qC9vhF0llGqdWfQQogtZ6soSaBF6tbkhaj6p808n33m7Mu3ROBb3se3faqBV1577dJkszlNRE8QiJOYVt4Nrp1X0Q2Rx7A8E9OqfdCqSk4OgFZbchJAhcReP5afffrFmW9ONzNcWey8vgC9enUJ9+zfa2WMp5j5rQCODLLQgDorfq6YcQ2Fx2oxtkFYqSzbsTUoqrrMHokoYvzKUrf7V3u2Tfaef+nyLUvgSHaCzs4t4u69O9tFLE8S0bvNbBeu/byJrTCxanCuCz27rkg0XaE5FTBRFCoCqfzrBFBEFDlexvKPGnn20k/PzY5iaaN7+kunt4DfPfbRmRPnz5wG8Liabq8/mr0uUFbvCVurG79WkAXlKnCsYtCgpTgTRT61pdn60YmXZlGUMpJ1jfT5QY8cuRMPHroPL7x05leY6G8c88Peh+Q5u+QGeufgHIMdLRd/tDqdp8q4sjuiYlBCrNAbtRReK8D59NMvznzz3n07cfrilZGtaaTPD5qdW4TnEk8+fuzssxdOfU/N9qjKParqTA1SLUqk0pSV+qJ1u1B34jrYJlOWyTSr0jdEZTAWiiI/jip/+JOzF7/95S9+ASdnLo9ySbfvCVRvu+cA1HRncP73AHySie7yzpHjikHsqu10y/umV7mBpsmjrjPVCtZU4rwoqv8sIn/9b3/xuecf+8yncHb26sjXcVsf0fX2o4dARK4oiweI+Lc98zFiPspEUzUwgx2rgxBbXfOY6cCr1qQ7c2b6fTP7UhHjv2bOt585d/G2rWEszzC7d9929MuSp5oTu/MsPETAowbcT8BBIuwg4gaAHGbeAFcZZ2ZmpQEdM11QsxlVe9pMnypF/rvVzBYW232cmX3ttl772B/ytn/7BD78xHvw7R/80DFRyzme8t43YMgAC2bwokJMrFGlb2pdNWuL6OKrcwt9IqAT8f/H/5XjfwEY7tmitnyfOQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwNDowNTo0MyswMDowMGipJHwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDQ6MDU6NDMrMDA6MDAZ9JzAAAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

EmojiSignOfTheHornsDarkSkinTone.displayName = 'EmojiSignOfTheHornsDarkSkinTone'
EmojiSignOfTheHornsDarkSkinTone.defaultProps = {}

export default EmojiSignOfTheHornsDarkSkinTone

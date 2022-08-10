import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const PersonPlayingWaterPolo = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQcFAQ3ouwF0QAAAAZiS0dEAP8A/wD/oL2nkwAAH5BJREFUeNrtfHm8ZUV17req9nSmOw/07duz3U0zDwLNoIKgMYooDpFBUWJegkOSp0k0L09jBocHxuCACdFnJM+Qx6CgIoM4gECwQaCbqWlo6LnvfO+5Z9hnD1W1Vv449zbd2EaGJpLE+v3qd/fZZ586u779ra/WWrXOBX7dft1+3X7dft1eso1+2QVjty4C4PxiZcGRfmnx6SroXwwVKIiFuFYKW31EOP2hKq7eIfm4RIdd+98DIHnsjWglGbTGAqHC7wv8d5FSC4kCIr8bpIsQziB21kg2+jA4vZSCvm+CTRod8d3/2gDt+sEKdHYeBGfTxX7U93kdDb5JBb0KqgSAIHYWgIC8TohrQfIJSLq9BrEXQxUvhdi0cOwd/yUAUvs72WrMYmJkYylP44+Nj+1+88TEqEpaMaBCwOuCKqwAeT0QWwNIg3QR8CqdwvFHYSbfHh09hEeuHf4vAZC3v5NLlyxE2qqfkbP3jo7ugygsDmBqYjMqVtDRt7pNPK8LBIbk44AwiEKwoNPlsx8a+/6td3YVZdv+xt6xYwcqlQrddddd3dVqdUGxWOwJw9ABmKp0dIyuWLmyMTk+jmOOPvqlaWLN28sItI0S7v5a6nrO6+hbBaEAuXFgKoJUAaXuFQBbQDJIPgWX7oZCDpvsRn1mpw0Cfr9z8tVmtYYV57THTdMYUVTCFVdcsaRer/+WiLxBa70iCIJyEATseV6NSG3UMNeUI//btXqjft57fhdE9NJiEDMjExqIk/ToYqeGkhRp1oBfOAh+1I+4NoK8sRVBsRfiEgAOEIs0HkOWNqCU8wh0clw484pCtNMAd+CKK65Aklj67Gc/e/ru3bv/moiOC8NQ+74Pz/OglAKAHmZeZhmvNi33yr4FS/7y/1911c6XnAbNNgSTVakkmev2KYEzs3B5HQo5xNZQKHUga25D1tgK29qJvLkVWTyGtFVFqBMUAoeUOw7v6Fw86FUOxX333Ycf/ehHuOyyL54wMTFxWZIka51zmoigtQIpBaV9eJ6PMFCIAioIuwsnJ6a/VOkcXHz1td99aTFoZAqwDjTQbRW4BpsSrPVBdhbCOYR8mLQG4ia0YijJ4escYRkQm6Hecqgl2Zpeve6kpqtec8+m1TjjjDPKd99994c9z1stIiAihGEIEYWOoo+DyhPo8kYRqjoCj+EoUJNxx1mTWTo+PPzKD/3ktrtarzrtlJcGQGMzAmakHSWJsySGYQumMsRMglQBzTgHCaMYVSCcAy6B2BrENtBs5RibBqzNChV/9uDbvr8Bj2MT/Kh0ZLVaPa1YLMI5B2ZGoVjCsoEEB/duQG+5Bt/3QEoBIiCpY2HXLtoxW33bZN5/nalu+n7uBIGmXz1A9z/GsA6TB/WqJ2tNXmZcikLkIFkGUSFmpgwG+4qQtNp2FDmFyXPMNhxGpwFjgZ6iQNKmG1wOfPGPLsf555+/ttls9okIjDFgIbz8cIVjF9wP09yFbY+3YKygq7uIg4YHoLRGnmSQ6kM9wh2/eexxn/7Bk7d9g18SGvTV71h8+oqophTdMNOAnZoVNJo5ms0GarPTiJt1cD6BZn0SMzOz2DWWYMtuh50TQL0p8LVCwQ8nSPX/66qDDoGIqDzPVwdBgCVLlqBYLEJrhcMHt6GitoO4hUoF6O7yEfoWcC2AU7isAeQ1RNnDsmEzkDR2v0RMbJpx3z8ZBB6+lRm8pRHLqbkBHAPOCSZnBdYxWACIAETIDdCIBUHgobNQAmXBdzrNgru3NBbjmk9+MvA8b2Dx4sUoFotQSiP0DDqxETapwwsOwqRbgfse3I7hngwndQkUMhB8VPNh2TGebV+Vn8Q3bzv4peNJBz6QGYxEAf488PFYPQZGpwSj04IsB6wTsBNkBqg1BNU6wwlBpQF0ouJSWP5uzb87N6t+G0ceebguFKKitRZaayitMdBdgLKzcNbBHzwdI/FCXHXDI1j3UAOWi4BzMMEqrHuyj668aVfhlk0DuPmGn7x0POkjz0/w2LUFHPy24M7138h/T4C/clZOSTJ4k7OCJGt7mAJAKUIQhKC8gMakRd25Hy7uDn+amgFo5SEIImWt0yMjI/B9H0EYIfQVPMmgYKCzjTh04SDe96ZOrF5ZQejnIFIohxlee2KHO2TRITOdlQgd4Urcft+WlwZAALDm7Qnqtyn8803uzrNP0+f3ddJbeizOEsHLCiEqSgdlliCKlAbXHajZRNBZ3Nnft+DTW6fy6UN+byP+4R82o1IuG2NMM45jjI6OwliHDm8Q2UALBS+Dqt6Lfr+AM19VgmiBdTGa9Ra0H2NZp1bL+yqdfnollq76JC76i+//3H26G18HsGg12L8QSXUazsT06ltffIAAoOO0GADwNx8vj5CHL8/skG8o7QY8V1hQHa1c3Ki11vpeHWwtMo5cT1/H15ecccL92b0PzgUyhHPPOy9dd889jxpjznLOoTY7i5GJCMkiD0U1DaUCEBREGBSEgDWo7t4FzwMOWtKLzIL8BcDsk1v3e487pmMQ06CtP/qPHYXsnv6+NX8rs7fNovGwo0V/8OICtEeoDm1izqJqD1yypqZ8v9KcGl+YtixyFYEUY3AwWjfY1//VkTt+5obe/wAAwolr1+KCCy7A0NDQ97TW7x4fHx9qtVrYORZhNutFBVvgBQWQAMoXiG2glQFUKMKyQZLYnKi13YyciEfW3bjnfvKPK+jjTwdAnlpzTH9WZ+/26777aCGc/n17SPSK4K5PXN+r+r4uV7+zAWSO3nHtgRXpX9Qev/RwLOislKdmqu/PM7soDD14HlAoqlZPd/ny79y/blc/eaBG26E74ogjsHbtWlx44YX3aq0/Y4ypGsvIrMJIOoSkKcibMVyWg02OZiPBvQ9M4JafTOEHd81g585Wy5dwNG8Jzv7E2NNPtXMIE9bHZK5W7thw+5VTW27+1pFHdfZYU6mtX7ftFVs2bvrzhj/xzaxv+9vxP38T9v+e9uKlXOfb9r87Bh3lrmDb7kc/VGtmn9BKFTzNcJyi2Nl13fLFq38nTuLqwgvu+7nPfu5zn8MRRx3jffOaq/64z2/81ere2B/oCtGTrEMlmET3QAeKXRVoP4CQB4YC4CCOH2w2imd62u0afPsDT2c7P78cTw2dAg9SGdn5+JlZPH2WQnpG4Nue8VGrlGL09QPDS8pP9PUuOj+j5L7u161/8QAau+kPUOk/Uo+s/z8XtmoTlxB0t3UOxrQQlDs2dvcvf1eSTDxwcPgG0AV/t98xvv+tf0TUs6xXrf/4pTzxs/Oc16NdtByq/gi6ujQGhsooVkKEhQDa9yDCsLn7ehzri3wfed9bHt7vuHd98Z0IOhaHza23vlbMzs86l602OcEYQXevxco1/d8b6F3z3hx2oviaWw88QNsuPxyUdCl0j5xj0pm/hVOD1jKSrAkd+LOlwcMvWnHuPVenN/0uotd/5d8da9clFfh9By/auvOJa+r1fK2UViDJQ+h4CyodCl29EUrlAJ6vQaTGNfGFLLi51GfQd+b2pxkkGwA6Chi7IkQ8EWBqd/LFz33BHn3YoRe1aru/pMh5ufVAxBgaFju8dPjjfdH1F0vtf4g6744DB1Bjy/X4xPKz8ZHrXn6WaWz7MiwNOwu0kjqgRcLKwKXdfa/+M2tq2cDZ3/mlXzb5taPxgcvX4xPnLvjzkbH6X6amBOk9HpkBdGsrPGnB8xSCYseI55KP+s1dV0lQsqd8ZnyfcXZe/XIoFQ7Byz+RNRovY2M3hWHlgdGdM6ePjjbeoZVTEIChEAQ5liwvrl889LKzMmt29bz1vgOzim2//Fj4rc/hT69feyJ44mJPqWFHBGMaADkE5a77o9KCy5rJhqxj/Nnln0u9R+BPf2s9wmK4uVRkY2PxrRfB0w556WSkQReKU3dgsDP78Yrlb776iQ332OM/ftvPjTM92YLn0+D05NjRSTMbgri1vp66iCCkFMgxgagdCaVpgPpstjrumj42duku+cgS0CXbXxhAT/3NUeg6uAvNrbJSY/SzbOKDAQ1jmjAmh4rCph/1fr7W+NnWztKp6PrgTc/qy0xrCp19IUIN9PYrFIsGU/k2xKYEpTQ8rdHZ5WGgZ/dSv3vrolUn6a1XXvZuFQ29TdVG7pLfWPU9BN4iFLuWyK6NM4/QzvRNhc6hUmaTNY3ZXe8XM3uGgvNYFEgAUjIHkivmnP3G0qVn35gWHrDACwSoc3kFtkadSo38BZv4ZIg3l9ZIYR1xFPRcrVqVW8LiH+lr3/E5t/vR+7Hw0GN/OYNO3oHrzslw5v+qrPKizO/sVag0RjHR6EFTCmBl0d2lUeqMThSz40qf3PoSSkE9bka5dPLMVKcsG2ahZNQsXq6SJStWPEVK/cwLuu78ye1L7onHH/pdzmbeCZcuhdiQIPA8gbMOWRaf3oofXGYCs/kFadDoXy9H/8e2oH7TMReZePelnLnI90MIBJYFxvq1cnffXUGoEgoqVYH3oE35AYdgNxNpT/LuoFhcRkoNQ1iLYEyRbPvXjTK9IzynX6bvPOyNq9b9QeTzGhEBgZBbjTzNYNhHsQj4HiBQgBBu2bgIWf9vwWZNrPK+jRMOJrB4IFKQdkJ8Vtg9COV/XaKXffeRH9/fn+eN4+JWfEarPv0Ogi0HvsGSpWKHDz3iw09+6u4vHf6PlyFc8sHnx6DCUcNo3bxkQd566r3JbC0KwwL8qIywayFIObCNO8grvEH5FYA0GOSEbNW2skmXZ57yvA5h10maAmpvSRhFaBQjacKmHVw6rPzgjkf845fHYG476FoLiqUAIgIWwJh2EDxS1Wj4h6GnXIQJQ0zO9MO5SZAmSPv5agj3gs2rOasdz63JY9Yc13/x1HTfVWnhN76z+SdfmMybY38CA12dSb2+2sR5h19y0XVu1093P7VLsGKYnrsn7TwHS1lfc7axJG7mYOcAYrDLweyB/F6CKkHEAygCUNDWen1ZatZkSb4yTbLBtJVENs+VsCMIBwD3eh6WANzd3T/sb3WvwWNjFegggheWoLwCREUQCkE6RBBFqOUh1s8cg64Fx0ArQhgGaPAQGi0GQQB2EJeDTQaTtpDGzXLamP1gWt/95XIpWTP28D8knYOrLycdPOyYUKt7qI6PvzypP3jh37uPqluuO+dZMUg/88RH3roCigpJo5H0JY3WYUkrC2wWw8R12CwBmxxsDcSkYJOBTQabpUjiDK1mApNbMDsADKUERAwFh9EZwSQfgmKxiKhyEHY1BjA5U28n/AMNz/cA5aGVe3hivIT108chGnwloihoc0URWimjE4+jt2zgTAqbxWg16qjN1FGrJmg1U80uP4SQH7dgsLhrycvPeGjrQxsOFZsd12ZDpkrFbMUJvRvuWhXtGvmbfxl97gBdcvU2vO/1A3nP8tfcZZsjmxoxdVVneLBey4NWo4U0bsIkMUwaw6YN2LQBl8XIkwTNeoakZWCtgwhDEUMpQCnGzmmFWXU4wrAAIkGh0odYrcTW2UFsmezAU1Od2Dw9gCfrqzDrn4zKwKEIfA8i8jS7RcM1NmG4swqTJWhUGxgfrWNmKkarmYGI4PkBPE8t9Hx1hk63DiSNbKDZaB2uIBARFMK0q9JRDPL4pFs/dPZC87ff3PQ8tp7f9VM8+cPl8aqLnrx66zde84PpsfqpjWb97FatdrKqZws9PwmiMEWxoBCEHpT2YCyQtxziVCNJfBjjwG4eKB+JKUMXQ5AiENp+SqlUQrmyBsxrwG1BQpEARYAI77OGiAiCsIjp6T7kZhQuzzEzHWNqIkGeOQQhoVDy4PkKXuBDazrImfhDHR3Gjc4Nk+caUxMW3YPjb+4e3vE9t+2Gb7ZGHkJx6Ijn7ii+7IwrAVwJEZm5rULXvf6fP3nj6I57lrVq20+0Wf3UZpweX2+YJUrbgqdt28+xQGYEOgdYAOb2UyM4xHkAvyuEIgLN9bmpQ5FAaezDlvn399569jyFBh2ERvwgtHWo1w3iZhtYpQVZapHGKYLQQzuQtkqRVVoTxAkgQL3uYXJ3rTMsb/+9wuqP/dju+uLMC8oH7bnBN38sE5FN68+hTUvf+YErR7dtGh4f3350HMcnMZtjQTLMTH0iUtHsVJspABHg2KHWKqCk9T6MeObx3uf2qVUSmXuPwF4vpusKZbaSNGUHM1KlZKmzEiZNA4jA5AaFko8gEBA5+D6Qu/Y82ClMjVuUO3adwP79J9rG1htbIz9GcejVzz9h9nNgXf3lHMCWf3rvy7bkpnx9ENQ7KyXV59guMo4PC4HXIDEnMXOPAGglDtU0QmAMNMn8Xvw+wOx9/MyChfn3RQSiS5io+SByO43pfI/C1HbH9Dpf+Fxr3LGthitmrRxBqBBGCloTfE9g5pLoSgF5rlCfblX88vZjnvjwphuPuO6nLyyjuM/N7rgbEAd4IRBUAOUx9a6sAqje9KEFm/lboz/2z+7+egM4VTL8GSFbG3OIpl9EqVEHFyL4vr8HhGeC80yz2ruoQkSg/QLGRwvoLNiHR3uH7/WD4dZrH/3J5Q92l79JWp1Oyr3DWXdyYrkvT4m0bvsyRAoiBAgDDNgMcFnSd+pWUeN3vIcPGEDt5cQAUTchqAiyOmTjt55m2aVvxd8raRxWTG9oumBEnLl6qllY4S/qQxw3YU2OQqEArfU+IO2PPXsfz4s4kcJovYwFzj7y3mNs66qb7sf9PT2yfKk3ufWH5qr+o8MbG3l2VM7uXGfl9c7KIiJRvhY4S/OyN7dQeDkAEb984BhEi0+CtGbmc9SAXwQNHLLPNe+7bBY3/mERxtYfLJbDW8fi8H1ZbLCw00e9Xkee5wjDEHpOk4hoHybNn9sbIGstoihCkmSYcf3u4dHwqS9fVsfHXtuLas3ikA+OtC/8Nho//rv+Oz0VrqOx/Csud2eJ8NlayxqChIoEWgkAxVDh9if+gqT7LZ/HAWUQFXt+6TVv+EILX3p32XYYc8skL7iAmo1SnvfA99sgRVG0pzZof+a2N1Dz7ImiCI1GDRT1pU/Ujh3tWVzB3U/cgD/82tQ+n3n1+ycBwNz/5ZUbgjB6cHLn5Ne1Ma8Qn1+nYE/WxIss68nMVjZgyaHIZNGBBejZtnXjiyDkP1oZXjYSEVZOTU1h6dKliOMYSZLA9/32bqtSUEr9nGjv/ToMQzAzjDHw/SDtGVo9QwT84adOAfDt/X7/sR/YPM/0nbd/avG/UDH6lspay8lkxxhRtTgp/8ymFquPeuuvBiC94JXwtBoNIm8jEa00xiBNU/T29mJ8fHyPDs2vas8U571Nb750RmsNrXVCxPX29d9+Vvdy6v/eAQAZgMfmOoAfHNhtn+faOishejsKLSK6h4iEiFCv11GpVBBF0X5Feb7Pm55SCr7vI4qidt1AEMD3/ZbWuqm1/tUULxyoVi6VEKcpmHkdEc0qpWCMgTEGPT09+wCyvz5ver7v73EN5hg0rpSq/acH6DOf+QxKpRIKhcJWpdTo/MSTJEGlUkEQBPsAMc+aZ4YZe/tNc2Y3nmVZyzn3nwcgZtkTe4kIrBNKjdWXXHKJJqJpIto9D4YxBlprFIvF/XrM807h/F/P8/YRbudcrTb+oFu3fjMaW76Nrbd95D++uuM5+Y0skDn/ix0rw+xZlpAFUWKdrFq9urnpscfG5gESEVhrUSqV0Gw24ZzbZ8WaB2aeMb7v7wWegMCzJ4x9z33phnWoVoeivqHXITGfNopIFJF4ip72036BZ/6iAyQimE9ICNpJPhEhJ/CYUXQsBQEix4xXnXZavOmxx7bvLcrGGIRhuOd43rzmGLIHoDnN2VP8ySIg2OydH4AQrcVkfbbIDl2GXaaJMiJYIsp9pXJfK0cEcSLQzxMk7/kA0348Agjt8doFAseiHLNvWQqOpYNFigLJli1bJgB2A7Ai4s2DUiqV4Ps+4jjeJ4Ddm0HzAGVZ1mYRsxOW3R949HFMznYrUZFrZ5egBaJEKCCItiIAc64JzlkrrSRBsVB48TRob8fNsZBjKAGUAGQdq9S4KHOuw7BUWKQwBwSRMOk20cZEJN9LR/Ys28YYWGv36c45WGuxt1nO9UzB7u7PbkCcubDayhYmxvY7EV8rlQSeqnlKNRXgRKCtY80iqhBF4F+QTnnBDJrfbVAE5I61ZfGJwIHW1jpWmXNlFikSyGpCrLWqa0VhZnmxZe6s1sciALtFpMnMxXmAmBlRFO1jUnsHpvMCTUR7rgeEBwa7S6ef/zuVpIWUgGlFVDCWFzuWQujpnUVfNz2lxImQiAJpDde27udsbs+KQYI94KjMcsk4rgiL0gTJHEfGSa8IlKeoXg79RuDpLDVuiWMe0EpPdHdUYojsZuaxeTCYGcyMIGgn5fdozF7dObdHoPcCqDF8yNolMzV7cWLcuzyiqCPyNytF4yzoto6HUuM6jGPtKRKtFKs2IARpd8cCJ+3+ggFyIjCOAYAyy5Fl7hKIIkW2bW5cYJEyAFMMvPzR0VlppnmHcfwKBlxvubB17SvfkjkRJyJ2Xl/mJ+37PpRS+wC0tzkHQbAHUOcYztpdSXXzdxW4CsifWJZ3p8aVyqG/NdBqOxE6nUinYY4sC2mC0Nw2GosQi5A8h7oo9WzoE2iFzDnlmCsiCBUoLXjaOQFZlrJxPGQdd+XWqZsfH4FlKRnmhY651yOSc952JnzPaxLRTQB285wWzcdWSql9hHnv3JDnefv4RdbmEw/c9v+2RR79iABlWE7MrBsu+TorBt6IIuoGsJhZQuvYA0Ds2qmyvdb+AweQAPjaPQ/BsWgRRICIIjL3bp8QTYCIeJZlQWr5sHpqFv7xqw7RgVZ1ANtzx2dtq8avPfc9F/b+5UcvSo3lTxkrZ1onFzLLp5j5WhD9FMBOZq4ycyIijlmcCBxAued5defcKDM/AuB6YfnKsWsOzjShAiISoOwERQCYaaaWgIYIhp1IZFki45js05pG8jRWB0akCcDvrD0S5+Z2zwMQgI5fMgAAohU1AGSGeQ0bKU7G6e395WgkY74pzsyC1LiPZhaP1NH5ww//6e9vGCw1N955x8SGi7/wFXrjma8Koigvm6w6JI67SXl9ntheJyRGIialUgATaZpPG+OmTZ5N/fYF52YoVxbVHZ8IqIom3OMpmgIgM0mGKPB6WcQnQUGRZAxQ5GtYFnIiHgEQIavnymNecIWZE4ECkDnWSW57WKRbKTUTeWo28rRtWevXErMqMe43HcuCUKufViL/h92FoD7eSAfj3L4ud/wGJ7wQnFe15I/4ZNYFCg+XfBmvBLWWX/5jC7wHRBf8Ir+LGNafqFb7mml2cs70ZkfBGqWDR0uBd01H5N/W2/ne5vjMVw9zgvMJ+FdP0ROhp8aKvtfQiiS1zmeRgEDsaZX5ipiBX7qiPSuAnGN4WlGc2cg47mNIpIgagVYzpcDL67ktNJL8hMTwGwFB6Ombi4G3vjPy65bZn03yoZZxh+XOHcFsV5PYXgVhQOoQN0LinlCEaVJeZuGxRcCEPWLqE9ChSC1ldkcL20VEtDnww+tLYfCzcuCNCIhT417pmM8W4D5fq7t9rSYiT9UjTzvLojLrCgL4mijztcoEYKUI3gsFaG/v2YpQmruCYe5mkRIRNSKtp4uBNtOtvKeV25Nyx68AUFKEHYpos6doe+Dp8cjXMQFoGVdOjR0wzq6wTo5ywqsI0EoRE5G0V3LHJEaLcAHK16J8Q1ApINs8wr2lwLu3r1QY8TW5yTgfZpG3QLBYgBsDTz0QahWHnjYta/mWh3fgTUcu9XInZUDgaZWEns6ZRXytXriJzS2P4LmNfAYoNc7PHVdYpKiJEl+reqCVa2amkhi3KHd8qGNZLZB+AkERxYowH9Hv8hRNaUUZAN+xlARQRNQCxAg7R5wY2JicUAFemZRXSDyl0tDTSeRrkxrnJcb2W5YTALxKEZ7ylbqmuxjs1ERuXistCzkWlTNHEBQVIfe0ikOtLAugFR0YgPbHptyxyh1HjqXYjphhNVHuaeLcipda12Ec9ziRDhHpgWBAgH4BytReHBhtnXQQWCIkAFoANYnQJCAmQkxETQVYAJ4AFRZZLoLDiDAIoKaIbg19fVdvIZidB4ZFyLIox+I7kcCJBIrI+UQt31N5q5ZIqav4rDzq5w2QmdOlJLe+Zak4kSIAUUSJrymJPJ0pIhGALLNqGfas48gyF7gdr3WyoEuATm4DWBGgDEgRoICAgkDKbdcCmgiKQNwGDU9pUvcGnnqoHHjjBV/nMuc6sQgci+dEPBbRcxGSaEVZoJXRRPJcUiDPO1Gyt1OXWudZJ5ETCdqlPOSUolwRWIEcEebzNM9cWMmyqNQ6bZ34TsSTuUk5kYBZuhzLoIhUQCAFSrWiaV+rcd/T1aKvYl8ptizEIgoAiQAC0XMCzwpgTcRKKZ73qOk/AqCfK0Bohx3KMlTbGWvv+ALtglNm9hxLyHPn5+oTBQSrCBYgofbKYn2tXKAVz7kqlDvW1rFux4TEvlbWUyS2ncFU0h5TzXmADICJCKo9ntALSJwd0J8R7xORC6gdTYsSgbbMUVuTUGCBFoiGYG7S4HbBLjEBuSZKlKJUEzJFZJUio4j46Y3jPZ3m50AEIbQzinNVJb/ajOK/W/3RBksUtclTrVadkGJWmh1LKIQAgFZKaUVKNClu57zafW43jETIY7RfirSDTgI5peAUEQjgOXOR/T3xA/FvLV70H6KfcsopiOMYb3rTmxH6PhXLZfT09apioYgwihCGARSRlCpldHR2ob+vH0priqICKSKZnyOLQBGJUkr0M7RM/4r/v8d/6/Zv4gGWDasPKbYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMjA6MDQ6NDgrMDA6MDAK0yQSAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDIwOjA0OjQ4KzAwOjAwe46crgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

PersonPlayingWaterPolo.displayName = 'PersonPlayingWaterPolo'
PersonPlayingWaterPolo.defaultProps = {}

export default PersonPlayingWaterPolo

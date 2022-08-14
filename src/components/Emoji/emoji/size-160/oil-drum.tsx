import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiOilDrum = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-oil-drum"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdCSUINFdqSQAAAAZiS0dEAP8A/wD/oL2nkwAAHRlJREFUeNq1fGmMZcd13ndOVd3lbf16erpnOAuHmiEpkwozshZaMmw5duzEgmLKCQwnkIMgUJTljwPDiYMIBmIEiIMotoMozgbYMZBIf5IAgZFYhqRIJGQtVCRFFiVKNpeZ4ZCzb939+i333lpOflTd9173DKMm0dPA7fv69VtufXXqLN/56hIO4EdEAIA2t7bLzc2t3vZop++cXfPOb/gQVkEYOuf6wYcBMw+IaCAiJTHnTJQRkSYCg4iICEwkRByIyQFkAdRMmAWRUQhhJMCIiXZEsEWETaXUTcV8a9Dv7awMBuO1tUNTAEJEb35M8ZTRmwHjhZdexvr6Rn7t6tWjm1tbp+u6fmvT2NPe+zMhyFGBrEKwAqALQkZEiomYiZiYmIlAzNh1TgfueUUEEWmP4EP88UG8SLASMAFkG8AmEV1nVucyo89nWfbiYDA498DRjauvXLxUvfudZ/FGQdv3qzc3NzEcDumFl146eeP6jZ/a3t76yaqqz4Ygx4i4r7RmrRWUUtBaQbGCYo4A8AKA9gIJLRg0vxICILJ7HgWLJ+NJlsFCCAE+BAQf4HyA8w7OeTjngoQwBuFqWRTfHg6Hnz+8tvbZRx46+cqtzS05dvz4wQF0+/ZtlEWuXj5/4Wdv3rzxj2/euHFWQKYoOijKEllm5oPXSgMUZ1wpBrP6/3857d/e5R5PCOQu4EICylqH2WyGWVWBALt+eO17hw8f+pfHjz3w36119tix7w+S3g9AL770MrRWT1rn/xVIPdjp9lEUJVgxptMpmBW893DOQmsNrTWs8zBaw7sGnW4PWZYtsKDvN0W0C465kcndbyIQJP3ZNA2apklgxSf7vR56vR7qujbMfHY6mf7WxVcuXh9Pxp/fz9j3BdArF85jMBicDqBj/cEQa4ePQCTAOYe63sRkMkGn7KAsC3gfMJvN4J3DLHgwMzrd7j3BoLtMSPac9/yPln3hrtUZ3yIC7xyUUvDewjuPLMuQ5wU63S6Cc9je2trIMv3oKxfOHxxAmWaId1++fOXKV0hdft/a2jpWhkMURYkTJ05BEGIkSyYeB09zJ7x3gcztQ3YP/G5YZLc1yeIZAs0ft7+KskRRduYfKyLw3qOqKkx2trG9dRvONl8/evSBz/d7AxwcQFmO81999pXB+vo/efmFF/7bi3mx0Vs9hLX1DayuHsJgMECn00GW5TBag1klx7wYLtFicHdb0fdxRiIL21ogC0kgLDtr7xxs06CqZhiPdzDa3sTW5h1U4x1kzm4eO3Hy1175xtdefOojf/fgAPqZD/4sPvnLvwRcuHBVzr882a4dLgtgej2Uq6vorq6iuzJEb2WAbq+PbreLsizjURTI8xxZlkFrDVYaSjGIODn2ReQSkeh0Qxxwe3jvk4/z8N7BuXhYa2Ftg7qOgFSzGWbTCabjMWbjEaqdEZrxDtBUWMlzdHu96fqDD15Vx47h+PETBwcQADR3boMkCItAplPYrW0479BojR2TQxUFVKeE7nSgyw50WcKUBXRRwOQ5sqKAyTLoLIM2BkprsFLglAq0IV7i2ojg+AhOCB7euXhYC9c0cHUdj6pKxwyhrhFsDbgGwVogOIAAXWTg9SNggijFQSm17zxo3wDlgw4gXvg6CzGDFYOhoCBg24CdA82mkM1NeCJ4AHUbeRSDlAZpDVIKpBjECqRVBElHoEAEhACEgGAdxDoEF8/i0mOf/vYO4n1ElQEyClxk0LkBGQ1hgjAhMIOVAjGBRKQajQIbc/AAZWtroOADm0tCzCnrpeSMGYoZSmsoEy2DIEAQUAggUARUJ3CQ1pW1gLUpk05eKIQIjHUIjQU5D/EeEgI4CETi49YriWKQZlCmwbkBGwNRjEBASP6fiNJ3IrjaCQW6DwCVHcC7wEReEaAJUAQYEDQRFHE8Ix7Rv4S4fIjBRoO1BhuziGzJa0esCSQCcR5CjEAKAQxhh+A8JERgECgCJAkkIiB9ByH5tGTBngCfwOH4fwnVLJC192GJlT1Q8I1iNTNEKEHQIOQEGETADLVgERQhXXQAx0o0nQUkcWqJGRDZVYKACEIMoYDABGFGYAEgCKn4kOUIlgARZoAYAkIgwIHgROAIkDSh2qjG5FmDeepxgADpPMPKoL/dGQ6vFpPqrN0eIfceBREyImgkoBAtSxGBSMCSgCECA4vciOIaiBY2TwYAZgiHOGgiBIq+RCTmPfPnUh4UCPPH8/+DYAE4AA0ALwALwAHX106c3PJvoFjdN0B3Lp5HdmTDkfhZ1u8hbJWoZxUMx29XALRIBEgAhXhRlDIcBYApJngki4yvTfqIFjlhHGg8c2sx7XMSz0EWgEiyrABBEElLUWBDQM2MYGK9Js7P6s0tW3t/8ACxyjGtva5u3e74SQXlA6wIJtbCgpAzo2gsMq1htIZRDAVAJQed1gRYABADvJRlM0Mo5cbpdQghnWUe2SQdITntICH6GgZ8UHDWoVGMBoSGCE4zQpGhUAqZYqhM9QZvOZWF+2FBxEB3bdVnnW6l74yw0tRQRR6tIcRZC0FQNw1s3YBbqwGBCWAmMDOYEv3BBOYY1VinXCiFebEeYi2C9RDnIC7mQtImjxItJUAQiOCZEYyCZAYgA5Mb5JkGZwaca5BRMBAw8dRXja2b5uABghCOHD7ida8/5bUavqqQNzW6JoPRGkobsE5UByTmLY2FWJesAfN6LYQAeCCQB5jAjkGc1puXmN/YFN69T+tJkrExOFkdmEBagTIDVebgTg5V5iCjEEBovEcVAuoQwMQQVpNmMrabt24ePEBiK9y5eZVlMsrhHGqlUdU7qBuLjjYoM4+i7CDrdZCVJZTRIAiYCCrLoIoSKs9BSqXlIvCNjcmfi6Ec3scEsFkkh+I84OPSgqRlJyHGNAGEY1QQwxDFcCGgnjrMnMPMB1RMYKVREoFsU9SjsdKs74MP0gqSZyAfSI9G6DU1glKgIKithW0sppMpzKaCMQZaaxitIj+U5zDdEqbXg+l049JkhsqymNj5EC3FeQRrIWwh3CAQI4iFiI2vcQ7BWQQfs2rvHbwIPAkcE7xWcIrhFSMoBRiFjjHItEIOAYMoJGd/4AB1Dh/Fu97/lP/jL3x5JKMJ9GSCwmhoVuAUgqTNkEXgGgs/q4AQ5pGM5pl38kFKgU0sOUipGMl8iMliY6MlORedsl/4IFmObMyAUaAii76nzKPv0QoCwDPBEeAECFpv91cP2WuXLt6HRFExJq9cIDinQ7eLscnRzLbR04JCG+R5BlMUUEUes+Xkh+B8cvKcEkNAgiwy45byaKNY66RJQVTyQT7s5powryEAzaDMgHIDyjVgFDwBjfOorcNUBBYK3SDoOK97nZJXD68fLEBXv/M8nv61j6K6cOEJuXzph7WNYXfqA5xrkLNFUTfIZxWyokBW5jCZgVIKKs+gywKm14+VfqeMfkgIwbkYqayNS6stTK2NDr6xcz80L06DR/DJsiSG+mAdfPDwDcExoRZB7QMaArzRyEqgYEDtbD752v/96juvPf/tL7/2ja/h5LuePBiArnztK/jo//hf+Lcf/vBf6oXsLVLtwASHOjcIPjpc6yMdUVcV1HYqXgnxrBjKZNB5Fh12ZmJ1n7Lqtt1DItHXNBbSNPMoGFL1HpyL/sd7+OARRKIPYoLXjGAMxCiI1mCj0M00TJGhKAx6rkEewvGwvfnUR/7w6S9/8xf+5OAsqAkBUwB1cFCscHhlA8PuENY3sN7CeR9bLxLBkjTDYuNggnWwVQ3aSVlz648UgZSKhaziuGyCAM7H9zY2WY+PdVdKHgVtDcYAM7TRyFKY150SqsigtYFiDaMNjMlhWMGxg8syAQA1WDk4gNbf/UP453/jQ5DjD3zqxrVrHy6ms1OHukN0B4cBpRPvQhBDoEwBihDEAS4uEVriVsWHtLRspDS8j2E7pPDd5kC25X1SHgRZahUly9MaZAxUkUMl62SlwaTBwmAwQAInDbbrGaZMV9dXD//Bb//cz6B38qGDA+jht/8g/udv/gusHl77k/Pf/tb3Lu3cPqVvXcOR3hCHVzfQHxxCYTpQykSyQylwnoE7GUyvRDboIev3oMoCKjOx6g4Brm5gqwrNeAI7ncFNZnBVhVDVCHWzAMm66KhD4phEgNDWcK1NxqI30lABDjUmdoTNegd3milqazHoD1/6s2959PnDJx/Cmbe//YAp12oKotVQbBypdRNw48JFXL/8KrrXLmOl7GB1ZYiV4Rr6wyE63QFylMgQIAHwdUC9PQObmG2TTkuKCQpAQRnyQkFMGcsKGy1MGotQW4S6htQ2gtYk65PIEXlv4YOD9RaVrzD1FcZ2hlFTYcdZ1ACUVugfWkO2caQa37njZk11HxJFAIOyCBDxIctgu93ICTuPyWiEG1tbMK9eRKY1yjxDWRTodDroDAboDoco+wOU/T6yTgmTF2BtEgdEgPeRFPMxUQwJDF/X8FU8XF3B1TVsXcHaBk1To3ENam9RBYdaAmoILBEcEbxS0WFnBqbbgVodgo0J43PnpCI5eID8rAE1EArwFAQsIYZrpVI0AUIIsCFgNqtAkyn41m2QCFhSycEMpRWU0gvSXilwS8O2zH2I9VhIlfu8uxECUpGRzgtOKDDHpFEriFaAiUUqGQWtok5AGRXy9RVx96NYddZhVtUgkZAxoYNIZJk5W8hzR0wgiISU4KWmYmj5GsAmPpqciwVnS5u2PbC2OPV+7rznBassnLWCxCJXJ5CLDCrPAK0AJgSKoDElIk8ZXxw+Ks1o+z5w0nmB/uo6FHMwRLH4AyEHQRNDM0VFh0pNQ9CC02mjWBvJ2mZYoj3aTkfysIBNyaGNmXhLgNH885Za1IrjkWkgM4BWCErBA3AEpDw+Ui+Kfbm6KtOmvh8AGfQPDYSZA4OgKTKEJh26pVsR6VZO3Q4SidGm7YGpVHIkFpEUz+swIoL4AJgU5lXKp1IdFvOhsHQkdjHRsy3rGBLdSku6GhYBA77sdgPfj2LVdAqsnjgKpTlw6l5wct4siWtui1Jp6dX4mBAvkGhBwbYXz23i2DYPWytLvmXR/pCWxo755FLPnuevWJD57fXw0msQvJdmJm42wRsJTvsrVleG6Dz8ONhknttWzVJHnfYcsuQvlsUHNG+wL1Pt85EtCtG2KE3kNcni/SKxLPl+Kqd2ctr3ivWhujOGndQHD5DpdABAWLGnNPOLQcu8kbcY/C4Jx0KEIEvTjV3TDtkjWFhgtVc6dTfwcxXaHiXNYgIFRBR6wzWYLL8PFpRn7Rd6onvMWqvyomUVxrKBhFaTsnC0u6yAlgDcDQjJkiAvyG55lbyeFe2W28QeI4X+6lBMZg4eIFfV8Wuc9/Q617R73LLnYunup3YjeLfsrP08apcs5uXE8qS01rb8ObIsKEqPWXE4dOo4sm558ACNNmPu4K3zbZt37hPuhdLeydyF3pIQc4mQj35NFuJNutvS5B4rd/d3xzOlkLY8D6S1H/7AY8j6KwcPkIrRpW1czg1CXk90KcBdr5A9MjHsCmm7DIHms0+7rW2XE9vjd+51EUuRkIg9ADHdzn2woJdejhZUN57u6YTucYGCe6O4a0lgt9+RJWcOxCz6breyQHfJiudGuvS11E5KpEw8AJi8OHiA1h85A1y/wkqprtzLWmSP05W5An/3Mln2FXtD2nz5LWS9y6DePS1ylwJW9kQwwWKphabpTq5cUfQGWs/7AujCs19BuPQavvRv/vXDvHnrz5EPS9i8nr95fR8hd4Xo19Mt3h3c5XXX9e4ZkyXfLYiabRpt/8jX/8PHH7v9xWcwuX374ADqHz+Oa1/9OiY37zySj6qTxdY2tLNg3D3GRUvm7ugkywnkHscti9GkRHAPiK+H5jyHWqwv2aORNQR0Cei66rid7PyZK196GncuXzq4UkNEYB55GLbfux20maw6dHReYOwdbGNjbkJ7L51SXpSKimW/g9eRutIeSbDcI6FaWrJzxcfcybeKWoJigtYKWZGj1+mhDyAoPbG9wbXO2XcCWXaAnPSph/CFT34CgwdPPPfqxVc/JZMbf3NtsIa1tWOomxpVPUVTV7EdE6JukMKCIp1X8Mu+iNoWZ6vqoKV9GYu+V1uQxA0t86psCdBEuyoFletI6xYFjMmRmwK5yQEFbFUzuF7/s0cfP/t1c/wUTv7AY/sTbey7Ny+CX//xH8HqsWM/d/G73/tE5qQ4sbqBtbWjyLoDQDECAhwcgjj4poKvZgh1FRuISdDT5j9zIj51WSkVlwghUhzOITSpNx/Cro4GWsme0qAsgyoK6E4HpuxAZwUUGxAAF2psVyNcn40wrSq3fvTER/70mc/951/9xndw7MyZg63mv/B7v4Pu8eMwgwFl6xt0/cJFXHvlZaxdu4yN1TUcXj+KwaF19Hqr0EUBzjQoU+BMQyUiizQn7UGAbxr4poGdzeBmNXzTJKLe7iLsW+EChdZpUtJYKzBrEKu4YYaAIA7W19iZbWJzNsLN6Rg7zoKI0Ov3kR0+zHp9HS7sXyG0/9782gbG2yMU3X6uVg9xGI0xuXod1XiMmzs7KC+/hn6nxMrKEMPVQxgMk8B89RCUWoHKFYwuobIsUrWJdQzOw1uHkBqFvgUodVZDs+iyto+DTeBWUzTNDLNmhqmdYexm2HEWk+BRE8ElIq3odqGObHB2eK28dP0Kuv3+wQPUjLawduIk8rIYY3PLeWJjMx2JKh/gg8dsZ4zboxH0a6/BMCM3GkVeoOyU6PT7KPt9FL0+8m4HJsuhWuI+lRxzsVRL2Kezq2vYpoZtGlhbo3EWtXNogkMjscXsmKI+m6I2OigFMRw100UOAjk3Gm2dfe+PYry1efAAPfSj78MLX/s/UKBaifgiXQjnDATMlRet2sxJQG09duwYvLMDun5jscNQKSitwNpE/bRSiTCjub+by+2CR/CtsqxVd8TXhKVzIEpkvQJnBlluwCY2BYz3COOdEHr9ejAc4tIff/PgAbr6nedgbQOdm1IrpTUT8iDoECHTCqyyKNkljvI472MH1bm5hQQJIEHsgiS+mXghSL+LHwohUrDzzuvubF0RRQlfZqDLDLqTwxQ5lGKEJOKsfABZB93VSumsM72zifLo0fugUVSMotOBMXltmH1BDCtAcA7kA3IVUBgDU5jUAlZReep9DNVLvHEQSTyzQEh2taYXUSwKqlrpCyW2kVJ2S0u6R9IMMgqiFJzzqGuLmQ+wzKDCoMwzdDrdoDNTDdY3QOE+9MXe9YEP4hP/6JfBWtXeWV+GEPeRUdT7OOdQOQ9fN8i0QpZ2HmrFSQaTxx56UYB0VNvvrtWS5SRJ3rKAKmqE/JKYysWl5zy8WLgGsExomOdNQ840eiZtjSBCPR571+tXSivY6fTgAXruM3+IZz/xX9AdrqyISDYVgRFgoDV0kvNGCWH0HU1Vw0q1EJETxT2s82Zh6mWlzSykkgym7bDWNumGkuNO+iDvfdIFLXxPUArINIxRKMocqjAgpeAATEUwrWp0dGbyTufQq9/6Jk488cR9aPusbWB65Qq6vX6nA1JGKYx8gLcOfa3RMRp5kUGbDKSidUhjk/Ap+RAIQuq9z5NElXTUbXc16RXnPTGfNNKt/yGASUFxq/BQcSNLkYGKDKIVmhAwqRuMBai1QqcosLK6qvNev//ac8/B3I/dPpeeeRr60CE01gYCMPQOuVZonGDiHBrnkDcWhbEo8qgXNGUOpiJGLWNAxkT5bktn+Kg3pOXCM4k1583DlEm34nJpZXppM0sQgQdgG4vGOlQiqAXwiqHKDIcyg06Rg1wj9XgnuBpQJjt4gNzOJjjLAITgiMUJ0FGMFVMkzVPc/FY3NZq6AoOgmaPiXkXlq8pz6DwDmyzuEVMKoNRMpOSgfYCwijt+pInRbykihqRk88HDhZA2rBCCjkIFVWQYlDlMbqCNhiNC3TRoxhPprlS27MWdAAcv4tzYgLp0CaosfRhNpAJQWYeeUuhkGbplGSW9RFFokDLjYGPFb+sGNB5HGiPVUsytwkztUdpH2R2cX9oKJYuNw7QQURljkOcGulNA90qoMgOYYZ3DrIkiTg8g00GaqnEbp96C186dO3iAHn3qr+Arv//7ePAH36FbAs+LYGodvA8orENeFsi7XRSDPnRmIsXRsndJLidJ6hJVZi5Rqku8aRvmbfRd8zA/Z0ZSy5qT4EExYBiiGYEJtmpQO4fKejRE8Ea3zUoircy1770EegOU6775oD96+hn82D/7jfVnf/c/fig4my3zM0EEtXXwboJmVsFsj2DyDDozMFkG0ylhBn3kwyF0t4u4JZLm+sVoaUnVatORrE9s0im22zGdjWJyZ+Ftg1B7OBF4RhSRM8/LDigFoTib3nt1fTz9+b/6vz//B69dvHhF0j61AwHo/LlzOHfhAh48deov1JPZn9fOLxHjyc0mwjgEgWviplqLuG+VKW7HVMaAsyydW7WZSipXTipXv1C5zkO9ne9ZbVWu0mqFCAiKow+CictPFtukWrZSfICrm/f5avaBZ7/wzO88/Lb98UH7olybpsan/+hLMGVx5thjjxe+sbt7crv4abnr+VbL7KoKdmcH9Z1NzG7cwPTaNUyvXsXs5k3Ut2+i2ryNeusOmu0tNKNtNDvbsOMx7HQCW83gmhre2eiT2oHv+q6lv9sCOHFQIQAnnnjCdAb9R/7pb/4Wdkajg+xqEH7ih59ENRmfX3viifrwE2dB1kbpXKqtJLVqlrSouy+e5h3y+WMs3ZlhF51Pi8+5qymAZZZxd2N1XsSmQxAlyaG2WD/7Dhx9xztcU1fnfuNjvw6zz1C/L4Aee/xxnDl9Ggz67PbO6Om197wHj/21D2H19Bkw00K/MwcqZrrY0z+UXaQ7LXjlve2ypffKXY2SxcLe/f8Fed+yARQEvfUH8Ohf/nk88L4fw3g6+ZJ37lNve9sTeOj0w/trmO7Xm//KP/wV/Kff+93J8WPHv3P9+vVHy6NHH3rwR99HK6ceAkHgqxnE2rh5ZYmoJ1nWN+9x/incz2V4y8liYhLFh3kVH9otULIMUxRMCQGBCdAaejDA4JG34sRP/jRO/NRPww36cvPG1a8Q8T94+nOf+dN3PflenDlz+mA5aQB48cUX8Oijb8XHP/7xU5ubm7/Y7fV/4ejx40dXV4bA9giTC+cxPn8e1dXLsHfuAJMJ0FhQCKkCjxvnFkr7WCqw1mk/fVuwxugmaStCu11KWj4oZdSBCZJloF4P5sg6igdPoffwI+i+5TR4ZYjRZAe3rl+7OZtO/utwdfXjf/vv/L2Xv/Wt5/D2t5/d95jf1E2+Pvaxj+Hhh8/kzz//3Xd77/962en8xdW1wyfX1tfVoNeHCgFhZ4T61i3UN2/C3rkNtzNGmE0QqipSqHUdQ3gIC4+ShJ9x71jaFpXugxNrrgxcllC9PvShVZj1deRHjyLfOAI1XEHQGpPZFFt3bvvtzTuX67r+XKcsP3nixMlnr167Uv3i3/+lNzzWN30XNBHBr370o3jPe9+bvXzu3COTyfjHg8hP5FlxttvvPTBYWSkHK0P0ez2UZRnvCgNE2iKF7tA08HVMCea3nWiJsRT6oRVIG8CkQysEZjiJ+2Or2RTjnR1MxjvVbDq5Zpvm20T0TLfbffr06dMvfObTn65/+9/9e7zZG769+dvE7QHrA+9/P/7WRz5SXrp8+cRkMnmb9/4JAI8rpR7KsmyjKIrVoiiKoix1nufKZBlrbSLd2ipgl291433cJGNtvMtLY4O1TWjq2tmmqaxrNr3zN0LwrxLxd43Rz3e63edPnDjx2lNPfXC630Tw+wIkQAagORCklgADgC9+6YvFuXPnhpt3NtdCCCdDCEdFZN02zbo2Zl1EVpVSPQAlIBlAbdDwRNQAmAXvJ8y86b2/qbW6pbW+QczXCHRpfX391umHT289+e4fmrVlyEH//D/SHI0bWjMQVgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwOTozNzowMiswMDowMJCv93AAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDk6Mzc6MDIrMDA6MDDh8k/MAAAAAElFTkSuQmCC"
      />
    </figure>
  )
})

EmojiOilDrum.displayName = 'EmojiOilDrum'
EmojiOilDrum.defaultProps = {}

export default EmojiOilDrum

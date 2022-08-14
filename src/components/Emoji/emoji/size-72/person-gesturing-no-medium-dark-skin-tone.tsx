import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiPersonGesturingNoMediumDarkSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-person-gesturing-no-medium-dark-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBAQx7xVk8QAAAAZiS0dEAP8A/wD/oL2nkwAAHeRJREFUeNrVXAmUHNV1fbV0V+89PfuMWrNoFjRoHRACC4GEBMZG4NgsNo7xksTB4Vi2TxxOYhwbHwyOF7YY2xyMwRs2AcymEOOwCRBCgISQAAlLGu2afaan97W2vPerfqumNWLTSJAWn+qurvr1/6337rvv/eoR4AS+zpzTCWCCJIpivSgK3YIoNkuS2CQKYh0I4MIt4BZMwzR0Q8/j/8Zwu1fXjV2arvV7FKWQy+VhU9/BEzZm4URcZOncLjBN0+t2uU5VFPcqr9e7zOv1dCiKElBwpyTLsoAvUbCGg4CYmqaZqqpqxWIxmy8UB3P5/BZ8v17X9RcNw+yTZan43NYd/78BOnNuN2QLmuBTxN6g3/f1mprqCyJVVXV+vw9cLhcwQISjD8E0DDBMExAsyOVykEymtFQ6PZDLF55D7O5F0F/AGeSfP45AHTeAzpx3EgiSKBiquioU8N/Y2hKdXVNTA5IkkTW97bn0PW/geI/WA4VCAVKpNMQTyYlcofAI7rsVQdxOYB8Pi5KOBzhL5nQBugWAYSxyueRftkabT6pvqANRfOfLlcFB66GtwZoByEXETewY7BPQNb3olb3ojmfjIcN45u72pjpj//D4hxegZQt7oL2pHpkW5rhd8pdxQv+MZDy/qaFe8Pv96E3CUUGZEhxyMWq63Wg/+85grqm4XIJLlhrQipZphpHAXra1N9fr+4fGPnwALUdwBNN048S+gAR8G5LoZYWSFlU1TQgFfBAKhQ4D5HCbSnA4KOROzlYGywbJsI/FkAguWQ7omr5E0xEk09yKNwktaezDAxCBo+k60ot4ZXWk6ket0RlRJGUhnkxBOlfASQhAIGF4x0nRZE1mBRYo1oTJhcqAICkTMWuqiv1q+HkyWDqzKv7ZYESKfftUXT8NA+Aen8f71xm1VTAd7nbMAC3r7cFoRGwvrKwKh25piUbrFY9CnyGdycB4IoUT1cAliUjQomUdWsWk8T0dwwDBplIrlawtB4q2DgB1bmWGdT6wgCj48bieYrG0Ho119EMBEBIjDbTa61F+0tzUcIoHwdEYABSa8xBLpiFDhI2WIuGoCUyaGB2jMkC0w2DQlr/n4NjAaPY5ZUDJsnTDbrYloYWiEG1A8Lx4I55ua6xTD4yMf3AAESkrGFHQUz4ZDga+HgmHXKo9cWoYhiGZyWJoLuJkLdcQGQ2ZNki6BRKeU6oAhFmYoTtAMKzjNb38vcbdzeYjclniOdzXhm78GgaIvmh9DRwcib3vOcrHJKJwMLlCCY3G9UlMA3x8smWSxUlImD4EXICWUoSxeIp9Xx0Ogg8tjTiJuQbJHfpnTqGDwPqOeEuzIxm/NhdyKMHZuZbuFKjfKnxzWb6oPiVLUulY5nhMAFl3DGbiIE6haFJC9+CRplhSmVXQDCJeN17IgMFMAUYTOuDAoSroBz+CRLxEEyuDAwyt8pa/mKLmroQn0PUsjJDtDAdgdmf4/yUYHNpwjLs+EBdb3NMJisxU8WmYX/2dR3ErNEkyeXKFHLoVicUicky1IsCsWj/JAMgVS5AuapAvqWzCZBmMcOk8/bBLld2HvjeN8nFkRRYQMMm6TMMsC0saBx7lxePXyaK0sxpvxvBE8kRbkIlW4INYKtuDgw0wrQKWXiFQCqUimxCmoGDiLW6s8kLY54aILwsH4jkYyxWRwFXI5Ivobm7wuF0gozWR2wnM7yy95MzVTNuK8DLIZa6y5ZHSBhbqBZbfWf/Ah8D1tMyoXvPm7v4T72I0kEde2CycvWB2G2Il6A5rKBQpElmfaXo5zbrltSEPhP0KRKv9MBDPwkCiAOMIUCpdgowkA6pvEn3YJEChyaIe5xXuPjpzX425GLmnEzxdRwuy3c8Wne2PvfC62NJQbZxwgMiU57XPpPPr6Q4S5zCAEKgSaRrdiiouE6NZCXlHRYvzS5hH4a1VZKhDi+rKqxDPFmE8U4REToU0TrygEXcBFEEkk2D5m2ipZQYagVREbpOKIvbjZgBSAsxB4iTOADPMprqqoAfTkNwJB4h8Hk1axoGgzCfeUJkqJuAoXBPX0GRmhL3Q5APwKzhJl2jFHfzPZUrg9chQi0DNQjBL2AemJshN1JDDiKfQCrP4PovvcwhcUUMgEDAXOnMWNRZZCl3L7/Uw95yiGlCNHu7D7YkHiBMr3jFR53cNLJIsMBPIgY6jy3t80NlcDV635RLkmqZNLzyMy7IIbjeC6HWV91tRiwjfQBAQkILKLC1ZRMv0e2FfLIP8VWA6iiyX+NApP+x+CtjUSeHwxAFEhSzDxC2O3ygTJos+SNCnRoPoUm5WmvC4Jbz7BuTyJXQPHdwISF2I7rpUkaw67z4wLsL0F9IIDuIHMzwuaEUiVuh8vwyvD2UAEYBEPs+InjiM85XlYsYECssCWdoHwEEGpPMFLeT3piwVa9kQRaU6DOvt9UFQkGv6RlKwbvcock2pzF0RBO7i09qgJoDqaJI4nAwQTTWPfPbsjhEYTuZZRCQLrA+6mWz4SFsEEshhGw8mIYVJcU2Il1RMO08zR8cSqRKp6fcN0JM3nA7n/fshuP+bbct1U25vmeV6cemXo337X0qa7SsfPeqJZCkD4xNaY3V4mKwJbJcw1BJ0zwhB0OeC7UNJeHnvOHQ3hmHpSY0MGBfefUpciajBzs3sCoi9FSbViHySC1ad0lJ2NyLzfWNpeO1QHBZEI9DdHIZUQYMtw5jSlBR0ZZflnpaGGjpjdpd5aDz2DoL3c3ClsB6+dl9PZPiAeook6eMr/nHwDX23Ygo3f2YBdpTBQFC1xuN2r/IFpO3hiHRn00z3fVs2ZEYvuLwaWi/48xGdds5ohIZICDK5wpVexX07ErZE1tPsNWFpZw2EgwoKPOJUEULELXYqIbDQfWQteqoyLN/H1bFx2NwwMlL+ZtBSCIyirlq7A61Uk6EarYgAyhdLqFPVK3BcD5Mu2zM4cmT/Q5fCr64ehMWrQv5DuwrLUwn9K9m0fo4glN7smpm4xCXBkNRTHYBWNObtY4X5mYK6GIVEUykPK9JJfVHDDGkiUDfSf8W5M7S7/3t4UucBn9cWbkYASfZTOHQv5VsLmvxM77jdFvdImGhlESnN44GCgNpIwsmKLhJOVkGcA+YgWCYW7X0i0z4YGTHM5wXM4LFfHc/XMa3x4gwoD5OxT1LvB1FXoapn40KpMYxjuw1vy2jfwPAR4Gy+fyVKCk3CuS4+sLN4/cSYds3ERHH+SCwnpJLF5yKS8VguLRTFZSdnQG+WzN7Zwv0NNZ4hIsaSqivxCfXcwUPaPVvX+X6aTZmLBl9qd239w4KyKxwcGbNKEIbRh6F2H+kgzOvBZw+aVC3lYlq4AVrPXAlyfSNsG8nD/2zdD8lgBJSmFltpC5OSz8nJMIlmAfxtnWDWVcPBrA6Pbd4DcW8IWpaeDzlJQbmhs+jYjHLCLwuWBrMqB5tVXd9nVFhm39pTcA6zhfhQru2VNZnvDOwrPTAxXvpcJlsKF8ki3cYmjzd37Y64kXx1Ww7EdiS7EbS+fFqszWTUMOVBBBIRfzarRWKjwpcP7PQ8vO7h2p8NDwjL3npooWf9HSezi7UFkIyDYqbRrcc9aB2sKCbytS0NvM0d8NEvfR3Wv7IRfDWdsHDxcnjpzWH4/QNPgy/aCqGWbjB07eiBAMfSvHAJ9GP0G8tIsHLVp+Gv+5Lwy9/9BRKpBKz40jfB8AZZrcmL1lrtlVke1+wX9Paw/NTlc6qz3CuHnlsC5oGlwkif3vHgt4NXH9gBj8SG9e8mk6UW4jcFLZN4MaC4Gnpmun09zTLcsH4AxL7dXshjhInFtJeHY5kfHxhJ9scSOWYpCl4U74SQShkzYyPyV/p3e/70+gb/zwupxkWloU+J0QYF3ILhiXikUK0XBZxkWY51sh/O+uzX0AxUeGLtRvjFnb+B39xzH0joKpBLw+iuN+Dks1eBICswlU6hMqynuhE6Fi+D51/YDPc9uhZ+dPMvoIAyQcHcbuf6/4VZs0+GBR+/AjTTcsUqFJ4yftccdOttYddEAsn7mdsXMpfbtcUbfegO4eq+rd5HxwalHyLfLCyg8nShxVPgSGE0PDSaih0cTN872g/9/QesMYmfvn87/PDZfTCWLqQ9ZuGmTDZ/+cBY6uHBsXQRozizJuqA8h+UG3XJCfMfDu4pPrDmP2NfW/2F7lBJN4liYmFUytUeic2VrKe5ax60z1kEJipsCQfdt38Udh+KIdEK0NNkQn1Ah+jJi6Aqiu5jpyVOYibpMGPuR6C2aQZIqPWGx1Lwxq5BVNwArTUmtNexOjTMOWMlBGsaGaA+vKE+EttglkqamVTQooaTbuXRa1detq+v+MDYkPYfmTTMzeU1SvPAixZDVjoykVX7R1PPJFLZz+dz2R9sPpjNrH6kb3K5Y9NAGl7+WMa496D7kB/yT6IaThQ1oRcB8rsJZZdkZcsiESJE8jljeTKuR88+o2bzq29OLMDBneJ3WeHbg82Hkau5ez40tHbB+J6XIHuwDxrCIpy7UIBPnOGHeR/7KtR3LIHBtzZBYnj/kVEN/7UvPAvasKmJPhh4YyM0BEw4tVOEz54lwfzln4Fo76egf9tG2P3KWhShBZamUDaD45hA/fTLa6/uyr2xKXPNxJh6Q6lodtLqNvUs21SQxxRmPJ5NJJKpWwsF9ZpDrsatrfqI/vPN41PXg67bArB9NAfnRKHgLSU2lkT3hGqIZ6Pi9ZAVCZNKDyAXi8YCzCdmxTKFbL5g9Lrxqm4coR8Vr55Pw/iBtyBUMwMWn70cGn05OKmmBEtPa4Xu5f8ENZ3nw45nH4UDrz3HVigqoxfJxGxsAGS3D3qXngetdRK0+jJwVm899Jx5Gcw49UuwZ+M62PTwXZBJxIEIFoMLRjYRSrqxc25PeE1sWPh2PKauNnTTz7tlaQhmRpT3xdP5TC6b/F6gMHBzyF1K/vblQ7BhqPjulp5vOCcAfjGjHFJnXq94Q9+sCXslsgzRoexM64IGZuDJHQfj4WJBF6t8CsvUQwEFXRPTAp8PmrrmQu3MVpDY+S5AOGFox1ZIDB4oh3mJyhuU6pMIxYjI1r4wQgmYnNbPOhkau3rwewFUTIKLyJkje/8KYwf6QEdQiAqSVBFAHtGY+DLXL57XMIia5mLUTrJgl00s1zUZkMl0Uc9mkz+rhYFvlwRf/nvPpd/72vy151Sj/5caM2L9H/y+4MpwwM1cTahQvwRaHkP6noEEUFBqrPJBVUhBHWQBKggmsw5JdtlpgGavZUlsJYKa24OAkraiek8mixPXyoV4bmGCJLMqgq6VLNGIHkNRK5Mr0YQhiVsZb8rMpmDeJ7tcCJbM5YKVwLL8EdMhFXK5zPMudfRvTdE9eP3ao698vG0Wd1b7BDx+8KRh0cj9IpXNx2ggJZUv/DnCMX724t3vjFYh96COohUHzSqTsjDLnvsR7Xo11bElZhkmz8FotQMTTVnxguzxsu84OGyCtKZPlUl72Zk+iwiWFRCsQpmKQEkITktTCLyyy0vgONU5AUljz6G1pbP5cUHP/vRP2xYOnt4x8f5r0vcgJ121MAl1cnzPSEEx86pwJoZTlyjYpU3hsBnSUGS0hBBaGS3NUNGTEbvgXHEQJ3ExvdfsLN+NOZQLM3ICIZdKQwHTFl4IOzIF4cCa7Fp5PJ9yr+b6AHgkmQE2qfKgmywtySI4sVQ+pxcz1/f4B3/fXTdm/P2DpWMr2q/dr8LC5oBRJee2xgruSEGFRcjFIpUQxHJe5Sgho1H6mGDT2WqDKB0GpVI10wbzJRgcTUMes/ES6ojkRBJGRlPsblMJQ5gqZ7OtjpaQini+4a+DqsZGcKm5w+Cw/O0w55BbjadyaqmUuy0kpm8cLfhK31+Xnp5VjX89IwSbJmrUoNvcmi4Zc1TN7JKRW1gBTLT92xGgmfVEGsHwhFEn5nCUmsUholimvcMPMgAk0gXYP5KCAczSh2IZ5gaRoAf8PndF5LT4iK4leYLgDteD3NgF7s7FIDV2IlkXANLjdnJr1ayo2JajYluqgFou/3ijN/2trC4nb1kRh+vWTdOyz39tz8HnF0Rg25ieiXiEfdmSsQIvHmFLyaK9hmDPVpdcoM48FVzti0Gsawc5WIv8JAPlqAYmsxSZLGoQ7NAuYJqA2slllUGCXjc0VfshHPKyGvRhcAxWCvE1tEH9wpXQvPhj0Ny7HJp6FoEhypBGYjeD9ehueRAQJN22HKpExpDAc4XCrog7/4196dDuFdERWHDnNK+LPdGXgIvnVMNN53gH/rxbLeZUYzkOwi3wKIHgaIILih1LIdy+gAESDIWhc/5p0DTndIh0zMfUoQm0Yg6K6ThzEW5NEh7sRe1EKx5VKA98aDmyQ3eR1cjeMNT1ngeNiy+EULQbI14IRIyKxFOBgN9+8iwFqhKCfDwGWiYBGeIcBCdTKMYCcuHfbtsw/mTfgzqsfvzdL7a+p4XDdfsSkDNR1wSE7RN5Q8mrxmIESQZeR27phdputB7MwemBqe7uLnQTH4ZnVOKeAHjrZ0K4dS5ONgC5+Aio+YzFEZpFoqwPqiKiwi1n4Wg5vqYOaFpyCYRmzWeg2CzNGn92yIfXScTjkEpnoCAqkBoZgIlUhgr+MUUsfWdeaPyeR+8MmN9/PnN8V1Y3HEhCV11Yq1KEzTnVlHIlTPpUTRGrGqEBTR4lN0YkN3R2doLX62UTAMfzhpLLDf7Gdghipn+gfxSe37gNtu0fh52DSdgznII+3O5EPbUL28BEAVp6l0LH8ktAqWpgpQ2nvuDPLdKSNzWyuOGhIWslhFZGYqNvYWJ7zQy/+IexYkC/ecN7f4jhfS09b+5PwpyGYLHZL25IFfTBvA5dkdmLagM1DYKuqdDU3AzBYLC8RnVkvccEVyAC9Z1z0VWCMNR/EOLxJGSK1nIPTbq6tgbOvOjTMHfZKqaPLO4yD7sd9k0rGsVikfFOJpNhW3K12DhykKz0e7zeK3/37GuPrbrnVuMHLwyc+Kdcv3tWFK6/7xB87srzLg63dP4OOSdQV1cHbW1tyAsBZkFkTaIolvOsSU9uCBa9Jwf3Q9+Lf4bBna+z54NqorOge9knIBztmrIUa9ghnqyGAKJGjwmn02nWxsbGJuLx+LcMb+jXol7S7/3trz+Y54PWHUzBZ0f2Ag6kWCoWFuKd7wiHw+XHX/gdFxxlVQ6Uc3lGCVVDXccccCs+8FfVQceyvwFvbXO5j0pQyEqy2SxrBAxtyYKIpOkz9v0gHvuDgFtWf3PXrz7YJ8zciht6ujrjqXR6HVpMFAd3Ml8CZvxTAcpUjUI4kW8k2gE1mJiaKBWKCIKzH3InAoYDQltyKWocIHqPAI7jsd9TFGXX7bfffsyP4MnH2sFdd97JBtvS0pJat27dq/i6CCek8Inx54WIk9havcsKzU7QRPthA5auyDKLfETGNGl+PgeILEizn0Tj+/h+atFoVO3t7V2E/SUvuuiit3CboWucf/75J56DXnzxRZqYghO8AAfxVdwu3rJlS3Dr1q2Mg8jdaMvfE0jESwQSATG5/gPlBJU3mjjyCRJ4fBIw3KJKjucZaX99fT2cdtpp1DdKJ30M+3sZ27343V/wWulVq1adOBd78sknaYBetIarcZI/ItfC3UptbS2zqCEMt84yKp98pbtV5mjO98yaUE/Ra2JignEMETIBR1sChj8pSz9zWLRoETvetFYfA7idje3jeO0mHOvmyy+/PHP//fcff4Aee+wxGqSMfv4NBOhabEHRXv+mLd1J4gO6+5VEa9hLPe/UyvUY7I8ssKqqivVJQDkf9aO+I5EIoFuxh9UPP7xQtkQ3juEUtKJmHPO6yy67LPfQQw8dP4D++Mc/sgHj4D6Kd/gn6C5VTlfhAJAl0R0mkMj8nU/S67wANoUlOXnJaV0kFxoaGizFnEgwsOhFwM2dO5e5Lwd0isdgBHp+GsdTTCaTL1x66aXmmjVrjg9AeAdIa9R6PJ6b0ILmc9J1DoibPQFJn/ldr/ypwVQiciqwnN8RII2NjWWQSbHTdSrBmVQBsK4nolt2IEjrcN/gihUr4IknnphegO644w6orq6myV6CAK1GgGROtk6ipcFzhUvg0V0nXqLmjGxH00qV1lVJ5nhdaGpqAhKlVkFMP8JyKoUlNRx3GMc1etVVVz177rnnwlNPPTW9AF144YXkMsiD/m9jNJpHZk8AOX2eRxiucGngBBCRJwHkDN1OKXA0Dno7a6KISM2e/BFra06guNBEHjKWLFmyhh6ueuaZZ6ZXB9FFEJB2fHuq8646weGhmD7T4LleIY7o6OiAffv2sbCtO39a4DiPgKyUAk4+Kmsmu9FxZNUkFinKUR9H01q0D1s9vg/ivsS0CsUbb7yRD64Dt7XO3MrpWpwbyLrYz5Wo1IEDpv00YeKMvXv3wjgllBXgcDBpH4FErkTncHngtCaz4idVxEN0PBE4WS5dv9JtaSzYnw+P8wnCu5OA7xog6rAZs/T+/v5OvIiXD9gZmTgXOIFzfk8DpO9mzZrFjhsZGZl0bvkHLvaWrAm5joHk5LrJacpka6LoSdbEo5wzB7StKILHNeF257QDdNNNNwlXXHFF1P6R8qSoRO9pEkeLIjRpJxfMnDmTfcdB4kA5lTJ/TyDRsbaLHCE2K3/bwa2JLMnJbzZAAWxdaKHPTWuYJ4JGAehCf78CSXceN2Fu/tw66L0zjXCaOQeHT54mQfuoRMGtqFIKGG/zDNHbEbvtTpNUvA28iIS+/5VXXnkClbX59NNPT48F0YRRsQbxoi1OonTWeqaq+zgXAJ2T56ULAposhCJc5c8xndzktCan9nKKSusXjUb5ZtCLjuXg8PFh6+nu7iZLSk2Li916661sIHixZuy0DJDzLjpNf6rox92msgpIjYtG+s7JWU5weLbuLMTxIFCZ4znTDSf/OBrRRDVuU9PGQeQOONBOHFBtZa5U6VLOu8hdiieZXAvx6h8BZT0Mblkafz8VeTsbaSse5SojXWXi6/xsH9OI2zacy/539Jx3614UnvECc7F5K8ImVOZiTovhFUAODGkVahwc+p5zDVkGlWvJjegcZzGMzsE8iqUt1Cic034CnpdCnInx0bjJdn3K9GfRd9ddd92xA0QX3rBhA/3ku6eSBDk5V0YsXi/mtWKaEAlE2tJkK8HhQpISUroZVD+aClw6nwAiHcVLILwvZ+SrXDCoqDvJVB5evXr1Udf/35OL0cTR5yO47ea5Ew+5lQTsdKlKd+L6xAkOnUcJaEtLC3MZ2kdb0koDAwOsGuAkdm6V3HJoS2WOqRT40aKdzU8zrrnmGhe6qjpdqUY1DrLOmVw6VTTnD2dRnUDhRExg8UIXB4deJOwo8STSdS7r0CSj0SjbPzw8zM7jnMR5iBM3B4qskLiJ54hOMVvpcrjPj99L1o9dpsGCsNUgEEFnNk539PCDSdokd6DmLK7z5JW7AS+sEUCVIZv3yetKNFmqUHLh57y+k+s4UAQSV+C8v0nPG1lAedHaJPEdfugiv1sOwsEEcSIKHwjXF+yROU2bFLY5MNxinODQQOkOU6mCeKYyoZyqTk2hndKc0dFR1rcTJA5UZbTkIPF1OdOxTG3fcI9AT3JNR5i3RZyGHZr0nsDhNWO6IHcpvvTCweFg8jvMM3wqkfI/duLIkSZplcrlZQ4qXZM9pOCQA1NxFF2fAHJakjOFweNNZ9HumACiydOvD3Cwo3ihAOcbmhT/mz582de5DOPULfQiUIgnOMCc6HmrlAxC+S9S6WUAyeroOAr5vKxSmcs5QeKkzaMttzI8bgi/L1BAOGaAbFLdh4NZi9tZ9JlA46brJE2nLnHyDY8ylWkJL4ewv0jlcDFnCsEnThPlpRA6jyyJQKgswDnJvLKmZFu8juN8BcdUovOPGSDbWqizX+HkV6K1tDvvtrOSyOs5nED50g2vPFaWUp3uVZmp8wk5s3hutdQfyQPu2jxNORpAnKjtG7cX368lq7/llluOPZt/9dVXYf78+XTRQbxAEi9wOgIVdEYP5wIe//MU5P8EjqOaVzZ3niI4XaCSh/ikKhtPhOl7chHiJ35TDMcfZ3KCxV0OQcnh+x/jvsfpD8lt2rRp+lZWv/jFL7IEGdtF2P4FBzjferx/cmJKA+d6hFsDB4SDwrN4ajyncloJ+428o77Nuc3pwk6w6FiyJO4ylWDb1lPC7V14/PXYf+ruu+9+xzn/H1DkcPYCoxwmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDA0OjA0OjQyKzAwOjAwIRxE9gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwNDowNDo0MiswMDowMFBB/EoAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC"
      />
    </figure>
  )
})

EmojiPersonGesturingNoMediumDarkSkinTone.displayName = 'EmojiPersonGesturingNoMediumDarkSkinTone'
EmojiPersonGesturingNoMediumDarkSkinTone.defaultProps = {}

export default EmojiPersonGesturingNoMediumDarkSkinTone

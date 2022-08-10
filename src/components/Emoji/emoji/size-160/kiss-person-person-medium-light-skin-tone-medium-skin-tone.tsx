import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const KissPersonPersonMediumLightSkinToneMediumSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdAS0w2p8JZwAAAAZiS0dEAP8A/wD/oL2nkwAAHsBJREFUeNrte2mQZWd53vMtZ7n77b1n6RmNltGO0AiEEQIsMIvAKWMnVJFAMA7BcWFiYnDKIZgyriRF2Q6YxMRJQTCYSlIubAen4oBsg0BCGkkgCcmSRiPBaPbpmZ7u6e67nXO+5X3z45xz7+2eHiQxBJEqvqqvbvftvqfP95znfd61Bf4frL961YfR5b68VC3sbKvGzZEMbwhUOEmCvfNm0TM9sCb7D99k37L2D4K34i/++oEtr/OSXVV8+xVLuGvxP7bn9PRNsYpfFiKY9/AqdYNzmc8e6dHg28f94omaqNCb7/nYD/0s4ocKzCv/NV5RuRkHzNPbZ/TkL03Upt5a3zFzud7WrIh6KEEMXs2cW1xfT1fWv72edv/Lqd7ZOyo6zm78xq9suNadr/v3GCCLd2HmzVPxxHtas9MvDbe3WqIdKwiAuhmZU2uDwelzh9b7q3+6bJe/cE3t+lP3rt2FN+//vR8/gF76T67A/oN/gEfjQ/um9cTHZ3bsfFXltZdLcfUUEAeAkkAAQDKwmoLvWcRg/5HO0sqZ/3TAH/9Y29W7t971a2j8wmX4cuf9OIP1xlVyx4e2TW17X+vWSxvq1u1AKwacACwBnoHUgg+cRf/O7/qzp05+cyVb+fXJYOKRE9kJvPqe3/7xAujAaz+DBOmLJ2XrszN7du6r/b1rgGoF6HjAAZAiBylSwFQATErgkSX0/vKAObJ09D/c3Tr8b7YN6t0gE1gN08Z12fbf2b19969O/P3rQnH9LHDWA+cMkDrAEcAEKAE0Nbg7QPf/HMDZY8e/tWKW3xPL+O9u+Mav/VDOpX4YF7n/to+jw92pKdn+w2Zj4tX1Wy+FhAZWMoAIEJw/CoH8yXccsM7AFS2E2xoqPNR/Sbhqw/3t4/eejfp6X2/nh/fM7Xr/1D+8IRKXzwCHUuBcBjgHsAe8A7wHMgusJhAMoBHCn+zuYOd3LZuzf/3Ll7wh+eyxr73wAN39xg9j3+A29PXyLzZ0832V2ZaKWxUI4/MnDB5tUTBJS8AysEbAQh3xTEPHh5MbZ1Y1bU+br9gzueuDs2/dV5GXTAOHU8B4QCIHx3nA2RyscncGQD+FWUvAqd8D4qOXh5c99PqdV+ILx+66qPPpiwUoNg08HH1tZkrM/qKSOvCphVvpIpxp5IfyEnAK0BoINOAJCIL8eyLgmAF2TmHqF26qVb/a+i0HJ+o/c0Uot00BR9L8d8CAdTkw1hUg5a9sHSizSFd7sMZCShVEMvpHjyePf7Euq6sXe76LBki7AEKI67TSVzMYNjGwqYFODSRQgEM5MJ5yYBwBgc+/VhpYdhAzE6i+/cYIggHSwJIBqDAn6zYypgTGOTjrYBODwSBBagzADCnkdYEKrlJQ913s+eTFI6ygSO2VEE1PHt572MzCpRaUGCAtdmKL1yzf/RToJUB/AGQpsJYBXQBdkX+dZcAgzX9vkI4+lxhQksGnBiY1yJIMaT/FoJ8itRaGHZgxIUheL1nia7f+1gvLIMkCimWDGYKYAe/hBhYuMZDEEFpDaMpZ5BSgyi0BKXNNkjL/XhXPiygX4XJT/srOg7yHdx7OOVjrYDOLtJcg62Ww3kESQTILQdgxh3msqtUXFiAUEsFMIPaAl3B9A1fJID1DBASlCw3SBCgPSFUAU2whNgUcDHCxyQOeQJSD47yHcz43LeNgEoN0PUGWZHDsoZgA9mCmcPvai3Fw+skXFiBiB2LyTB4gAgsPn1jYTgZJgAwIItCQARcASUD6HBRZAFN+XYIzBhCTB3mCpwIcT3DOwRkHk1lk/QxZN83fIw9BBEEejmj94cYdeMFFmuHBwi+yd0ZIHbKQIOfg+waeAR8RZMAQIeemNm5aYhwgjEBiysEmgqcCHCL4gj3W5TpnEgPTN7CZhSefs4wIIJd54Z9JRYLX3vNvX3gGsfCPMbllkN/OQgKkwMaDyIKNAEcALICA8xhIyjFwxhgki+85B4e8hyfKmVO+Op+bVmZhUgNrcuY4KrSKCJ7soof7DrO8eAb9yYcugzOZ2HPDy6thXJ1QgW4IIWMBoSAEAGZmtuR93zu73u+srV1z1U6365X/Oc9VqgZep4fRjb8lfPgWEgJMGoIIcAwmB3jkOVQAQHOej8lxgMpUBEMGsfdDgLzPvaMjyoXZODhj4ZyDJ1+wx0EUYu7IPdANBseqHAMArgTwFIC3v2gyrlaiSaV1Q0pRFVJUAKEAeDANvKe+876TJMnqz958jXn35/dDPPK3H/jnQRheq4PochXoOanUhBCiBiAQQuTwEKXkXcc7d9Yac9Ka7KDLskesSb+T9XtHd372Zsvk3hb6+uecCmKlQlSDGJEKEQiFUGoopSC0BnTpwTYDVGzBOQsKQbaF7ljysM7l5uU9jHew7GHJwngL7x0C8gi9TxMevJPg/uzz/OmwWq3sjaLoJWEc7Quj+IogDLfpIJgUUtaFEKEQQjIzEVHmnes4a1dMlp3K0vRpa+zj4vTTn6IgCoUKNKSUOWnA52sNI9cE52CNRdrv26TXO5Yl/XsyM/gLfWf89PT+Sz4DEb3SK42KjlHREUIZIJAaSqhCe9SYexfng1MARD4HxBQgWRrb7GHI5dtbOHIAOcTEUN5+43H55D9+sPbNK+v15jvrzeZr6q3W9lqzKYMohg5DSKUgUGjgUEsZIIZ3Ds4aZMkA/U7Hi+7S5xnMW4JywQKAAMAC5AGTGvQ6a4NeZ+UB/VdBb/K+HbcbllrrCFUdI1QBQhlASp2zWRT6g3GR5gKk4j48gbzLmVICwjQCZgiQhSML7z00eVSJeofE9373nvZdO2bnt71tZvv2dqXRhAqC5124KMVFg+l5+60cS4ZUEnG9grhWrzYmp2/rvGXJYCWV1YMN2EI0pdA5AMxjf7oAhzF635cPKfdgYIYoXT1zEWcVu/BYZWghyaMKgWVx+sh9zXt/buGSPftmF3ZJHcUX4Z1z5yGfe5lIbLE5z7DhEUUVTF22EOq3NmVlUiEiAfYOIMoFm0qQeEO4AxZjX/Mw8BQ8HhblAPEYQCU4gggVCABp7x61f6Ix1bhpZtu81GF4gZOPBaHf72fFllsfHN/nvQuF0wQJieDFVeC2AFWlobjwYrmAFa/j1iw2PjLGFsEiFQxiEBGIcqBEsQNm1AE8Kh4NT/CpGSWVEEJuuvYFQNkMyHk3w9CjfJUvwKALsYm3IiWEBPwbJfRTAtGTEkyUxyeQgCCcr3dj9SLelGYwgzFiDxdpRM5IgiJCQyisRIt41D8RpqlBp9OFMwYqisdEmDeeY3j7PMRpwz2V3wsBPYoV+fuYmXgOFiuGf8xPAfTzhNpSAHEuj2kEVA4Q/FhasQmgzeCUzOGCOUQQlGuTZEJFSASxxam9y4jPRkgPeZw9t4bu2ipUEEAoNWKGEBBio+fK73fM9Atgxj4yzqDnIFrPUtpm5jywcw601wGvc2h8qQZhiyh3SH0x5s14U9ZLQ3BoyBzeYFaSCQEEmkrgqYVF9KYStLMmmIHltR6OHz2BOAqhw2gDIEJKCCFHz7tIssu/V4LEQ7AA7TyN3aTYDHAhG+fbL2+yWaZCI7zLI2BvYV5GkMeA+rcaRRrgRo/mPPh5DCAassbnmXnu1YjLcgZaUuPk7CKOz52BdxaBVojCAMvdBIdPLCKOAszPzUBqDQExPEMOkjiPQSVbc7MeHV6nSa8AVIxoiA0gF0hzQb9xtIuLlSbgff7zEigQVn4mg1jTqD1VKcqnPr/6Bh3daGalO/dMICrYQzl7FDNqQqPTXMXBnYdhkIGMBYhQjYKcRZ0ETx8+AWcNJltNKDVWeh+aGvJgcSughmbG0ElnDVLpAp8cXTEM5AqoyuSxqMkwjag/bmZMxdOGGIqqqwucecNJzHd3oXoyKAS7LOKXdC/AL0AnEBz7gj2FO2eCYkIsFFxtgL/b9TQGwQBsCc4YOOsQaIk41OikHmfW+iA6jYVZg1ajBq1VgY8YOyOGr1zWtKjcOVj63OJxVOoNqCCEVDoHSYqRuTEKYBy8sxsAojKgkxJKByhyt6FoMzOEEHAzFouvOYqd/3sPolUxAkmqoc0TGFSwyXEOUMkkMEESI4CEiDI8vO1xrFRWIRzgnYWzBibLwMwItMK26TZW1rs4vTaAI8J8ZtCsVRBoVaRTG0Ea6aeH92MAgaGPP30IU9tmUGu1oIMoz1OkLEPtgjmUF64ov9nS7EpGCSmggyhPSIUc0hRj3qC7awnHbvXY/fXLEPYATx6CCSwEPBiudLnAkEHEHijjHQFI5XBv4yEcjxchs9xDeedgsgyDJAERQyuFhelJzLXbOHRqEcvdPqwjzBiLRjVGqBWkkpCFlXApG8Qg5iEw5SH16SOrGHRTTM330ZhoIogKkMTIM43b5xB1IXLwnEMpa0waUqricyMTLF/XrjwF2RX+kv17wMYryx4kZAHQSJO41J+icBYAiJQwdwbfEk+EB4O6q+ZsLpLLwSDBIMkZpKTAdLOByXoNrWqMZ04vYXntHOxKB63UoFWLEQYaSo4xqGDx0CGNqZN6z6tv+GiWGPT6PaRpAiaf48qjqHU8LhkHTQCwxiDrD6C1BqQY5U3ERUpA+R+n3JAGE6trlVPt/ZVOZadjpw373KRQ5loMj5HGaQFUlDSn9dk//0t5Rz2s6EklZVG0t0jSDP1BgsxYeCIY67FjZgZ7dsyhVatgolZHNY6ROY9ukmKQGXhPY56rOM8wq+GxDIehfvMdb/poI6wh8Aouseh1++j3ejBZBj+mN2VnlBmbQnNGd7UDJkIQBhvDgaJEkot3UV8WjruT6x+ePbCzpyRudOyFYZ/TeyjUBAFGAIGqksyKP/c5/rPPdUXnbXEYNpkJxlhkxiLNDDJj81o1EazzaDda2Dk/hVo9RrtZxUyridlWG/VKFURAPzXoJhlS4+D8SG/EFsGfrs1tQzwxiXoyA9PvI017SEwf6WqK3moXrBhCC+hIQYUaOgwQRAGCMIDSOs94lcba8lrxfm6iasgogHyZ1AIgxOl0RySp/Ehc83OxUD9nXS7IgsUw8wuFREVJWOn+pw6qHz6aHL+mosIJYwyMEXmMVFQYnc8/n1lCN7Po9HtgAFJJRKFCVAnRbFYxP9PGFf3tWOv2sbK+jtVuD72kj8QYUGZG0bMUCJSEVgpaBgFkECCo1lBpT6JuLcia3HWaFNZksCaFzQzcwMGRwQAZEDBkVSFqxojjCJ3T61hfWUdrqoUsyVBvt6CDYCx8L6nLgj23F3/2O0szd131gboIqzWEr0ucATFDQCAQArHWsMr/zZpKf+NL2RfPSsgmM6LMuLEUhOG8h3EeYEYlirC7MQkpNTwTQiUgCq0JtURY0ai3KphxLeyxczDGIc1MYaYpBmmG1BgM0gz9LEVmMujSY+WKpCDDAOAqwjLW8YWJeA9yHt4aeJPBpAkG/Q7SfgLZkGiIKnqrCcI4xJnj5zBtPCZmJ0baxWVIRSDvw7OXncLCN294JgH9ixjqM3UObvGeIIWAkhJG0Dc7nPx6zYZHDtL34IkCIhKuDEYLx2Cdx+nVHkIt0a4BL96zA3PTU4jiMHfpcjxyF3nPMlAIKxoVjtCkau7BfJkJEKz1yDKLJDXQUskNsiGYi6BRAFBgPXLX47rjnUfLWth0AEMGdqoPXjqBwfoA3eUE1nrUGhUEYTgKKBkgIvbOd4k86ne8A+de9skD3VC9t+Llp2IEtwohkSK7ex3JeyscHJjc/yt4z627wMzkiTlPeEeepzPIQCJEXKmBBMOxR71RgQryIJSYocrKZXkUMcqvhcyFVQYAOPfAMYAmAOcJ+v79D+PGfdchiqP8IEUAVR6qBKxcaZLiwW8/is56B1EcotmsYXp6ChPNKcyQwHq6hCntcPL0OazPdzA1PzVWVmCQ8947t1Je70jvDHbXZh89Y3vvaarK7ygWSNn+9oSsHjzqzhadaAaAlJhJEA3zBuM8uqnDDZddjr0L2yEkIEOFJ4+dwqnlVax0+hhkFs1aFW/4qWsx0awOPReEKGK94uuxc1rv8Y2HnsLR08vQ3rlhfCOk3DLeKQ+Xl6Jz8LTWsMbg5Il1fPfpQ/COsW1+BjdetxfNSybRfWKA5dMdNCcbeeu5jFa965H3q+V19z3xMXzh1l/FO/f98cGHH/yNd4UO+M1n/jz54MIb8JoDnxyPozrMPCBGqzTZziBDo1rH7rkZaK1w75OHcODYKQCMeiVCo1ZBFAR5XEU8zA6E2FAFKTRyjAUe8EQItIY4/Defyn8kNlbgRmYxdqUxWyxv0nuPfq+HxZOn8dRTz+DGG67CTLuOE08/hWdWjmPh+jnUW/U86vUeNjPf9d6/QQhx+PZf/l/PqdTy7lsWwOC9Ssg7lBJ7AMBYj+VuhusuvQzXXbKAtTTFVx89iBddvgN7d81jolVDoFUu0ltUKbBZNbb8GbMez0c2sGaL8iSPma+UeR1JKon25ARa7RYuvfwSwDuQtZiam8fK+ip6qwPUGtW8ZWQdvHPHiWip/Pxzq0UxiPg0JC0KVnsEgEFmMdFsY9vkBJSS2DHTxrtuvwWVSgipZOG9LlC9GreKLco75fFFWbTfnLhtvlhpfkLmbeMyXyv5WrpdrXWe8EqJsFbD7OQ0bDcfciLKGUTE94JFn5mfO0AMKCV6zPwoEcF6j8wLbJ+eRhQEUEpCKYkw0Hi2BtZW5xxPXsc5Uo4MDA84vsdN6ULvbXR/4jxAG80WItIwmYE1FiY1PSFwr5DIo+7nOoMkBIz1RMT7rfMuNQ4sNOIwyHOqYkNszZqtsvdn7YsVvy+/34eejVnn3Y3ABvhVECBWEUxika1nSE9lx6hLj7l1h9e/+0vP+WY/u/84LAJkHBwaOLk2yByklFBjpYsLgXMhAgy99JgFbEUCfSHaPRstL6R2DMA7V9TDBEIRoJv00VRV1GXF0TmfPJ8nWa5qpQEA7UYcV06vLIEgILcwjc1lY7FVkX6L821+v/ycLOMeualWe0G6l1qEjdYlpYR3hKcOfhcnjp9C2bHVSoNSD00BhIDyzggqa9PPYzlPMM57pSRPtyaglN7QzBmkBsY5PNsRNuqNeNb3tbUWxlqkSYooilCv1y7o+zJjsL7eRVyJERbiCGaYLMO55XM4/L1nIJhx7ZWXDQttUkqIRAIK8M4NPNGzn2LLOSQCES8PMtNrVCp142kU9DFw9tw6jp5dxs3XX4GJVm1DbV2M1aHzEs6za54oSjf67q/dDQbQajWx95ornxX9s6fP4MziGXhPZbMHTIQ4jrBz53bMzUwB3sImSdEPA+qIAUvw3p8AwzAxnv8SAHgxs26tGtF8NY5ARHDFZO326Ul00hR3PvAYdsxNYmF+GrVqBCEA5whJZtDpDbBzbgrtZu2CIAkBHDu9jN4gRaMWQ9/0spcgruQZuRizUSGK6dOi7AoAYRji2hddiyuuvByDQQKTZgAz4jhCJY4AJvgsg7M8HIBiYgRSwzsPZjrYaE+kvc7aDzpQsE5MRzLrrgqUgvV5/cd7QgSBG67YjT07Z3Hk1BIeOnAImbFgAEpK1Ksx9uyYRbUSbYqixYZmIQC06hWcWV7Fd4+egm5PtMbavBvEBkKqoquwMcIOggDtVgBuFrM8RemVXF5gA+fzPeTcsNNBnlIwHu5310fXe17oMO5/9OnBK/dd/Xhm3RvzTN7BFENV3nsoJ9GuV3HTNZeBwDDW5g820IiCvKmQNyPLqb8y70RerCsil2a9hpuv3wtPHpq8P1+shkKc12e4CC3Pc4NFOzivOo4GDUpwvHNDFjHzMQY/KFjgTX/wlecv0uzwypuuBhgPEZPx3ofGe2Q2B8g5gvYE8vkMgFQClSiCLNrctCluyx3TCKC8sjxKqn2hb1JsTieIzjfKDT3ssVxtvChPo+ZhziZbFNbL4j1/jYlP/KDzOn9636GyXPEtYj7kmWGdR2YtMmvhnM9rOr6ofxe15rK/dV4MxBhLN8SwObo5JpLDGKYcuzUmN42Ch8wMsnb03hiADAwZRMOimsuLasVnvCcQ+BCk/LSOQnf7x798ERO1DBW3Djvnfvdct9ftZwapdUiMhTEuB4koB4i2iPaLozpHcM4P8y1mhvME7+m8iRg5zhAmgu33ka6vwfb7cIMBTLeDrLMOn2Xn9a2HTBqams+ZY3P2GGPx1MlldOr6idv+5c8/ecmbb7qokdz/du9BJOcOM2XrDzyzuDRYXO0gNRaD1CA1FtZ6kCuK8MS52WzK2JkZJrHodzIkA4MstRj0DQbdFDZ152VyenM+5UyGzuLJXH1k3vuKqjW0di5sMMNxDSLvwc6BrMvBMQbeWHT6CUzoMHflvA4abRm313CxqxJqSCEma6Gsnl3rYtf0BCqRwSAzqEQBwlBDaQJLAZbj3mkUF3lPOHJsCam1kDJvdNbjCLsWps+LuiVvmp+Jmy1UJ6fgnUM2GECFEeqzc1BxZahHpQiT92DvwN6NTMtkcMbAWoOuSdCYDBCGqrK+0gkZF7983gHdXg1kaEyKc90+UmORGpMLtnXwYyyichctZQigWoswP9eGUAJr/QFYADMzLUSV8LxZKI2xMiuEgIoiNLfvRH12DoCADHQx3CByUypMK3fhxRSHtfDWwJkMzmTwxiDNMrjYo1IPwOQbJk1jAaxfLEDGOgRa7RACYSUAznW7mGnVkRiDNLOIwwBBoCE1QUiBYswAxJx7NCmgAomZ2RYmpxogT3krWg3VZtRM5HK8bHzSoXDzsuh5bfZoQqn8HwmL9tCQOVmWB4lZBmsMBpwiaipU6yGkRNsZW3nuo8Zbr196+Q4cP9vBTKu20xOLUEmk6QCdwQD1OMLAGMRZkLeWdd5/p0JmhUABghw2QZWWUFp+39BUlyJbJqBbljEKWL33WD5+LNcYaxFFIaIogjOFaWUZbJYhsxls7FFrxag1qk4Hqu6dqz2fItmF1k9fv1s+dmTJCoFDUSB3G0f63HoHjWoVlTBEHGiEgYIqGKEEkBoLRx5RnNegGo3qhqri5irj8MjE0Oxc/g9uZfR8gYqbJ8KxJx7H4cceg3ceQinsve5aaCngsgzepLBZ3mC0FeK4FdPE3JRsTc18isl/m5mXLpJAEBDoDgw7T78/Uav8d4D/a2eQNQSZympn/dI40IgCjUDrUa0IAqvrfex/5OAweX7pDZfj6isW8kbl5mmzsvviCeQZmpzLR0HKaHm8MigliAiDTgcnDh7E0YNPwVoHrTUajQaiOIJNU7jStNKMORaduWsueSB1nW802pO3Te3Y9UUw7tt9/Qcumj1/fN8JAOB337KwOj/ZXDu+tPo+imk1DNRtSdp/f3dQbYdaL2ilRtMbAqjHMTwxFldyCezd/wSICHsv2wGt1QbNycHJt3cE7U02nIgr/01p2N4hQn9tDetLZwBrsLCwA1ElQq01ASkFXJpn7NZksGkGZ+1j4UT9X81deemjj919/6ltl07/EQSSH6S88WwVxiJgeehdP7UDAlg0Nr3DMd/SSdI/UlJOj+Z/AAnCvku3YX2ujfVegk4/w+MHjqDfT7F75ywmJ5sj5hDnsZQjOOMhHv+TD7GKYqgoygvuSo5G8Mb6YeQdTK+L7pkzyPpdkM+TUiEknMlgrX2GPP0zqdRXyTm86RNfwY9yvetV18I6ryph8N44CP5du1ZptGtVNCoxXJYC3iAI8gGveruBaquGIAqgVK5XeT5WmJYlOOthM8fqn75+30fH54TL8ZZhGuGL6NgYMHHBnDTP0onhjYFz9iATve/q69p/e/ZM8iMHBwAeOXoWN186z57oUYAHjuhlzIgBhpQK1jMsMSZnpzAx3UYYhYWQC7AvzYrgbc4ckzoMEgP1rp++5qOgYkjB+1Ha4MsYp3DhaQqXJnDJIPdizsJbw965B4nofbNz818/+sxZvOnjP3pwyvWdo0u46dJ574geBHDSE93omdtCCFTiGM16DZUoguCxpLYwqRIYlzmkqUE/ydAZJFDvuOWKj7B3knyegVORR7GzIGPz4C9LYNMEdjCAGfRzYTamR95/gYg/UKtOPHLu3BLe9Ik78EKv7xxZwk175sha+5gQ4j4innSedjvvA+8pj7LLrL8Q4pwxdgRMP8Fqr4/V/sCpt7/8ilXyruWdm/HW6TxdMHCZyYFJcmBsksAkA9gs6zvnvslEHyGiPxRSnEn7fbz5ky88OOMgvWTPHAdan3DOf4WYn/BEE8b52dTaMCv/pdw6ZJlFPzHoDlKs9xOs9gZY6w/SbpI+lFr7++J/vPMlmNq2bVZKeYuQ8lVCyBukFAtCyCYEBBMTM3WZ6Ch5eoSZ7iTm+1UQrLokxe2f+Ap+nNe7X30t5idaWOsP2lqqlyolb9NS3hgodUmgVFspKYmYrfd9T3Tce3rMEX3dedq/NuidHvrfL3/wdjCR0EHQFFI2hRBhOezMzBkzd8hRFwDf/okv4//H9Y5brgQRi3a9WguUbCmpYimFIGImJus8dVJrO1IK+vSdj+En6yfrJ+sn64Ve/xc2hC3pqD78RgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwMTo0NTo0MiswMDowMGMo71kAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDE6NDU6NDIrMDA6MDASdVflAAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

KissPersonPersonMediumLightSkinToneMediumSkinTone.displayName =
  'KissPersonPersonMediumLightSkinToneMediumSkinTone'
KissPersonPersonMediumLightSkinToneMediumSkinTone.defaultProps = {}

export default KissPersonPersonMediumLightSkinToneMediumSkinTone

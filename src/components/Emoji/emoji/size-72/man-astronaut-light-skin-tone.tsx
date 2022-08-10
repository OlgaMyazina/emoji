import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const ManAstronautLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdACoqaX4M7QAAAAZiS0dEAP8A/wD/oL2nkwAAKElJREFUeNrVfAmQHGeV5peZdVd19d2tPqVWS63DkizrsLFlWTbYHsAMzLAGFhjG3LHsEjEMDHgmAhaW2IAhwMEdO8PsMsGw3h1gjG1gMJcP2RaSbUmWrPtuqdWX+qqqrvvI3O+9zKxu+cIYw87Ika7q6srM///+7733vff+bAN/wH+O4+D06dOIxWKBqamptlwu18uPV9q23VOpVDr5Pm4Yhn6PRyUQCEzxmOD70+FweLi1tXVy3759hdtvvx3yvT/Evz/IXQ4fPgxONJhKpZaVSqVXVavV7Zz0ev5qKY9GTjbI14DxrFnzOzUBim/zPMZ4HOd1dgeDwceampqO8lq5SCSCtWvX/vsE6MCBA7LSiXQ6fV25XH4LmXITf15qmmbAsixwonpw0pCf+Xn9XH4XtZqNaq2KaqUCMow/1+QgZs4Ur/MUz/shAXrgqquuGj9+/Dg2btz47wOg3bt3y8Sj8/PzN5EtHxBgOPlGASMajdHEoggSlHK5hOx8Cpn0rL6WijlUqxU1n0Awwu81IJFsRqKhEZFIjKM1eU4ZxWJJz+V1ywTrIIH6Ds32Xw4ePDh5/fXXY926df82Abp48SJ6enqMxx9/fF2hUPhLTuBPCUwT/QeSySTEHDKpGZw/exQjw4eRmhkGallEwg5i0SDke8Imh+wplSsoFEooFGuo2GGEYx1o71qJvmVr0NHZC9MK8vcF0MyEVQLUHi7AXR0dHT+fmZkp3Xjjjf+2ANqzZw8SiURkYmLi7WTNnWTBqlAohMbGRoRDQZw/dwJHDzyC9NQRtCRtLFvWh97+5Wht70Ms0YpQOKaTNgwxM4fsqNG0Sijm00jPjWN89CzOD5/DxfEMbGsJ+gavxorVmxBPJAlU0Qdqjqb6j1yMu6anp8duu+2239mZvyIAPfTQQxKZOuhr7uQgP0gWJBoakmRNAy6cPYb9u38EJ38Cq1Z0YNXaTWjvXotwvJU+J+gNwlZQdDSOfGAsGp6ppkVaoVrOIj1zFudO7aPjP4GpdAI9K7ZjzYZrCXBUgaIJysV+xfH89fve976nH3jgAaxcufL/D0ASju+9914sWbJkKcH5In9+M1ljtba2oVzMYvfD9yA7sQtrVzZj9fpr0dJ9JYLhBnHBvHGNh6OICB660j5A3tCc+hAl9BsuUAiQXWXkUucwfGIXA8EJTOc7sXrTbVg6eAUBqiibaN6HCdJf7tix41eUFKDp/WEBmpubwyOPPCI3XkZwvsaP3hCJRI329jYMnzqM/Tv/CX3NM1i3YQOWDG5HJN7Jm1X5NQJjuKCYhgeBi4E3GPf/zuKFsOFD6QIFiycHyagCUuNP48Thx/HMiXkkum7AlVffqqZaLBbF5M5Eo9EP33TTTT+TxVwcJX/vAD344INobm7umpyc/CZX60+isZjR3tqKp/f8EiMHv4/1gyEsW3MtWvuvgRUIcpIlBchQxshgXda4xHEWGIRFaDnCUvJNhCMdt7x3DEtBctT0aKJGANmZM7h48iEcOjKCFNZgy/a3IppoVCfOsZ2iT/rgfffd98iXvvSl39onvSyA9u7dKxEnPjY2dhf1yQe4SmYbwXnykXuRPnM/rliRRO/QdrT0b+GMKrCrRb6WeWZVWWOahq6mZZkLIBmm66B9OsFX1LZqIrvG6whABMa23Vd4IBlWBLn0GMZO/Apnzo5gJNOLzTfegTglgoDEe+wlSO+ifzpONv1WIFkvRxVfeeWVJl//M239owytofb2duzdeT+yZ+7D2oEGdC6/Bi29WwhMHtVSFrXyPGqVnAtUrURKVD0fZLtQCEjef1hsYAIIo5lNsWjXyqhV/aPkHoxyEunkfSCUQDDaArM8CbM0huMnzqG9Z63qp3Kl3E1z6+zq6npwZGSk8K1vfeslz/e3Msrt27frapKu13NlPsaPom1t7Ti6bycyp36EwW7qnfYVaFqyDuXCHErz0yhleeRnUSmkXbAqBWWDmozvW8SvuG9ch6O/IzB2xf1uzQckp5GsUsrwehSWuRlefwrF7CUUMhMUl3HeewPam+PojZ3Hwcf+WQENqCgt/wndwfs2b95snDhx4vdjYt/+9rflRq2dnZ3fpYm8rq2tDZnpMRz6xZcx2FFRSvetu4VOMkDWEIxqgRMtKlvE5wRDFILBsGoeKxTh+xDNTEwkQNNz/Y6hZuT+Z9dckGpU19Vynk634qUdRb4Kk2q6YA4NwTDDvG9Ej+mLh5CaPIOJaUa0ph1Yf+0bkaepccwXmMO9lUHlCaYn6O7u/o1zDrxUcL7whS/gPe95D773ve/9R5rEa0QEmlztwzu/i55G2rljKnsqJTGreWWKrDxQUV8TYJqhrtW0lB0GzzVdj0LGkCkCCU3PUVo5qMctvjfEJIVRnolVeY9yqeC+r/IcW3yRB1IgwojZzteL6GgGhid3YeT0MnQNXIF8vtDP9OcvhoaGPsDX3EuZ90sGiKzBd77znaUNDQ3v56qFuBI49Pj9aKgO60WC4Ub6EosRZcQzIzplp+oxJ0ggorybSWaZmGMKkZovYWoui6mZecyk8sjkqJpLFZ2w0DrI78YiFhqTYbQ1xWg2EbQ0RtEQJwhkpEN2VktFVMqSxDoqAQwZCcO/FYgiEmvBfJ6pT4uJc0cfQFNHH9kVEqd9G/3Qa1Kp1I9eMYBEst9yyy3YuXPn7XR2G0QlT49fwNypX6G3iX6XdLfCCYq3Sb7Pq1koOJxpKET7t4O4NJvDuYkcTl/M4fxEHtNpir2ig6pNV+0YdXcokUuydmGS+CkRlcKycNBBU8JET3sYK3rjWNFHFd1Gcw0YamrVmuNdQ5iU42IFlK2UlWgNTWH48GNYufm1yGbnk2TP+wYHBx9+6qmn5rdu3fq7AyTg3HPPPd30OW8ne8xYNIp9j/5fNEfIlKqt5lOjb8gXp8ickkYn0zJQrnH1zpax73QGZyfKyBRpVBKWOXDTCKswtsyFUOp4esfQXAxuAkLwagRxvmBjbr6Ks6NlPH4gjRgT3KWdQWxcmcCGwQRak0ERSTzPUG0kbJGjygjaFA9hdvxJZGY3IhBJ0tTyO5gzbuPrz14RBvX394OO7dUEZ30sHid7hlGaPIC2ZjGZgjrecn5ew7hh2ArMyfEqdh1L4/R4GWYoTt1Exxx0tY0fw10NZKqDNkw3zIuxCIPsmu3VhGrqmMVhi8+yVUCayBKwZ86UcejsNLpb07h6TRxbhuJoawh4+qisqYltO7pgzeEcRo7vxtCW22hm+Uay6D+QPQ/u2rWrsm3btpcP0Fe/+lWcO3cuzJTiDeJ7EvEEnnnyJ0gG6SQrhqtROBHJvWTyF9MmHj2SxjNn5zmJitZ+GkJB1X+BgEW/EtayRyQs5Y0QojTBcDBAU7HIJqMu4kQ9Vzm5cqWGQrlKdpY0Gc3l8hD/msvlNOeSQtrFqQrG5zLYf6qI7VfEsXF5hAyrqYgUgBz6w3gkiImJZ5Cb36a+kuff9Oijjw4wsp38nRgkzpihvY+T3yJ6QiJIdvwQGuMmV5aRipGkXJiHE2rC/uEqHjo4jcm5grJCwEk2NqKpuQkhgtKSjKG1IYIGDrYxGkRTNMD3AUToRyx4OkhzL1tVsxhblWZT5FyzFRtpvskyWZ+eL2ImnUchn0c6lUJqdha5bBbD40VMzFbI2gRevSGGzmRV5YAb4QKImxlMXTxBIXsl8rlcH+ez1bKskx/72Mdw1113vXSAent7Jc8y7rzzzoRkwRcuXNgqhXXmW5geO4dgdZaTMJT2MpmZnIFfHy5gz7EZVGgaAkhbWysSyQYVaUH6o46GMIaWNDKqELRoSGtEEr5tCeE0BU0pqq6AtFU9y7WpcMLUS+GomkuV1y5WHczkIxiZDWM0Hcd8awtqS/uRnWdEvHQJ0zx2H00rUK9ZF8Rgp0REQ9V7PGJicuw4elZuknuETDO0raen51/psO23v/3t1d7erkK5XHH6+5e9uFB87LHHMD09vam9re3zViDQQHCk1rM8EAgaR3fdB1z8JU2DUYYMmi2G8PMjVRy9kENDMonOriV8bVCTqlaq6GCYvm5oCVZ0Nak5iTma9MxBy3KVMkEw+d7vZsDtaJBBvH7NFYIyTPmORDuJaSJE5fNZMunIWAbHxrNaJ5ColcvmMD46iomxcTTQzF57VQzr+qTuTXNDCBdSMay9+cMIMdC0trZO09xP8t42j3Hml38jFQCq7RdnkNR16bxe39HRfqtfwBLVPM9VKjEpdH1KBalqHE+OxTFMivcPDKCltVkRr5ZdATdIUP5466Ca25HhSzh1fgyTMxkE6XP6lrTixqvXYrC/q56k+v7Hj2Yum6pag961/wQOnLyATJ6KPR5Df2cLlnW3YctAC1riQTx2fBIl2zXrFatWcaG6cfb0aTxxwQKxwIoOAkg/F7BzsDj2NWs2IWBZbbxXm+PetFYslR7q7+s78/GPfxxf/OIXnx+gO+64A8x4A9/4xjfWJhIN4qDFxLTIXuGKWpwcKJALtSCenoxhqhTB8hUtqncqCowr9vrbknjTtWvw5JGzuO/h/RibmtU6s+GVMoQ5l7JlfP6v7lAzlA/9JNvri2lOJtHu8MlhfPX7Owluuv4daQC0t7XgytUD+ONXrca2lR148PAox1WjMA2p71u/cSPmZuZwcGKe7M2it8XRqsLw2ZMIxpo1wEjXRCqOPT291uzs7IbBlSvNr3/ta/YLMmjLli3YvHlTVBp5Eiku0aZnZma0PCH6pcpTCsUCTs4lMZ6PoXtpLyNDGvls1s2ZeMQjIdx+40bKgAR+vHM/Lk7OoL+7HQO9S9DZ3qzXKhQruOGaDUg2tfC6HoMWF8o8Fskn/UttvPHWbUils4x2JnL5AkbGpzA6OYsnDp3GUF+HgnQpXcCTZyY9gKFmNUg2TVwcxYHRC4hYOS5iCQ6d+/j4uPo6kRFSN9cqaKnU+bGPfjRMJhdeECBJ4PiFMFkQp5DSUCr/VN3WpNtgYypl4/RsFO09fWhsaUUmNatapSaFdgrHa64YwKY1A1oY+9xH/gwlfrZ6sB+dHa2I0gQkOXUMU3thfpHML5gtBsg/+vt68Lk73+8mr/RrlXIRmcw8hkcmMDJ2Cctpak3JOHZcOYBjF2cwT5N0CwM2Yg0NWLXhShx8IoeTl4poCTCq0U8F5+bqAE1OTCKZbBQBmaDTtiTPfEGApJTKFbY6OjqD4gglfGazrsYRyZXNlzCc4iQjjYjz5sV8Xs1Fmnw1fj9C/7TtyiE0NMSVGTte1a4ZepkgpVMZUj6N5hY5N0EBGaoX6Ov+5/Kidz30mwz1JU48RZPJ5wq8fgwbVw9i46qlXPkyiszWB3o6MNTbhl8fveAykvcXABLJKJb0LcXYGc4tNIfK9AxNMex2TugOopQgrfSxxWIxLLcqlUsvDFDNjRwmcxZDTGFiclLp6E7CRGquhJlSHInGGNnFZLFU8sqibie0gyn0ir4l6gfEJCsVBzkjgf1P78eRA8/g5KHjWL1uFd7w5jdhaU8LIon4ZUVp47IA62j9w6aWmU8XceDwKRw6+AwO7T2EJd0duO0tb+G92nmveTpgCk6y+Irl3ZQcw5rEhigRqszT8rksQWrEmNmAyXwUzswsWWaotBCAKGkwn52Xgr9F12K4kfMFCmYaYvlvdHRUDjDzhRSYTp06hZMnT2B8OoeqEVE/IqsmJU0tOXAuwqAeAtRMQSgh12YCabesxKN7DuDwweP4o3d+ABNk0A/v/gF+8L/vRqYWpfAsL7R5/CrHYvXBC5fLBg4NT+GBn/wKr3nre+GE43jgvp/ju1//CmaNRtjRdnXaYTJhgMCFGTBkTDKeAsGhKFQwrFAY2Vpc0ib1rdLtoJxhdM6ojuL3ahTFju9WnpdBnh6ppFKpklBULjbJi1leR0DsMxgM6QAgwo0mVuAAbK+o3t3aiJBEOsmpIq0ohZN49Cf3MhJO4sLELMYuTTG8Gpg6/Sgmpv4cTUv7SL+a29IRoJzLjIz6jmIyRrN5+B+x99d7UMRdOHb8BMoUf9mpozh3dBc6bn4HnNG9dMo1tLc0oSFKIPJlBWdqYgxtS3q8SCn5LMdeKaJYyuntxGKkVZRz51Dg/GqLGfQcgORCPKnIE+YFLM2ziKg4VGGXvFqWrSFdAJQeuVue0KYM2hoTCmZNJproUCAlkb04fAEnz15QkUiCUadQNXO6VkM7nMK4JquX+R6fUmYQZrwZxcwc0rMp/Oz+H2ulQNR5ZzeTEXsahvTauBBGJY1kPKLHyFQaFv2esKeQz+miSgSjUEGFaryiewBQT549P5slE4VFL2xizHJlfCUmhpMSxQQwX6csmAFpT/9T9RJV3zQF0GjYw1y6FFYQ8SS1ytVbsLxd2GWgNQnceoODDZsZ8pet5+QSHnPsRTa26AiEEUq0YON112F5p4mlHQbzQAPXb3Vw9asS6F65lbOwiGNYF0wUejgQcNMVx2W1RNgczUgAorOCbVj1aoKYpix6Pi9AFsZf+9rXlV40F/vIRz6Ct73tbTUKp5M1AtDCMH7DDTdopBKgLpw/r7YrzhmmuUjYeT0sz9S01pOfhEl/8bo//xAC5RHkpvaQ7jUsX9eLlqE70da1hppkYmGVnmVecNwempRab3jTnyEzehiTJ35E7VTE0JUtSPS/B13Lr4cxP0a2ZPWmWmjTYpvjHryMmFA+k9KwL477llteq4srTHHbTwJQweY8Tvzd3/0PZ5KB6UVTjeZmJoDV6m7SfjocDjZRFhmMBlYX86wsGSYOTlRupViEoyLPpZajDrWqA5MIFihOw5maR0+8BW/50Kcxeu4ZrmYOHUvXoaNrFczUKZpFxuvvXB68/B+MWhHm7AkkI0148wf/GiMnb0YuNY7mJUvR0TmEQPo0439Gaz5i5BK1pETik13kZz6TpknkmfK4YCwfXK6Wkslk6OKq9BA1k6+jjGBPSPnk7rvvfnGAohGl66+pMO9gNGqNRMLLGK0+QQASbiLqFrhEObv98oUcqsSo5NhuLUYob9Toq8ikJAfWtGKNAqdDnz/vvjef5ZwXt8Z8ESmdkewYYrzX6uUr+LtBzfxrxUlNaN3AZ6mzV59XqdYvosq5VnXbzrxelImZBJp4PC5bcv6ZWcJPBQcCc5F66qD4yN9Y7vjyV74iL0UeP/3mN78pXYkeovxWhr91LS0tWoSXOrA6cdFNEmkcl855AiSfWWpnbpbuCSV+r+SmFebC59K10Ky94oZ7i85UpQZ/1nZQMHhZk17yJ3glEd/XwVjowor+KXkASSCB5VYP/GpBe0e7sojuIs/j+11dXfe/973vffmNw9nZOaRS6Ule7Amhr9SEBCR47WKBpSJCjjSWaJfJ5sU8vV667U5AWj3Gs5qDXjIqbKvms6jQSWru5aUc0ggoZ9OwxbH67PLLIX7THm67xytB6vlSdcwyV5vPZKi8i24p13Bb3eKQBwYG1PfQVw4zUh9YrHleFkCf+tQnpapYJUA/jkYjOWGHFNQs09J+l9zYkwZq16MTUxxYQVlR99xayrCUPTov21nou9PmC3PM9BllqjxPjpocBKbESZYZfut9MsffEGOoebplEvdXGrG4MDOzs9RtU7pYAoiAY3mMbWNC2rWky9/58QsCNfKbAHpJRXtRy6TlY5FI5EnqhZukFx9niiDFKX8zptSZa7k8heAMshSXkWjEXb2g13M33f09vmg2/F0cXPViOoUiAYrMpxnVIwqe9LyqnEggHF7YzFAPBjUvN/SzfjJWNE4xz9RoCrlimb4mor5GFtA/Vg6tdBNix7nE4184ZvvDH/7w7w6QJLCk5ixl+T/Rnq/lRxFmvTh18pQCJKG9gYmrDHg6k8Mck1IpntXoQ3QfkBXw9km4LNIKIv8TX5HNlTBHV5GenEaYSWSYk5LrFOlL7GCEqQpfC2UtoQTkXjWv+2rX3P49nbX4K+26VkoYmZxTP9aYTOrY/CpBU1Mzli1bpuwhWD/lmPe+Yo3Dz372s/jkJz8pF/4xvf87i5XizXRukFxNWORriQhXO0N/MjFNQKVSKA63JsLM0JaNKG3pcZ08O4K9R4ZxZuQSpucYbnkNUdthVBGypA/mIM8kt2qFkEgcR0tzEt3M8dav6sPmtcvQSrUulUaNYLVaPVCUKGzPT86oavZ3jJiG66BXr17l1rQMQ0TO/+J4S7+JPb9V61n8TCKRmGE4/KZ0A3ijxqVLl+LY0WN6Y2FRiAPLcnGHx2ewlSYiANmBoBdiDXXgd//kcTy45whzoRq/L21iN4VhEo2psq06xr8fSYMqGZnK5HHizEU8uOsAepc0411v3I7rNg4pg/SQUgtZJDWiDBPbzs4Ot9cm6ohsk3KxML6klQfn/1AI7hHGv6L7g2S73XWU+7zJedp2PwHZLFpCcpg8fY9fSq1wJZNhC1cP9SrVrUBATUrM5u+//0t890ePUqfY9dxLXmUy0jMTBsboy2LaNwtpENBwTbOqqL6pYGR8GnsOHMcVK3qxhImxdHTFxMq5eZyZLqN30424fvsObNp0lexjQl9fvxTn/TLuATrmT0ix/gc/+IFuW37FGCT/PvOZz4i5FQjSl+mYr+FHG6SeK2Ym2bDpmCrEzkykMDuXxhK+r4XCBCqIHMPv43sPaZoSjQQ1oZXpF8QneGH4+f5VRVPRh0mbqGrb2voZG6/g6cOncOVgj0YuUfSnZ8oodl6BloYmjWCOE9Ax1TyfRd+ToVl9kcw5LSVk2bb8iu7u8P+lqXfWrF5zjP7nv3FS3yKLWoeGhnDk6BE4JUc3g89Q1p+if2lvbUJVIglZFA0G8FfvuBVnzo2gORFFPBrWRsCep49iz5NPS7nTk0DGZclvd3cX/ug129DV0aK16Ey2ANnoe93WNSoEywTnJJkz3zyEcCSuNSpJF5hGYGJiwn+EQdo6/8DFuUcCjt+x+L3tUfzEJz4hkj4Yi8Vkl9mnqTMik5cmcfLESdnuRlaUsGOwGR+49SpEG5sQSTYiGI25ukSL/54eEuVLRhw7fgb79z+D4eHzWpaV73V0tmP1miFs3boRSzrbvA7HQjFfHLMIwWNTZVwsJzCXzlLANmtoF7MfHR3TiqeUaU3TuI9m/p/oFiY///nP/2F2uX7qU5/SB1W48n/LtOND4UjYnKVIO3P6DB1wCU1hA39x82qtE4cJUDjRoF1S2fFqarHecNW25EmejypKbblYdnv41DHuYwmu0158jijhqZkU9h0fwdMTFZwfGcPZs2ewY8cObNiwAaNjY1oHEuFKlj9BVr/brtnHv3TXl36/24B37f41rnvVtTh06FADM/bNZNFrZmdnbt69e8/WkZERS57HEFF5hoPNcoCvWtaMd16zHA2NDQg3JBGKJxAIyS6woOZHbnnCcXewavRyLmseilIuMDPPlaiXCiXM54oYnU7jzMUpnKQJj06lVCJIj158n5RlxCELg8TPyGfbrts2TP3zk2Aw8EAwFNqVy2TTDU3Jl/zAy0sC6Mknd6Mp2SY1lKhlGTdXK9X35/L57XSCzX754/CRwyrzpcckDvf8+fMUmLN49VAb3rSxj8o7gVBCQIp7IFFEWq5w9PMFKZP4tQ5x4qPTKXzl+49gLlvU3WcFHnl5wEV2dZBFEcutUXX2LGW06pXHIZRd4mfk34rBFSoOm5uaZFyZeDzxeCgc+gfe4xfRcCQ/OLTylXHSzU1tsqJL6VTvpNN7B4FplDZ0Lue2hCT8Sg1JdIhEKWHS4PJBAtaEX18YY5QawW3re5HQ3WMUg+KPGMrNYKjelzc8Qbe4DVQiIKeHRzFJMRmgHAiRdbGQhd6WCFZ1daAlEcIzMzaSXcsU4tRcSoOI7AkQ7SOVxJQHFv1Pksfrk0by+kg0+r1SpfL5yfGJc2eHz+Haa699eQy67/77cfXmLUil02u5Ul/jqr2amsfIEph0OqMrlUrNaWF/LiXPfaU5wIxm2169RXXQzPQUBmIV3LKqDUuaGzTfCihIUVghDyTTvCz51K14DOEHT57HBPM7g8A2RQJojFi6ZebCbBb/eox5H+J6LwnpskDSxxMfJvuYGskc2eAuuaPssWxva+dnjUyLkg5ztV0c50dXrV791KM7d2LHCzw+9YIAveu978Zn/uaT4nCXUz/8T67GTZLHzM3OYXxinGY1ReBSOrACw7qEafE/Ut4slopuw45m5QMl2XeDUcTaZhMDTSGG+rAmtEHPJ2ERk1xzc7fDECVVyWJSBTrxVKGK41N57Jsoo+QEtfQrPS1ZLC+pVqkhRzwW140OssegiaYvIIn6l+6xKGlGvKdrtv1+CtP90zx/69YtLx2gffv2SSs5kYjGv84I8G6Z9OTkJYxcHCFrUqqeBRgRekU9CvpeClbSMZCNV00M8QKg0F7Cr2z+jMeogWjYLcEqWsM2GkMGkmREIiL7iEy/tOM2/MpVZAoV3TiVKjuYLRlIS2LLz0QTieaRVEXuVeDPZ8+d1dxL+mPSLZWdHuKX6Hsg+ypj3mL19fZiYNmAx3DrV1TpdxDYsfUb1r80H/TUU08hEU1wxQp/yoG+VVZvYnxCw6eoZi2ISS3HKzksFO3d/YWSk0laIo9fTk5O4MyZMwqqvBeWhGliIXm60HK33dGtIBowEDRd+1KAKHvKNQelmr8Vr6ILoQ/OyVZh6aBw0gPLBzC0coiiM0iXcB/GqH/Cjvfs2aItNf7mCKmESlCRsS4fWC4gvZpK/r+Mjo/918cefay2/YbtvxkgegOG1Pl2CsAPVJ1KbGp6WpuHUjmsg+I5UtPfU+jv53HcQ5jjV/KktSuUFxOQSUqkkQqkbNT0OWx7jysZXuj3o5oIwprtbqSS30vdqYGm6zIjjkZqLK1Du1VCtwVu17zdsr7JYqF+5DUX5umvRpiLDQwsMyOR6LvamlvvoaDc/5IYJDejSdzIm2zJMIxPT027N3VweVXPz3ilIE/nF411afXOrw2LFvFrRTIZf9eqf/jnutl8RX8vk/WrfF55wq8hu9v5vKek5fDZIfcRExYm9fT0aqQUF+Bf89ntJMdroohDv0S30d3T08drvcUI4+mn9+93rtq06YUBOk1z4NQDc7Ozry+XS1G5ubaZHb+Vt2BO0isTmvf0dOuKBgLu1jgRidLzlvMkQxef4LasFya3eLL+I+FuYd3dBKHs8R+FWgSsTFqu67PGfQq66JZU29vQLZsm5OkQKQEzok5z/HKOvynLcRY3JqFRV4JJsqnxVlSsr5EU4y/KoGwmo9uESP+rJWzKzfXBEndTg9uM82jc2Jgk+t3qcyTr1n2JOhGXNaJLsvRZknpE6Hek4B+NSvHcqAPiH6i/t9znOfy9ih6r6mbssa3gbZzQ5h/NSBy1RiYplkmBnsB3dLSjhw55fHyMUS7lmaAHlF8X52cSjRlRh+jE19ds58UBkmjA1V7NGy8VmtYbEd7Fat4D/2IyS/v7lTm2B5qfK0Wpb8RPtLa0MtIU6/17+X1ZnWxFd38tBmmh3OEs2mXibea03c8EKK0e8rMw5YHcR5yz1J8lQknkkutaAW/HmtfpFSV9/vwFmuL0QkBZ1J8Uk+ZcE2T01ovnR35x9uxZLF++/LkAyck7H94pN1lXLJZiFTWtBcR1wB6LZPIhqfWo7gjoQN2dqJ451M2gohm+PsYkn1WqdafrM0K7EjXbc6TOZePRsqnXPRFQ5H3ACuhGUHkEIsT7qvmGQwgHXTMWcSqFOFt3bpSlraxuQMbhmxsWmZzMR9jIdGjD5mu2hmmapedlkOwD2nrdVvPg3oNrGdoNH2039Hr7l21bnyAWpyxRTXfSk9o6eCljeF7QZVq17i8q+pyX/3P9z0y47IPf70L91a0NmfUurmUutJjcI6ggBT1QQkF3q6+oaL9YL+auuzsKBR2jsGL43Ll609E0Fh6NkLGR3Svpexs51kvPC5BkxedOnm3gJAYqvmN2nHrMEnASVKatrc3uljV9aNZRuxdnreVVY+F5U3cPoO3tXawoeyoeYAKev23G3/DguA0ube/UH9VclKdZHnssz8EH/ddQUBksn0sUlWdiHdVOZQVIEmgxI9FwIjlSqbSOSY6AE3B9LN+XyuUuAtXNMT8/QJn0vIi3JtKy1x+8PwG5gGw+MsItum9ZHHBfX5/6FKGxbCKXlo1lBeoP6vr0VTbZHjD66FLNA6lWZ6Vvbv6Kev1G/VlMqLWlTQHS/UnSCPRq2vrUIdntmrtZ92Visrl8TnWTME5yR+3LM6q6f/ujrOfUTZzjpBtIMiPo47gOTDPpbmMOdxlAUqGrBgLtpFhbXfT5T9xwQqlyE6bnmzHUVaVpVZiXzTCK9erKCFDiJMVBaqtFivEwPVngPEcD1ewFE1sAyF54mNfzRbJB03+gTz6VPdtSmJO6T19vn25JdvcxWXXGybnCHu200DdJMi2hXMYh5ibJq0S2mufwba8VzoWLMWr3Zwimvy8zcPkGTmn0O0toCpHF+kPMoyRtmWwU03lgrtSMGqm9Pp7WbF5aulL2EBADsv3Oa7m4DVVz0SNQvvomExw6dMteMDEPyLre8hyprHZJt/U6eOBnP8UP77tXVbpEsLfcfjtu3HGjmo+ww/RKubb26DUaa21aUhvxV6LPhHdxRl5R9u6m9xDB5Twt97GrUslc8t8//Tl87e+/8lyASvonZ2pxMsiqr3TV/fs9mYKFVNbWFkyenz98ogmBUAwbgpfqVBZZoDqEeZUtVJd9yiIgpbO6aBd9nSGXvfppgP+3g6qav0nNSQCamBjHAz//mSa+ArBoFynHrFq1Sk8W5a6LI6XbYskL3y6LJKMXEDVAKGsc6p6oCsnFjJbfB2vB1n1H9ppP7N5jPxcgvUglUqvapu9MJTMXe83kI0rlKk2nZDBc1gp45Hgr2htaOeAZtLV16neF8gKWlku5irKyMnB3AwG8Z0sdOM/ZXYt66HV7YNAyhpiTjENyQdFoPiOFLVKXElOQfKwh0eC1+m2tLAhTBVxR8XJtmZuYqyrvkqu8pWIgkVgcvfpGoyokiZw6ddqcn59/LkBCOds2Q/yyAiQnywVLZNB8XvY858kMCyVHOqYhzKbDGE2F0JOgZOeKip2LqfmOco7mJxFGMvGQ10D086fFf0TAj2BuNcB2OyOFPKamprXwLhMSaaERiPdxQ3gVLfEWHZ+kC/I7rULSCnTs/LxWc/cwuWWZgl5HMgN5LxHV10kCkEY+V15Ysl/R38h5GUBCUwoxiycbFS9pdJFnqkAbDRryQJuFsm1pz12eSm4Pu7u35rOyWmG9sOUlklLE8gcY8kWcubChoM4l7+9zSEQTvSQTET8zTeUr5iIpj0TNrVu2KjDyO0ldNjGplFQmECxpOmN7gk8ChLBLfI8AIt8XsSiuIM+xiMn6Gg2G+0yHVhH08U2YwtTnBUhWzuLk5QJlb6ByyOdNkQqs1hpOT5uYyTBK0WwGm2tosAhiOak3FO8vUUNWXaLKLKOcgBNTpxhxk1MvMTXNy7fu+Y8FyMCk8CbmPMOE19a/RlXCzNysOuYbb9ihskGrAF4eJeVVN6Upe8+M2LqwIjnkOsII9zVfz990f7T3fIk+MyJBSgMMDAkZFS//e1aYL4l8t3mRIkExSmJeRXocZYXlNMUMrOrMIVeW57JMrG6XZDZY34cjDrS5qVlvLDcVQSZJojyb6ipeVwUrQJ74c12P7SWlrk8Q5yoTTDE8xzXXcycsZmGarnD0o6y6gWBZmeGar8sid19TXv2WAK7v9U96FVU1V9y/M8S81nBMr+RSpcah0K3oU03eJor/B2vMaOjR1qNbAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDAwOjQyOjM2KzAwOjAwougArwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwMDo0MjozNiswMDowMNO1uBMAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

ManAstronautLightSkinTone.displayName = 'ManAstronautLightSkinTone'
ManAstronautLightSkinTone.defaultProps = {}

export default ManAstronautLightSkinTone

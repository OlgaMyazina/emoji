import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiHeadstone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-headstone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdCDE22lrKgAAAAAZiS0dEAP8A/wD/oL2nkwAAGVFJREFUeNrVXG2MXNdZPufe+Z798O56bceOHWedBBGapGlalACiKUQ4Cj8q0ZBCREFIhR9Ugv8EqZAWEqlN1R8IREUKLWqiNhVUSYQAtRSi/EgT7IakqWrnw3bc2PHXfu/szsy95/A+7znvOWdmTTbZjd10rfHM3Llz7znved/nfd6PM1pd5r+TJ3+Mp6xfdKeK3tru1c7KNaUpZ6wpd1pjRpXGx3pZa32WXhynx9FKtX6qWm+fV3TS9de/77KOV1+Om/zwhy8prTOtbDmttfqQMeXBzsryzZ3O8kyvuzre6/VqZVlU6DjJRassy+h8XeR5pVepVBaq1dqJZqv9/Xqj+e1Go/nMxNQVpzsri3b//gM/3QL6wYs/UK3WmF5aOre33+/9Fj1+s9NZuX5pcbFFmqO63TVVlqUyxihL51trlQioVqvT8VKRWFW1WlXNZlO12+1uqzXyo0ar9S+1WuNr0zv2vNrpLNmZmWt/+gT09NP/hclOZFrfW/R7n1xYXLhhfn4u76x0VK/fZ2Hw7ekZL/EuJ8H0iz4LhzSFBLiqet2uIi1S1VpFNRsNFlar1TSjo2NH6vXGlxvN9j+deOXFMx/4xV9X+/fufu8L6Lv/+R9q954Z9fqJo7eSYO4jLfm15eXl2vLKiur1+qQV1gtHsbbIHzQpJ0FASMvLK6ooChKaVdu2Tah+r0dCq5JmaR5wlmekWVq1R9rFzh07nxoZGbv/xg/8wlOvvfySfd8NN713BfTE498C1lRouneTCX1maXnpmrU1mJFRhh5ZnuNztbq2yhNktCaB0EFVkkBm5+YIh43avXuPMiTEWrXGnx87dkxNTG5TjXo9CHdpaYkE3lXXXjOjpqd3nBwb2/bZWr31lbLsd2+97ZfeewJ67Btfw+XqWts/IqHct7S4NNVnU8LhjDTCaU+dzGS10/HaY1mrVug9jo2NjynoSKvVUnUSxuTkpJpfWFCvvfaa2rVrFwms6oXqNAm4X6tW+Hw6d6nVHvmcVflD1padO+64812ZV/5uXOTRR76KYVeKovep1dXOZ1aWV7YVRemAlx4ErmpkdEytra4pAmjWoD5pzNjYuFpaXlbApbn5OTUyQueNjDhMAnDTCwD4IgkJfxBaXslZ46J5WgZz0pw6aelteF0U5pl7f/ue4tFHv/6TF9A/fPnv1NkLc7rVqH6iLPoPrHW748CT0jjwJRfOmKLJVFZXV9X5c+cYayC06R071Pbt06rZarrBkAlCaF0CZmgPzl/DY62rTp0+TddZ5uO4bu6oQLADS/ejBaqYsvyQtWZhrWv+5+P3/IZ97Jv//JMT0Bce+rwaH63RYPUvK2X+ut8vdpZF6YCYHjAEeCDgRWe1w+oEE9u+fYq/326PEBZljDUQCkB5Yts2/h7wqEMat7xEGkaUoOrNa3x8Gx+DmUGgTolAD0RWtkaXuZk06aWRVvXlO+44qB5//IlNzzHbioCqFasuzC7uopX7NHmavcxprPNSMC24cxIagy55GxbCKJkQ3LgTJIG3NfwM914As+h7O0iz9tB3tm0bZ/6Da/YJq67YvZu93ZmzZ9XZcxdIw9Z4MQybYvKwZif9f//Z8wszWhv18D/+2+UX0EMPfU49/3pGGpL9Pq34h9kTkaeC5rDueBB+9dXX1KHDhxlrmgSmEAQ8E5FGNj8A+ezcLLtyUIHZ2Vk1Pz/PHirz1+iSiUFQtXqNhNJRO3fuVK1mi82uQ+DOekNCgvBwfTzTkVvou586c26usrL0o00LqLLZL440K+qWq81NhAV/SBPOoQUYmPWOEQNeIlOYIMyAOZw9c0ZNTk2xtqyQsPD56dOnCJRHSSBzpC3baOK76PWCOnLkCF8DXAha12w21BSZZa/bo2vl7LVwXrVSVefOX2COVK/V+NoQaJ71WWimLO5t1vPHlOk/c1k16MEH/lIdOXZBk6f5HZrofkwWplQaZy4AUQgHngwTn5ycYiBeIEHgXEwa/Ojk6yfVyy8fZdOCVkGQExPbWKuOHT9G1yvZzKamJtl08B1g0eLiEgsFgI2/2bl5vpdbJMOmDV5FaryLPv7k3Pxy7cEHPnv5NKhF2nPV7tEDZEwfxft+UfqYCvpD5lP21AqZS4s8VYVYLwXhapy8EzQC2lKUBbv2lRUnROAR3Dsmj3P2XbWPwHiM3Tl5JaIFa3Dd7P3qMCMyz1ZrnEF6dJQ0kAC9hViNvSFQrGATp2AXl7irUa/eQM+HLpsG0ZzBPn6V/p+xPkwovIAAuvBaGFyHhHSGTItcPwsLIQIEMUacaHp6u5qZmeFniuRVlzAHkIOJwaT27dun9uzZQxo1wdo5R0KAx0NsJgwbnKdBXhGgf+HCLGlOwePA+azRdF067wo69c5KZtQXv/iFSy+gB//qfmK3a3UC418ha8mh0qw9pSN1zny65M7rROwapAnjPOnFxQUWgJA/uH/iK3zNSTKhdqutFhYW+NwqCQDngeuALzUpcIXGQSgAdlzb+iAXx1rtFgm4T4C9yosEU4eWQjsZ5mmsy51ifHlp4dKbWJZrRA5X0iQ/aAzka5gUlsb4GGmZTQMeqFDO7XZ7a/wZNKNKoQHMB+YEzcJEYVaLS4tq+9R2vk4fE7WOSVfIjKqEN9Vazb+vsGn5kIyvj2sBkxaIpTdIeHmesXCgcY55qxuIxM6YTH//kmsQ3DhpzfU0wF300gWiPkIH2MLtCqnD38LCvPN6pAl1MoU2eS2YBDQIKQ1M/Nix44Qj8wzOuAZ7IyvRomahwDShFdAezaFGzAJAEHD7/H0xdTdOug4TynGK267nwPhSCujP7vtT9izkIX6WVrqFVeySynNqAt6JXhu/6sZrFJYPQDpO3gw8CINkYbJZloQpLoidIwF1vUbhHhAGPocAwMKhIYjPEI8hIwABxnhMM0MHBegSFeBYztrgVUlANVqQaxqNmvqLP//0pRMQbvb886c0eS1izY6YYVAYqLhvyfMUpbP/cXLTWGFJeWDwvML0WsAXz4i7Tp06zZOCCeU+DbJAfGd5aYVxCeCc434+TcIPurbx9sYYBQF50xYhsUCV3nfq1GwFwH3JMAheY9++0SoJZpITXD4Wcipt2F3ze8IPxFNr3TVmxUhnQJCI1qenp9m0kP6YJc8Ds9i7by9/D+e++sprDNqMZ4QppdcaeCuoDbQLBNGFNIY9o2JN0XxPzlYat/SyGMAk+puuVDRy38WlE5Dl2CmnlWkJW07/3GppximlXcIL6g/M6RF3OUeR/InjJ9gzbd++nXHlwIEDqkKYBe8ETwZ3L9dmrbMuZwTqMDo64uO2gkmlu7322mQ4Y4BF5Ny21d7ThQzmKH0n1/oSejFgDa24rtUquXakZSDzxikI9j7OlADE7VqbPRqGOD42po6TgKARE5MTjCMXKPYCRk1RGIJ4C5E63D3AHtriTLHHAmkQbYBJwszapI3iNJwvx/1yTlAgkcYk0+eUXDEACq/fMU6/MwGR+sLG4Uqdp3FRO8sJOWLiIwgpoBnMdcBkM81qDuDmdAaFEvgckTg0CmZ3FTHnleUVZsQQTJ3AFOdViBIAeyBoaAY0CcJE3NUgYcrkxdzhEUEkgUu4b6ZFiwxSMrQwVRtSJJdCQDADxEPtkRarM0vGeytgAY6P0wQazUYwEwFwDAw4BCE6syCNaOzh49C6Vquh9l+9jycn5lr6EMbXyUiDHGPXXju0zxpo0hyhDqsc2jhTR2QPYTpQR3omV+9UhTYU0OFDz2KC+ehoe6zdauWHDh9uPvvss7UqDYa1gs0n49e4N1x9aQqfIay4nI8fsPITcvzJxWDigdg7IdesPbpq5blMFAiAHR5PWDSzceVqRpXqKl8DD8RCrFFVVyXJNO5Rqd50441TN998S/Weu++mOLC7AD75c+//+c0n7f/+S3+jPvax29V3vvPcx8dGR/+EBlqnldUU98wQgI4HLYGI6G7aX7Hima722GNKl592HiX3cZSbvAggEwH5IWkvIBGAyzUX3lnEMINB2bj7w7u5yomvzoZJgjqo5ent06+Q2Zb9Xs+sdXtfOfziK3971ZU7zCd+9w82p0GLi/Pq4Ye/Vctz81ECwNuwupp5h2aGKuGAlkoDawlcb8WBpx8ezEU+18oJDTMM2UcWZqaEPkvQKoRP4jcnzIzv6xi0M19E+/WaowLaJ/QZqJ3OsoC0NiMXZuffby0TXQS2C7bf/erJ108sbdrEZmfn4FJ1o17PgR0VDiGsz+A5M3GrbnmwjiWTMEoVTEd7THFvTQxZrAqk0plhydeGJuHZmaINWGN9WhUpVOvLJQhQ4bnAq1zYYYJNCGOPpuI03ZD5gyYszC9mb755NkPosmkBLa+sMSir8czWG8jHRHoPj8Lm4rFFeU+WZxVXlvHgLUCNGYm28ecuVghC0toOaJHYv6MIvqKaOU8or+uNPIYcnnWIdoYH38n6AhEvAR12VtCH9yvN5gUE1UXiC667oNCiagC8ilcAxK9ZafKqga94+XgvYb2GmSAgrSO2DICgzhKtshHQmXAaFZXAmY17b5PjvrDvMwiuBOTCCzBoLZpkY3nI+BDEYeAWBITAz2XzisBqNedpEF1XOUw48+YZNU8Ru2hJYNg2mbR/n0bhsqbaL32mdahQDDN0mZ2Avh6q66e1fus1x1VHptUOCm0gLMfyvYCM9XLVW3fzSKG6wM9XLLQHAIp9UMg7dvw4Tw4pDudxbMAY8UB+zYOHGtaqoP5ekFI2iuanvWfSgS6kGhe1UQzTVUKwsMhIVgU7OfwwodxkPQXZtIAQ+YLmp9pQCkHLnBtGoQ+J+SzzYGttZLBRVfi9TNC9zoLm2CRbIGVn47/MgtE5J75gMg7EneAwPg6QtRoQuOG0a5/LSOIJZQzRI5pAMzYvICZnrg3FmQoBNQEcvzeaBwzXylk7DqC9R/McJOVA4lnkuKQrRGBcifXawThkoqmA44AU5p4AivvOPG0ANrEGe0FAOBB+I1ABgSobwN/V88utaVBY/WC3CT4kkbJMzgrvkNWEKWVZMDvtI28ZZebPs9pxKoQZ1jqPlvn4wAh2IIWi8yBENnkVtVQm6jhQNkAlnKCjB1U+4yBx2qYFFAdhfS7GhDgqBeAAkkEz8nCOKZ29y+BZAzxgi8cz1sVKAY4xidwGPBGPlCUNCzZJZ0Rs8poq106wbDBtbBIzs5sXEGOKV8OYJ7ZulYfyQTZphkoaMd3AC/ncxVrClDFpCDh3mC8hmMpSOuSBd1hATClYcJF5px6Nz80iq7YlHEwcqxnMFW0hmhemW5rBQfgSjvUNmAFbgtfJ4gy9ua1fTi9oZZOJO81woYIeII4w88w7Bz6X8082lJPEu/n2qgSY/T3sYPii3oaJZW/txVzE7YRgg8kJ3HFK0wtpUKZ6wGuE14P+eEAwwwspIOxy3lmYsPN0JmoKe7ks8DAtrF7wSCULplXoBHEl6h5nB7bGg1LyZeMArG8UUIkA9JDaDqt9Suxk0kY4kYpakBQrEh2y6xZAtChqzaBzidm8NPhVgdc5E9xCVQN2DNu3CZELq6e9x8qyQBBTD6aH7izBZkr7UyI4JIOEbKokytfrFi9QBdFGSbF4MhjGlbTkOI9I1KDispWbFpDxJsYXDWbm3aW3/XS104lErUl4SBLADoQjQ8KJ2mB9lD8olHWaqWPAqvz4tI9cUzBO4y6YrtT1Ny8gzzqDOx/qiB8OBdZn4PQAZwr8ZIhhW2sHSFxCXy6KUeJRJQ0yrHlaAuaE4NqkTS+AebZe098hUYw3CcQQQkryunpYHlons1M+wtZBw4K30ZHZhhjMs/A0ly3nZFkkiOIZozdVXmAx3WFNEvELFiXeixfebOzm31KDdOaoPQA1ZTzRtLwQsszTfhXMz6pI7/X/gx/RW2XBA4m3k2cTJhptWUA9ci0VGtNVopEcmJYx753iIWuWr/a+C1WNOMk0fyMg6Vpys1CPkn0XPGFjPV9RIYGlhzyLtyWVQErwYNkA0NnwmRoGbyuJOMX5qeEsgUTx8VgohG7NxMST2yEnE4WTO0+Qpi7EDHWsfCpfDg656ZD+U0PpCkmT6FBvG8Cx9HtJDirQH4zLRkYfGJfVodkzaJ0PmDcfi0mdXVx6KPN64eR5iLCZzhsbNEm0QTRA51nIIOpERXTAWBfjWZ8tzGKPeKSmeoDahHzTYFTiyGWWNJmrpFJikzhQb1VA7MUCF7TDaBxTapkblNV2MFRwiiCivXj+TkdBismJkuAbnKCTMk9qbmm44z1kyEd7PMvE9LVLb7gCQMTXNLbblIC0R3EbSsxJjDPsxkQQWgVQ5wqHTz9Ya9clpIMw5Tm9nj9f29R8VKAamTRJeHc96LJU0MSUigxsxZLMwwal6LcVrEYeEoWjE5fp6lXRMWodiWQghSFWSniOdIMIKbQxS8yvuYyjQ7pXAmcmgEmeyabr5Fm15JF0QgMg1DIJg2q1jZn0BvkgGzo1xGXzS1Qr/KqgqTvd+xXNQEf8SEBVBzqgB3jQcAwn1Q136SzhSnmoati0rGNTASliyS7bmfmGK5vmuDyuukB3C0l71NbRQKk9qZNGKS2xDr0fQ7cF2uI8eKfMOnirkBrNQueYHsoRBwIYTHl9Yj/SAb9QZiig9sKSSgk6RtDEJeGO3MtwpTdztfutmBiqlrWq6wkEoUJcJtUF+eusrvIjZDNVWqmw69MYHjRtiOeiHYQGB9kwlwhIGqZsqOxabj0W9ZC6/mC5zLoWPWVC76NrOk0S9lZtxcTi3eDuUTA01iTaoRKuIW0Cg6UeZYf5k0mKf3YgwyjeRxs9yHGSPI8YaMAZL5ScuY9d13YjRBDCQTJfipluf1m54YawDVOu0uZb+k6vskxSqUoIlx5ITqXaE3JIQ618NiV+arBjVTTRrvMVsTY2UA+jf4VUVtOFEcrgtceYiHVuGxYdy7bg5nmLQeH6ltGWmxdo7+2FdhUlJZ40YT5EvCKY2sBzZJ98an8hOPXNVhdLccREvwo5nWC2KbhLwl6S3EMVWMvdIQW2YNlNVTW+9/Rz6vCL31OjI6PNN069cdPRoy/vtt5uM99Shy4Jhws2ofCJySX1rpARGBDYYNpkeGGiBxsUTphQqMBuHJEn5Co4B3LxO2//yIc/cvX+q5/55iNfP/PEv/+rOnjwro0bqJ767++qXbuuyF544fkPdjqdPz5//tzBY8dPTK6urmbDlQyh68GdqMH6fErMBiogAZyV73M2Q4GqDszadYxkwX2HSqxNm6vMQCebTqq1aZAtlRE8t9tte9111621Wu3/JW/2+YnJqSd73V734J13vbUGHTr0HNjlzTSoR8iLHQCXuHLPbm705pgrbTzQbk9qmnKQ5HgsMCZ196FuDD1ESAd6epJKKISY+eA3TczpxJxDITAw61hMHOZZ/qcuNI29uba2emu3q740Nz//e/Va9ckNTQx71OkW2LLXRvs/2Ka0zGkpHfvVc92kPdcHmGVJZ5gdjCrTBH6IzNVF6lK+E0RFty+aFnoYk0aIWOuPHWtp0l+2PIQkmedB6K/E7iPuuUbnbq/XcrhdboxB3S7vHDxOtn6EZLIL5d4s96pclCGrGFbcxKRZiN5VUrsK7XA6dOtL84LUrEK93IcUOgX+pNXYJe9SY7Yh1gv3TFx8xEETNZZ/5aEbytnYK0s87jS5/KMXw8N1AqrWmursGz9eGh8fPSe7ZmSlcq18KsMmoJn2GUZT8u3/MTWaFP/Eq+V5PpDgz3UlYkjCstPoPMtio5QKpWcn0FKb2CcgY5IknnVNENJcFXLgLuI/n1eyxUxnGwuoR9R8YmKiQdIdE07BTZge+KyvsLo9WzZhItYHhNm6Hy2RaF4KALnfDZT2QAvAynVlETiYTHoAYgOETcikTspQXhhZmr7lX8fwC5cPZJz95pbRoiia2dvRII5dtLqaTv0Z6ddhAM5lktlAn49z4zE6j57Nxv0bQ/05rmMttp6IkNwuRBsEFfp9vJeUviPeSahtKDrKz1gonQ1wqdhu48bJIYeO4+f9+P0SG2CuLPrFtfS9ExtrEPar5/ntNJi9qZrLCrsBmsTjaA/ivoPDnydpBLyW/fF6CLSH61uiYSlTriQaZXRMuEAAZbIdgk0tyTRyaZm7YCvB+7p99cVAL6NXghF63EI3/vaGAvJVyb3Y9oEL4lei4mTdiqDFX+IoyeumJoT3+CkbtA1LUMiBodahNSUVxrCZ8X4zxH1+b2vutbf0ToL3YeCnKfxetaBpyrB2ScM5PsdrJyA9EOLwzkYbg1Z6PaHV2zAxDIIuWJa2ZG0KQepQN1bEC7Vu9fHA5jrp+uKOLwkFwnaplP77tK1URpTsLCrcRpQ893xLhXqWpFdsAtRZ8GYm/vSX/7xSqXJ2QlqNU3LpPK626u0ICH3RxH9eoMG9iY03dFOrhzi3DnacJ0moqA38Cwzeg+TSXJDEU8Y3YkmKIt0N7SiLSSZiQ4jDnMx3o0luShqs4qJlMR1iSl9+dllItApC0Gn86HZClgRN2bGLxWUXxSCK2p+kG+AHL/gnJ7i0U62EwbGbDHsljCdysWrhmj+LsLI8KP+zWu5YHkwl4JAXhONJkalrfw/DmNILG4axnaAI+zzceBCx537PRihRJ9kATnmgAT7s+gkaaEm3jl8spvs/wz0pN1xUnLgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDg6NDk6NDgrMDA6MDBa8VpxAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA4OjQ5OjQ4KzAwOjAwK6zizQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

EmojiHeadstone.displayName = 'EmojiHeadstone'
EmojiHeadstone.defaultProps = {}

export default EmojiHeadstone

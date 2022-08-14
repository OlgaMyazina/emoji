import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiMagnifyingGlassTiltedRight = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-magnifying-glass-tilted-right"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdAjk6FqKJdQAAAAZiS0dEAP8A/wD/oL2nkwAAHjVJREFUeNrdfAl4JOV55ldXV/V969aMjtFIM5pDzMUc3NgQh8OQPDE8WcCGODa2J17bexjHRy6eGBzv2t6YhXhtJ4bdTfLsGpPAxiZjG/B6uJkZjTSj0X1LLam71fdRXcd+31/dUmtGQ1isiYGCorrV1XW89X7v937f/zccvAOX/uFp4MHg0+D0FwyxSTO4DsOEFk03NuuG2VwqGS7DMDgAI4//meU5GBcEflyxSYMhn31qa6O8nFfBDMnc274G09rYuHcKKC/3TQGfz3IlX6jOEOS9BidcCcDt5ziu1TQgpBuGrOuGqJUMrlTSoFQqgUpbtWRqmoYfGUXgYEkQhBG7bHvR5VSeawy5T37uO68kn/gPV0Oz9+3d6q8doONjMdATMUn0hboFWb7NJoo3KZKwTRY5J4fU0HEfVeOgWMKtqiMguJZ00HVaTdA0A0qaBoWiCvl8Dtc8A4/jhbjdrrzqdTv/vjHs+acjHfWLppkBBPzdAdBzJ0eguLTI+zs6umW7/T6X3Xa7RxY3OSSOM/GqMhpAMleCxHIGktEoJJcWIb0chXw6BWoxD4aOO3A8iJIMssMDDm8QFG8YBLsHijoHqXQaslkChC84nc5XggHvY631vmeGI7nMnQeCbxmof3WAfvlSL3BtbaAtRYPegPfDPpfjfr/dtsUpchwSAuJFHSJLSZgdn4DZ0UGIzk5CLpNimiBJNhBl2RREycQbZyxS1SKnFgqcWiyicJjgdHkh1NQGwU1dwLtCkMjkIJ1KgSCKab/P+6PGWv9f3LgzeAY1zRR47p0F0Mk3ToG4ZzfkRmd3+n2ePw657Td5baJMn8ULOkzOLcHomX6YPtcH6UQMmeEwAzX1eqimtugPBIoul1OVbbYS6gxFHoaXzhVVVcjl8rZEMinHonF5cSEixRYigl4sQLhhEzR3HwDe2wix5STkCznT5XKfqQ0H/+Rgd/1TC/Gctr/F+c4A6GevnIKxwUFuz5Ej768J+r4Wdtl3ywIPeaTN5GICzvX1w/jp1yGfSYC/tsFobm3PNzY1pYMBf8auKHnMUiW8WN3EBUzT2tA/hslTRitpupgvFOVkMu2YX1xyT05OuqbGx6RCMsE1tXVC064rIWMqEI/HwCbL0bqa0EPdreHHEplC9pou/68XoGePvwGPfvNR7g8f/NItTbWhb9R4HG08asByvgQDw5Mw8PpLEJ8dB2+4xmjv6s61tLTGAwFfShLFgmkYOv2LW9PKvhyU5YMw4uhPZcw4XHlMZzxmN1sylXZOz877BodGvRMjgzYbfqHr8utBCG+BhWgMeJ7PhkPBb7Q3hx7O5YsZDLtfD0Cvnx4AR1M7ZBdm3ldfE3yszu9uJ3AiyRz0nj4LoydfAqOUh+at24td27pj9fV1cZso5DF8NBRiAsTkeN7EGyJRZtpTfeFlFiFABmcaOoq3ziGgPKLKF9WSLRpLeIZGxkL9ff3u5cgsv3X3AfBvPQSRWJJAzdfWhr5+WUfdVxGk/MF2z78uQKMjozCfM0AAo7s2HPpBY8i7VxQEmMfMdOJEL8yceQ1kxWa2d/dkurZ1Lfg8niTeIGZtzN3AoRUS8UkLJlGGq7ZvlRfmmhcce42miUDSdY0BheZSyGRzjrHxqfCJk73BqeFBsa2zG2p3X4cgpfE0XLapLvzF3z7c8MjgXE7b0bhWk8RLCdBSugB6UfV6w+EvhrxOBIeHhUQWTp7shcjQSfD6XOaW7j2Jrq7OedSZDPoXvB8UFUFirKlKxSacx5vqJ2xaL0zrU55DvcLvCxiVGh6jZHpczsy2znbN4bCXXpPlmpGzfTY6dt2u62E+mnRGook/fOZ1ceKu/9L7D8lcEbwOeeX4wqUCZ3FuDj53zg3XhbWP1AZ9n/U5FTGB/v8Uhtz8UC94nLLZvr0nsX3btllFkQkcFGDGGosOTF4wdgyDpW9iBv2Jq8LIZNBwwFUHQvklRwuGJccJ+CcDUzpveNyugsfjMbLFkn188IzgRmEKNHVAMp1zovfc+ge3dLwwHCnE/vavvrZyOP5SAXR6bAb+Y810h12xfcpp45WCpsPw6DTMjQ3gE+Khsa0zs3Vrx7zNJmU1Agd4A+8GpUQrmzhUCATHEmDdAsOsWqtYZK6vroyBvCCYoqSYoijqNklSm5vqo/v3XrbU0NquDZ9+FczoCKA/gkwuv2d2KfOZg1v9yqtjyUsL0Kne07CZS3G8KPyuInI76H7nFuMwNnQOnHwR03hToaOjI4KlQAa1Qsd4MBgiKLJMcyx0LAlm2zIxzJWMtQYwboVH3PnKatK5KVwFBpKAIInq5k3N0Z5dO5Yd/qA5/MYL4OGyoMgKJNL5O14dSbz/WF8KJpcylw6gSGwZxktyO6aVD6EScFlM56Mj42Dk4uD1+4zmlraoz+dJmogOEDiYnSiEmEOmbIWvuXI8oaBQXWXFFmeJcBkYS3q4MiAXYLPyRwYSZk4ECV04mkxFlgodW9qXtnZ2ZrPowBfOvQJBtwL4qPzRZOH+m/b4/HPJ0qUBaHBwEHpHJ/Bk2g2Gpm5FCwORhSWIzs+Cz2UDT7AuU19XF0cClAzmZHgmrrwoojgLUPE1lJPwZgC1A2+OCTAaHYPpibUSc9iOq1G2AlJFuquyHgMJmSQSSLzudjuz27u2xsL1Ddrs2CDwmVlwOeyQK2hXzcZL1742ocJQJLXxAE1Oz8C+LZvdWB/drKtFsVAowtzsPCpMARxuj15X3xCXbLYCul8Ds7mhY+WNmZ3phVkWZOuJ09PDjAYMFI7qepOAYUSi+6V9yfeUzDKZzAoQ6/sXzgIJNQmZaiBIWl1tbXJLe1vGQDuxONILXjsdlXMl8/qH7jjgsUvcJWBQNp+DTDbblc9lL6O2QzqVhgTae7dTBofLlwsGAilSXU3XTd2gloWG73BbUvFmVbxnjYGDhaQFhiW2VmnBkpqxggO9RoDQaBat6p4BxVVEqcykqvgj04kHFNBGUFZTFFuhtbUlEQiH9aW5aeBzi2C3SVBQjSvOzqtdQ1FzYwEaGDgL//uppxGgzIFcNhsuFVVIJZJ48wWwY+HpDwRTmLWKVDfo1MwpZyNzRWw5Aob0wlIgykKoP1RGIKJMsHmWmYhb5VrDyngILDJRQ5A1FWmgWTqGWPHV1qACE4atBRKnh0OhTENjQ76EDymzMA4uhQKYr88WzSt/ObHBAM3MzsF/fvCPxUwmsy+dSQslFMAMMsgmCVgg2ks+nw9TA4fEMVlpxbHWD8cumO6Cbpo8dAlLLxUzv6pqoBbpxvGSOZ6BIzBvw1dls6pUzwTcIKtgUugxRhol4DEU0TsCO015Vx79FpYvJmbSQmN9fUZ2OM3k4hwokKdz8EWdO/LpI6Z9Q520ppXgVF9fIJVKdatqCTTq8uUK4PS5QJLtRbvdUaD8TX2cCjsYOFCxNgYLqUolajGrEi4sH7E2K9OrMuNW/QoBvcYvMsQNjrRLp8KFnQt9NqtKDB4hJ49kmHo4HMq6PR49l0mJUEziw/QSizrHl82aDQUonc4Q2WtxW0/3piODSIdQlEGxO/KCKJYzF0dCyRhhrjV/Jis81+mgVxdf3CoEq911xcay3gqzDKsBoKPNoH1YMwCZRGJPD6a8IjN1dNjuosfrKS2mEqKeS4DsaESxtmHccS0bFmKz09MwhWsikajN5nIedMdAIWYQKzDeZUVR8ckbZXoDk10UaVRpvHpLX0hryvaw7HvKdCp7oEriNti6ahppoUY+6RTduIjgSzaZ+j5AxbEkiSDianUCOKufjXpFOQuJZCqKUvJ43CVimJZPg8yXKBxdqOgbB9D8wgKc7O2FfL7QmM3lHRWALP6LpiTZSkgdg6UjyjgECmUhSt6rrqWMR1XYrWYg4M5T3BXA2CE1KOL5ioUC0LlZhmNDQxz5HgQNGSbJDCiB+S1gQsixVq6gO51ODcsR0NQCVvAqCJwhohSGNwyg6ekpOHGqHzKZbBC9j0gXSX1iy/TxRqVNSiFET9A0L6ydYMUaV4yy5Ymqyy/OKkTL2WstWAQUMamAIBXyeQLMZECZ1meV7wnILmKY1WOi3jRvyrJNF5DZZDlEswQib1D9490wgLLZLAz0vkEX51BV1Rq3ohBjLGG5ajUiLFu86uqqK87KTisgrKquuSLeFctzoSW0gILysBDzWcgq1MJiAe1GkT0g+jLLhrxVv/FlkLBWY89JAA1ETqeBSXnDRLqmpsaKJnwMDBwEqYgXxZNTxkeBdOXMincrF5bryDFXoQ1XbpKZK9VE+cMKaObFyvhKn9EC2zCspEffNNBD6IyBGvNSpmFW5A3TmkFZja6fwgsk1lzg9A0DCH0P2yIoOj050oMcUh1rDfI11CcWzare4Jpm1wobKsnKrNIaC8qV9+ZFUSHBtfarKvTL3X28ea4qXA3yVhX+0T5cqaQKpE3EIhFYQ5OuNrdhABGNQXLSUEyexLeIDMoiOHIuS7rA5QtFiU4pVN9ohSVl3pgrXcHz+jzVsJZRNStZvhowjoULYxkLJbYbx1UeAhlWq4fNhkco9bO+GjpXAaVBIpFmGY9nNTTyzYhvGEAtLZvh4KH9dIJFvGgNjaKYRqFUUPjUXJ5LZ/M0to4BWO6GrclPF9gaS4tWKilunSjkqg0SVBKAyXNlrVoV9JVjUQgROsgmER8iMpuVv8h2KZ/PS+TXZFlCgFjZVsKCKLJhIr1p82a4+shhajxN4EWlS+iqMwgQlh2QS8YhncsrhaJqM2GdFLSGA6vNMa58p6udRXNFxLnyaMYa5aF0b5grQrxqpcw1oJczgAUzvkql0go+UEmUJCxWkUVWclvGdWLDAGpqbIb2tlaoq6udEQV+Cat1oGZUCkFKLcxhAVuUsQRR8ImRx18bGuvoCgeVtsYqYNUdROM8cFb7+avmkRlPq3VUZpvByg1u1WOh/oC4uLTkQHHmSX/sCvkkYp0+K5ja7IYWq0TRPT275uyKvddgOlSCNIIUnZ/BojUlLkZjHqya0dIKPFg9DO6tDvpe0Lg47/06GY2rajyu7kfm0WTeiJr6NHRtW1hccsmynbMhdRSbwPwRJpqzLhFiGwpQx5Z2OHDgYMHjdT+PZ6dZO5DHNB9NLENidopbjCXcmXTWwbSRWFTxNReO5KxYAHOddT3QLrKuFf1yuNLDo0vA2lBYWFhwq6WSnUBxY+1uQwHSKFJ1/eX5ZL60oQBdceQK+Mqf/Ck0NzY+h850UmdCqEMKq/rZ0QGIx5LK/Py8t6TpkoksKhvBNYCsBenCWV/m+jPB1qOduYY4Js0zMjiV5hPR+Kwg8li7yWPjEz6X2ydoah68TomZx6JmzqEVeBnJtPEdRdKhf/fZTw97vd5jllEzQMU1srQIi2ND/NTcoj+ZTDoxgfDAW3JYDYh5IUEu+gfz4rG5ZtfKG2IQORxBlHgsYsXp6Wkf2g836ZLMa2CXBUz/BJD+MsrESNht3/iBwx89+SR85KMfNxoa6tVoLHazpml2anaV8OLU9DK4/LVYNwoQ8PvzNFZFQzIma8aXkapU8OsNVFzcOJ83enh+alx9CDabwktYnWJp5H79xIl6tzeoxCJzUOMRwO2SoWja8kVTfjgWjZx0Ol0bzyC6mIMH9kPPrp2vu1yu3krRSf9dSiVh/PRr3MTkvH96ZiaA7lqiPh8+Us5ca4nOH5c4jzzm+Xq9bqlR0TeTVX6URGQCh6bLKKf7+sOSTXFmM1mQjSw4JI5N6cup5gnRJj8XDgahp6vt0oyLXXf1VXDnhz6UcDmdJ1nvh7N6zUgXGJ8ah/G+k+K54cmaSGTBjy5boqzGCxJXrsg5c52QqhTzZrkrX/W+SsDNqmLWLBf/JstmDBybjXp08rnBoXB8ORGQ7S5ueX4cPHZmHNCWGCg/wuPnXvxhROCFSzdwKNsYKGYgGNCdbjdS1wmYR0HGq1PxYs8N9MJo/2mlb2C4PrKw4FNVJtoCgQRWl5GrdFsvAMtcNX1Q2QlWX69lHWu1cLJi5zFpMHCGR8dCY+OTNYFwvTA1PABOvsA6jcUSZlxD/IXd7ftR174bYd/Oro2b/vL5zz8Au3ftkp7+8bHtseXEDswOxX37eiY7O7c8PDs7f62CF5BdisHc7BwspdOQwczmQte6c+9h2LJjZ27ntvZIY0PDss0mqTx1kg2Nuo1mdTytNqYv6MPChVNAWALjBDyHTZY5CatQTO/yuaGR8NjERG2otkEaOdsP+vI0OB0iOJ0KCHbfohxo/Mjs+OCPr/3N34GGkP9Xn/5SyqLoNnRh1V6sefR7jx+NJ9L3oGVvoHGvVK6wtP/A/vCe3bshk0jC9PAYm4QpTIzDfDIFaSxmT79+nLp/DvxOYyaTtbW2tsacDqUg8JKOt2cBZVqdo6o6YX2dNs3yWBEb0uFEyYYrumM8UC5fcPb1nwnHE8lguK5RGO4/DZnIKBavGPYGj1mW15yK+69qNncfU+zuFXB+pekv//2Jx+GyfQfhtltv7TxzbuSb6Zz6e5IkBzBOBMkm0XV5M9mc+P7rrgFPqAYSORVU6iTqGuiZNBTQQGbRnMQiM2AUimIBbM5sNoORIJmyrBhsWAY9f6VPwV3UG1q1HY9QCKKNkyhL2WTK5MgaU5mangmcPNVbjwf0211efuCNVyExMwSaQYMJIussOv3hJ4MNbX+Uis5kjhw8tOY+3xZAJID7D14H9973kZ2DI+OPoPP8QChcw/tR+W1Ia+oLq8UCTE7NwvjEJLS0d0A2m4PkchRKxTzohTyo2SzTIxVvEVMq5GJLvM7L9ng668rnMjJGBbHAFKxZZiglIjW0yOCVG1u0RRQQFHwitPJYbAqo9xIWyva5uXk/ZqrayFK0xhessacSKe7MSy9AfG4cGYOexy6DosjgDdY8F2po/Ww6Pj997XU3XnCvwtsBh7LSPR++u6f3zLlH0O9d1YiF6qZNrRBEgBwOO6ui05jSs8iUwaFhGBg4BwGXnfmgfCIOefx7OpuHAtlbmr2BICQzSYjNTIBWUMWCITiWEinPcjzmLBTyNiw4RRpPrQyk4b9ILQslvBoR07OMhs8ei8U94xMTgcHBodrFeCKkuH1OMHl+6OTrMPjGL9HJL4CBX/N4HKg9dvCHa38eqGv+dCwyci7UuB3+23ce+9XmKJ7t74XtO3bDfR/9WE9v/7lvG5xwpKmpGVpat4DP72fAFPI5WFqIwPj4OMxMT0Mul2ODfY11dXB1z1awCybMxZKwnC8A2llrGkJ5LIyNu2sa+JxuaG7thLrWDjSWfkORpZJdFlWnXVHtiqxhBOs0Kopfw4JPE4qlkqSWdJvBY70pK+g/RS67jElhaABmx4cglUqg2grg87nB73GiKDvUUE3tD+s3tX9lvP+lkf0f+DB0tjT9arNcn/rRk3Db7b+F4HwcwRlYAaetfSsEQ2F0qBKbCUasWVpYgOmpKZienoEECnSppLKarMbvhT3bW0HGp0fdPcPQYSmeggyyifySKNLIJ28VkwiUHUU9FK6H2sYWmjsNDo8PbHYHYCiZWGjS8A2TKPIqhlaEQioOicgsLM5MQmxpAfIY6rws0VxIBMYFDrsNXG73fLi2/pFAuPFRvVSIX3/jLW9ufN8KON/61jfh4W88Ajdcd/XuvrNDj5ggHGlstsBB7cFYtlnsQW1JxGIQiczD/NwsLCwsQRqdKpb1uKI4YwEW9Cpww1V7IYyZArMeTM9HDQSJw4qao0meimxDHyWx3jBlJAO/Z+L3JZ5aEQpqhwMUu51lRAp1Q6MBggIbIKBRFI0mOKD4Opx28Lhd4MEUTg8Pj5v1+vzHQrX132zr6jlezGe1ffv2/8uVwVvVnHt/7/d3nz4zSJpzpKl5UxmcMIKjsGY5/cAksRyHRQyvyNwc22JRyn6JQxmYRjY0GitXsxDy2eH6qw5Hg6HQUznVOBVPpJzonw6m0+mDhXyhjlIThhFrfyo2G+sT0zmsuZxGeZJCpVGPaV2k0VPcV2FAsJW+T0M7+N2Ey+U+jix/omFz+0+Ge19JHnjf7dCzs/utlU5v9qFazKHRcsB9v49h1YdhdQE41uAbZawkgbMYgYV5ZA4yiOYE0cgGG3cqT1ehgQT2A5RCBuobml776H0fvi0Sicx97aE/h8efeIK8yo7ZubkPJpOpmwqFwlZ8OApaGXazxCoKS9ZUL48+sFEImpCA+7CZaDzL+DTNLiPb5FFMGP/XHwg83djU8uoHbrktWVW4vvXa8mIfPP/cz+Caa69fFWQCBzWnfQtqDgsrhdVXRO0kZiYS5giBMz8Hy7Eo++0Wm8/DW9NWzJXhY4ExSZDs0f17e26OLCy98tIvjrFP//pvfgC7du4QnvmnHzfOzs4eRvN4taoWL0PWNOEh3AiAgucURQsQGq3VEKyCIPIZSRQXZVkecdjt/U6n87VQuLa/Z++ByMsvvajd/4lP/n8D86YA/fX3vw/3fvzfwr1337n79Nn1wkoGGu8m5lBYrQVnCfLocUiAK3VCZcaGwMJBZGldtruXd+3ovmVhcfH4i7/42bph/c/Hfir09Z0OIKPqEonlGkQmjFrmwh14RZZVvIYEHjPu9XnjLqcr2tDYuHzrB28v0vd5fmPKTG49zZEcXrjrzt/Z3TcwhOBQttrEmEOCLDNwuHXBiRNzshk2Ha7SaqCuojWCaYUabRvwePUNja/07NpxWyqVjvzXb38L3qkLv96Tu/t376gCB7MVC6vwm4JjMccChyYK0ErZi01UKNfYNAMjiGXHrsv2Fnbt7nn8oT9/MHL06CfgnbysFKsjaKoInI/d/8mdb5zqKwuylcrDNWXm8BdjjhVWenkiJZu4xMayjJWiid4HAiEsUY6Y7Vs6/teWzc3/49uPfRe2d3W9owFiITY2MgR7Lr8KbnjftR3DY5OPooJe38gEuRPCLKyU9ZkTQXCiFnPYJEuwetB6eaCPUZS8Cr73+Pxw+MprYGvXtn9uqq+7fyEaHf/K5z8H7/RFpBv5N3fdA/fcdUfNi6+c+Coy5/qmhsYVEyjblX+BOdXglEc2K2NRFXC8Prj88JXQ2bXt+fq62s/k1dJ4TcAH74ZFaGhogH2X9chPPvXMl7OF4r319Q38lg5kTm0d2LEkuBg4yyvgaFXgGGBUppSUJ4YTOAcQnG3bu19o2dz8B//445+e/dRH74LfuOF97wqAWIjdcuvtHxydmPqbQDDs69zWDU1YmTtdLlYbXQycXCbDNMcsC3IlW8F54Ow/fAWCs+OFts2bjn73B/+z/8WfPf22PcmvJYv9p69/3Y/u9WNownxhzFRUeCr2N0nl0XXA0S3mVMChsHITOIcQnG3InE3NR1989Y13HTgMoBMnT+3BGmi/DWset9vDCjuaY1OkwhPLhaWF+VXmVAS5DI5eAcdcDauK5uw/dAS6EJzWzc1Hzw2N9N9x+03vOnCYSGPN04ZMcVMxQK0Dmpqbz2VZ2yK6tMiAWcTaqjqVV5hjlLPVWnC8lMoZc9pamo8++/Nf9D/wmU/A3j2XwbtxIR8URzNXwtpJySE7UskE8y9o7Vlfhxi0HIsx0Bg4bOyKfkRiXsgcjxf2XX4EOrdtR3BQc574u/6n//b7zEe9WxexobHhJFbKo6nEcs/UxBgLLRLbJAJFRScVojSl1nLEUMUcuACcvZcfxrCywPnhP/yf/pd++vS7MqzOm0NjcocOHX5gbGzsz2yyLLhQh6iNQI13Ys3KVN7yaKVRmb8M1kQxYpObMecQ05y21s1Hh0fH+//iwa+868FhPqivvx+6u7sRn7E92Wy2lQGDWkNbms5bqavYb7XKs7tWUjm+d3s8sPfAIaY57W0tR19+9UT/nb99C7Rs3gTvhYXfsb0bvvu9781t27bti4osD5ToVzo0AdtYDamVH9FWg4OAUdbbs+8gc8gEzuN/98P+L3zuU3DVFUfgPbU8+GcPsu3VV19zY11d/SBmItPnD5h+XGnr9flNTN2m2+Mrb71mQ9Mm8zdv/S3j0//+C8f+8rHvbm/r3rd23uF7ZGHtji99+UvwwANfgOeff+7ZnTt3fMJhd5yyfk6gMXE2dGMlpZMhJJ3avnOX3tq+5R9DAf8nh0dGz472v/ae0JyL9oMeeuir8JOf/ASOHTv28127dt7n9/mepYl6xaJKv2CG8rxscDgc0NLWnm1qav5Oe+vmT05Nzwx/4P3XvifBuWjLtb6uHm6+5eb648ePf3x+PnJXoVBsRgREmn2BwJzt2r79kSuvvPLv4/F49k//6MvwXl5oAhL9r3XU85EiRgWDQenpp5/ZEYlErkql0zV+v3+yq7Pr5w8/9NDos88+a959z93wXl/+H8ykY/EUQWmvAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDAyOjU3OjUyKzAwOjAw1zOM9AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwMjo1Nzo1MiswMDowMKZuNEgAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

EmojiMagnifyingGlassTiltedRight.displayName = 'EmojiMagnifyingGlassTiltedRight'
EmojiMagnifyingGlassTiltedRight.defaultProps = {}

export default EmojiMagnifyingGlassTiltedRight

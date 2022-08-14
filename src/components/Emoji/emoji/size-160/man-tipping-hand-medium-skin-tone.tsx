import React, {forwardRef, ForwardedRef} from 'react'

export type Props = {}

const EmojiManTippingHandMediumSkinTone = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
   <figure ref={ref} {...otherProps}>
      <img
        alt="Emoji-man-tipping-hand-medium-skin-tone"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdAAIaEvqS6wAAAAZiS0dEAP8A/wD/oL2nkwAAHlBJREFUeNrtfGm0XFd15rfPOXeoqjfrvSfJmiUPwvPIYGODB8w8BLIYDITBKxAW3WCCO8YhAyxCmLxC48AyEIYOCd3uBTTGdjA0JmA8G2PAsWQjy4MkW36SnqR6Nd3pnL37x7m3qp5sg+UElHR3rXVVpffuq7r11R6//e0C/v/t197ot/nkn3rt86GIqZ01o8KyYWYRANqYfHJ0oihsjkv/523/bwB01aVnYeqULm76sq4x2cMyU6wjog0EWsPCa1gwIiIMQJRSewT8qIg8BMJDJo92ZEjm4oUkczWDv/rnrf/3APSXv3cMnJFQJ+FGMnK2Cs3ZgQmPCcNwqQ6CEaU1EQFEBEj1VwJmATtni6Jo53k+Z/N8U2HtLa6wN+5P8nuvuOTV3Zd/4Gu49hdz/zEBuuItG6EVmZ37g1Md0VvjWu3F9XpjRVyvaWMCKOUBEQggAhHuAyTVC5egsTCctSiKgtNesqfd6d6eZ9mVLO77E4+M73vwWdvwlS/v/o8B0CN7duBLF7wA9dkly5MkebcJzdsao2OH1eo1EABhhoj4ewwsZug//Z9J+Ssi8odSAICiKNDpdJJ2q32DLfLL1Li+QXKxn/j2ff++AbrkZc/GsWsUdjVxvBX+ZFSrvSCu1xUJwxUWXIKDA4EhQOTxYEn5eNiiiAhKKRAR0jRDq9Way/L8svHxsStYuPdnV/70dwqQPpiTX3nqKnRSrHbMX2iMjZ0X12pkswx5msFZC+ss2Ln+4ayDc+Vhbf+xtRbO+nv/2KIoLGxR+J8VBWxRABAYbUacc2dmaaYbFN127jNW2uvvffTflwV9+cLj8GingZHQjvdS+XNS+qLJJVO6yDLYooBzzrtVeQCVxQw52dD/q/NYBMIy9LeDK+pbFAjMDnnhugjkkngivoJbwh+56he/E4DMUzlpZ2sEpGi6sPoTgHvj/L6mzooCY/WatwrmvnvJokAsGPY4kSrulOCIz2au/FtmBksZ1IeiuSIFAA1ydAktuF+onG7G+mngwflD72If+8ONoJndKuiNXxRE4XtNYMLtj81j25y/uDDQ/g1zdfAia1p0DAPFQ1ZUguMcwzGjsA6Fc8itQ15YWOvAwlBE46SosRDQ906fqee3bdlz6AF6wTMOh+6OblTKfFwRzSRJgma7i53729jX6iFNcxAApQiqn43KYEsEIjXIUgR4p/EZHlTeA4ssTwRgx7AlYM55yxIItNYr66G5IzDBA2csUbhpe/vQAXTZ+08CHhyHHsebmeX13W6P2p0enGN0khy9zKKb5mj1UvTSDIW1kDJta6WgtYZSClorf6/8/fAxnLUqAKsoJKW1MXtXFQE0URxr03rGtPp+biK5/t7dhy4G1TqTCI5UjW5XnZ3kqdrf6iDJcmit0IgCxFEdnSRFJ82R5AX2dxLEgUE9CtCohWjEEeIwQGC0B6uyrqHcQOT/p7XyAFEFnAMpQBFQgPqxLrcWlvn0e3bbpcyy8xAHaYJjWcbCRydphk6SglmgtcJYo4aVs6vQTlPsaTbR7LSRZhlaSY5ummOhm6IeBxirxxgfqaFRi2GCoLQqD0oViFl4ELCdQ1HGHOsIzILCOqSFBSAgALm1q+tBtI6Bnd5iDxFADIEQVjnL02meo7AOWiuICKbHx/GMtSuQZgUWujNY6Hax0O2i1e2hk/SQpCl6mUUv62B+oYsoNIjDEFFgYAINozxQKKtvx4zCMYrCB+fCORTWB+zcWsSBRmg0WATW8Rgg68jpm//igvUAHjxEAFlAi5q11sZFYcEiCJUHaGp8HGOjdYyNAdNTo8jyAkmao5fkSPMCaZ4jzXMkWYYky5DboiwHBFnOyIRRdrGlyxmQIkSRRlzz8YpIwVqLvc09GI0Nktx6i2MxbLGmiy5GWyOHxsU++47zkecpRDiwzinH7GOFIjADSyYmoDQBimAijagRYgwNOMuwhSsrY4ei8C5jrYXjQXFYZaWqoSVfNflgjEFRaa1DnnVAsN4tyac5Uqh95pqt+NjrTj40AEnZHkBrw+yIRUBEcMyo10YwPTnu07QCSBGUVqASrJjC8jkqWqNM1Y7B7oDKWaQqmz0AMqi2SyIAexb24rE9uwYlAQEsEopciQ/93kcPEUBsq66cqzSriGCd4LCZGcRR6N1DqUHdo/xB1TvRQ82MYIj+wKLCsQrZ4t2nBJLB1gfl1cuW4pFdcz4LVk8pAG7uwPFvN4upJ/vFe756g3cFFsssXKXkMAixYnamBId8jUOErMixt9nCrvn9aLW7EGEQeVA1EbQiaE0wWsEYBRNoBIGG1oRemmDP/ib2NheQ5bl/XqNByrvdsukpjI+M9LNYWYz2/uh9HwIpOnRpnllAIikLu/IzxoqZWYw1Gv2P8cFH5vAvW7dhbn4fut0ELIw4DHDCxnU45zknwmjdt6g+FUIEKtuMW3++Gbf/cguSNANAqNdrmF0ygWPWr8L6FctARKhFIdYsX467728PmllBEo/VnvwT/m1bEABopxG4cEEEhYhAKYPDpmeglK+Ud+7Zh69d+xP85K57MbdnP0BAFAQorMOevQtglkXA9FuOoZ5sft8C0ixHGARQWmF+fwu33n0//v7an2Dr9p3QSgEELF8yjcCEKKyDiDitaa4WR4gMDp0FuYBBuphHD93CuTGjQ4RBgCoQjDRiPOvY9RhrRFi1fAkmxkZgtIYIEEcRwsD0gakY1uG+SymF8888Fc897diS1mAstLt4ZG4v9uxvY3J8BCB/chyGaMQ17G72kBWuo0ywPVCCS1+zAX/6zbsPDUCKBIHGowJ5CMByYwyUUv6dkmB6so6XP/8EKAJIKQgApTUUaR8tRMpm9YD6fOgHjXqMRj0EOwcBY3Z6DBvWLIXNLWwhcNaXylop1KIYECAr7C6dzW4XdqA3fPPQWNAlf/wunDCWQEZngt03XN+0jqGVLvskQGuGIgdrHTqZw95mgrmd82Bb4KiNazC7ZByBCdCfaBwAEJd9RlHk2Lu/hd37e3hsx2MwWuEZR6/H5GgEbchnNluWAkRgEQRhPDdyxKzrbb8Nn7z0A/iTj338dx+DRnZvw7duvz9uzs19eGZy6ty08IUeyt5HESO3jGjl8bjzviaWn/wy8PQz8L/+6af439f/DIkeReH4cY0Ske/SQYBzDnk0hVvv2YWjzr4ATb0c377mDtx0272IV58I1gGUFpAaxKzcOqyYXvKsGeU+vr05M77l5usPjQXZpIsR2Fqn0z5lpFaL8oKR5r42Ulrg2GJiw2lwk+twx82fwrZdbczN7UIPQHvhYdgwQFRfAW7PQSuzqAj0GZIRjM6gyRP46S13Yb77BWz91RakCmju3gypNTBzzNnYddd1INIenMIht4yxRiOyWXryWIOmQLWFQ5LFEtTRwXjRTopWYAwcCEnZj0EAUhqzR57mC74ixR033YIH7n8ARMDKlYLRyQCzG46H8OJ5T79Sdg5Tq49GEDfgki5u+uGP8egjO6ENsGq1hdYZlqw7DjqMywGRf/2CCfW4hk4vKxqNkWJqcvLQWNDY2ATMkqm86D34mDBgdIRuZj3DZwUm0ijae7BizTo854zjsORfbkPLAsceC5zxrOVYc8w5MLnndyqOWcp2pUpj0cg4jn7msTjtmUfgkW33ocPAs04BTjn1CMysOg7p3h1QQ5V3NyugdIhAGyzkxVw4u2KhXqsdGoBWr16Bj3/4svwtb37x/XnhsGxqCjv3NT1v7AB2hLmfX4+RZWtwzovOxvoVDvV4P2ZX1RAvOQ9u3z7s27HZx5wSmOpxNeHYvfkmLDn8ZLzigtfhobuuxkh9AdMrRxCOPh8Lm25Fd/dDcIWFCME5RhgEWLN01lf4pLce9dLXdR+9/luHBiCzbB3e+LpzIKS3JFmez05OhAUzCmvBTuAckPUSFA/fBxMG2LDhVDBbEAfg/YK5+RtK0rQCaLGLAQrpwh48cuf3EIQRDj/i2XB5BuQadr6LBXsfWBTYKjB7RmB8pIGxWowkK+DI/Oqa15/PZ7z/Tw9NJX3Bu94NFcYQrR7KCtcWETCAJMv9HIwBZoJjhSJ3KDILdgS2DnmalEND6ZPvhfWUqWP/fwGBlAEp46eylkHkPy/HCiwBmJWnP5wgzXPk1gIA0qLoQuG+w1/0Aixdu+oQctJhANL64V6KbY55CTOjm+Wwln3wrTp0KccT7KmIQWYX2JIfCkINIg12giK30EbDBFW7T/1ZvUjJCw3FHmsdOklatRnIndtVBPp+MnW84o3vOnS92NhxI3juR0/dLUQ3ZIWFZUE3zVAUdsDrLKIyFmcrZkG3lSLt5HB2MDuzmUOvlcKVXMWigWPFEUk1/hEUhUU7yWDZ06+54PZefXR74uTQTlbfftHX8f4fnO2WTAVfWejlGwvnTupm2bIkyzFiY2ijQCQQPVBpeF7Hj3CEBXO7m2i2u1g6NY5aHMI6RrPVRWA01o1GnpU8YDzdHzCW3FCaFWinKazj3a0ku0+F9c/nt96aNZ5//m98g7f93Z+BlIKzNhbnHAjFGe/6xL/d6DlYfy7y0alN8vAXXitKv76b5Z/rJFk4kTuYwIC0AEwgVZmQ79M8SIQgNLh3x2P45UM7EIeh1wkBOPnItb6vKy1lwDACYE+1CDOcZXT9REVsEH46tfyFTidpusY4Lv/EFU963Xd89cNQSpG1djkzvwgiL2a2D7K1n7rhM++dF2vx/Pd/Dj+67F0eB6XWE6m1wm6TCaKctJ5UJtz2lNmmC84+GSx8dMTFdetmlqzesHwGY2N1BLEBlXSrUtXca8AkFpnFw9v34FfbH0M7SVGPI2xYPoPD1y1DrRE93npYfHAvHFzB6HVTbH1kF7Y8tns/xxOvCJPmTV++afMTXuPtX/lwJcqaBOQsQM5k5rPEFsfbtBflSWeBnX0VgB+bMAZAASDHgtSbQHiF2OIwkPpZENdJ2K2wefahp8ymhLoGUuohTvfd2U6S1Z0kQ60WQgcauqQkhEp2QqkyxQNBqLFh7VKsWj6FPLcwRqNWD6EC1Z+ksixWgUjJXTvr0E0yLPQSaK03rV03e28YrgSeAKDbvvQXYGcDUup5ROq9AM4R5nreXUC3uRe9brfN1n5jdGL8wbgxtl6Yj4bwy0TkJeLsSkCIlAYpdabNU38lSp32lAFam1ncFi8kK3T8nW5WvLTVS6LReowg8OMaNTQ2bnVSOB0jjGp+kuEYTkWQUJATkBYE7QhKAWmaQHOGqbF6v9quYk+WWTTbPSRZzlEtvvbDX7xq76afX4wPfnbxtd3y+UvgbNpQJroIwHsBzPSzaJ6hcJI2Jmfm4jg+ioT/Bzs7K84uF+GGsIC0gtJBqSYhaBNA2FGRJqcdFKH7zpc9E2TMsmxf6xuz4yPPXTc7jenJUUR1b0mVi+1u9vBAy2Bm3UZsOPIozCxdhiAISnqjQKfdxtxjO7Fl8yY8unUTTlrRwPoVS0rCXuAKhzwtsH+hi4fm9mC+09lUN1Ovona6Nfj+p/Dxkef2r+nWz70TZPdpiVb9Z5j6R5Uy9cq/RRjsLMQ5EWfBriB2DsIO7Gy/BSL43pK06UsB86S3o9ucf99BEZbxEQ08/Ol75paeu/bzzW7vpH2dbqMWh55gJwI0gZgwPRpDSw+/vOP7uOm6b6OARuEE1jEgDLYFIsVYMzuG049ciaVTo7AFAyJ+rpZbJEmOfa0OWklaQOkv33ndaVuPeeU/44ohcH75lQvR7jAgo89SLBcrUB1YLNwiEESYRCp5oJQDBw1h59UmNCjelPa1mdaaGmMTDx8UQJ/59I/wnpeegUZt8qpd89vO273QfmutFCcQEUygQNpnpvFajLOOWYdelmOhk6DVS5FZizAwGK/HGB+pox6HIAFs7gAiH6ALhzQt0Gx3Md/uwDp8Nxof/dqJr7oFl19956Lr2b9vH7RZC+GFc8G0gmSxZE5KdW1f+TYU6zwoqg+Y0gYgQpH2kHXbzSJPv6YJW/XBFk63378Dp60ZK7Qym9KiOK2wblWgFALl1RuDF/d1DAmhFgSYGqljdmwUU4066kEIXXb1/ZrHCdgy0rTAQruHXQst9NJiM4XRRY2FvQ9uOfJF2HLHjYuu5YXHjeMlf/gNPHz31S8lHZ8xPIQTZni38odX3/LjaBcqQXJFhqTV7HRbze+nSffPu53uV6xz3ac1Nfmb7/4U87sf2aqU/i8LSbJ5x/w+7Gm20elmKDILVziI8x28DhS08Ty2wH/ESvufK+1fvspYaZKj2epiV7OFhV66TUL9J5dfe/NdG056Oa75248+wXBT4S1nkXLW1YUdbNZD1t6PtN1E3m2hSDqwWQ8uz8BFBrY5XJ7BZQlcnvjze20krabtNPfe2mm3Lux0u28mra5xguwNf/uDpy8k/+wfvAj/6ebv4R3rTno+2F0+GkfHLZ0Yx5LRETTqEaLQQBk/VCzz+UDyUoaJKltZy0izHM1OD7sXWmgl6UNWcFFuxq5Rksrn/+mWJ7yGS88/B82mXfXC86avnFiy7HSQQtFre1ah5Gm9a/lJrWM/Ti+8+paZeT+AewC5CsLf/Nkvtj5yzMY1eNsXfzQUw/4Vt7eceTxeefoy/OBn8890bD8ZGXPW5EidpsdGMd6oIY5CryrTNABKpF85O8coCotumqHZ6WFvu4teXvxMGfWBpUvCH84lJJ/5xo1P+NqvmnkHsOxB9Hr61b//Qvn6xg2rY1Y12KSLrNeCzXPk1sEyu8Jyyzq3p3C8xzmecyxzIvKAIrpDETa3k6SplZKLv37bwbcav+729zfejXXLa0iy9I44Um9Orb10rtm6sJ2k4USjjvF6DbUwRGA0jB7SA4lXbaRFgW6aoZ2kaCUJLPPVkLGLTzr1x/f/4JqL8Y93XfaEr/uimbdAJsawpTYNR5j88Y798fjkPJZOzSCqRSCJ0XMFisxhWzPdvbdL7zksTu9MLZoLvby3r50Wf/ejTfJv0os92e0PLrsTz9k4hb+5/HLcf+N/xWFnvbux2m1trsf2NM2LsJtm2NvuIA4CREGA0OhS8+MHhJl1yIoCaVEgyQs4drLfRr3b7IqpK699uzKy49fKEra/4Bis6J0S757ffMot8w9hy80Jjloyj5UTCo3Az9OavRB3zcWTe7OV+Rz99OGTm5/G9fecflDv82m72MZ3fRhmh41QH99gtDmvuXPT2+PWA8efUJsjdhkIpZBTKRil+ipYgPzyCjMse15JK4KoAHe3RmVftGb7+PKjrtBQ10V561cJ1bN7vvuRRa995onvA596CjhPX1xbsuzKvDc/1tqzDUm3DS4ScNHzhaAKEI/OYHpi3W2jKb2h0Hj4h99851N6f9++5E0HD9DRz3srbPNhFR/xwmUqHnmeVsFLlQmeq0y0ord3u9n3wE04It6Hw9R+cAkAs3gN4uL6DUoRAq0RBRogg/s6DTxipzC26gREjUknwjvB8hNj5WrDfLObGHvMEfMv/+GPcfIrP4bpl74dC7dce2k0ufyvR8fGUA8JeZag0+0iTXqweVZqsBlUZEWjm78jM+a/HWd24Yv//SO/8b1eedFrAUD/Rhd72fuvxAg5c/9CMoNcNhI95xxSwUuUNkeTDmNlIihtMLp8I/JkAQ/ObYYLFFYEC4i48AQZDyS9KFVqgfbK15aL8GDSwF5MY2zlkYhHZwCIJlGrhOSNVvGrLdMW1134rlbqO89+51c2H37ys9v0slk0b5ERAWAdw7KG6BooCqAlAEsbnHXBRQqyRSDKHXXryUdh9Q+fmjo/yy0A8BNa0D985x344JeeiRVLWoFVIycRBa8hE55NyhxBSo8TaSJtoLTnlCv5nMsTtHZuRvuxe1HPd+GwoIUJ6sBIAaLBZo8Vja7E2F3UsJfHQKMrMDKzFjoaqSjFcr+MBwWeR3cPKf1zUsH3lKEfBsHYO+Opw95dqzcQBxqFY/SSDEXWhU07cEUCthnIFmgU9h/DVnZhEZv8hqsvefqE2Ylv+gI++tUOLZtSGzmc/SOtzGtIm8OUDkjpENoYL0iohOAAWPyklOIGJteejMb0GnTmt2Fb81HsSOehbRuaM1+PCCGjGNaMQE/MYGRiOcLamC/7h/slrloB57lucSTCs+L4hUrkPKZwhxhHKJVtB/QYiwtKL1KfiTWHSlz+tCnXU974OXC3aUamJl8Jbf4SpI9VJiBlIpgwRhgECIwarFcShhZSNBwTHClEozMIG5NwyzeiSDuwWQeuSMFsoUTQ0AbaRFA6KGMTl5XjQB9DxGXlrQahkr1lMVtNVtZKUPcKfqLFwbSv01v001i0MtXS3kEDdNzbLsej+QO0YuLoC5QKPkmkl2oTQAc1BFGMOAoQlpXxItmhCBwLFAOKAXICB4BFoIIIoTYIaiMQ58BcQJyDiIOwdyGCAKKqDgrUF3EySARCzrOw1YuyGzSeIiAoLyStVmKr/ZAD8w8hckYbPkjVuQGAE9/8JYzEAerq2DNFmY8oZZaSCaHDOqK4jjjUCIMSnIoY66NE0MqDZJ0n8aunrlafQBpQgIKX3YFR6g/VAe4w6LipcrcSGVWC7sFxHtxSIdvXLfalNk8EAtWcUlEF0KWvOnPRbz921Y1PDpChCaQ9mdBxfrFWZrUyIZSJEMV11GPjLaesgvurJjQg6KkchhEJyDEAVZ5nwCAwFWU/RlAgiPIWRMIYUFZSismk3z+h6r6FIaWZeEspz2Hn16hYoJUsDkP9f2ngYlTKTA7Ggj545F/jJqOQxfZcQniOMiF0ECOKItTjAJFR0NpfGOSAD3zIzw2VcRXeiqpP0xIBjiBkwSU5JawgqsxSVYE0tMdKwhB2PuZg2CL840pj5OlZB+sERg9PRxiDEYl4NyYEoik42EmaOX9Ll647e18cq8nXEumGDmqIogiN2CAOqxUmDKafQ2Oa6jNS1e6XDHbBvK1wv6t2pZsIl9bGAgGDhtp7ER+DZMhyfLAerjIHIPkLo0XeKTI8waThvzTij1/rUo+brD5P/koiNbkeQs9RJkQQhqjHBvXYIAo0AkMwyh+6PJRCP7VWTboqF+iqc4wmBFoh0ITAKBijoXTgDxV4/leZ8l6DVFlXaePF6V7C39djgwbjJK97VENb0kPXcgDlOhCqg0ikP215yhZ0zPu+BdZ0qhYsV9qDUgs1onIsAxlWpxIYA19Xi/a+SnmdHBgHFLzsobSkiuqUMgb1U3ylHyp3VokHa4nwgEi5vSgVbVICs6gMeoIYU84z3UGjA0BtuvD3QY5PgFJGaY3QKASG+nJ/LtM4lwso1SeiqtUDov4F9lczy0OX5/im1avsA11uIpaVeN+ilOlvHqK/xjl8rwc8ckXAlZa0WCRKT1IHkYGiAAepzDfP+9LVIxl6RxJFMFrDaP/shfPbyFwS4YqqVUvqm7Kg2r5Z/KLDvI8eNnQfr/tCKhY1SN3MJcsIH3dKFyOlIKJ8rTRcNILKmDeIewMh/+PrIAECAaKDFi9oZccItJSU7u9dOMewTpA7340TfNwJjEJoFIw+QDEP9FeZ+mG0iqHDgbXs2hz5c4kBJWWrAgVmeDFE3zKUr5UqGPppviwLFpUcT1L+HBCODjqLJY7HifSk0hqm1EBbFuSWy8OBWRAYjdgv1UIPBcXFoXAwpVAgQA02eQDl4w0RwAIuBQ8iNPT1FASRQZyhoUNKVxOoMrOVsWh4hXroWuTxMYkB2IMlwAyEpgCMaW2gSymK7608SFmWQVwBDmNoFcEaBc3i40xV2lfipwN2vhQRoMrSgDzN4X1WAeRDN/xbhlD19wNwZDiTkSqzneq3Jqi2pTHIYP21h/4H0/c9Lo+DA0gJDoPRda11P76IwLcOtgDnCdjlfqhmAljLZSoXP74pr64CwWcg6q9y+zTc11iV58miOEYYenN9axh8IwxxGY9IgZTpC6xA9OSs35DKbWgTTw7axQi0HKQDrRVMRYtS2aFbC1ckKJIWtM0QhDEKp6H6INHAUqjslcorUwp9md6gViqrbap+T6BqJXMojlTZSlBZjS+TVdl+OGHf3pR0C+gJvOyJoHsaBLOCCg4npY0ueeOKynAs5aCtB5t1UHT3+5lSGcBt/9sQhgCoUnz1DQtD5l496n87A/x5A1XI4nYCqvw+odJqSGmgPFQp/qQDLIiwGK2qcSUMWfBBA0RyDCmltK7WKUuRlzDYFWBXlLMs3/c4FtiyQXQ8lForYIa+cmJx/BzUJ/1ZIi0qfx/f49Ege1VHRdZV4A27WZUlD0Rt6FsvnkYMAtYapREQwfS3+cq6xFnAufJ7OLw5E5ecTXmvxAdZ1Q/SvivnRVNUGXTgi5WepRBUys1n/3w89B65uh6RoRxNgNDjcrYsjmgH+N2T8iC/9vZ/AOuDbpfGqpgYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDAwOjAyOjIwKzAwOjAwvUtGiQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwMDowMjoyMCswMDowMMwW/jUAAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

EmojiManTippingHandMediumSkinTone.displayName = 'EmojiManTippingHandMediumSkinTone'
EmojiManTippingHandMediumSkinTone.defaultProps = {}

export default EmojiManTippingHandMediumSkinTone

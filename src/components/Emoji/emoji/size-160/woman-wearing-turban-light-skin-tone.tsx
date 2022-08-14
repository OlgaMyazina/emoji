import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiWomanWearingTurbanLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-woman-wearing-turban-light-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdByYZf1Q0cgAAAAZiS0dEAP8A/wD/oL2nkwAAHpxJREFUeNrtfAmUHNV57ldVXb1PL9OzaHaNNFqQkISEkG2BjTDeeI6NCRDggAnIGOwEPxOenRC/nOQlsQIBO8H2c2yTgGMnzgEHHgYciEOCkRBIQqDFWtA+mtHsW+9bVXXV+/9bXT09PZKRBozJOS6dOtXTtd373e///uXeloR3wXZg9zEEDQtv5CXF6u5XVk9JirbQgwn0WOOHBvTH77qvtPy6K3DXF259x9smvZMv23zsPxE3U9Ji96KgmlbbdBiLLQU9iuRqMnQrXIIWyOVyvmQioabTaeRyeVPTijlVVVKKy5Uvyeaky+U6GfAHhgopbSiXSg9svOO23ET+KBr9i/97AvTKi8fR6N6OeK476G/wrVVUzwctWOtKpdISwzCaNU336rouabqOQiGPbC4HrViEZYF2EybthlES39F1MOlGS0JRgjSmKPIRj8u1Q/X5twTr63Zds+y3p3YcPYT3XnHeux+gex54FPf9vBvPfWGyPhgKfDjkj14PyXq/bhj1hUJByuYyyGVz1HkDpmmKe2RFoQZJ0DQNmUwGqVQKmWwa2fJ1xB543G4EAgGEQiF4PB7avfS3Px0JhV8P1oX+DZb5YrGkH7hk/cV5SZLefQB98/fuwRe+fS9+9sxTsYZ5rVfILtfNxIT19KoAs2NyYkJ03iKKyLIsQFHoyCARcAKURCJJ5pUFd9Dr88Hv9yNAOwMiyZK4zzKtyjsFcHQuGKwzg8HgqM/r3ezxqI/kZWmzVDK196xe8y4AaFU7Xvne4xidmPA1hSJXuDyuz1PD1xMQfjaRVCqJsbFxwY4gMcBNHWKQimQ66XRGnCfNIcBkcZ5Zwp1WXArZGgSAbGLMJIbGKpUEUKRNUFUVCgHNQPF9dXV1BFZg3Of1fyPgDX6zYJrpxT1dvz6AvvL338em227Bi//xYrcn7P2SLEk30giHmQG6rmEqniBzyooO+7w+oSskxoItuXwOMjXD5yOWBP3CZLjjJDViNwxdgGrQZ0aGzzEQDIhgIO38HufI59xkhl4vm16g4HF7/lWxpL/xj07s1QJ+a/HF695ZgF5+6T+JCXlFUusvl6D8H71YfA89VXa7VRQLRSSSSTH6PjIV7hQDE08kkCe2eAmwSDQiztl6YdG1lmCWvZsz/hYNpuuczyYf6XzJLInv+G+TgYQNJIPEWhUOhY64vb4/Oa+r+fFTo3FrwaLF7wxA+179BVyW4tNUbWM6n/tjYkkbN8xDDWPTYRG2R1Wx/yZw+MhMCocjpC02MBbsjkplRvBevbGJlkqGYBSDLQDjfwxOmWkCINMUJsi78x2zKRKJoLGhoa/OE741k0r/PNbSiO6zNLk5AzR46BB6J8diPl/wj9Op1B1kLkG38CoeAqGAkm4IxujU0GxZlANlbXGTZhAyFdNwzIYFm8yzAoIDyIydASl/rpghH8vesOScFwCZpE8s3rbXi4QiW4Iez00E36lozoXGC9+cSa65gLPj5Zdx8GBffaAltIm80sbJyUmV2SBLsgBDdJ46nSHd4QZz48i7CMAcM3F0RCl7MamGNdxZinPoflOYnh0XWUK/SmVGMVN0Ggh+Hv8zTVu41bK58fUuIeJu2qmrMi7RTOPPslMT/8tSXclfCYP27t4BKJI/n9b+fCqZ+uLw8Ijq83nJZMKiwdxYW1wN+ElbguRR2MtUA+Ps1eLqmJUTu0zr0PRuVjHH8WjiSCAJHWITK5kCPL6eYi7hHHQSefZ2bGrRaFT3+QP3Nrsav1rUc/qS9yx7+wDaunU7aU5Q1uXU76eTiXuHhoYDrC/19fWi0cwCXdPJzNyCNWz/TqeZKY47djxQNUDOXrtVg1OrM+zhWJ/EZ9ao8mdug/jbLInzjnCzabuoTfWR6GRDffRmTTKedW2rw4rbF711EzsxMYkx0h2PX1sXH018aWhwMMC2Xl8fFY3irUSjaZtToNJZJz6pds1nAsgBpProACyCwzJAUvkZ/EybTQY0CicoIKh4MNV02eCoZlngTWHKHIlLihQjvn3Obwa2ltZpqV/Wb/lsARo/dgL189rcU4n4Z4dHRjo5KmYwjLJIcqNisXoK0oKVDjGDeK9mTjVY1aA5uuMwxXnGDK2qegY/k3dx3qUI/ZMkW/AZWgZEK2rCxDIZe09S3EV6iYnxCaQzmQ1ZSb+0VGfix5u2vXWATENDYnxk0ejoyIen6CWsLcLT0Oix52Izc7s9ldCfgZnZKWUWixxQHJcsRr6q48KzVbl+BwBFqvlOmLAsgJK4Syzopi0gfN7lUikm4iDVK8zfpbjY7OpUSFcZerfac2XrGfutnA04u3ftwoneXmRymYv7+0/dSoGdwkEeb6FwSAi0aPhpotza0a9mi8OUWhOsFuszKWflvGRVhQvTWibLjvBbokrA+Z/DoKn4FOV7cYrXPPOiLZ7NkgeDN5yXwfef2TU3Bh07fgy/+5k70NfXv5Lep3Lka7vvOpH3OJk479XxTa0gO/kUH6vZwtecTeYtV2mPY2ZuduHEVmYJM4OBsT2YjgLFY5zfFSii5/by9dxeZjwzjMyuxUylLj+8PYy2D902d5H2EHUf/eHDkb6BwQ1sOpwbNTY0UlJZVxFiZ+TlquBPAAOpYkaOLrkoJrE1Q5rhrWYRpUq8q1MMO5J2bhRf2LGSIJcduXOawYAEAn6E9bCI4J2wgKsG/FlE9rq19iMf0919hzRtzgAF6kLcqJX10dyFI6OjaGxsFKbFblSVVdEoDvtlValigySEUjc14XW8bq/I4Fkraj1WLSDVoFSbY3VOZpVBYXNTZHqnW9wgwLIky/4sxJpCAAKFxZqEWUT5zCh2/UWtiI50+/LJyXSbO9zYO2eAWFso9OqhFwT571isQYwAs4GDM5Ma41Zc052j9mn0co56Wav8/kAlMDydKUlVZlnNqGpgZpkbP4ffKdueTyqRUJtWhbVWyRLxECfMWQInmUyJkgoHj5yWcAWTdTweTzSTw2mhy+cOUF9/P4KhUEc6nZZjDQ02nasar5S1hzemMJsgj2qQNMpH3qO243y/DcrsGGiGGdUCI0GURqq/lSw7zbBjI1k0g805lyfGpNNIJZMMAlL0OZ1OiSpCyTSEVTJwhw4f0qempjRvMISNH/0AHvnZlnMDaN+eo1i6uEd96rknljJruJjFAAj2MDguV6VDbNt8zi5aBYVwVnIoMbq20Ar9KYNWm06cNtSfoUPmDPOzUxuT8r4MEvE4JqfIS5Gn4jKtKOUyu30eNFGuGImGiUlJUbHkvnDVgQY3RG9tYNhj3UvpiecIUMnM4eTA8QjRtZsDQ0ds+eUuYo5JjeNGOnXjGEXWgWBQOEgGRWIil12wo0+CQ+U6dG3kXKs/s77jYhq9J5/PCwYkEsSOVFqUaDlBVWnAotF6xMiJVNeTWHN48NgDc444QZkBu3+KjdyRULjFlC0YocZzNzHNMmAWsjTckquOxJpNyCldsB2r1C8eFTab5nnzRA3ZBs02JZfLPQ3MaVhSDczpNMq5jzvHFUh+Fx+LRWaxKrxVQ0OMXHer8I5s2k6pxPFa7MEYTHtQXYLZsVgMY2Nj4nnd87vVgl7E396/6dwB0tklFiUfmUwdjxJPv4QoMBRpATUkmUwIANra2oVbdTJ6jqqdaLoWmErBvqpk6ux8mUgyKULnjiVJWNlkcsQYfhbHMU3NzcLUOZ5xAsxqYXeA4d2Jyh3Wsy4ZZfBaW9v4nJkv5JM5YtOcRJoFUJFcS6nx7fxwHhkW6nw+J9wld6q7u100UogzHTn24IY5I+k03snqqyNtEQ4QIEUaiCwX7tMJ6NkppCbHMZWlwWhow7y2TnR1hUS6UBtYSpVQyKq8o7YS4LyT72XGsVcuiryvRCB1pOm7AdWtzg0gzm8Uj9JANq8ytespIWX7Z0Hm2GfRoh5xXSFfEC8X9WUOC6rmu2qTVOd8jtiXjk8iEx+FkUvCLWuIBNxorvPBRXrHYjoeP4n8aBF1/uXEyJCY9RAeVJRopYqAVzOo+r124U2ZoWOO2TLD6LNEbLSce84ZIDYr6lmR2GPyAzm0Z9rrmiHAkcmmGZwgeS0feQrxYs1OJ2xTK2fzXJogUJIEyNToIIrJUailLCJ1XiyIhhCa30L3+0lHVOH+eZvXYWF+LoPRoSEMH3gBo54Ywq0LEW1sJQ/ks6uGJWNGWatSdSwX1Zx2VCfHFZO3RB1cIGadIdV5U4CyuQLcmmsslckUyP49LHYcond3d4vOM5uikbAICGvzLD7Pnc2SC05OjCA5chJSIY7GiA8LO5sQre8UHZXKpuYkEJVEgtrspXRm/qLFaOssYGp8HAMDO7H/YAmmL4bmrsVobJon3sW1KacubZY77wDFpu+0rbrwxoPmVtUC3Z9X5sogLjpZRX2I3GfccrvD7B5bWluEF+NEsLGxQYx6sZzKcGNFMkhtHBkewv49u7D9lZcgFZP49G9/CO9dvwaeQJBAcdkxjTUNy+m3cm2ZRL+5vQMN81qQScaxb+9+PP/Yi4h2nY9lKy9EHZmktzzzyoBwGsH6yQk0pxvsXHgwWfgdXWRJoEEcJ7BGne/OGaBiMc2MGKdO906Mj8/nzjeQSKczaTQ3NQvqsh7xkV/Io3f86GEc3b8LRw7sxeFjxzE8kUSGmHjw5DD+4HYdV/+PDZBdrB/yLDBOU3OdYT6siftPDONrP3wWO177BVqat+CqT34c6y+9HP5wYznrt70hT1oy2zkc4aiDQXOCWW4vTyRQf/rpOMGZ/9xSjZAP137sqsT//fa3d9Jfl3V2dCBD3oyrh/wSNjkxKUh0HR48hSO7XoGrMI5VizrxiUuuhZfyMC6kx9MZvLbnDRw4fAKXXbwGjRRQWtJ0gjmzRG7NAgdlD5XJ5PDPjz+HSLgOf/ql27Fs8Xw0R/wo5gdRSObgaeiGpHrpurSIl5gZHDPR4ArtdPSHB5oDX2L865u++VDxy3fcPPei/Ve/eh88quvy+lj0iZJlhtnd1lO0ynYcDNZRI3SM9R6EMXoE3a31WL7yfIRijaKhIr8oF7ik8ly8SEwVl33Oycqt2aZVC5CdnZcwmSBvGqmDlycFylM8OrFjYmQU/UOTKPpaEWzqFN+Pjo5ilAJCMc1N0f7Y2KjQyIULFmDxkiVFAukG6seT7PrXX3zx3JLV1sZO0hllv2FlD5tGaR0/LE55D4f04yODSJ3ci+6ohOUfuAhhilBlkWVTAEjmoJv2OKgc4XJk7ZFh1aJh2ZXBmZYmnQYoSySkzbGIANuiOEaATTvnVS2dnYgSs0/1DeDEoVOQIl0Ihxvg9rhx8OBBAQ6nGZqhixSEJKGfQo+9PNDve9/75l4wKw31Y1TvG29ZctF2r+JdNzQ0TDrUiOO/2IFQcRTrVy1C18KecrwhcnXsP9qHF7fvRe+APWIdrY249OK1OH9pj0hWK/WcGWS2Zn206ecwSKpoTJxipH0Hj+FEP4UMFFa0NjfhgvMXob2lCYuWLEIkNIg9e3fTeYqdQs0247tMjJOpdXZQ4Dm/yyJwnvYHw/2ZdOqtzYv982M/hWyM09WeK/pO9j1KjjI0cPQALowZ+OhHLkWspQ0Slzt5SnpsEt//f8/jAAnpsvMvQFdnB7lfHYNDgzh85AjWr1mCjTd+SpRB7DU+MxmCWZVC5+/pLH7ztt147Keb4Q2GMa+Z3Dx5OPZQg/0nsKSrCdd+fAPammNIU2a/d9de7OpLISFxkKmivb2NEup6yuyjL9LAXc8ebMOGDdMTo3v3zhixs6pJ33Tdb+HI0V4cOrR/G+TSK28c2I+Bvdvx/nUXIBJrEM9is9t35CT+YNP3oKv1+PO/3IT3rl6Mo3u34Pl/ewpmbgI3XX8lxtLADx97puxqrV8+XtXBm9AtGc+98AoefW4HLr3sEqzp8WDk2Ha8sedltDcF8fk7vwjD24w/vPchbNt1EAES4TVrVuGyZU3ocmeo6UVRvOeAVHW7X50/f/7onmlAxMbVgampKdYsSeSSZzvtc8N1H6W7JwuRsC+1b+e2K8KK5f3kRy6By0cvI49wcnAM9zzwCD7woY/jrrvvxk8e/QfExw9g1QU9ePrpZ7Fl6+s4eeQXuOV3r8MYMVrPxzG/vbVS9pgFUg1WbL579u3HC6/14pqrPoRXf/ZDiqmWERt8+KcfPYnNL70Es5DC/7z7HhIOP77xnYexsL0ZnWRydXUBNPskZMdPYSilo5FYV8yln5K9vldeeOTv8Orh49NLB++5R6xoC4fDMsd0Zz0vdsfnv4Lbr/oAPvORtZnrLr8Ia5bOJy2w1xTyzOZDjz2LFWvX4wt33Y1D+17FIw8/LEoebrU8t0VhwOhAP7b+5CF88pNXoG84LSoBbzqbUc6dOFHevuswPn3rRuzb9hy2bNuLAGX27AxKJiXKRQs7/+tJvP7zJ3DDjTfhyqtvwNf+4XGMTsbF/VyBWNgcRvbELmB0f2pgz/O70r3b0L/5ZzOrFxQzcdhCsZLFHvesp57z+5/m+QKQYaz56PvXRuLdTeWCmIWhkTFihY6/+MqdYmp39+uvYmQsib/73k/IFcuYSGgkJxIaQ+TdUscg6XEsXbUep4Z6sXxp+LSVxNrpnhMn+7Bo5fsoMAzh5e2voXekgDu/eB8FrAayeTtGaomYmDixHYb+Gdx8yy0kCQex71AvNly4RMzjt81rxhdv+RQCsQZV07v9nOturhmfFStW4I033uB3WsRa6awBMjka1bMyPL4eqTxBaFn2sjiUNNzwO9dQCtJu5zoU2vPLk1kDqaxVXqRpoSFGItnmFrO0i5auxcDBSZEGSJL8JumOgaKlYNVFF1PnMygWNFGL7hvKl0sctkUu6GLTsOs+AX8Qv3P1VTAHX7eriiJphQhcFUn2uiV083spa5m1NTc3C7cgpr7PFiCDAjGKvNySVuzgBZTOCi9OCFtoZObVLxS5FcGBlRespujWJ6ZYUjrR37DQFJLxwXV1aOvuRF2sU6xJ7FywhDg9Xpm+OZNj5Xd0LVxGnY9CMj04f9kSHCUXb6luTGa5Jm1h9SIvVq+IoH3JGhJzt6gxrVhMHjQwYTsEq2oqSNMkQ9PC0hmcOJuZ4zvPGiBdLzIgimKZfiGs1nRBit2sbCSAwhRMbwwr127Ajdddi76d/wJ/RIVBRL1odQQdzUFEFt9I33VwtylpDUFKTpwh+phON1igY00d4JKErNbhyus/i4k3XkNnLI646abow4t1qxvR1LIC7cs/ZVcGiikEzCQBFEIhnZwBvilKJKbITvv6+ma8uaury2HQuS1/4ck3o6QbXklKoVynEkzinbWIzAyJE0C4BLevERu//FXs/vcu5E79FAFfHv5oAyILr0XH6pvsJNUk0yqmaqLpqgTWMstf2oOBwiTgDtFfbpy39sP43J89iN6t36IIfRyKP4aGnsvQvvJmBCKtMPPjkNLUcS1jR+3lwYRUHlTTNMi8hpylxHNagrdz504R1mfSGenw4SMWlxsCsQ6tODZywvEuPBImr1t2VmeUKCNOHIdViCMYaMIlV9+F1NT1KGQT8IdiCERb7THUs6T6o5CIcRV0JGnmLvApVQCTNAqguNO+JuJ9AIvecyU6lq2n549AcZP21LeQcVM7Ekch0/slnvuCVK792KvP7BngEh9zsuo+znFqR0fH3ADaunWrKAs0NDRIlNBZw3nyQgN9DNR+6oAhUcLFS19KukZA6dQXlZ6mipGX8mQ2RWqky4eI6gNi5KlAtE720nk6GnlW/ek0osKgKgmSalIOvrRIZsxASW5YpDNe1QNffZhXbsFKn+DgSgBTHX3z4JmGLo6SYi+NoeCmn57XK5+hDn1WAHFhngGKRCIWR5QnqU8tIX6gtYfaOqGo7nlaLivEm1eWKSp5LtVOHm37MwVTLD1X7qxUEwjKNcA49eXa3ZqZwBKrJJOeWSIWak4xwKqeZbT/tuyiPDOcRFmwXXF5yw+SD/liTeMldjxzBejmT396VhVrfPPDXLE7ZBnWfymqeiOPCk8LqfQiF0XTohFyeRraqu50NTBOB6yqDlVn8/bkIEzrjDW0yjOt0+RvKK/0KJkCHIMriASQYBDLgmEUFLfy9NThfcWW37r77V0GLCtBaLmJnCy7/opijYKmFS+SC67l1ACFG8O7TGbGMcoMDyr9khzLAcqSnKiQX1QuIxhnLsVWg+Nk+9Z0eYQHi4ExCnnBcE3XCsVUcq/X53vC7/Y86QnXn9WapDktJH9h0y3kUtvVXGpqfqQ+9qNAfewifzQGlWclKL6RxUJxedpkJGkmMFLVq9mrkEaIlMJDekUZtwCIvbCWo3OsHcpskKsLbQ4jy+CwEDMwRZ5nm5qAJlZ3JJ8ZHB2/rdWvTJRkxbzo7r8/O1K82QUvURJIu1Q+iu8++L//kcVQb+vqOEre4R9Jh/SSoYn5byGIpjmr0TNLqVWdot3I56AlpmDRERp5wiIdi6Rv6RT0dILnamYWz2bVkqwZcRO3gfVFz+WEielE9XxR//ElK3rG/mnnyFmDc1YAcWG7ene25bfdh2QizUvdnqRIdSfTmanMno1HfVZNuUYjajuXHhtBovcocsOnkB8ZQGawH+nhQWG2KM9+wLRmY1JTlhXrlXiddD4PLZ8VZlYyjJdof/bI4CT+lpLqc9neVINWr159xjkZjmyb27uGk/H4dwxNv8Bl6H7T4AlClyi3So6WWFWpRK0+cS2JV59RjjTVdwJGnx1muSmjDrW0QyWTrXg8CTPr19UMdebCeHE5sUfL2+wpGXqCwPlmYyQ0tXTjvecsJzLewrb8lk1itaiu6U+VTOOnTrzBmmKPvGWbhzP6FmZ1SPSbEl9fpB4NC3oQbe9EpK0D0c5u+OsbIPPS4ornQ829Mz+z9rBpsf7oBJD4rGs/IhP7jzNN6/xKfw7lbP1Pf52pfaHb5/9XTyDY7aLcSOFqnNdfWfk6LdioCgPKyyPKaUtJdEqzPT15Q8XrE0drhrnWTAmVAeJEuUSM0bIZ5EnPCskEaXx2DyWl17hcyvElG/96Tn2T3w6AChQw7n9tyy4asfuI3lnhYtntiwTXrARudl7FXsuwvRRfV8wjF59EYqAPU/29JKwZ+q6AzPAAsiOkR4lJYgMFnBQhi2l0SDNZVAbHEgEhC3O2zB7KN6zSplDIf1w/w6zpO8Yg3o7/+K/Yi/kC0ej9xKTfc3l9skKhvItcN7t9qezuuZY0eGg/9m19BT6epqYUpJhJ08jn4FUkMYWsqC5kkikYnMnzTzT9PijBMDyxBnSetwyR5pZKwV/kWgwOz5hm08gTc4g9BQLpL1KZ7AMet9tY9fm/mXO/XHO98cEHHxRzY/Pnz5ei0ah1gPp/odKf1/OFTSTObbRfxSNuyvYy4ErwR4yKtrRCMzW8vuV1sYyPx1crWVDpc8g3SUcZU9kCecgSPC77pwZchGuc14Dmzs5KemGVcy1mHLOsSAAVMxlDLxa+y8JcF/Ab5912/1saeGWuN15//fXO1K1kr6A3ENX6EQhFMxS0viZL8jICZoG9BIt/jTtdnlJJW7qXnoc6vwp3Po2Ix4U6n0eYUKaoI6sZBJRHTCk3BL0IeBR09HTj0quvQXN3jxBjJ1pmQeY4ilmYTyVK2VTyB8VC/k8oZU6tuOPrb9ky3vbfze/7wR9hXkcPxXqZJeS6v0VgfJhNTIiu6hbFezGFI9YSmkj0n8QkmVxhfFSIrPgpJbt5j1vM95sUAgSINfOWrYK3LiISUIifXBriep0A0gicQipp5DKpH2RS6T9yuVyTa37/G29Lf35l//PCyPPfIW0odbvc7vvJo11Fu8JT0uzdnKlpR5O43l1IxpGbHEeJol8WdNIweCJRuEMRSmEC0ws+yxk6xzhGsWB7rVQyV8xmvlvI5f6SQE1MjA7jg3/6L+9ugHgbeO5b0IvFRo/X94cU+H1WcXvCMv+2iwES6xSVaaBOs5hcLJWrWi5slQt0Jv94ToCT5XLqQCGbvT+bzjxMzMmtufMbb2sffuX/ucmJJ/6aI1tPqKHpU8Sme8jEVhFAkuSsbnXZQE3XgqwZCxes8i+Y7cqlIdIZw3bnxUIm80Ihm7k3E5942RuoM1ff+a03bc/u3btFzZknBfk3J792gASTnv8unt2xD1euv2CBJEufIw93I3mmVmfpnSTbP0uwmVSdl5pizbVgTUm3yxfFok5OYA95y4e0XOYJt8cTX3LrfWfdFgJIIoCsdxVAzjb6wkMoaoZLVV0rJQvXET0+RjAsIib5bBOTpwte5cTTLpkaJWLNlGHoOykyfoLyrGdX3P71kX//8ifwsQeeOac2vCsZVLv1Pv0gSpYleRS5hVT3AgLivYQJT6zNB8+LmCalZwqH4YMl3egjs9pX0rUdpDVHKYjMLr/tgXesrb8WgKq3r12zAld84hM4fuyo2tnZFaLI28MTd5FQmKhjpZOTozkP5XTnzSET/832m+0322+2/+7b/wf2B7D4D9LcegAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwNzozODoxOCswMDowMPOY/50AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDc6Mzg6MTgrMDA6MDCCxUchAAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

EmojiWomanWearingTurbanLightSkinTone.displayName =
  'EmojiWomanWearingTurbanLightSkinTone'
EmojiWomanWearingTurbanLightSkinTone.defaultProps = {}

export default EmojiWomanWearingTurbanLightSkinTone

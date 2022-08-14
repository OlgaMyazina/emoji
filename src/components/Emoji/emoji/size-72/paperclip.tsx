import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiPaperclip = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-paperclip"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdAiQRRXIcKQAAAAZiS0dEAP8A/wD/oL2nkwAAIb9JREFUeNrdfHdUW1e2/onjeJ7Tk8lMJm3ykinJZDItcYrjXgEbjGkGRDNNgJCEJFQRvQmQRBFVCFVQQwWE6N10jImNcS/YYMA2bklcYjuB/a7kvPfWrN/85mUcSJm91uX+wdU5R9/dZ+/v2/teIfQtrNakRg016mX5YvlzcQLpH5h8+bbo9HLv0MRSv+h0iTdToNjGFireFkk1z06MdT9yfLQb/dQNHhwr/r8XSBlOiFJQh1L5oicwQDZQ+ep0itDQRhPVnaIXN12jl7TcohU33yYX1N8iCMzX8Fm6U+EZla0EXmUiO0/9sVxvWVmoNKN/SysolaIycflytkCxkVNkMWSo+68VNp4A6b4LoOydBkXXBMjbT4Gs7RRIO86CuP0c5DWchiTNKJCL2hbwOeZLhBy9IqHYsNpcY3xUUmX49wEntUCOcvJLn0wR1zKK6w/OmseugHX8Kqga9wNPKAEKiQWhAWEQ6B0AQT6BEBEcCYzYBMjJk0NF7RBUdE1CVu1JoJTtg0hh3RQtz8gWlGufYworf/rg5JarUYlY+niupjWj4dDUnUNX7kJt3xhkZRdgoOyFHdsdYeOGTXfWrtswt2bt+qk1a9ddWLt23dWN69ffddi8BfzcvSCJmwYKywBUdE9Dkm4ciEWd9ygia2W2pPqN8JL9qFme8BPdVuUKRHb8yyOFuubogVMzN6e+uAdqSxswqHTAee+Z37XL+fgu1125Hp5eHv4BgR/4+OLewY53Pby8P9npsst3m4ND4eatW486bXf4KjIoGGRKA+gGpyHHOgG0isEFsqi+hS+3vPOKRzaaODn20wJnuKsV8VV1qEBp+qB77PTE1btfg76hGwhheAwcz9sBuD3F4aHBb8lk0mXBwYH/z+djGQxUXFr6aGhY2Js7XVw42xwcJwJ9cCCvUEHdgWnIa74ADMUo0Evbugo1TX/ck6RFfQMDPx2AlNpqlJKe+R+mzkHplZtfwsCxSeAwWBDo43E3bC8uLSeb9wSbGft/jiMU5qL+3v5lPr6+q7c77WzF+eDmVfJKaDo4C/mt08BUHgRGWVtndoXx7XRl508DnIHeHlRcaUDlWtPH42cmL166eR9kGjOQwwMhMgRnKMjjP5fIZXzr8UxGA3r+xZdQ0N69rzs6u2pxuMCvtRo9NI9dgvyWGWCpDgK9pLk5V2Z8M7nU+OMH6OCBAwgAkLmlM/XK57dg+PRFKMzjAynM7zKHRlwfEeT9UOP6BwYhIon4ktMud7V/QMi82WSB5vE5yG2etoG0wBa3GsXq2pcE8tr/+Ux8ThmKyyxcllSoeSO5xPBnsbrmiaTiH5gimMw1qEgseb5n/2jP9S+/goa+Q5CfGQfUyCCdqVq/sq7G9NBjb3NwQuH48Fccd3mYgkOjFhqb2qDh8FUQNE4BUzE6zylrkpTI1c8KpdVoYHgY+8R9VGntciswD4/HFDbPYkRVIlTU/No3QYfgs/4fKLUXlaDC8oq/HD5xcmb683tQ29INwmTqV2wKPnTDe28grUr+0GO3NlnRqo/XoDAseG/d6dYSSYiB9u5+qD10DbKs54EhG77PLavPqrHUPp4uECH/0MjnKo3WrpMXv4CSjgtAl40sMMvarCVqyxtEgQHdPLf/+wdIWCpGEqXK4+zk1N1jl25DXUMTBhDlUlp87KrMJKZ9+30XE+Xy0QdrNqHgkNA/ObjuGaLS2LBv6CAYRq9CRu0ExEr6b7ELqmmdVtXy4HDCs9HszO6ahlYYPPc5FLTOALvy0AK7vNXIL1O9RMlWoGMDdd8vQPr6eiSRy6mTMzMLByY/g/oGK+SnUo8KMhNfKy3IXpQ5ulub7GdvXMCabS5ex7nxydA3ehzUw1chxXgaGCUtV1PyKvwB7j4SQuZERcYmfWltbIHWY9ftMYutOjgfL2mRa02W54Wy7zkmfYV5SJaAn3b+wgUYmrgBDY0NUJLN6ZdLSp436ZSLNk8Cm2Y/e/r47XRy853i8XKgb+wsyPvnIM1wDLBgPMVNy3LKTE9+2j+SoSDTE6GppRMsh64Av/ECBtKn9xMlTTkaTdUT+RWa7w+gmwt3UHxiQsbxUydhcOJzsLZ0gLQgtUevVjzbaFncu2XQVWFb9voyF/c9e3d6+F0rFBVDz/gUiPddhlTtQWBllx/hJKZ8SKUz3/CLYHTHspKgpbMPDCNzWMyaBLZi5FZqRQPjYLfxMY3pe9pqkTHRiB3HYQ4MD8H+qVtgat8PyjLBIbk472WtsnzR5+NlpCO9SvKYq6cvw8076LZMqoDO8Rko6rgICfI+iEng97K58b8LiyK/j4E0zo1PhbbeEdAMzUGG5Ryw5UPXMCEdBDfLH6m21iw9QBu3bUMEEsnXYDLePzx7GzTdp0ChkM4oywv+qpKVfOcg/Y8Mj8cjFi3mCSdXL753QNh9ndYALYdtRHIaOGWtQOJkWNgc9kt7I2IccOGxk2lpWdA+cBgU/ZchzXwWOPL+C3y5dSdC+9HYkGlpAfLB+aHA4OD3ednZl45PXwXN4CUo09Tfl0rKQpmYvGhraVySebGshug06vM73HwUASFR87WWBqg/dBmEjZPAEFnmo+mJ0jxB9nPBBFpAQCT9qiAnF9qGT0BFzyVIxgI7R9pzNLvCtNonUbkkN/F/rEwsRolJyS+EhOP7+w8chPojX0BBzSEQSarMdWbdk3WW2iWb29l1NyZJgl7DQKqPIFCgubULzKOXIbsOS/8C3b1oWhwvNyf9KVwoiRYQQb9VUlgCLSNnoKzrEiRWnwSutHsgT278Q46ifukAmp6ast+B3Z57MguKS2AY4x9FbTOQIW+5USxT70gQlC2pB6/f7IBCw8LfcXTzGaRQWdC2bwj0+y9DhvkUUHiKm9FUNoXPS33SP4KWFRzFuC+rkEPjyHkoasdilu4YcCva6ouVhleF8iWKR0fGx9Hm7Y4I5x+0Bhe4d65vdBz0o59BevURSBXXNFfpDL8sUy0d9wgO8kdbXX2x9I9bvcPD71hcXBJ0DhyEykEss1UfBXJq2RVCDN0vlkZ5zjecIgsnMuc1VTqoG5mCfIxIcjXjC0nSVoVYoX5epFgi8SsqKkI6rWblVqed6ixBLgyevQ4FbReBK+u7n1ZmTDh9eN9yfV3jkoHEYdHtZw9vnPNOD/8LGWk86Bw+BrLey5CkOQikxIJJKoPtwOEmvuwXEWslkFlgNFrANDwNwqZpiKs6dD9Z0phtNlU/XmmwLP4CJ89NoFfe+A3y8QvY4rzbfa6pYx9Yxz+HjJqzwBa3Xc6uMLq+FKBC1TVLxz0oMUTUUyN+xMPHP9h1T9D1PGE+tI+cAnH3JUhQDkF0XM44hUZfFRwW8TtfPK2PQosDS30r6IZmIafhAnBVo7dSJVa6VS9+TGeoXvwFJiQmIauldsWmbY6FBFIM7D8+CYqBq5CoPQLsksbDIqX5bzECPWpra14ykFhMOsrlJT+2Y7cX0903+HZ5aTm0HDgHxR2zEFfRDQRmei+dyfwtPprygW847QiLlYAR2x6oGrgIvLpJiFMOX8+SW4PgUsuyrq72xV+gl7cvCsNHvr1hy7bDoqJiGDhzHQoxAhenPACcYktzmdr0WkqxdkmDNpvFRFw243EXTxzfB+NIlYoqaDgwhQnXaWCVNEMkLcHC5bJf3osnOfrhY6eSElKhoXMYFH0XIb32HHAVA1PZFead6AVAJsMir7WnZ9+D9LvbPcBxp8sXFmsjJhhvgADTQizpwDy3uEZWrtQ8l1VaZb8Obp5CkYmlKCFX/jQ3V7U5qVCzTqI2PRGR+vAM3JZRcRg3IxGjf+7s4asMxDhStd4MtSNYvGmcAnp+zTwhNr6Cl570fEA4KcAvnHYtKyMb6vcdhIp9lyAVI5Lx8t4jeXLzx+GFvZi8US4uSKmpaSg/L38l5kUiX5z/fHf/fqg5dB14GM1nlu+7l1hi5rW3taxUGRuQxmhBao32KW1TfxFfN/A5VWS9yhIZi4QV2pcyyqq/E0hbtjugKALhNSc3n4bwCDLUWprAMDwDOdZzQONr70VRWJmZKZynAiMotMCI2Fv5/Dyw9h21c6Rk4ymIl3b1ixSGP8QIq1Ff5yInGM893ohMobz6yboNLUQCEQY+PQ7akWuQZjoNjLL2m4lF1THj/XXL03JEiJnIW926b+Dq2MwdbPFngVHePc8WmdSllcYX+ZLvANKXc+jPq9aigKDgdzBhO0gmx0J9UyfG9GeBV3MaYjJkt6Ji6JS0ZM7TvqHk7KAI2v3SwlKo7T9p13WJ1cchSd5hrVAbXs2rXGQiWV5ejv7zt29h3CjgfQyk8YQ4LgyMn8OC9hVIrj4GtKKmufj8St/1ITmIyEz+Cz1FMNU9OAItJ25CtvU8sCU985inlWvM1mfLtQ+f+WD+lv3s6x/4yQ533DEWIw4a2wdAZYs3hmNASi65SqYx/dJSEn+OEUl5aFTsglwiB1P/WYymzEKi7sh8ckWzTK03PF+oWGQul5ScZD/v9vB0Wrdh0wVhDh/6j05Dec9lSNCMAavAcD5FULS9q9H4WBCRk8uIT1/oHjwApoPXIKsOU92S7nvJJcZMTXX141LtwwvK7tYG+5bz9Q9ycfb0v5CSmApN+0ZB2nMRkjWHIDo+7zyJErs9MirqFd8wijUymg5VKh3o+89BXvOMba330qRNWVUK8eMiySK3vxOTkmyLe8Rxh3Pwpi3brkvKyqH76EUs7V6ENO2nkJSvGGMnpr7HiEt8zT+K2clNTIeuwYOg2X8FMu0cqv0mRjQphw/0LG/pePg+mF6jQnBnetluL1+MIwVe5/NyoKH3MMaRMLmhHAYCJ/swncF8H6Mnb+HCqf0kMgN0+lrQ9E1hCWYa4qtGb2VIrfSTA5bHzBbr4oKUlZWNLLW1K7Y6OHG2Ozje0ap10Hbksp3mJyv7gJ4i7OYmJf8mgsxY5RdBP2orTXQNHwXlwBykYcGSXdpyNb1U7w9nzI+YvkOHhMNmIVlJ7mO7vfyY7j57bxflFYK1//g3HGkfRNJTejgczm+DQiM/wkA6SqexwVDTDKreaciun4KEyv1Xs6WWQDiYtazZusiSJDg0BNFiaU+s37wl13XX7q9spYmGsTl7+yautAmIrBQzk8X8VQiBtgOTAhcEWEbpOHASKnrnIEV/DCOaDZNCqckRIX/U2tby0OsgRBNQIpf1hLOHj8DbP/R+RVkF1PSfBpGdIzVBFC3BnJqS8GJoJHmHb2jMhThWPBjru0HeMwOZdecxbxuYzFXUOqHNDejWxCLGJFsM8AsIRBRa7M/Xrt9Y6ePts9Dc2g01n85BNhZvGHmG+ejY+PLCAsFzYWTWXn887XpxUSm0jU5AWbdNTx3GiKb1sECi+3A3owJ1tDc99FrCwvGIG8f++U53X5V/UMRCpUINxgEs3jRdgNhc49eRMczCnLS4JwNCCYF+YeRrKfHJYGoewDjSLEYkJyBR0XtUWKH/yJulwL7X+OKCtOrDjxA+Mur1tRs2NocGh0BH737Qj8xh8eY00HIq70ZRmGl8XupTARE05t4o+m25VAlNo1MPyqlVnwK3xNJTqKj+fVJpDaqreXiW67DD+UEdyR3XGBpOBL2+BnT9k8DHOFJMhvxOBCEmVlyQ8TO/4Ai6f3DU7ezUTDC2HQBx10VIxahKsqKrr1xd83ZqiRH7XscXF6RlK36G/AMC//TxmnX7KSQydA8dtpcmbJ0JSnr5F0Qqi8jPzng6MIrBDyXQ72s11WAdnXlQmlAMQ3yRySLVmF5OLnh4hispK0Z//WgdCgoJ/aOjm+8wiUSDmrpWqOqbBp7pBBC4eRcpFMqOrLTElQHBeH7g3vD7+dlCMHQehhLsZqUYTkCqrK1GotK8tOjpv8Fa/41u81m7Zt2GE/EcDnQfOAGyvkv2tEtKLLiC3UAfNifuBf+IWGUkiblgNlvBPDL7oDQh659PLjFJqvSG50Qy3cMLWwYNvfzOh8jbL2D9Dg//03HsBKjvGAJZzywkq4YgghI/mBzPep1MJDyL8w9UBAeFLJQWlIC+6zgUtmMgVR+dz5A1lVRVyp+qqNQtLkijIyN2b9rhsst17foNM9mZPOj89OyDtKsaBiKXf44Sy9zK4MS/hqnuxhgqB6wN7aAfvgg59ZPAqei+l1pqyGhsrFuprH74+k18HOsBV/PC7XHxCroizMmFxoHjIO6cBWauYT6KQMzE1rkshkx81dvbpz4saC/IJErQ7jsD+S2zkKI99KVAYWUdbKta3rjYHRK9Xm8DadkOF9ewjZu23CgRFUHbwUkoap8FrrTHVpo4FMtgvRdJor2Nqe5BW2misb0P1IOX7LqOU95xM6VIGzPeV7dcbXj4p2ET4jnIIBctx9Q/28Mv/K5GXQ21+6cg33oKCIzUSUYM4f1dOx1RaEjwHz3d3YaiQkJArTFDVc95zKNnIE09PJcvN7qhHUoEV48sciUwLg7JpNIVG7dus3MkpUwJjZ9egIJv2jcERnI3LTb2zXBS7GqM5R63lSaaukdAgW3HdPNpiCtruZJTYfCzkdGhkYd/eiMiMhIlJXKfcXTDaQgxLGjvGwXNwEVIKq6BqMhIITb+o7brAgP81rvscDpNjYoCY10HKPZNAx/zaF5l91iFSvtunmQJOrYkcgzi8wVPbsA4kouzy1fVehNYDszYSxMMkQWiqHHmLF7Gr/BkprNfOG3aVppo7B2zt29SDccxHtVwPkesdUBPeqPbd6489Dq2Oe1CIWH4v+70CjpVVqGAtkPTUFY/DiQa+1haAuPN1ESOPSx4eXrscdq+bS6Zw4XajlGQdM9CTu1JyFM1qBpq1E9pdLrFB8lrjw8ikki/WLdxk3qPp9eCpa4ZjPtn7aWJWKEe4yasMl56yrOBEdRgv3DqjXxBPtT3H8M4EhbYteNY+q87LKzQrsJkCfYlLj3UGqqrq+0AuHj6caKonPmeA0ehemASkrIK71JJkThnx21ImJePrI1Ny52dndlODg53ywpLoKbvFJbZsARi2H9LrNQFvuaejob6uhcfpJ3OLjaQ/nP12vUtwYFB0Ni6D7RDF+2lCSpPcZdAYaYWF+Q8uZdAZwbhqbfFxWVQN3DaruvsHKm4prdQpv29Lf0/bCMwgkBEofiIt7yCIk5ZW7ug+dAsFCuMEBMdUWCLl+2tTQgTtYjOoD+zZetWpc8eb6jFbqZu4AIUtZyHInXTfp1a8esqtXrxAaLRYu1FLm9f3LufrFs/TIqMguauYVD1PyhNkFPLvoggUolZGalP+eGpwpBI2n0FRiRrBiegoHUW4pX7IbHEVFMkrXpZIK56KJDiExKQtFi4wisgrFJjskD/yUugrm0FFo3YIikteEoqLrKPu93REQWHhLy9buPmQxwWG9qHj2FyZBZKLAe+kqrUdIQYqK52CVpdOTk59rO7l9e61WvWneDQGdDSewjjJhjv0I4BMSF/jkRleGfweD/3w9NUeELsgi3rGLCtYHsOiCvvn08qNkgUVbpny5T/erGtzvKAMuD2hnF0GEAHz18FU2MnJHMoI2w6+ZcpCUz7/1Uq1QOvd3ENcHByuanVGaFuZBoq2iegQmv5VKcq/7Veu0RvBiQnJ/93Hclt3fqNsxlJKdA0cBSj+bOQqNoPBHbWBIEUsxlPIL+Cw9MabaWJakMdaPsvAL9hyqbM76WUVPNKxGUr80ok/9LcnR0daKuzK4okkqJbO7rmxy/cgJqGFkjlkA/RYgi/4rIo/9sc4HAQj5fx1ObtTgYimQr7Rk/YmbjC0ndfpajAZ2ZlIYtJtzQgZWby0LW5y8uwLRe+YeOmz/L5QqgfOAnFdo7UC1GMtEPkGMpfCRTG21j6H6JRWWCsbYHKvhl7sQ3jSHfSS6tZtTWGFfKqb79IvVZj30K83LyMY6dO2z1IX62DOEr4YAKX9UJGCvfvrn/vg4+Rr1+Ag4Pz7uuGGivUfzoDVe1HoKqqstGikz3d3GBBS2aZPB5SyOUrtjo4xm3buv1OeUkZWAbP2EsTbIwjRVDju+n02DcjSPTVuHDqcTYj7gE36Z3BxO8ZiBO3fZZeqiftH2p7TGv+dmVbUXEx5sFJz6iMtc22R5p7jpwHcaEAYvCBRmu9daVO/ff6T6lUonJx6ZObHZ1rE5LToe/IJOh6z4LeVHNZLS38WFzAW9IWF8aRyIjBYDyJBcN8553OX9l6XKbBc5DbdAGYojqIpHCM8VzWi2HE2B0+IeQpLpML+roukO6bgXTTSQyk1mvpZQai2VT9swr1Pw+a4rIyxBJVobR8seu+0aOfXf/yazA2dUMSnbhAigi2B5+Rkb9/SrasrBT7+xhydffai9sbfq/3wGGoGZ4Cc2P7gloqopUL4pYWIJu77w0OQQwm64W16zdqPN3cF/Q6M+ixoCyoPw80ge5rPIleyktPeAYXEu2NCyFd4tI5oDa1QUU3JgOMJzBva/ksvkifUCTXPMsQqlBzwz+uSrJyKhAnPe+tUlPHwMXPbsOhc3MgyBEAMTxoOo5Jez8iJOAffi6WyUJR0cTfO7vvOWNpaoXWsRmo6xgEnaxQj3ncSrTUZgNp89ZtyAeHex1L/82BOD8w1TSBuu8CZNWesbVv7uGjKanlxYLHQwi0vT5BhLlYIhUqlDVQ0TWFSZKTwBK33WUVGHSJosoPJKqq5XkV/8tT4lJ5KCM9aTklJX91crmlc/DMJZj54h6IFXqgEaOAQooq6elsXdFY/4/jCZZRUZEof+WO3Z5mmaoKBjFqYO0eBVNV6WhJXvpr6PswG0hv/u4t5Ocf8Ccs/e+PCg2D2vouUPZMQ4bxOEQnFN4kkKik1nrDilACNcDLHz+DDwoDoaAUpC0nML00AXGyXmAW1kyx8rXFcflV7ski1QfYsYqRI3OjZiuKuKUNU8YD03D8hu01rnagEslApZLHE7msd4lRYf9ka4rt69vl7sXLLyqFMczz6jFqYtGKp8uEKR+i78s+uz73303J9ZgnnYolkaG2pd8eb1IxjhTJyr4cTSR7m9WFjwaFE1z2BISP+XriFpgxTCiuaoXilgnINB2xdUyBXVJ3m11ovswuqrkcL266na0fAc3wHDQdvway6gagUxmAacSLHDbDwzanxWz4p9Rg+ePP2OJQhCBf9PWJ6at2gKy68s9FvLhd6Pu0O3fuPKgjObu4rVm7bjaJHQc17QegHONICYohCKcmT2Dqf6vtWnwk4V2/veFqT0/fW/4ePsCiJ0G+rAFKrONQ2HgKRNhR0nIWpNg2rOyeAFlND2TzC4EYTYFQPOFsDCUGZ1CWP5qb888zUXp6OnJycUXOrm7eoqLiu2cv3cAAOgh16uLbKQw8Dn3flp6Wim7duLLMcYdz2MaNm25kp6aDuWsMSjHByBZ3QnA0a4zNYa3a6rgTpaYkPh0Sjvf39Q/qcdvt8aXnLncI8QsBKpkDnLgsiMMO2/uyMdE0wIcTwD8IfysgJKI2ikBYo5UULEvisv7P9Wi1WuSy2w35+Pn5KlSqe+eufAFWTCIZZcLb8ZRQX/RDGJfLRdU63YqNm7dwt27ZekfEzwND1xEobJuB2AIrhBMZ+7Jzsn9PxzKMzeMwvvTL0HC8j19AkMpzj++4627Pqy67PO647PK6s8vd76q7b/D4noAwRQg+yj0zLfnZ0LDQb63lrNY69MpvfodIFGpMU0vLwsSVm1DbjMVHUcrnaVyKC/qhjEKlIqFQ8NTGLVsLdjg6fiUuLAN99wn7s9IUfjVEkBm1eQUFrySnZyJJqQhR6Uwk4Gf9LJpIfC08ivBxeBTROTSK5BwWRfoY41uvSYpzV3gHRCK42PsvrYPPz0HinIxlyRmZRePHjsGxmRtgMJlAlE6fTI6j/Q39kLZjpzOKjIz8xSfrN6jdXFwXpOUK0HSftj8rTeZVzZMZ8Qq5qvKFXFHxkq1BIpXaWP8LZXJF39z1G9B/bAqU5UWQzib05wv5L6If2jZv24YRtWiMI21o8vHwBIVcA1XdZ+1vS8fwVF9ROKmFPEHeM8k8/qLP3dHSiMicBJSazd/e1NXz2ed3v4baziHIS+cAm4IvvHnvQan2B7VKTA89+4sXben/j6vXrusP9PEFBUbylN3nHhDJ7Kr7jFRhXnF5+dNZonIEn5IWbW5NlRIVCrP/o0BaKTt7YRbOXb0F4goFxMWE3Y5nkN1wu7ejH4W1t7c+qOMEBHyEEcmxEJw/yBTVoOg+b+/aUoXV9xgZxflSdfVzBTL9IpHXCeRHyUApwuKdNZ0D127e+xqaBw9DEisWYiIC+wqE2b8sEeWiH40ZjQ8KZHt8fDavXrP2ZLCvH0gqtCDvOmcHKbag7j5LoJTnV6hff9Wdh6bH2r4Ts2dn5qO4dP5v8ypr+ycvX4ezczdBkFcMhL2+d+nkiEjbdefPnUU/KquqqrQv3nGn83bMlU4HeHlDUaEUZO1nIMtyFmKLW+fpQm1nWpF6XU+z4VH1Q3Qg1KVZKCpDhhJ5eb9OLtaa+sbPwjUs9lSam4EQHAj4vb4twpyMX/Cz0tCP0mrNpgfvjri5b8W22xGPnS6QnS4EWdM4lt3OA1PSC5Rc4yQrV80qUpl/hZAMHWoSfsuYo0ATg6ZH4nNK32fnVjWaB47OX7a96Y0x55ioaAj0cZ9m08lb3nvnddTc2IB+tMbLyvpmu/l+9NEna/Y5bNqywCbToby6C4rapiBBfRCooob7FIG+j5lbFcqX6F9pqDMtU+n+seYqVyhRa71uWUah/PVYniSWIzKcUvecgGOffQWNg+PAimUDztP1C0J4EHHu8tVlgqwM9KM3qeRBPdrPP+A3mLhVrPlkzZ0gTx/gC8tB0ngU+NazwJb1QUye5S45R/splV8pYAiUbon5yr/wyrSvsrLFv+CVql/lCqV/xkDZTeFJBbScqrFUWdt97eAMdE3eAV3rIHCYcRg4brfDg/2TivKFK+O/ebf2J2ORUQTEZLGe2bLdgfjBR6tPb12/aYEYSoD8MgOUNR4HgfU0xKuGgFbUuEAWGG4Ts9QzRJ5qnJAuHyFmKsZJWZUzsbnG20nSDihqPAn60RtgHDoPJfJqoJHIgPNyuxKI82LmZGU+ER2FRz9Jy8/LQ23Njcs89nj/DSOU0lUffHRt+4bNEBUcCVm5cigxDUNxE8bAraeAZzwMadoD2DECvOqDkGc9AeKOKfsvZ6laj2DAmCCRmwQhAX7z3h6uo/iQQA+VQvZYQZ4A/aTNFrgdnJwQg8lciWU5xw9Xr9G+v+rDubUfrQF3J1cg4mMgOSUf+MV6KFA0gaiqHUTKFsgtNwNPIIF4biqQIggQ4L1nwXO3yzlvz91ZZGLkb23jlhSK0L+VRREINqAe37Xbfc2aDZsy3/9odf9f/7Zq7oP3Pri37sNPFras2QAO6zdjxyZw2Lh5wWHLlruO27dddN7p1LXH040TFRH2bltr23KV4lv87Ibtp/DgJwpUf/8AunrlyqO0WPqvnF3dNm9xcCJ/sn5T4SfrN5rWrN9o3bhlqwHzujx3D4/owMCAdfHx3Bdsj9qcPn3mW8/xX2XbTKPeoJzGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDAyOjM2OjExKzAwOjAwZeY57gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwMjozNjoxMSswMDowMBS7gVIAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

EmojiPaperclip.displayName = 'EmojiPaperclip'
EmojiPaperclip.defaultProps = {}

export default EmojiPaperclip

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const JudgeMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBzIQKCZbgwAAAAZiS0dEAP8A/wD/oL2nkwAAHmpJREFUeNrtnHmUpWdd5z/P87zb3erWXtV7tu50J+mELJCAEtSAyojAyKgwgsOg6HE8wyLOIIOIInJwO4Myc44bimcc9ByVRUwQDVEI2YQQknR3kt7SS6q7qrrqVt313Z5l/njfe6sa0Anp2FGPb5237q17b733fb7vb/3+fr8X/m37t+1CNvFcfvn9t/8ozkEU1jwlPeWcE845hBAITyGktEIo45wxINh/6wf/dQP0+H0/hzVaSeXPCiGvcrh9AjEvldolhJwCp4SQIATOWeecS5w155y1R61zh5w1jztrTzsrEiHg6lt/6V8HQI/d87M460Ll+zcoz3+l8oOXen6wW/lBQylPSqUQUhYnJIpTcs7hrMVag9XaaZ3HOksXdJY+ZHT+eefcF4AjwpHu/Zb3/csE6JG7fhrPD9B5tieIqm+pNMZfE9Uac14QCqUUCFmcgWP46+tPbXiGzmGtQWcpaTzQWTx4yuTZndaaP0JwP5DuveUX/uUA9Ph97yPpryGkutkPwg81puZuro1NCqnUNwDjm9ucc+g8Jx30SAfdZZ1lH3POfhjnjgspufKWn//nDdC9n30rodE4xy4/DD/WnN36orHpeWSpRhe8OXA4rLXoLCXpdW0W9//emPw9Qsi7AHvlLe/95wfQkb//RcZndnBu4ch2Z+1tWTJ4NYhXTG+/zKtPTI3sy7OCkXPgwFqLtZosHhB32yd1nr5TCPFngHk2JOlZO+Mn7v95hMAz2rxCSPlOZ+0NSa8T5FnK1LZdTM7vREjxtLXL/SMfFOVpOxzOOpyzOOfIk5h+u3VWZ+k7kfxfHHbvCy/MLslnx968F+ectNa93o8qvzU2NXdLY3I2EFKR9Hv011tkaYy1tlxMsSDnHF/3477BbodAFLt1Fjs8BqW3Mwbl+0T1xhap1Aedta9wOB6/9+eeW4Ae++J7UL4P8DI/qry/MTk3F9XGCCs1gkqVNE7orK7Qa50jTxOM1hhjMEZjjSl2a4vdlG7dmo33jNl4TX/N69pgtcYYjdE5OsuQ0iOo1LYK5PudNvuttRz64s8+4/V5FwqQ9DxMnm1Rfvgz1bGJbZ7vY63BAUFYwTnBypllKo060vMJqzWkVCBEoSpCfL1tKiVjs/v/+kjAlXaoMNbDmEkIgfI8vCDcnyXmnc6ZnwDRfU4k6PF730tjagYh1fcFYeVbPD8oJETnGKMRShFWItqtLisLZ2gvL5B02+RZgs5SdF7uWXr+3zrH5DlaZ+g8Q2fZxvtZQp4l5GmxZ2mMzhKMzgopylOM1nh+gPS8V4P4XiEFj33+Z54DCRKC9rnFec8PfsgLIt/qQnUo7QM4gigkbuccf/QMnqcwxjA2NYsfVgrJ2SRJmyPpUTQ9tFm2kJbhcYfm2jkLzo0CTlceQwiJUl7N6vyNNtefQYi1iwrQobvfjVQSa9x1UnlXCyEwOsOaQr2ctVhtkFISCsXyiXWOqafYuTdHpwmNqVmCqIqQcgOoETjFagvjbLAlCCPAjAUhUEptfBaHQIwAkhupy03ADUKIz11UFbPWcsk1NwLcLKUac85itC4NrC5VJQUpmWjWuWLLPP1TA4489BQLx06xfPI43dYyWdxHZykm21C1PB2QJ3HxmCWYvFAfawzOGIzJMXlavGbNRt5mTAGo0RitcdYCYsLhXnLViz/AA3/xYxdPgnSe8sjf3RHUJ6b3CSGwRo+MpStzJqt1IUHVgPFLt1Ifb3L8xClOPLxId9eAmW6P5vQk1bFxgqgyMt7nGeFh5CPOlyyjcxACOVTLMlcrPi4RmFLVBM656+/5szfWvCDoXzSAnLUoz58Adjtc6bYtOFtcwTzDOYvyPFTFJ1B1ts3O05icYOHEKZaPt+itxDTnOkzMNWlOjRPV6vhhiFTeJrAEQjgKh2VLNbQkvQ5hrU4QVXAlcNYU9kpIWaqYREiBc247MOasvXgAIUAgJnBMO2tKySkCOJPnWFOIuNEavxFgU4sXVZjcsYuxmVm2nVtm+cxZWqfXOH32LOfGV6lP1aiP16k0qoSVCkEUojwfIRVCSKQUuEJmSAYxeZYzPuMXVMlIWsAZg3UOqQArcMbOOWvnrXVnLx5ARcI47pyrW1OqlrMbQV4ZC3UX1um11ogmx5BKgZQEvs90vcHEtm0k3S7dtXW67XX6Cz1WT69CsIoKJUHNJ6yFhPWIoBoR1qtE1epIwtaXV4hqVcJKtQDQ85BClbbIYgEhJdaaunNuEmcvopsvvErVORsYneOsGaUKJs8YdNt4YUBzepqgHeDlHsL3EEMOCJC+j19r0JjbUqhlmpEnMVlc7Gkck6/GZEsJA9fB+RBMRIxtnUAIxblT6wSViKktc/TbXcZnZ/F8v5Ck86JK5zlr6xs27SIAZHRe5l8GYUXpMYqt327z5JcO05iqM71zCzN7dqNcgPS8EXPoSpBHGut5qCAkqNeplhFyESrkmCwjTxKywYBBe53ewTUqMzXqeYUzh86ifI+Fo4tcgmBqy/ymUKFIa521zllnrbEXEyCNc85YY5yUcuRxrM7pLK4yE85RpYFcVfg7IoTw0Mag0xTnIIzCIocbglHmEs5aRHks5xzS9/EqVYIxS5Dl1ObnsWmKsJbxa7Zx7MAjrB1fIT6XsFQ7S2OyOQpCS+eG0Vobo3sXNVDUeQ6CgbMms0YWES3QXWuRr6Ts3HUl1YkJOp0ejz78OEvLiyTJgDTNSAY5+665mptffMsIiPJKb+zOFUCVVY4Djx7i0MHHCCuKKAyo1RpsmdvCtiv2krRXqI5VWDy7wtrWFWa2bx8FndYadJ6vW2uXQV88gPI0AcS61bonlZp21qLzjPUzK4xFU1THx3nqzBJ33Xk3USVg56U7uGT35URRBaRkfHwClCq9YaFzgg1QsBvJKM6x49JdjE2MA4Y0SVg5t8JXvvooGMEtN1/Ptul5kicylk8sMjY5QVSrF9SI0Vijz5lcrzhPXUyAMpy1qzrPlpTvX4Jz9NttaDvGt29FKEm9Ueclt72YnZfupNqoI0o+2iFGfM4GOe/AifKxiPHFpox+an6OmS3zI7vlrKPf7bBwcoFKo0atXmX74FKOnH6M9XOrzFUqOCiidK0X8izr+iK8eKlGnmtay+c6WZIcs8agjaa31Ga8OktQreGEZGp6kiv37SaMAjrrK7SWTtNeOUM66BbJJ2Ij0RRDUSoTVyVBFmEBUuKEQBvNoN9hffUM661FBIbdey9nenYa4fuMzc0zXZ9hfWkNrXNwDp1nWGMOvuIn7xhcVC+Gc9z22u/LDt735Yd1nr4uiRORrKRs2dZEKDnKqNdWl1jt9umnXY4ePkSv12f/1Vdy+e5rqdbHUco/jx0oANtc8im8UZ4mdNpLPHbgyxw9eZbZ2Vkuv+IaQuuYnZ4mCCJUVGFyep7Oyjppf0BUq6LzPLbGPPj5j/1HXv5jn7qIyaoxfOWOu0lagwdXjy51skGM7/sjNy6lpNNZZV2H6MY8B48tUt/+Av7ob47x7g/fwb1ffYw8LxLL/69DyFJio/nc/Q9hx/ZwcMHyvt/9W/78zgeIdl7N0nqXLI0RUlJpNAgJSQYxg5Uu8UrvsHXuy1mSXlzCLHhSwFMGcdqEnNXK9jV+GJTeQ5ClMZk/wVW3fi+f/OSfc/DoApOTNaSUnFnu8emP34H2ayDDf7RO5pzBr83w5OIaf/qX91GbmKJWqzJILXf99Rc58cRDXPmSH6STFMGq9HwqXoU8TfFSn0q7digaRGcrvdpFJsyURAmJk06GlapwWgC6JMAg1o5dN383edbnkYNPcujJVe6651Hi3BH6ikq8QnetxfS+5zNYOoRU3iacNoy3tTC+bQ+HPvnnPHGqxVv/2wdItUMpj6ko59zjX2HiTdsYXPki+kfuQUlBoELiwQBZUXjST5PFvg1q9YsrQZNzW4dPV6w1sewLvFSOYo/xuZ1MzF9CpVJhfqqCwjLIQVvBzknH86/0mZyeoj57BUIGm4DZJFDO4lUnqU3vYn5mnJrnSHNLpiHyHDfvFly6axLlh8xftp+w1sQ5h+cHuIHBDjTW6LNRc1xHzbGLK0E3/dRvcee7XgXOnbPGrvlWTSvPG1GgLumQrJygMXcpb3j99zN46leBmJlZn1fc4jGz44Vsu/rbCjokCLFp//wynS1YwjCqIlTIS1/xWu7+qzs4e+xJ/LrPt93oc9WOWfbe9nqkCkmWvoowOeDwfZ+wG4LnrLXmtE1zbn7H7z4zRbkQSvqHb90HAiuEeLnyvUuFUvhhiBdVEALS9iJSKq647lu54tIJZoM+1+6e4orrv4s93/kuPK9K59SD6MF66eYFSLGJBxLYfIBOukxs2cP1N13HpN9jz7zPNfuv4vJvfwczl7+E9vEH6Zx8BJul2KxIeBUeAnpG578NHPv9zz1y8Ul7ISUC+jh3whqDkLLI0YwpcqCkz9qR+wmbM1x13a1cee23oK0gCCJ0e5X+6YOlF9sEzrB+b21BqVjDYPkoafsMzfGtvPw/v4skjlFSIrRm5dG/IR90CjZhE6uoPIXJsxbOneYCSt4XVtUoFqAR4hGrjZVSSpvnRdnFGJxSOGvJOivk/TUo+4AyZ8p4R260wEhRpB5KjtKLzdm+Sfr0Fg8XLCGCzBqsznHaFOcxJMq0GRH8RpsT1thFcQFNExdUF7vtlz5ell7cl6wxq0YXVKvVBaOIc6PKqRtRGKY0wnIUcA5zr0KCyih6GDRu4qWHkXdxDLchecMqiilAs1oX4FlzX3ttZd09A6Ls2avNFxHzw8aaz+ZZUeSzeY4bVhWcK09Yj9Sm2DekxCYpptcr3h8u2BhMf1AeY/j5r+3ucCNwXFnxsFqXhcbshHPuE82J6QtqRrpggKSFxv65/vg1Wz/WDrJep9/DZGnJS5sNr1ZK0ma1GS487/XoLZ4lXV7BtruY9Q7p0jJxaxWX5ef/z1DqymMNqV5niouQJjGn1hdJmu7u619z61cn9m/j1vf88XNXm/+OD36Cw3//PoIokgutRbn+ZJupJMFkKTaPigxebjCErgwkKYn2oRT2V1don30KL6wUFYo8pzY9+/XglNJjrYUhdzRsYshSOv0OHdNn544rqO+72U2o/Lnt7jj16P8s7YPcOjZeC3I/pz/ooZOi4OdKW1S4tVINysfh4v1qlbGt2/ArVfJ4gElTouY4lYnJkiL5BtJTdoS40u7oLCWPB7T6a6hA4HveGPqMcsZe0PouWIIslof++tPc+N2v3q6k82rTIf1Oj9qggRdVkJ4/Ki8PmUKEQBiDdA6hFEIpouY4XhhhdY6QEhUEqDDkPA9UGv2hujpTGGaT55gkodNrM7ADgkhidNZsr6yGRuvkOQUIBK986896xx+6f4fOM2qNCrnNGQy6eFGE8n2kKty5FKXQbmqOkiXZr5RCVqsldVsEiUWcVXgra0xh/DdRss4abJ5h0oS036c1aOFVBLVGhFJyot/p1p217ecUICEg7raVybPlqFZ7XEi52wu0yhZTkm4HFQQIT+EJAQQIuVHNsNbSWl1Dpyk2L9REej4IQZ7E+EGAV6kS1us0x+ojtXQ4nLGYPEOnKXm/T7uzSiwHNJoVJmanTFSvN0yejyHEwnMsQZDGg0wq9UvT23f9SZbEv5P0uyavJFvjw+s7Zdsr7YjAcw4xLCmX7SoPHjjOpz7/VZbXulhrS5UqJEZKwfxUk//wnS/g1pv2ndcwZfMckyZk/R79zho91bO1saqempuRM9t3/S8vDL9ghTyLusAOH56l7dyJ30f5oVw/t3BVNui1pO+9bumhoz+UnexdVp+cbEbNcfxKFemXpWRZMI7GWo4utPjCo0/y2KlzrHcHWK0Zq0Vct3sb33b9FVy+dWrYhFCqlcZkCVm/T7y2phMvPlvbM/0lo+M7q83Jb53cuvPXZ5964Hi/ay5zWd6URq75/viT7R/43Xbzrv9N4zt+8uIDtHk7ceDX8IKgvnTwWGPp7sM/EVWr76yOjwfRWBO/UtkEUmGPRJlHZU6S2UJ9fAUVvzDgrnS2zm6482zQJ2m3SXr9O4It4f+49KXPW2jrXavy0CevjpK1V0uT/jtlzGWhdBXfk30RRA/h1z4UXf6az+nWAVv99g88dwANt798+3dhjBn3/eCXw0r0purYmBfWC++mggChylL0sOEhz3CmaFtBKVRQFheFGEXJJkvJ4gFJt0PaG9xvdP5mCA/UtjZ8Xz/1vdJ0361Efp3EKU8JKoFkfCLAa/gQhCdFNP2jJjtzp1e9lvq3fuji2KB/aEsSQxB461mq34NLrDX2jTrLo7BWx69EqCBkOMgiRFGrd8orUqwykLR5XticYQk6HpD0eqSDwX0612+RFf9AN5wN3fLBH6943XcHvp3FFwhPYoUg1g4vtTRnJSK0u5zXf5tqXP8l556ed1P/VODc+2f/ifplTaq7GgxOZn0n4nusdqnV+hqr85o1GqfNKIdyZUfGKOIu3brJMnSSkA/6pL0ucbers0F8uzHpW/Vg9uHVsz8qfe/jbw7F+vsD3055SqBk0SojhSj6g6wjGg9QjQDn3Gz/RP/kwhfcwbe/7hr74dsfeW5U7L6Pv4lhAafTWmV2/wm38Md1H1G9TQj/pzzfu9UPg9APQlTgo1TR2DAKDIfeymhMlpNnKXmaLRitfyfPzG/7fmXpXHwcUZ1+UU23/rhR0TvDUBL4Ct8TBXOiVEEQKJi6tE40X8GlltWHuy2TRB/Oxrb9Bml77ar/8ol/cExC/pPpl5AIIZx1zikv4Mh9u/jvtx/NjZf+lRW91/fS7mf6nQ69tTV6qy26rVV6ay36ay0G62v01lr0Wqv0Wmt019bodjp5z/Q/sLf64C++8jf/aumWF11NPH1raOP+mz2R7dxgTspuNEqvN0yKrUOYIkyQIp+MvN67VO/kh1KjdjzyKy/koY+87eLaoBf++9/7GmoNbnvla2k1NbefsN0fnE5bofCKVMGYohK6WaiHixPF4pTnyZVgvP6OxdeEb3ubTT79pS8TCXeVcvHLhHDYTeMK1jmkLSrZzhWckXTgYoPTFgFUGjJgMHh91tNTeXX7T/e+8tnHnVtDiImL58Wuu+56wjCQWZY1jdazeZ7P1Or12o03Pf9V25veq140q7eOyRxjClWy2oy6VgshFEghkZ7PKTvBwW7QWl3v/uH99z3wF9WxRut1N+pXTyRr7x2LkL4vCQJB4Es8T+IpSdHQJolCyfRMiF/1yFJLd3HA2FQI2tJeiumZ6O7Mn3n7/gc/9eAD3/EWbv2R3/ynk6Cbb74ZKaXMcz1njXl+mqYvscbcZJ3bgaDZaDSCqcnxajjelOcaHlNRm4rNvq71ZZjHSCHo17cRD6psnXCTKlj+r2EYvMnkWf/J5bQy0TDSOom1DmvFMNHHinI4WDiy3NBupVRjQ2+g0bnFOoeSgiiUkCYv7qbLv/XIDa98+yX7Xnbvwf8T2Kvf8GvPrgTdcMONSClDa+1+59wrwb0cxz6EqDnn0LoYXrnhxht54S0vYG5uhnq9SkOvMtE/hbB2YypjUwHRVKdZH7ucWAty7Vhb7/DRP/gDOp02N2zvc8tkxnjNw/OG0lMYac8TeEpgrCNJDVEg8T1Ju5fRrHns2FrDaUvazxFAmln6uX8Cv/kbQXPH74m01/vE6//kwiXoppuej1LSS9PsBmPMm4DvUUptE8XlP29IVwjB7Nwc81u2sGPbPGHokWVN4pag2jmFcHYTV22xQYN06grqtUlqDpLM4Pkhk5MTdDptOrFlbaAZryqsFWgDQrhR5ShOLa31FCkgChSdWGNMcQEmujl5ahA4fFUAGtnsEq3XPuDHYnZRXPr+2/7whwfPGKAX3PJCsjgG52aSJP1x59ybgZ1KKXzfO48IFAic58iylEq1ysTkJGPNMXwlMZUKsb+HVArC9ZPgCg7a+lWymSupTs4T+AHWgZ9bpPKJogrGOHqp5OhKQj1QzDZ9nC16pRML7TXNSjsHY6lGiuU8Zz02NCqSWqQ4vZggMdQiRRQofCWQSiDRlYrfe8tEeurwrrG/++gzBqjTbiOlvMw698tCiFcJIXwhBEpJPK8AyI3UBhQKZx2t1RZK+Uih8DyFh8LzPGLvKlJrnNc5Y0VQEXrmSlmb3UkUhghR9EB6gaA/SEjiGAF005Dl2HHv4Q47piPGax7WObqxZhBbQk9SDyVrfcNq3xB4BVOw3rP0BzEVH9KaR6NqqQQK35MIJfEjajUXv+Fw7+WfeUYA7d9/LcpTM0mc/LoV4tVRFBUcMZQN30WAbjaVdUQ5fHL4icdZbbWYn5tGeR7WWkI/oD+IebJfYduWG0WmnQiDJnONsdHkkLEOXykWz57h3LllpBLE2qfLOM6s8tjCACUFUjo8KYg8Segr1hNDLzU4J6gFjkogWVrL8KRlLJJkuSPLLY2qpVb1iaQEKVDS7FXaXO198+DspxpFstPv/Yh19nucA88rDqO1HtkcKSV2yEMPXabvs7y8xD33fJHLL9tFreKDkPR6fR59+FEmJifE9NZLRJIkPHn8BFEYML9lDmMMEkd/EHP33V+g3W7j+wHOQVeOYz2fmutgsUQqRwhLCiS5wZRf7gmHENAZaNrOUQ0kWjvycs+0xQqJ8FTZmWbCPLP1bzoXm5mZJdd6v9b6V6x106rsnA+CYGSMZTkrMQza3KZqhHOWMwtnmJufZ8f2bWitOXToMYy17Nu3l0olKo4l4MSJkzSbTcIwwjnHFz5/N5/4xKew1o0uhJCS1Pl0TUjPVchllUpgCZRFSIHvCSqhouJJjIFBatGmiLaNdVhbPLqyLzIMFPWKR3s9OdXvxx/5pgDaf+3zePFtr+HEsYNvFkJ8n7VWDAdHgiBAKTWqfUkpiwjf2vMGdAHiOObs4lkuueQyjLOcPXOGPXuuYHJyYjShE0URvV6PpaVlpqamOPTY43zkIx+l1Vor58RGsGOtITcWbQWJ8+lmHvVAMD8mqYUeSggybUlzU4JRqKwpwTG2yBqtddSrPjZ3rKwlf5fG8R98UwBNTU5x4tjBLeB+zvf97aYEQwiB53kopcovL66eGNawhmVnhvYI1tfWWFxaplFvMDs7xa6dO0b/PwTS8zxOnXqKw0eP8bGP/QknT55CKVlOIQ6nE10RiVtbVKatpZfkCJdRVRnaOLSxRfBYFiptuQ/BsQisK1iAwJOsrGVxr29/tZfaB72nLz3XkgxSpCdfJBD7lVIopUaDa3meF9mzlOVUs92408Jw0W5jHl5KycEDj+KM4Yff8FqsdWRZVhYFC1XMc83yuXN86i9uZ3VltbR1xftSurJ87zDWjHK3PNdUZMqORoqnHAurGTE1pqs5gXA4IbA4rHFoHNpKTDH2Qhg4jp+NEY47qqF/uxDy6fNBU5PTqMDzrTY/JYR4gfIKdTLWjIBQSpVjkQWnQ3mF7ddI0eZBudbqKoNBzJYt8yhPkaQpSZLQ7fY4cOAQt9/xWZaWlvBK4t+VcdVwHLNIUosFGmOwOmPfVMqOSUmSWo62IhaTkKWeIzNQ8Yu2Y2NBG4rEVhRRd5I7Bpm4T1v1jlbfntLaPT2AnvcDFfLFJtbay4CfEUJMqRIUnevz7skh5GbawY3q76PGcbd5kKXgfE6fPk2312NifBxtDL1ul+PHT3DHZ/6aEydOIsu24mFuJKUc2SFrh3MdlizXXNLMed42gSclR5ZgIalgjKWfZLT6ltzJeDxiXUqqSghREGyC3NLPtfu0k8E7lhaPHwibV/DB2w8+PYCmuIo0TRFCvhTcG6WUnhAFuaXz/DxVGo5HDicER0q1aWBFsHHvDQBjDAsLZ0jTlFqtxmqrxd1338vhw0dG41NSyLIJrZAeIeXoOxyQa8N0ZHjZHsH0mM/plZyvLnnkeBs3MnCOXsbJhi/eMRZxUghiazmlLX9rHb8O4kNJok/5tQa/fdfhp5/NOwTHjh1hz559NzrnouE86egeGqXKGGsRWiPKxTCaQ/6aRt9hZ/2I1pBoY/jylx5ElMd54onD5QQzI89WBKLl803gWGMJhOHlVyqu3R5ydDnl0KKlbwKUOr+/yFo3fmBFnbrzEfun338LDWuddM7r77zxEn3fR+/jgewZEGbWGvbuu6Zqnd0rh5mg2/BIo+ao8mSlEhvSIsQmsIbyUzR3WFc8V0IhhSDLc77y0MMopdDalJ6w/Cn7FjfHU3bksi0v3iV4ye6Q1djw+JmMkx0FkuIzuOLGKkWwPy4Fe2fneOBP71/auCPDg2efOaNYLN3VcUwDiaC0ubZooxtSmyPV2dTnPJK0r5Uaitr7qMwjJEoI4jjZZGPYkJpNd44Z3rRKiCK3nalYvmuPh1SChdWMQ8sOI3yULEICASipsNIW2Txs63Z77N69hyNHDv+ja/9/Ro/0vwUKrcMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDc6NTA6MDkrMDA6MDBiJ34AAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA3OjUwOjA5KzAwOjAwE3rGvAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

JudgeMediumLightSkinTone.displayName = 'JudgeMediumLightSkinTone'
JudgeMediumLightSkinTone.defaultProps = {}

export default JudgeMediumLightSkinTone

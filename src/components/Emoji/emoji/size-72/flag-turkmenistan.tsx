import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiFlagTurkmenistan = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-flag-turkmenistan"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdByoTMzSSYAAAAAZiS0dEAP8A/wD/oL2nkwAAEAhJREFUeNrtmlmMJWd1x3/nq6/q3tu3u6ene6Zn82weL8yMbTAQiHAMwUhJEGJRpChKHoKUl2wScoCXSCg8AVIUIeSHiMWJ4AUeQh6yQUICMXEgTLAh2ON1PLZn6JnpZXq9a1V93zl5uLfbvY57jE0Gq4/6U926Xbeqzv87//85deqDHduxHduxHduxHduxHduxHduxHft5m7wenPjUlz6PM2GyWEyCaWJqompOVUUwdU5CfWAg/uUffNS+8t1v8+F3vef1B9DHvvg5BFzEqqY6oGpDqnGvqu5X1fGodlhND6rqgKp6U03NzJtZ18xaAi1gHnhBxF1InLuYJMmsuGQRLD748T//xQHoYw8+gAhShjBkqnvN7LiZvcHMTpnZYTXbG1X3RNXdQUM1RK0EjUmIkaCRGBVVxUwxMzBwgENIRIJPko5P/Fzq/U+TJHnEzB5uF/n/NrrtCe+S4hufeuDGAegjD/wFgyNDrt3u1FV1n5odNeykmZ5Ss5Oqejia7YumA9HMBVNKjQTtbYsYKGN/GwJlDMS4DFLETEF7jjoRvDiyxFNLM2pZRs1noNZt591LS53WFyZnZz87MjgUf/KFrwHgl2/01t99H2UI6VC9fs/o4K7FvSO7nx0bGW7nRWFf/rNPvzpgfPGzZOKTMhQ1Vd1vcDSanVxYXDql6ElVOxJNx6NpPahKacrqEfqj0EiIkTIGitAHJgTKUBJiJIY+SKZojJgamCEIToTMe2pphYFqlYG0glOt5s32iU7efWOpMVlsN+PyPa8A1Mm7dIrcpz79k6Ja3tstih8vNNsPp94/+uHPfOKCS/zMbnPND5fN4oWrw/ahz31iAwBTP/l9xittvvTPp9LHKtUqWE3NxjDGDcbLbn6ooHubmt2mZjer2Vg0GwyoCxr7QBil9T/rMjC9iImmRDNiVOIynUIgxB5gsR89GiIhKlEjGiOq1qebgkGSJLTKgmosqGQZiRqx2SLmpSFCCIENAM0szJMXhRUhuKBxnyXuN4LYr1XTrJ0mfkGScGl/GS6e73Yvd/I4/9U//GgzYE2RJOCSzIvLHnqQtForRyv1xk0dY78Jew0bN6hHs6qaZRGVUpUoRmlGoAeCAXkMdEIJAsEUVUNNUTMMenoC/e/6g97/ADABBBNZJx7W/xPAiKqUMSKhxETwakiMmCrOuZXrrAEozwtQo9FsUZjSSYXdVrqBtDJY9emgS9ObDubl2/OrJbkG3HDdauPjmkrLXGdS2ku4Ik9FGkIcVa56R8RQM6KAYkQzCotUswpLeae3rxHDqKUV7nvDXTw28SLPTF3CJ8maG+0pZs/Bnvf9IbKipssfWb1d/dlWnUd6u7bqfL1DdM0l3YY9M/IyMNNuMtGY52Jjjhcbc7zQmOPqzCzxuWlScRw8fkhGd6fJVGPeT+0qk3275mR38gJcmqW4tMBEd4mJzhKXug0ud5bHElm1yh+/5/0cHhtnMe8wNjhMGZWrrSUeu3SB+9/zQW7bf4gyxr4jq8Zq71c5LyJ99/rDWIuQbPzNmt1V3zsRRGQLgOylH6oq7SJnsdtmtt3kanuJhelFiuk56kOe+Nzj/Me3/o2FiSUeeSby92WdwUqOtKboTjaYaTWY7baY77ZYzNs0iy7Nosvu+iBVn9IJJXfddJxPf+j3uGX8ICKOJ65c5MXZKe6/74NkPsXWFySbOSibeLwG0OstBeUaEbTuWIOeKGovY8RQEjs5fvoMj8RpzvmUPZqwZ77Fkacn8XvuxtwAWnQptZd+Q19D1AwRx5OTE3zyn77KU5MTVHzKE1custBp9X0S/ufCOe4+coJTBw8TNK6Z5pU4WZ7lLSJjDZhbArYcXdeGz227fDTIBkrSBBYvzHHaTXF6f+ThZJajdc9dd9xBtzOCzreoDgfc8o2to8RwrcZH7vsAdxw8wo8mzvOZf/06080FnHOIwEKnzWBW4dbxgz1QVwGz7dLNNvlCtuAYrwSgTc5l/Vmo7yppzw2Rn13iXd2n+c39cPfbfpmykTH96FmqriStKapuZfKW80eIkcMjezk8uhfnHJ2yIHFuJTpAqHiPc45aWlnr0yYUe8nJ1Vq1Dcdl+yWy3y5NxQSfKvWxnHa3SntilOevlqSDMyy4b+KWWmQ4hm4qWawazoGKYMDuWp3ffuu9fOfcWZ6emuBP//ZLtMqCLPFrfDSMo2PjpIlnqdteNeu2NhWtEe71NNkCSVt3qm2au3ZorqNJLy+SeMUnRrVMcfOO6kKLqktwaUKS2DKiKzXLkbFxPnD3O7hp9x6iKb/1ll/hppExbJXfBqSJ55233EEz73Bu+jKJJFvk621q72ZCLZucY81xtk2KrbsZE4jBUbRSYssTTZgfSdhzeoHisNJ0Hhegs5gRS4eq9NOm4+L8DB//+l/zo4vnuevQMd535y8xPjxCNF2ZgCIE3nLkFu45cZJHL57nuZkrJEnyKjR0ZJsubp75/Haf75cnpDVbYX7Qs+tglzOnT3Ds6iRP3nqM3TNK9XwbGhmhAy4B7WemhU6b+U4bcY4XZqf5+N/9DdPNRRLXA6CMkT2Dw9x/3wcQEb7yg+/QDSWZ99sU4VehoyMvR7EtOb18pJG3UkLp+MHxIRpjOXc8/xy7Uzg9cYmhcJnvnxrk6kBGvpD1Zbl3ThHBuwTvHFONBZ6Zvkwj72AYeSgZrQ/yyff9Dm85coIHv/ctvvf8U1uD81r3Be1aEbQ+3NZQU0hSRRykBiSGqCKZIS1D+887AiSpbrjS8p53CSJCNGWoWuXtx2/nj+59L7eMH+Cv/vObfP6//gUnN06byl/PBPhMyaqRe88tkh0c4IdvOs6p6R/z+MFDjM4Z9zzRpNJOmNunmyYMM6OWZrz79js5deAIt+07xNHRcc5fvcIDD/0jD59/cqUl8YsFUO8RDcQY2tuhuJShF1Pe1pmidjTl9NMLxEs1slIYGstp1PoivU5jnQjNosu3n3mMp6YmqKUVFrstJpcWKGMgTTw3mvnts1jwmeK8kdYDoe3Yc7VkanaUqhNcUmJeyAZLnE9JEiNuEYydsuDc9BUAEudIkuSGBOf6IkggFA4RI+ZJbz8RitSRIVStV0xaECwKGjdG0GqQvHOIuA1S9wscQb3RmKrRLOCCNskHK8yPZAyWwshsl0NpjepMlXJ4u4nDbvgXK+568l8oEvJOyoVaYLFSUk8r3FEf5ogI7QpcyHKWSCgaKeKM14Ntn/h9igVzXBlULBa8uVZj6PZRqhc8U9phqlpwrJsQOg41eV28lvTXEUBUBgKpjxxcgnmrMBeayAsJzUYV6Qp7ypS6RWRPxMn65uXrHKD+cyq1esGRhRohJlyoBM42WtTyBrvakcN+gN21SFEFU7kuAr+2Zq89QGK9ND8wmjPUrXKqHKQoHUsLQl09w9kgmXjqYx2yAf9KOgs3Bjjrbvy6io/l9oTzRlI6smAcaCqWCGmS4By4VDFlpd3x/4+P/Uw4XkcdZGhw5K2UvOmJgx0aLjJ83OhMJgyUGUP5AJ35CmFINq2kf27sWI6CzcCxdZNn177QddVB9Nsd8UiT2cMJL+gQ6tvYSJ3jURFtkp2tEzoJzl2nSNurHTW20QF9uSizfuVjryzN5y2PROPMLVXO2BjHQs6ztX0cicoFUoqblPuvLNJZGOi3O14LcPrO2+qxCpTl/VdyTXvZQlHW5ay1P85qAXGwp1syooFOcKQaKRScGiMaIEBWL5FtaZC8TM7cbLD5WwvWta7XX8dWg/tKstgy8m7dPcqqcwr4euT2xxKO3DbJk+kQJ/IuXgY4FiMHnlGSxgB+b9hemre1/etXjXrr8FyJtPUHbUPA/abPRrZZmu816+t7unQmdpE9nnBr2qF+XMknO9RDhTQMMrC/Q1bzG2dLNpk5WffBtuO7rfSWbIVe68eqa9nm6XvDJG27DrJrFkO91VqpknRSBkshecrjE0/mE8Rbv5sIDiPaOtbKFhSzzUHYOvBsk2NXISTLmWqdLtna+7BtlAV+u0pmQCwcRcdTNByh6nC3H6EbG1R1jmImQZoZnaWMMCTETdL8RowMs00oZtdHo140wWZYrWjD6pOuEXJZQ0e9JkCyBaIiCIYILM1U6Bzbzfiv38rRN72XqZkz7Dv3ZRrpMS6drdF4uk0Yk5fS/DqKbWCZ9JtN11Pw2aYo9aLJDLH12Wxdxlsd1atQNQwnW6wPetnp6qf5TukYe/+vcuzkIZbmrnD2G4/THDnMG093ye4ueHHK054f7PtjKxMkWz3db0a9rQq8ZUdVsRh7I0SsDGgIWAi9FWUxYhohKqiCKWveUiYOpPed9TXItohc/7IhvKoqNQU/EEkmvonKHi5fVp64sEBhezl54B34rpGM/Dc2217RPutLgm2VrGQTQPqzbWaghqlisQcK/eV3GgKxXDVCiZax9z+NqPZWuurqDCYCTsAnkKZY7FHTJEHUNma/DQDZtTVATThw8wJzjS5dP8yJyjnuueMYh0/egxs9wPzzP2XP/nnmcrfyPLbygmIZqQ2T0JfZPhAr0RG0FxErEdLbWn8Noob++sMQTGPMY9TcYsyjajBVNbNovcWJVTPLDEuBFJEKPhFLU6ySo7UqMU1xIfZUQKR3HxsAUn3pOSVGKEMvFBN62z5oA0OBOFfyxD9c5ZZTXcaOObLRMZ7897OUZ87w1rsv8qw/vooSLxHelkWpL6yyDEro06UMaBmwMva2IfQoFGM0tQaqc2Y2bWYzZjptatOqeknVplCdNdU5VHN64MSeemvd1IbABjF2ATcT4u1WxBOal0djp9gvaVol9TjvwQkW4iYABe29ujAELfotRIXUQ5pA5gllZOqnA+y/c5H0id2cnzqAVBospV/D5nIO37ZINyQ0lxwWS9Aet9XoC2dvImSZLiFiZV9HlqMlaonqvKlNgz2P2bPA0xjnwC4Bs6bWNbUgoQgJsPj9x7cnpadGEV3EsqMebAC1/Rbimwx5l4m800Q6Ft0WEdQTjYDqjwn2Zsp4kE6eWurR1GMVT7sbePaypzwIyfEZ5p4eI2kGhJzKrkg8NMdjj+9iptElLjT7UaJ9fltPNKNCb0WpEi0Xsxkzu4zZ+T4QzwDnwSYxZk1jgYjNPvToz/4Q++RcnwjPhwhLA++4c0l8+qyG8HVBDgADZhq2TuxvvgVEKhLtGPB24N3i5G4ROWQ+GTq1GLK3TZZSHwvsu7lJ4/IQQoIgDO7tkmTK5BOjTNUSvnFsAAwTrMAoMFoCc4JdBp4DeUrgOYHnEWaARSBc/c4Pb6iW66YFiNx5HJIEzFJExhxyMHo5cXquuPXUbHlMUhkaHM2HfWbDgqQiTl1i2lmsxLKVNRaqbua7hwcmcXJJYFrgKuKmBeYFGuKkCaJzDz1yw/ekt92T+FB9Ly4arpYleel90cq8IH551bb3Zt6bVYdDjEL+w7FKGA7GY88+w47t2I7t2I7t2I7t2I7t2I7t2I7t2PXY/wFn3Mi50fbLVgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yOVQwNzo0MjoxMyswMDowMM+GLi0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjlUMDc6NDI6MTMrMDA6MDC+25aRAAAAAElFTkSuQmCC"
        />
      </figure>
    )
  }
)

EmojiFlagTurkmenistan.displayName = 'EmojiFlagTurkmenistan'
EmojiFlagTurkmenistan.defaultProps = {}

export default EmojiFlagTurkmenistan

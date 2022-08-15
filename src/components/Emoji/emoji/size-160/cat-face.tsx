import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiCatFace = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-cat-face"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdCS4E3hX/qQAAAAZiS0dEAP8A/wD/oL2nkwAAHYZJREFUeNrtm3mQJVd15n93yXz5ttq6uqsXdUvdtLqlllogIUAGJKEBDNh4GzM2xgHe5IkYL394mLDHEOCwx3Z4PHYwjhnDDDYwGOPwNmFszGIwZrHsEUhCQmhtCXWr1WtV1/aq3pKZ994zf9x8S8tmrJaKWWLIiIyXVfUq897vnuX7zj2p+Obxjx4SP9JvIvHN45vHN/RQl/Ll85+4DJApY7ODWpunyu7istI27Hj9hf8rJ7f814cQ8domjW0ifm/w5eNAZ9urHtt6gBY/dQCjDSH4N9Ya237TpK0TwOdF/GfEF/fm68dXbH2emVc8+H8UlM7fXo/vXyCZumJOmdr1SptXIuHWUPauKPorb9XG/qFzBfOvfPQZ3c8+46juS5aXnjDzO6+61djabpPUdytT+xaU+Veg702auz8eXO+T658zj9qphbJ5w6f/twIzuP8NuN65xDZ2HGb2qtdqbb4NkeuRcjq4gUI8SulbF0999U9m5q/wz/S+zxwg8bSmts8pY69Hacr+Kj6ISrKZmbQxd5vKZm4VkZ+02fynguv90eadL78z23lzb+Ph9zD7urVvjLX8zQEa+7+XYunuJkq/JJ059EZlaq9Win3i+tr1VygHaxit0SZBa3v91OyeOVBLW+piq184StlbR0RemLW2f8yYdOHcU4/QWdtESMmaM8wtXMbMwn7S5jZE1Epw/U+FcuMDvnv2jnTqQK97/u+Zue3xrQHms4do7n0N+eqDDdPcfbOyzR/VJn2VQuaK3gXWzp9gbfEUg+4qWuVMz06z/bJr8GXv/KB74dtB3ZM0tjF7891bY0Hd1XM02rO4Mj+ktZndWF9leWmdVktQylH0+5x4+Bzq2MNs33M5Oy8/PJe1F96oTe1btW3+pcuXf5ug7tn8Hy/zrW/5u+cETu/uV+H7S8YNlm5Mpg/9hLL11yslc3nnDOdPPMTi6ScR36PREOp1EAmsLq/SnF4hazRnFRzSxtwz2Dj7jJ6nnymvnD3wchT6SqVILyyu0R8I1kK9YZnblrFrd8JUq8fZ4w9w7+c/wckHv4DrL8+ZpPEWW1/4k2z+6NtQaresvovVzxy6ZGC6d74cOfmzKGV21eaufbvJ5v9YJ823+MHy3OmHPsdX/vZjnD/5INNTA3bvyZjb1qTRyEgSTVEE1lZWUUqlgrpy7vBt+HKwdQCVRY/P/f77NUrtkeBZXu6jFCgFEoQQAgpFs2nYtUvTqPf42kMPcO8XPsnSiXsg5PtMNvfOpLXvw4MnPv0acTrpffHFl2A1N1P0ekm++vhrTXPXH+ja9DsI+b7Vp+7igTv+gpPH7mOqNWD3njqtVh2tLaAQkeqEjfUuSEApteeOD/2ODr7cOoCElJ17SUDmXZmz0cnRCryHEALelZSuoCwdIQiNBmybh36vw3133sWjd3+GYuO0NWnjFba56/cau47+AmZ6p5x+B0sfnf761OLPMuTcvwPV3NlYOPJO09j5QW3rryg2Ttsn7vs0D971d/hyjYUFTaudAIoQPCF4vHd4X+JdVFW9bo53JSDb5/eQuGC3LouJBEyS1hCZcc6RFzFLOhfhUyqu0vD0Iaq9ZgMgcPyxM6ytrHP46NXM7D6ywzR2/JxOmjfmF+7/xZkjb7gzf3BTatf80dPS9j8HY1R+9os32dbeX9C12VfiNm3n7Fd5/IH72VjvMDUFrRZoLXhfAm6kMkUE7wOuhBCgLD0hOBCmtbG14Mp8ywDqdzcIQXQIziIW5wTnoawePgYy/hxCtK6yBK0gq8PKcpf7vngvh69ZY+HAC61Opl4TXPG83om/e5co88jyXx+qF4M1I8Fja22/ufhg3xhzVW36wM9YWz8oxRrLT97FYw88QJGXNFtgTHwGCFr7i5S4VONwPo7Fe0GCIBJs3ndam42ts6Ber3qgD0qbMLKesoyfSo2BEakGFCD48bU2sNn1PHHsSWqpkNQyxBcHgXdpRS5K2bTWViH4OL1Qei9lbbD6WFpsniF4x8ljjzHolyQpuDKOyfs4Bm3iYig1tuQQ4t/i2ASRgIioogTlNRC2BqDp2RmKvOtFQi4IRsfJF0VkUgoIMoxJ48/hNUrRbFq2b28xt61Nkli01mjbAqVTpXQa76IuinwiEichgjKaK668gs7aOisX1tnc7EMRsDZaktbjU1W3mRwLKuIuEvJ607okbQLrWwPQ+mqf7kZRTM+4Ti0RjFG4AKWLKzU5mBFIIQ50diZl1+5pZrdNU8taKJOCMihlQGlQGqX0cAYV4moUS0ZOIx5b8zSn5ti+q09nZYVzZy+wttoDIlBaV1akq7tNuLxWCgh4V3aWl1zZaPa3zsWM9Tz5BOWBK8OKVookUSMXE4nWEyatJkC7Zdl3xTTbd8yRZlMoU0MpjdIJaIvSpgJGVzOqQIncYQyMMkMxiPgSCQVWGWZ3pLSnW6wsXeCpk8t0uyXWXOxqw7hYOkhrcQFCCMsnHqN8wYvD1qX5NE34of/6phCCLCkNjboh+HEcKss4iOHnzp0ZR1+wm91791JrzmPSNtpmaFtH2Rra1NAmQ+kaytbRto42dXTSRCeteNoG2jZRJovg6gRlkvG1rmFrU8zv3Mnhq3cyP59RlJDn0fWLAooyBukQoJYaFIL3/sKb/8svB2PN1llQEMPyJz6K95xGRBpNqzqdcZYYBkNrFYeubLP38gWSbDpOTunoUtpWExtaUAo6/n60VkO3ozJJBSqUSHAXxycJ8dQWbRs0pgwHrkzIsnOcfKpHXoxjkalwyDJDEC+uLE+vfvq3YvzcKoBs0mR5dQ0RczyE0Gu1kuZwAMHHlWo0NFddNcPC7gVMOoVSJk5J6QiOSePqm6wCJ43gqKGL2XEckgA6gLgKtAJRuopbZgxWKKsFUKT1WfbsgyQ5x4kTPXp9MBNBu95ICN73XOmOLy1uYGwdyLcGIE8KziDiTwWRtVa73kzT1REpbLcNR66eZm779ugW1aCjW9Qq18pAJxcBFC3LRHCUHkd8pSA4CA4RF78fCvA5I41DTNtxDRK0CSTpNPM7SrQJHH9iQH9QZTgF9UaNEPxaUZSnlNbk5irgzq2JQde9+STaGCSEcxLkbKPZoF7XaA3T05ojR9pMz86ASqrAqmOMsRk6aaJsA2UytG2gTB2qn5Wpgc7AZONPUwfTANuCpImyTZRtoZJ2vDY1lKrc1aTxGhXBNhabtJiemWb//pSpdrSiJNXUGw1EOAtyzljLi95y59a5GIA1is5mscaCOpbW6jcm1kJWsndvg3a7VbmLiq5VWc74TFEmi8DoFHRSuY6tPk01SVXFosj2RCzoaEkqGMQQvyfRDVVlcSK+sj6FMgk2adKeKrnssg5nzziSxJJmDYp+eazI/VqzrZ/ptHnG31Qm5cWvuaZwrnhIaUUtS9k2Z2g0syr4WnQVV1QVlLWpVW5VA9tCmWa0EF2rzhSlU5SuVZYzaUVZ5Y6VdekYwzAZytbjadLq/kl0VUApjbE1rG3QaNSYmYF6I8PaFAgPvfDb31QY+4zt4plbEKbF8ftPIYH7y7zbnZ7RzcTYaOIV2YvxpMpYlfVgIhjD7BWtR6OUnbAgO+Y7IysKUQloVYXuKt6IIFJWgFWWI75aGFWdFmMzrG3QbueIgjLf7BaD3ldO3ftX0Zq32oIOfu9xlNJoYx/dWFs8L76HsSlaD60lQekIUuQqtmLMyQiU+LONv3s6OENWTQX2CEAb2V/1//G6ij86qQhnjEmTGU5pg7E1kiTFFZtcOP/UuW63f6y70eXy7zr3DbAgYHW1JIg9Z1XvyVaLA8YkI/eKg9NoU6XvKnCih7LCXpyiKwoQeQ9jmUFlQciE8mQcm6oYJyMKMD6VTlCqGOp5lLbVIg5Y7xQni7Jxzmh3SZVMfSlfluAgFG2lZJvWBq0NxiTRepSqXKcacBW0QSEj3h+Qkd7STyN/EzpsJMQqWY5cDOAIWDVyy6F7xUpiiBRAAkpbrDUYw3xaS6dMkn5jAFr8m1sIvkRrda0xXGGsRZsUbdMqQEZwRJlqpYe3rmoghOqUf7ixMvnd0efQcqS6t55g0b7Sa3Kx9V0kfhnxJG0M1sjlEsprfDngqU/esPUAnXvyq9z4PR9EQnmrtUxZW4EzJHiKsQCVCTkgYQzSJBEczk2pKuYY1Gg4asIFzdMkhq8sufxHwVZaV9akJzKbwhiZkuBufclPDtTa0to3wMUkcO9Hf3JeaXdLkphoPdoiw6A4Wj019hzx8QwepByvvPgKtDBhAHoiGE+WP56mv4b/O7IwdXFHT+QkI3cfllKMBUV5yz2/u2ebc/2tBej4Rw6xubGJc+VRazhirUXrWCRXQyvQScw8I50UV1pCifgB4nMIeVx5eRo4VYyRi9wnjOOP+BiUpYy/r+47BlomgFITFqTR2qK1xVqNTfwRV2wc3Vxb5vE/u3rrAFo6e47VJzzgX5EkzGoTHxrNWY8ymdImWpRIFJpDd5AS8TniB+D78XM0uai3RALqIouRyvrKkQ6TkEdgKnCkegbixjypGo/WduS6xliM1lgTZhF326feXTC1fX7r0rx3Je0rslml8ltsop8GztiaRGQC8bHiFgSlfZzEEJiK64geBlUBUaMgHScfTwkF4vsVuDkSiovErIhE2aE0om3MdeJRoUTpofwxJEmJ6rubX//W3bOnjj2xuoUA5SQ2OZxYrrHWoE0yLtkN65vDOjJSWcIw1QpKfNRLoQRdVG6ZIjpBiQaxoGRkBUO3ihbkwA/A9xDXi64qFYDBVRbqq3BUBWhtQKcEVVRxSKG1wVqNNv6aotg4POgWd26Ji134zGEG3YBS8jJrmTemUs8SxqlVRt4fQRoOPIzdTHxRnXkVk/qxfCFlPMMEIKGccNFoPeJ6hAog8Tni8vE9g5/IkGZUxlVDNxtyNquxVuYV/mWr53I2v/jPnjtAJ48vMbV9vqmUv8Va1IhjDIMzTyOIVYqX4FDi0doBOZoCcYN4+hxCFY8mYspFWS+USMgrt+ohbhABDSVaFaAGaFWgqKwTmZAo0aW0SUY8TSmDVprEihIpb9596PLmow888txdbHOjizHm8tTKddqo8eoMQan0V6yW6xHfUUpY7w740J9/jcdPdPi+113GTS/YiXiL0hbxlYgNZVVH8jEGVaWM6EIxuONzQmVxSnn+/sun+aOPn2L/njpv/s79zLQyRCJjV0rFcRCrmNpkKNVHG4s2FmtLtA7P72+uXi7BPfScLOihD9UJriB4/yJjZI/RqkqdBmPSSnclF+9KSAA8pc/5D+9/lL/80l4u8K287T+d554Hz6JxBJ9HFwsFhCKq81Hqlwli6eLfK5AUBfc8eIa3/+cLLKvX8Zd3H+DXP/A1Cl+OedVIFI+tyJi0ikUGYxXWhD3BlzeWeY8nPnLk2QPU7aZMze22Iu7lxkiiJzOXSWMdZihAhdEgtRa+cmyFz325xlt++HZu/7EfYdf+W/i9Pz+LG8aXaguHCpxYmJ/kM37Ed8QXiAR8cPzeX5znsufdxu0/9iP80A/fzufvzfjKo8toHap/lTFprSSKtuO0b7QiSSRR+Jt37n+xXb2w8exdrNstgLXtRskNxjByK22GytmMdy2GVUBA4fnivSucXSz4xMc/hjGG06dOcbzT48Janx1zKRKKaseiRImbGErMhJFoliOepMSxvJZzz4M9kqmTfOADH8A5x9kLOXfeV3LTdTsJXhBFBYxBRuzejgK1UhpjPOBvOH/q2HYl7uyzBsi7AIrDNpEDxkyK5+E2jv2Hyhqh9I6Hjw9YvNDhs5/9LABF6WhngcXlHgszdUSlEZxhttMTLhLcxUQzOMCztDbg/HKgc+ohHnvsUZRSdDpdHjlep3AlerSTErs7RpakTeRqVYwyGrQKB0JZHBYJZ5+Vi935nm2sLueUZXlUaZlSVcaapPGjPayRa8TrsvSsrHnq9YxarUaWZdSzDO8TOht5NfkwzlpDpT8pNUJZSZMcEY8SR6eT44Mhq2fU6/V473qd5fVAmRfj/fwQM2Fk56oSsWai8glaM+WcO7q8OOBL7124dAvqdwfsPbjHrJw/d60eyuyR8p4oPVxU8AKFIN7jnCLL6rTbbbTW9AcD8m6O98MsNT7VMLWbSoCKG+u4CkQJJd45tE7IGg2yrIaI4Bw41yP4iktpFanqUM+ppyt8XbFr0SGEaw9ed5XZWDnnLxmgtfWcpQtLWbMe9g0bkoZkTKpai4x2FmSksCV4lAo065o0TWk2mxhTuWDZoVEb3kbGKT04lAlVN4eMMmHVcxPb6IJQrwlZZkmzjFarSQiBzW5OM+ujVSV2Q1Wf1hoJYaIxIvK16HqRCQQf9j352JOZNb57yQBprbFWtX1g57i4FyaqdRdX+6RyjRAcifbsnI8rlmUZSZLQ75fMTWt2zGiCjFl3BMJVrFoqZl5cVBSLfRmKHdOauWlNXxKazSZlWaKUYtd2TWKogDYTpdtxyURNdjMMq7nIgtahrTTdS45BrtQ4pxve0wyh6uAIAQnDVfWVq8hoECJhlJWOHtAxC6EwxpAXjmsPwPyMQaQSkKgJ1jyUHEMhOoxN1coHYW4Kjh6AvHCYmFaRUHLtARUZ9bAYpxhZYgh+7NJVXIrNVBACbed0wzl96TFIGYNWGO+VcV5GDZshOMJQX4mDoMZtKpWJO19y0zWKffNdzi2u0Khn+GKN73y5xqqhFVZBtGLNShyESsaEEpFyHEfEI8FjVOA7XgpfuH+dxaWU/qDgsrlNvuXaOt4LCn+R20YNWBJ8gfclITh88BN9TErbxBij5dKzWFkUFHk5cE4Growtb84HQigJ1UODG4rFKiVL5DDeB3bOat76/Z7drTPo/CS3v3aTl16jcX5Ycq2Cr1RazOdRc1VljaHuivGnahr1ipuOKH78tZuY4ikWGqd46/c59synhDDqS67IZRyjhKIaa05wRWzsdLFNxzkZDPr5YDDIL92C8jzgveoYw2JecqQoIS3BezcCJwrDqntruPVbpVQnhpcdtVy9ryAvPAvzNYyxI0I52RQ1yohejeNZKOLfgruoGK+14c2v1bz6RQNqiWJ+NiNgsaPeaB/DQJX5gncEX+J9gfMFrpTYx1RAWbLY7YdOYuXSAUpTTbOddpfO904MBrEhKTZLlSTloCJeE+UxLZG9QrUflSEhsG0mjROuiKVSZjx4B8pUkyGf2AfzFZuOlhC5Emhjo7yRwK7tJsoHExuyYoFeqjgT3Sv4aD3e5Tg3oCwdZRnnMsih9ByfnjZd5/ylA9Rsae65u+t27tR39fvy5kGOSVNIkkBi+2htJvhPQOkwwZFUBCnJEG9iEU2N2axIiBaoq6qfMmgz7g+S4KuJ+lHgj26mMLYWs1qIZV9t4s5KTPFRz41DQI53A8qiR5n3KPJAnkN/AN0+Ps/l7rW1wi1sV5cO0He8M+fd/1KjtLqj2+N0s8++NAFjwdgSpXtVm38VQK0fKeiK60dyZpJR5XEobKML5UhQaA1FWdLvOwoXqUNioVG3WJswLuLGjKa1BauiRKkyZwgOXW1JBgnI0HLKAc4NKIoeg9zR70dwej3odjntHHckKbzpN+XZ14NCUI8UufpUZ0NuryWxIckawei8alGJHezBl7FAZYa7GxX/GOo1BD3ccR3tPghPHF/mS18NrPdaDF8PsNrRztZ48XWK5+3fjshQU1VUSYEyerQ4Ekp8cCNrC96N3MqVA/IKnMEA+j3obEJ/wF9NTfOI+yde2fhfdjJ+7B7h5iuDN0atFAWvTRLaQx4WG73GjHfoDsNiVxBXgTBJ82OBX2mLMQm9QclH/rpkYF/Crv0vZ+e+FzK36yiN6YMsr7d48snzXH1lSi2rP+31tjHjjim8wLsBwRU4N8C7QRVzBuSFo9+rrKYHG11YWeW08+rtmxvqxE+97zlWFKemFGmqvnhhWX5neZW3G139j0T5kQ2FJw6Fw0tRlV8V2IyojNKqm7Iqz+oEZSxlyFnbhHamKJ3DVsGyKBxB4mScxE3KodQZ7vPHIJwTfI73g5i5GFqzoyw9eRHo92CzO3Irlldx3R6/s2uH+tKgkOdecv2J9wq/8v24rKbevdaR67Tme0ZSCsgLKF1gkJcMCk9Z6thEDrRbXXYv1Jjf3qDenB1vU1cyYLqVcvmuTe555BG6mxskaVZxsAGLi6e58apNpprbCUHGlK2KOf3uOktLXc6eL9nsxq0frYU0EWppIKtBYmJbcLcCaXUd1tb5qNK858Sp4N7xp1u07XPZbnjkmCxOTfG2lTVmRLhtoxvBCQKNDKamhEbdU2v46u2auJ/W73uKHGySYILDJB4dSkKpECl51UsUa2uP8tXjG0xPzSNAp3OB6/af5dU3bSO4PL7FgyC+jO5T9iiLPoNBH+9K0gSSqtPee+h04KmNaDVKQZrE8ax3+Cyan++ssXj4SvWP7O1fYgwaHh+5E171fLj+erV87HHOXljlql6fndNN9NwMJAl0+7CyBqtr8bo3gH4frPZkWYmmwPsBvuzjig2KwTp5bxXxXQ7u6hPKTe47VrK5uc5t153hdS8tsMbjih6u2MQVmxSDDmX1ubnRZXHRs3ghWkhnA5ZXYb0TQarXoJ5FvnP6POHcBe7OS37pppu4a3EJfuYDz7D18J/6wm/8IJxehkaNbKPLkX5O2sjoTDV5uwhvCELarMPcNLSacXPD+Wjamz1ILVx5AHbMx0ZzrVVV2xe8j6x2swvr64r7jrcIAi/Yv8nsdHwxL00VxqiJ9y/i/51fgseegLyEVgPSFKyJTe2bXVheg14flCJH+NP1TX6106U91aKYneLh1Q6Dg/vgX3/wOQL027fD3BTqoeMsrK5j+jmuKDlSOmamGkzNz/IjtZSXFo5EBGopTLVguh2v1zeglsBUO05i+GZQWca02+srtE05cHCOI0e2IQIPPbTC1x5fxpcFjbrEeJJUuzlEHbW+HhvYp6eiq69vwMZmtBilITG4vOTvl1Z5/1qHjjGst5s8aAx2bhr/kms5f2oR+en3PUeAAN7wfJibJhvkXC2wOy94PEs5HTwHleJFSlGbaXPddIsX1VJ2JZaGtaTWYgFTVu9MTD40SWBmGvbtrXHFFS1mpusTzeTC2nrOiRObnDw1YHVVKMqJHk9i/3MtNov50uGcoygdvUHO2fVN7l7d4H6EQRC+5IWvOceeeo2DwJlGnYfXNhj88b3P0cU+/svw7g/C5Zcx2x3w/N6ATi3lYauZE+GGvKTrPF/5rXtZ/t0fIFlbYTuwG5gLgek0YRrYliQsGM3zkoRrWnX2TrVJt8/DwvZII5JEo03c+ZRRpgo4F+hsBBYXYWkZ1jsU3T5P5QUPOs/XypLzwHJRsm4M68BKEM7s2MHS9KspP/lrzGU1XmAtTYQvl56VxHB1mjDVavCVk2dY/em3wKvf9iwA+rU3gmiwhvZTZzm0vsEZY7mAcDQEdvjAV43mTOmQD3+d9/N/6Udh4wykbVRvnSwxXFbPuLWe8eZ2k5vmZkhnZ6HdgqxW9U9V757lBWxuwsoqrKxSbHS5c5DzoSB8fn2TU84yUJtIdjn8+oe+juW/ANIEVRTsNprraimLieX+smS+3WLP8/by6OIyG7e8BL7tHZcI0K/8CziQweM57c4mbq2DErjBeXqJ5QERit+945L6IfmJV8LOWcgLFqzhBxt1fnyqxaGpNrpZB1v1fTofM2Bng7C+wWP9nPc6x4dvOMT5f/MeeHzj0p77phshCDWEa7KUplJ8ud0k7JzHvO0P2fzDn4M3/vtLBOid3129RlSHxNI4fZ6rltdYymqc6g+Q37+LZ338/OvBeXS9xmGt+N405TW1lIPW0lAKnKNXOh4vCj7lAn+K4lEg/OJ/f/bP/K4jUK+htOayuRl2HNjLw3lB7+f/4DnEoHd+N3iPTWvszUs6P/A6lv/j78P77mBLjp+6FQYleqbNbJqyr56xTQG9ASvAk1mL1UGP8Kt/vjXP+6Gb4Dd+Dt7139jWyGg36pwqSty//fCzBOhnXwdKkbhAIpae8vCbn+D/6eNnvw3OL8H+fdS3zeKKkvKtH3yWAMnTmLhS/P93CKTCN4+vd/xPXI7RqBBgOMUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDk6NDU6NTcrMDA6MDCnuRMNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA5OjQ1OjU3KzAwOjAw1uSrsQAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

EmojiCatFace.displayName = 'EmojiCatFace'
EmojiCatFace.defaultProps = {}

export default EmojiCatFace
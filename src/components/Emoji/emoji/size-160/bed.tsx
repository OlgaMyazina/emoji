import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const Bed = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
  const { ...otherProps } = props

  return (
    <figure ref={ref} {...otherProps}>
      <img
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdCBEOZ9xWvAAAAAZiS0dEAP8A/wD/oL2nkwAAD0FJREFUeNrtWmuMXddV/tba+5xzX56xPTMZO07sunkUJ8oLWpSkoQ8hKKJFJAEptKoEFS+JR9T8QKBKEYgghV9AARUELT9atRBV5SFoKZAXqkBtGpIoz8ZxlERx3MQznscd38c5Z++1+LHP885Y4hdyMrMly/Y9956zz7e/9a1vrb0Je2PHoeGveA+JvbE39sbe2Bt7Y2/sjb2x46DHvnDvMYzO3cmQZTWdV12y7+/z0cbZH7n7T0FEux4g+8qLJ+/py9ZvJEliRpPUvbWVfmTp6JX3EtGzJ//zH3H1B2/f1QDx6trmdetbE7M+HGF9OLJnzpy9/eQzT33pK7/98Y8eOnzYPPevX9zdALncx3nukeYeuRdMncdb5zZuPPXi9/76gc/+/m9m2bT/zT/5rd0bYgoAVJSvCqgCuVecG44Pp9lr98lD/3H2+W994yurb61gcXlp9zGoluviDwBVhRfFcJQOzp49d+NnnxwhnWztzhAL2JTI1BdUAa+KTLKOqvJoeG73AtQESZtAFSEHACK6iwEiQKFoE6kApPBCRLsTIFvFUyvEtPioQSHQ7gVIG6+vJSBUhtvuZE6bQQCYA0SiWmPSAEd112qQhgxfUMhLLdSqBCVsy3C7DCACEYELhEQEqgpBIdyVVtPuDjFUZpogClAh0JV+q+52gKjQogCGFiqteyJd1mJBiywRvCpIUTCojLFdzCAq8jwV9ZiXABZU4QtDtLq6hs3RNM6cdhVkImvy2NJIFTLo2LctAJpvAHYea88+1Dv5nUcPGZ++p9/ft6DiN5XNt22tPajSfO4VTApxOUzU7byxNn3/4WtuvnX9fHYDsznMzJHzfjTJ8DwBD69sTr8zn8SrE+d1fhC9LYB56M8/g/2HLu987b5P37q+vnbz+vr6e7PJ9Jqrjxw4snRwf6KK3NnOX9mmQisAFSDLHWwU4Yof/BA+8LOfuuP8aHSHMWaBFARVQAQa6PYRVf3lTOWZSZp/zRp+4MH/ef30D59Yxlzv4t33f+zf/w1fuv/TOHz8B3789MvPfn40SZcmWQ4iwr7EwDJDRaLM9D7Qjg0FnAjEdnDLz/wibv3YXZjfv3+RmWGMCaleNQBZi/dAVG8R79+XZvntVxwe/AEBD65sjP3S/t7FyZ5HH8F/f+sFXKudExurm0sghqogMgZp7jFJHaCCzGY9brkbAtLc4dB1t+K6D34UNoqQZzm89/DeVx5JG7Wb1j7Jiupt4zT7wpmV9V/wLo9ePbN6UQK0cn6M8w4YZVkksxZGg+BI8Z5Wm1leASfA66e/j0cefhBHjx3DwsIiBoMBut0u4jhGFEWI4xg2imCthTUWzARlA2sVzrkjo/H0D9M0c9ddddkXXzm9oscvu/g6kVJgoZUXJijKyoEqUCxmanUFcPrU83CmizffvBrLy4dw4MBBzM3Noz8YoNfrodPpIklixEmCTpKg0+kgSRJYa5EkCcaj0eLm5sbvPv7M+IX1za3HnFdYc/E4cUVZKZSmGDN1qFafWdr2YyAfDXH65NPw4pFNpxidP4/BYB863S6STqcCKEk6iJMYnaSDbreLfr+PwWAAEcGpU6eOG8LPfeoTP/b417/5oFxcuR3IA1AkWoSOUginGbtXN+2LayIKJwIdruK1557AcGNNDl16lC5ZPkRz8/PodLuIohjGGDBz6EUSQExgZlhjkU4neOmlU5g7uHit33/8xqlb0D/7pyfJGpbIGrGGp8P1c6t3Xttd//7E6vvee+P/Kz7D11/A4hyQp6nP8yy8BzEsm6qrUdaetsKHKkMNLwrnPVi2sI+yJzfWVnprq2dP7F9YCEzqdGGjCEwMhcI7hyzPMB1PMBxuYDgc4trbfgrvuumW9zu1/xxbMIcnq4Jka5Rmbw2zl//2e73/YtLJH/3DUwCgYVKNBl3xX2p2OlV3Lpy11tHZC0wAE8QyeWM4h4j78N3d6RPf+PINLz/+MEarryMbb0LKwqKch6KpQeGhTgQCwvFrb8L1P3QrrnzPiWOd/kDHoxHYcDW5uiWiUK2zG4EAtugtX4XjR4/0Y8N9YxjMHNoqTBien6Af4V2DQf9HUVirnZsFYaL1tWAzQNTSTJppeFJTZim8MAW8lUDBwkHlw3d8km75iTvxxiun8NADn8P09NPtjEatYjVcyJ3H0uVX4qc/8Uu47vob0O/3F6MogrEGVLRGmgBRYyZUTHzl3DreWEsRMWANwTCBi4kaw0gsYXm+i4UD+y7Y0S3JELxXAwpqEGUHZFvX0GYeoCQKUhF4URYRxLYPvvIErvrQXXjy716BqjSIqEXLVUsGKZwCy0ffjcOXHkGv10OcJDCGwVSzh4habdoqA4ggdw6TyRTTNMfWeIrIMJgIxOEJ1hiMJlN45zCepkXGoAoM1ZIxF2CJ1t+bBbbZCdXGhyGVK0QCy0UEXhXeC/Lc4fx4it6BQ7AHL4fIZuNejTRf3ZsYnV4fKoIsy0ILxATxCgyh2Q5JFWoiHnnuMJlOMJoKNrfGsIarli4hMGgyTeG9A5gLEtT3DKFAje2nIqQa+jLDjfr7LRYFs0eo3X9YRK3A8iIQUUxzhyhOkMwtwRcAlbe3s/BTwZQsz5GmKQBUGat6EWqLoyI8WMQXv8swngrsaApD1MgMgGHGNM3gnUOw+DsD3vw/E0EKR1dG3E72ZBZEarhkbfbWFZVTVlVkuQOxgen0IZm2wK58kBdtbRLmeY6sSIEiUgDUmHVRl5UPFRWI88jyDFmWYZIqyExhiAv2hV8yM9I0g/cOSlzdrxU2TT0uhL1Z3pThOtvL04bBm0W7KVdS9L7K0PNe4LxAOQoLUSl9o9TwBfUUgHMOWZoiSzMwcZtBhHY+rcJLwu+yDGmaIs0IxHkVmqVIA0Ce5/DOwYMb2YZaoNeZnoraqGYSlUmhBcx2XSrDl1rbWW0vULHIB3fddNbBBykaTAC8CLLpBMPhJrrdLtI0hbUWxFw09tvxFeoZgS8Bmk4xHG4hy/uAcQGYKsuFF87zHM7lEDLVfcqNA23mENUGw7btRDUyXbNons1m2Aa4Qlvf16IH5nWWlQQbzEFYZS+Kg70YVy9luGztCSTjDmzBnkqkCW2hboaYKPIsw/p6juzgbYBJYIoedzMDutzBOQc2bkZuqNKYbY6ozHDbJer/PpqyMLNZ6gs/1n661k6aOZwLOry/h5uWCJSeAWXhc6bgZYyhIt1vW5hq4uI9zueMl1yO3DkI10tKChAznPdwzofrWpu5GqbGLkuR9isrMONtSnuwTd9p5708vYArFSUkjG2bgC0nrQjngta20irzzDr5euI1MwwBxjAMAwxF6jphVVQhTkJoUrURB9GQYp0XEBFEtPJWrUzVEO62JyIotMW8phg3w6kMoVaypiZ7ioQAguUq4Ksn2e3xrW1mzIpycUWKN1FVOA/k3lViveUMnBcYEZAqlAmQOt69C80376V1eqQGqHTrsp0FrfpsB2B2iKr2AlNQ4hm2KTgc8Zmp6C1m3TCA1HnkviFkQCj4mKqHiBZGjFCk8jZztWHKyNe0IARmeVGwSEu8K1FupOEWA6jeq2taDtpmHht8kzZSRLpN6EVDStciIzZ3lO3sCjEBlhlp5oKye4FcoHQmVXQTi8GA0Y0D1s45DKccmCUCQzN1G5Xb240Cl9pBRAXl6zJhxtmIQqkNXnUP1Vb86LY6ZIaMO0YIKj/U0iAC4L1ic5Qhl2YkYgdvErJfmntsjQmRYQw6FiaJMY06ABsocQC3IbIMAkigEAgYxBS+o03325gT1bOQ0ggyVVqEkhFlaFLDFJYHw9BgKDV4RzMHNarnUeW/bO3UZqtfVKvEFADoxIxObGA4tConqcck8xinHtN8gqgQ6glyzE2fg+ckdH+VKr9S2gmIQ8QUKv4iQ1oTvBAVMiGicF4Ck6UMaSr6OxR+V7j05ty9KLwP5k9VwUwwBXhetKoayuydRAa92GLFnwGVFQPNFKtNv2ENVVnKMKETG3RiA2uC83VekTqBE4E1hCSy4eWYQVB04XHQPwWfSfFi5X5/WN2SvipomTbm2qeUAIGAyDJiy0VnAEWhWbwk19mqDCUpOMBM4XeoT6/kIhhNHc6nDrkL9xh0DOZ7MWIZIq+40xBpbaU7xf5+XJmqUgNUgdxJWA0m9DsWhqnqQJa+xAuKtM2wESNGgz2om1do1ELFXmQtjlR7rzIxOFGkuWCce3gPcNFnCoVnyQZCZAjdyFTsCrVWyLRFawK9rkGnE7eAzpWQ+aDBTU9gqRFdVKDlvbZDTms3KOXKicI1NKr0LF4EuROohmZZXJTDZYiI1LsHpVZwo+vXvF6Gd8k+ZkInYkRdhjVclUblongJJUPufe2YZ9q2bQsTnslFP51btWD4kcVMgS4qODCIYK0pXijogDRANI3YF1VkucD5UDJG1qATmcIfhRAr0zgDMAYwbGANIbLhRQ3Xzk1F4STcM809vAhUqWJuGSrlAQvDjNgWVqF8Ds/0mBquvNSgUqeq8C/aHok1rZxpiVTK/B8ZFpMMXjx9bnQkMpgLMW7X4sie3Y5/QNl5wSTzSHOpQi0AEegeWdNouXLBCMA5YOoECJZztvPbOABXuGEiuILYIsFLqZaaU+/2MjXFni40bYAYucsXxLulwunnnuMVY/QQygP2RGLJspRNJMPs9/Xnvj5Opz+5r0vXjCYZtrTz1WTx2P2jjdVWiyEUlkWpwQTTKTWFQvOsMJKStbcFlLQK5dkSPTCctvV2QhmiDYtDM9eBnTp5qlRLhTZ7jQDbWCbnTv/acs/9zqCXwHk9210++tV4+PqvKtAtFkhsmU3KopHZ+YQZ3YjhMoMpzNZn/uJvXltbH+Lggbl3xKGoz/3efTj1L/cjvvSGjcQyupFBLipRZMezjnjmdIcyQTd6i5f+sYnkSGIz7dHgUQDwPn/HnBo7sDSP/oF3Y3DJZQ8nNrvXdCNDQiuTLW8jgJsllm3VTiAS8VsvPf3tz990+8/jV+65r7rp0uLCOwagj//63cW/nv0ugO8CwD0fuxl2bvGTBCLVunNmZ7twZT5RcbvqLGJMhATbNm7IEpktFRp7gYqS4yiZcNRF0tu3qwCyUYQoSSbkzFAFXRHAMw3t/NIV9/rh6l8CoCTi7MjhY0+Plt7Esetv21UAXXb1DegvXPLI5NXOXWp9B1413rdwFntjb+yNvbE39sbbdygQ6x4MFxz/C9mKE0YGU3PUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDA4OjE3OjA4KzAwOjAwsSXIegAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwODoxNzowOCswMDowMMB4cMYAAAAASUVORK5CYII&#x3D;"
      />
    </figure>
  )
})

Bed.displayName = 'Bed'
Bed.defaultProps = {}

export default Bed

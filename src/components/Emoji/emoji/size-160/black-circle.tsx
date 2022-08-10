import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const BlackCircle = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QQdBBoT7jQaygAAAAZiS0dEAP8A/wD/oL2nkwAADulJREFUeNrlnEtPHEcXhgcwxmBzMRczgM39bhtsMJjhMjDcBxgPHszFIQ7mk2JFWSTZ5Rd8kfIHvEv28SbLKCsrUoKUvxAv89kLby0hexHVd56arknRdM8M+Dp4pAMz3VWn3vftqlOnu6s7EHgHn9u3bwfW1tZOxWKxYDQaDS0sLOzOzc39d2Zm5lEkEtmbmpr6a3Jy8qnYc8eeso19lKEsdaiLD3wlEolATn9u3bqFMKeXlpY6hNy2EH0opPfGx8efjoyM7A8NDf0zMDCg+vv71dWrV9WVK1fU5cuXtfGdbeyjDGWpI3WfiXiI9hCf+KYN2sqJz4MHDwK//fYb4lQtLi7GhcgP4XD4iZB7BVGId3d3q/b2dtXc3KwaGxvVxYsXVX19vaqrqztgbGMfZVpaWnQd6uIDX/jEN23QFm3++uuvGsMH99nY2Ah8+eWXgZWVlbr5+fnPZWg8Hh0dfQGR3t5eTQ6ikK6trVVVVVWqoqJClZaWqnPnzqmzZ8+qkpKSA8Y29lGGstShLj7whU980wZt0SZtgwEsYHrvn83NzYB0e3pMhXT5HQH5eygUesnQ6OzsVE1NTbo3VFdXq/Ly8pQQZWVl6sKFC7oX9fT0qOvXr6vh4WEldbXxnW3sowxlqWOEwxc+8U0btEWb0qteggEsYAIbGN/LJx6PByRQFkjgnJBu/rMcxX1AdnR0qEuXLmlSHHlDit8MEQGtlpeX1fr6utre3lb37t1Tn332mdrZ2UkZvzH2UYay1KEuPvBlxKYNftMmbYMBLGACGxjB+k4/EhwDMptUSpf+VuLA34ODg6qrq0uDrKmp0Ue7uLhYnT9/Xm+X4KwkmKqtrS119+5d/V+OrDYZCmnNlLPr4guf+KYN2qJN2gYD28EENjCCFczvZLq+ceNGQI5mjxyhn2Q4vCJoEkSJD3R9wBIvrl27po+6IZeNGNma7ZM2aIs2aRsMYAET2MAIVjCDHQ5v5UPe8cUXX+RJt5VhHvlTpl59pBoaGlRlZWUqNjA9r8RWhEDyyDM83qYlxdpUEpx12ybWgQlsYAQrmMEOhzeeQ6H6J598ki/TaULykCcE0La2NhUMBlO9hpllbm5WjvC62hDgd+7cEVvztrU1/30Hyt3Jrpy0pdsVAwNYiotLNDYwghXMYIcDXN5YTyIJk+6MOJuMaYIg3ZfAaKZhuvjq6qoc0TtqLZFQifdktL0uYoHl2rX+VBoBVjCDHQ7CZQtOr51gEv2///77AKobcZh2mWLpxlVVlTKzjCVFkcB5W4Adtrj+v5rFvlXLvHy5yx30G0+VAwuYmPXACFYwg90SKQG3Y89wVJQAF2Dc0jVtcZheCYQz09Myo6yqePyWklTWsZj13f4dc21zLO6xzbOO128fiycNbNOCEaxgtkWCE9zgeGSRCGIyPerZiuBGtkoXNeIwrmdnZzSImATk2Aq2bNmKy5Zd/72+e9Vb8fHlZR7tCTYwghXMRiS4wAlucITrkQK3zAioen52dvYnZgDSepOc8X96OqIbX15eUktLUbX8hmzJZUep57lvOaoxghXMNgc4wQ2OcIVz1kNLstcCEizJSF8xTaI+AY+kbGJiXDccjS6oxUXb5h1b8LB51/55n33zHvUWjmEH/YEVzGHBDge4wAlucIQrnDMONaWUHlqSdU4QyMgrOKNmumQ2GBoaVFFpdGF+Vs3nmIEZ7HCAC5zgBke4whnuaOD7kfFID6rgPIZUnbFKhsrY7e7ukhxjRrrktJqdibhs2jH7dySDTXuUnU7jM53vbNqLaOxwgAuc4AZHuMIZ7mjgO7SkIFP6ztjY2D4nhXRDxmxdXVBNTYZlHE+pyNSkZWHHJj22e+33K2/ViUz6tBH28G9ZJOyxL2ztC2vfcIALnOAGR7jCWbjfl+AdkNTBu/dI4lQn0+IfJH5ko+aazY0bA3JyGJauOJ7zNikGlxuDA6lrTXCFM9zR4FAvIqPkRE4UfEDQ4voKkZ5u2NLSLMFtTI2PhSwbdcz+HcoBG039hxPc4AhXOMMdDdDiQJbtTOvVMg4fc86CouWiLIGM3jM6elOFRoaTFnJsxMNCrv/Z1DmOhVx+Q1mUd2EbHR3R3OBYXp7sRXBHA7RITfsoNTc3R8Ycl9T8BVMfmSfjs7m5UZwNqeHhQTU85NiwZe7fftu89g+5tg2l8Tc06I8hGx8++0eEGxzhCme4owFaSH6UzLD5s7m5WSgi/ShdS6fiJlfo67ssKl9XgwPX/rVB13/zfTDNNq99Xt/d/gd9ymQql6mus31IuPVdvZzK8eCOBmiBJlogulIsFuuYmpp6wgUmLoqTJwSDtWrger8Er6sn2uAIVzjDHQ3QAk30MJMxx/DaJkBxTZfLlnS5trYW1d/H/alerTL/jfHbbLO/e+23f2dT1s+/u4zb/NrIVLe//4rmCme4owFaoAnaBHZ2dgqkSz00w4tpj+u7Pd2d6nJvd1rr7e1K/bfNa5/7u5cv9z63X3u/ny8vTJnagyuc4W4Ns4f3798vIAYFZf7f6+vr05coGY81csbb09Opurs6srKurvZD3722HcWfMft3thiy2W4bAtXUVGvuaIAWaII2JIghORd5xj2o2tpkdtlQX6c6O9pUR3vrAWtvbzm0zc/cZbOtSznbXgdDNvXY3tnZpjmbzBot0ARtiD+73Eey40/jpQbV1tqsWlua/K21Kf3+HDK4wtkVh/ZFm/8EFhYWvrt58+Y/ra2t+k4A0byxsUE1N11STY0XVVOTY43Wf7c1uco1uso3eXz3s8Y0ZTO115imXJM/brjCGe5ogBZogjYkiY8OBuhSdekiCwewOg/z255j1mDzqdec4e4K1I8CkjHukWJzR5JIXl5eJvlAUM52a1W9mNd/t9Vn+J1um5dvv3b8/PmWDzqWoW2soT6ouaMBWqAJ2pAH/cVFbC4eGYGCtTWq9kL1G7Iay7z2ZevjKG1lqnN4H5yNQGiBJmgTkOnsqT3Fl0s3q6mpUtXVlR+VwblcxHFN9U8R6LktUFnZOVVVWaEqz5c7VpHGMu1/3TrH8Z+Nv8N+4Vwm/F0CPT8kUKlE8ooKhlqpv5WVpt9/wMqOUPa4VpZhX2YMcC517hS7BUoNMcYfuUBZqRQ8d/ajMjifg7tocGCIEYi43GiCdElJsRRk0VNx0kqKD363f3tZSZpy9vaSLM3Lx1kfH37tZ/LrcIa7CdJoooM0Uxl3GfVVRL1S44wUPKP/v3c7c9Q6RY4dvS3E4T8aoAWa6Gl+fn7+EXcYzYUyCp05U6SKigodO33ITp/+19zbvMqb/X5+/Mr41UnXZjoM6fbDGe7mwhmaoA0X6vWpBmtozCotnBQWnjqynTrl/f1DMj9ccDar49ACTdCGu6i73BOy72QUFhaKowJVUJAvVuCY+3t+mm2Z6hX4WH4WZQp8fKfzl9kXnO07HGiCNlxyDbH0nzXHnOpzwkbh/Px8sbyPxPI15+Sl5qBefy2aPEMbltcFJVrv2acbdDcq5eXlfRQGVzi7TjP20Cawu7tbIKf1DwlK3KfmdP+MzB5UYj3Dx2BwhTPc0QAt0ERfcuWemIy17fHxcb3UxcQhxiXqnnRx4AhXE3+ce2Ov0ARt9I3DeDzeIVnjE5aCmIyaMfmxCARXO4OORCJP0ETffmY57N27dwulS/3IMxLmyiJd7qT3ItN7zPCCOxqgBZropcIs9ZANzGbxcDj8ggvW9mx20gWyZy/nYv2L5eXlOIupUmup6UqJRKJaxtxjFhPxBA0Z5UnuRXbvgSuc4S6nF49FmOoDqztQSjJHgvUDApRZPGXnRCdJJDO1273HeRKJ4PwALQ4toorFYmysk170B0pyPsK4JP0+ab3I9B64wRGucIY7GqCF5/MYKCfjb0fG4T7ZJDfz3YnjSek9JjGEI1zhLNzvS5D2fyLIiUUVEqB+Jppz0mZuJp6EoWYPLXOTEI5whTPc0z6/wRLYaDTKcJuQvEg/m0HwMkONM2GTnueiOBgczNCCGxzhCme4p10GbB5DYMWHBKtvJyYmXtH9SKC4kJSrs5oRx8xacIET3OAIVzhn/TiCM9TOS37008jIiD79J9IzZouKilIi5YJQtjhghwNc4AQ3OML1SI9Gra+v6+dSJd3ukcj+p3leg3V8XPXPFZHc4oAdDuY5DbjBEa5wPtJnbW0tIN2PeBSRU/8nTIMENE7ockEkL3HADgdnZT3L7CJwhOuxn1PloTM5DUlIIPufEYmjQFdlPBP0PqTZzb7GAzYwghXMRhy4wAlur/38Kg4+/fTTfHG4RbSnAbqo/bzqh5IC2OKAyTwFDVYwO+L8DRc4vbGHexmf9+7dQ6QEXdPriWcSL7rz+xDKFgYMYPF68hnscIDLkWNONq+h+Oabb/IYtwQ3XiHBNEkuYb9MgCP3rmKTWxjTa8xLBsAGRrCCGexff/113lt7XQWqj42N6dltcXHxETkEdyDpvqTsHDGCIePeCPW2epRbGNqkbTCABUxgAyNYwczzqW+856R5NxCve/iWMS3ncPq9P1zP5YUjRihzj80O5K8jljsAm3tZRhjaBgNYwAQ2MIL1nb9jiKlxY2OjQBqekGTr58nJyX2WrZk3tgCWm3DmTQgcYSOW6VnZ3Dkx5ahjRMGXedMDbdCWeZMMGMACJrCB8djT+Ot+ZCYITE1N6RNcCX47Ms5/ly79EpCMfaZVbqOYdwZBiKMNOY48+Ym5fcwwse3f28pFuix19AIvRxR84ps2aIs2aRsMYAET2MD43j/b29uBr776imHHw2ify5nxYzmKL+jmnAxyMYrrvfZLlng8m2HB1bzkI0nlOrgmlwEmf7OPMpS1X66EL3zimzZoizZpGwxgAdMH9+HNT7/88gvDr0pmjLgExx+YWgmUEGFhpP2aLoiaV3WxcNI2trGPMvbrufCBL3zimzZoizZpGww58SEJk/F/enV1ladmtoXIQ+n+e5FI5JmQ2x8dHf2H6zAMDZaaQJxZB+M729iHGJSlDnXxgS984ps2cv6NeLxPbGtr65Qc5aBMtyEhtyuzy3dMvxJM92R4/CXEn87Ozj7H+M429kWj0UeUpQ518YGvd/WOsv8DRNNR6iV/PaQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDQ6MjY6MTMrMDA6MDCTEijaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA0OjI2OjEzKzAwOjAw4k+QZgAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

BlackCircle.displayName = 'BlackCircle'
BlackCircle.defaultProps = {}

export default BlackCircle

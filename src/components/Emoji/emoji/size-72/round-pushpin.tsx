import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const RoundPushpin = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt=""
          src="data:image/png;base64,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CS2X9hivGlLZoFUNISHS9sTsQlHeGJw1OGuxxoBCCpEQosYESTz4LhSTxHyakE3RiLdq5Z7po9Z/8pI3vzOsesKmpQdIROgcdyyXvffd9xarV35YrJsPtivBTRBsjyAFjXqaKMQqEMpADIpikHHTUMYNRFmAZS0gbcCJI9kCyfrQmYZimuB71BhpQlN2V05/5PR/ft/P1p/0VHpr1izNzuqqc97ILz/wIXqPf9yl1devfMZw596/wHoRm6kxiiEhJECRZIlqUWPBGNQIKGha6LVYUEHb9B3EIeIAS8JQR6UMkVGopb9i4vObnvs7n/vGpmN49lvOWdp9sX+55krevGFT0ztq/a3lzO6jy+HoiYoREYdYj5gMbIbaTBrnZShQhpqYEooQaQvyYizWZDhTILar0RZai6NUYT4kZuuGuboyrnCXP+4Jx75r69337njNRR/89Wk933HO31CsXrVh5vY7L6j2zL08s166PtOOc+3J5qypcm/2SsXcaA9NU5KStuURBGscORl58oi6VCppPkRmm8BMXcveUGF6xTdXHXH423c9tPXec394xSEZZDikoxE3vupPmDp+0+G7br/jnaOZPX/qEtMdl6WOc+pdZppuYeYyZVDPorEipkQdEziPtQWuBlcmUiANY0yzoWGmru2cpjl/2ORn1h2/8Z92PvDQ1nd885JD9gyHfPzlngs/SrHisGLLNd89Y7B951vSsDzZI0XmvGp/Qob9gmgrCg+KUsVENrWCGCyDbbuIe+doqkb3hUb2pViFIr+5s3rlxzacdOLXqrn54WsvPO+Q3v+jMh+07fKrWHvaC7np79+3dt+DD50+2rX7zFhVT699vnowOeWK6R7r161icuUkMjmJ6x/G/bffzeYbb6HZvSeqsisV2S1uaupr0xuO/M+zP37h1hu+/DVOftWhnzh7VCfMYt1gvOPH531wYt8DW46fLeun7Z0qztwznH1xP+vI4SsPIzjL7lHNlgce0r6Yb3eGzWX96ambVhx79F1n/uO7Z1OMWOcetXtelBlFaAcdPnzum3jSk084+7obf3bx1t21W7dymnJUcu99D1DvmYlnnPacv77s85f821V3PvSojdwdskDx/xNYirFoatMvjMF4j82zNi5SJcWknU5v0eAsKqBWRRBiVFXFjIem7MKAAkpMmlRY1LWogBBLVVaaFBURrLU4O55VVJif3a0+7yxfQDEpUTUtKMiNk9YFk2qaBlnk33BRvz2lhLaNC1oFtZm8kXGfTIxG1eUMSBmXijALA5t2/ziwKtJ2f5YtIG0T+P1O2h6oC6mCikkxpeXsgxILrfuFopmztjUxlITosgY0bsImVdUDCmqLZtoGS5qWs4lFVWJKmpT9MdCCDxr7qMWVz1LwQeVooKq638QWNqBlWSbns+ULSNtoepxpCNaOXzkYl1/T+G/LF5ACYlRVx8qx+08ypa1cp8cAiTJ+V8zub/+0PkhFFjsMWuQ4HhCxSVXa5qE9AEkFVSQtaxNDBMT8qoLsASeNLHdACIgkQO0j3wsbd1RDiLrsFSTGpAUFLbyWace52OzePcsbUFvWkIgsKOhALtZONhhVZBkDMhYVE0F0QT0LvghEjXXLO5IWMdC+t6v2fx7zIljr0rJWkBHDwti9ecT4S1tVRK3zScwyBhRTYH5uNv7qKdZm9ftNTJZxyRVV6qpUAbX2kYNUAkIy1kYxyxiQcx6f5UlEkjXtGN4BExMVY0M7RLVMAWV5jnM+GNMCOnCSGRCJSVPzaLaZlxwg7zxJNYiY8Mg0w7Y16bRjx47QhLCogBb155manibGOPDODhcSVbcwxOndIO/051YV3eUL6NhNx4F1W5qy+vepfvetubdrjDom+t1dR64/8uLjnvrM+7qZ5UuXXraY2eLirmu//kWM9VnX6QldJ08JIZgde+dv3zFf3bJj25bqbeeez2PrsfXY+s1dCpk+huH/XP8NSHUWeuzXo8QAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDc6MDE6MDcrMDA6MDCsjcIhAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDA3OjAxOjA3KzAwOjAw3dB6nQAAAABJRU5ErkJggg&#x3D;&#x3D;"
        />
      </figure>
    )
  }
)

RoundPushpin.displayName = 'RoundPushpin'
RoundPushpin.defaultProps = {}

export default RoundPushpin

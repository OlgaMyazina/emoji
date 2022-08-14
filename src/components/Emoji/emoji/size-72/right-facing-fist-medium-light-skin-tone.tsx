import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiRightFacingFistMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-right-facing-fist-medium-light-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdBSofOQYKJQAAAAZiS0dEAP8A/wD/oL2nkwAAD4xJREFUeNrtWnmQHOV1/73v6+6Z2dnZUxI6OITklSCAgIKoOAImARckMWDAYCcxqVRiG6oCrqScmApOnHJRIU5SFRMHcIwPCIdNmQIcH3FhLgnZsVA5QQkqLotDiEWrZc+5+viOlz+6e6ZndnZXKyRs8Lyqrt7t6Zn+vt/33u/93vsa6FrXuta1rnWta13rWte61rWuda1rXeta17rWtQM1ar+w82t/AVhTAGjAWqvY6MBEURBFgXYcD2d8+mu/mgA9++83Ij8wCB34J1itP8PWnMyW62BbYeZxgN9ky+MAjwM0xta+xcZUmLnM1lSCqalodNs2W1i2DBd/85n3HkCv/PBfQMBaa8y91piz2VqALdgymC3YWjAzg61ly4qtrYB5lplnwHaamfcx8ziYJwBMgfktBs+CUQXgA6iB4IPhg6DYWgNmNlpZNoYFEZRf56nRUX7w60/xESO9+J0rLhS5vn4SrieklIKElCByiQigdOhkAavAYGbLrJUxSvHOW/7NHnPR+bjg1kffPkB7Hrsd1lghHedmgG9ga8EAwAxmbp5jkBLA4jMsg61p/t/8jgI4YMAHIwIQgBAC5BNQBaEGQAFUASEiEAOIAITxdSYGcmAUQOghUB+ISgCKoHRhCQA0gAqYw2QhKgDXwCgDqIAwDWAajBlmngLzfmvNjKpV6zKXt5v+6AuLA7R3yx0AcByI/hPMx865izk5ceP/FuCYY0ATAAFOvsIAH+Ay8cKfE4mM17T9NjM4+X/uuJjBUACHbK0PYBaMV5n5GbbmCR3424c2HF8e+9l2nHb97XMfvXfLHQAJAHwdgC91Iu5FLQNcZvjNPyj9jOb8OrXfvxAPEHV4NHccxxygsgsZMwWs1mUTRVt1GNxSHd+31cnlzenX3dYG0NavAoAH4FsALj/4Zf4lteyiMSdrFYNljYFRCsqvj2m//jeqWr1L5nJ60x//Y+M7IjkfCeCkuYBQ6t+t1yhzgObe2+n6ITkOhmWbYyIhACFAUoIcB9Lz4Obz8IrFlU6+8AWZL1x+9OlnYvs/f2IOQO8DcFQb9E2P4QXGOd8cDsHc5o5noQcfxMOIQI4DJ5eHW+gZdnK5G1/58ZPrcr2lNoCYN4A5N//AYpdsPbC0Y9EJHwiTZ710IYzm8/J5flkISNeFcN1NMp+/6pQ//Die/uInY4Ds5CTAPAKA5oLALTHc2cMO9sD8KB7qSMsC1+kHkvATjkNCykt2fPmWYRKx7wgxMNAD4NgFwZgPuBYQ+dCFER/GfECdsyGAmJuE2OjmC8c5Xg7b/+kaCAC9YB5aEhidvItx4PcuCtI7AFTWk5KxEQmQkEMkxK85hQKcvAMB5jyAXk60wpzDNsqMRnpsmfCSAVgqKc/DeYtgu1TST/UUCQEQ1p908VUgQXBsPDlKRVSLcGufNBEoTZfJ59QprR5ykLKp9AA4nhfpWfA89AFOtCyt2nrLTaK0co11rNY2qWdaVWkngBKEswcvxpvzAkZLmGGn63Tgn/E8v5kpoTj1UhAYWJ4r9TtGqcixWtcAzDRrmjbJnnl4HKOUnAWE4zRAAtEBehMtjNFBhsiin2XoQkgJZKIAbeUIEYrS9TwSInJ0FFZgeS8wHzhJKBEBQkCkSlRIMADhOBBCoCVEFwKGDoA7ua2safPkdKJgboR945nJQmW7EWwMTBgiKM8AJFBauQrUVsNxJsQAKgDIsbVVRwe+tlpvJ+BqZhaNlU+Ky+ZcCSQFrJAQUkI4TtOzEk/K1jsdQaIlJBjuXAgbrWGVglEKbHQzPSfeDRKNeovZwioNHfioTExgYt8+HHPiiU0OTcbJc0m+l6QsAph0gtkZgHkLEb3OltfGQrWpWON5NslZOA7YcRqZLQVduG4DGM6SN1Fnkl0KSpkQsFpBBz6UX4f2fTBz7MXSAUkBIgFG7DVsDEwUojo9jVde3oOj37cOhf6BeHztC5guRHy9BFARAJyxl15EUKu9uHrDxjvA9vMA3LT3Qqn7ZnlHOpCuC+naTGpMwk/Kpvck7t84H4xM4c70Yo2B8usIy2VYYxoenfUMthZGRZiZmsGuF1/DEcuHsGzlEZ3HxG2LR1QkkQD0u198BNv+7g9Yh+GtbE0/M18LRj8ozlhCxKtCMgZHSA1rNKwxcNgivQ8kYkCljFebKI7zFrCWWirQHE5vyAwGwnoNyg8gnDjsKXlWGCmUKzVMTJdRrtYxU/Vx6snHQ3reAVEgEXqIxCAJggMA53z2Pjxyw8UVZv68dJzHCTibgRECrQfhKCHEkJAyLx0HwnEh3UyIxQEYg5jVSR1Je8kIdZQZQsatijDSeG3PKHKeCyIgVAaRthxZpkI+h/7+Eo5avQKvvb4PuZzXyjcLSwgJ8DCRjAECgAv/4XsA4N9z1SmPqiB8dPiY1Z6XyxUZWCOIRoSQJwhHnuy4+ng23pFsub/J/DEoaTaRrtuI8Tl8tJSQ6xBmlISTk8+j0NeHaV9hOF9Asb8PA30DGFw2yIV8HtJqMoGPeq0GemMsJnetGwtL7VooqwOJJAPLpJdrApTa1d/emfz1fJQ00afv/eipu4w2Dw+uWuHlegrLrbUjDvOZAM4n4HQA/Sk4TjL5QwZSG9kLihOF9HIoDQ3hjNNOQP8RK9G7fAW8Uh9ISqGDAP70FHyjEfoBZqs+dBTBRlGDvCGaPe4WgRwnKYLlNfn+/rkAdbKP3d/Y54oAjH7nT88ZvfTWJ7b86MYrb+0bGjoXRDcpolMbmgSZzJYVZAfLRw3ZEX9HSAnpuvCKvejp6wOIIFwPSJW9EABbhLUqatUq8rkcwiCIQdIq1lCLRZqg5RuuuBHiYHjgQ7dtA5ELq1Rl5KwzfxDWa3+iw/Cnyq9D+T5MFMIoBatUvFoda7uDLG5TuSHjTmCutw86DGCtbXiEVQq1qSlEocLak07CWeedBaU1VODD6jjBpEKTO9RiiQ09fP0Fefl2CPO+//o5Tgn34phNp45VpiZ3SiFPA+zqpoaiVn7quENB83sSdw6zrFImIaACH0JIeL0lAAx/ahLlt8axYv0IikPD6B0aBjPDn5lGoVSCky/EXJZ4pk07FjYOP9YaRkVvVKamH3pbAAHAg8+O4biJ53DR9dfvG33h+WeElKfD2lWx1swAk4BE89ZqtLSQS7ktEbJRrYpcXwlCSkS1Knr6B1AYGIT0PAjXRXFwEPWpKRgVIV/qg0zryKQUsdbG5wQgq9S4rlcffNsAAcAP9/q4eH0f8sXimyaKdoH5bDAvI2oFJpvpFi5qF9hiahN4KeeYKITVCl5vCW6hAK+nJxaPUsYc5TjIlUqYHh2F67pwi8UYoIb32BgcY2Ke0npGOs4DAofIzrrhLqgwhNtb+ok15tM6DN5Ufh068GFU1EizNkuQ7U23+WKLeWE+clzkSn2IajWE5VmQ44JcF0jASUEt9A1g+br1qM9Mw0RRsyHYwkU2GQHnjVaexCG0r//oGXxk8zr89Cc7dh955KoqAecB5KVlCpFoCbeD3gjMboVnOoEkBIKZaUjXg/S8jt6Z6y2hMDAAKSRExoOsTUIrOYxWs1Gtdt8hBQgA7n7yWXz2Y+ejMjW5K18s5sF8BhFJEq1issFHRIt7SltIpb2dds8jEXtMMDPVdERrE6XfbIdI142L7nj7OQktHRe3SsNqBRNF01H9MAAEAHc9uQvXXvobRkXqf4SQ6wg4UTS6kNSqhzoB1R5kmVBApkeOTLimdZqQDsAMf3oyDiNtkrdPbHx/Ssapp5im19g4e8FGCjqKxqO6f+9hAQgA7nxsJ6679MygWq3+r+s4mwEcKeJtlSZRz+MxjdDJEGjL0QZOeygJRwIkENUqUPU6TCIOOQVHKRgd67TGoRVsFMFEIXQUIgqClyb2v3W3g8NoQbWG4sDgbh0EnyGh7tbSX5vyEBiA44ASLUOp9O/AMdz2AkJHXsoATkLAKRQAMMJKGcH0VCwDektxRU+iQdDW6Fj3aA2rIugogg4DRH7w/J0PPDYpDydA33ji/3DFaWvxm399z+uvbn3wLSI6D4SedDLMNrO1jeQlrEw4tSndFt5JXt5qaarNSXJxyDEzapMTqM/OAtbGXhL40L4fN98CHyYMoIIAKvChwrBaqdT+/sLf2vzCYQUIAO576jmc7u/ESy+9/Nyy4cFpAs6C5R7uFEItHGMbb7ClYHD7uwForw7aeszJPWloT4yNY/+bYxDWwEYRVBhABzEwkR+DEwVBtVoLbn/htX13jo5NKMI7ZA996kLUKhVn7YaRD3n53Oek654oHJfSjBKLumQDoGMjvq2nRK0KnNJrnGw/WAtrLDghYR0GCKsVvLr7VezfP7lnzYqBl/M5r18Q5S2zttbMGGNfiJT+/uhk5YnenFP/xD3b8Y4BBAA3v38N/mrLG9h60++PuLnc1dJxLhVSjgjpFFKQ4tapbOElygLWlvXi9jAaGwzctsXD1sSN+yiA9n2EtSrGx8a//dSOXddsPHplbnig6EVKm8nZWm22XK3k8579y+8+t+R9hkNqD1xzLqqzZXHscRtXOZ63WUh5LgmxWUi5QUhnSDhSkJRxIz67UUki6Y+ngIkWfZN6Emc4y1oTk28YQgcBonodtXL58Z/v3nO54zrla7/1swXH6vwiALryK08BgAV2ju64+aMP79k9+h8r1izvl663QTjyHBLifBLiVCHFChIyfvs341VzjsYuzFztlL5mF2uceLvIGEOOlCTF4pXWLwSgrG2+8f4ELEw/dsMHn1a+/3RhcPjL0nOPF1J+gIT8oBDiZBKiSOnOyRywqFHGNDNk8rpyIgpTcFTcq5rZP132e3ryS3kH5JfLvnvdhdjxnSdwwccvG5aOeyZJcYWIPWsNCSmEkPE+WLrrIjI9qHTj0DLYxBrHRBEiv46gXkelWv/cyNo1N33je9vwpW2vvTsBytqTf3slIt/3csXejUKIi0mIS4QUJ5EQPaLNmxqhlgkxqxVUGCLyfQRBOD5drl1S6sk9fdm/Pvbu9aBO9v0/+wBq5TItW71mmXScc0nIDwtB55EQR5CQ1NoliD3IGgOtohigILT1ILpl6zMv3tDXk9c3P777vQVQag9few5Wbzwek2/szXv5/CYS4iNE4hIhxLEkSKZyidnG4aU0lFI2CKMHZ6r1Tw0Vc2OX3b7lgHee3tV2/yffDx1GcnDZ4LGu6/w2QFcAfBozF9kyGWOUMeb1MFLfnJip3jbY37v/kSd34M4Xa78aADXqvqs34/c+fBF+8MiPhxxH/roxZpO17GljXzba/Per+yZf6S3kzJ8/tBNd61rXuta194j9P5DS6FN7Jxf2AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA0LTI5VDA1OjQyOjI1KzAwOjAwQoWpvwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNC0yOVQwNTo0MjoyNSswMDowMDPYEQMAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

EmojiRightFacingFistMediumLightSkinTone.displayName =
  'EmojiRightFacingFistMediumLightSkinTone'
EmojiRightFacingFistMediumLightSkinTone.defaultProps = {}

export default EmojiRightFacingFistMediumLightSkinTone

import React, { forwardRef, ForwardedRef } from 'react'

export type Props = {}

const EmojiMermaidMediumLightSkinTone = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLElement>) => {
    const { ...otherProps } = props

    return (
      <figure ref={ref} {...otherProps}>
        <img
          alt="Emoji-mermaid-medium-light-skin-tone"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAB3RJTUUH5QQdASwyLYpZCgAAAAZiS0dEAP8A/wD/oL2nkwAAKK5JREFUeNrVfHeUZVWZ7+/be59wc+Wuqg7VGRo6kJqkOASJgoCBQRH0iQgYEMEBwQAYEFAQDIMi6Pgc9Ck4OCiOAioowpChG5quzt1V3ZXvrZtO3Ht/749btM6aeTOEHt6ab62zaq1a++5z7u9+8fd9+xD+h8qx3avx9sIqDKVlNyOcTk+IrEuACwoaJq0+OLkr2qfQRXVjsDkYtYu8efzD8j+96vvQ/0Rwrh34ADSbNiZztCvUcSC9IiOowyeQEqaWc7Aj76gJJi0CrWw9zgxuihs/LQhnZK2dxk+33fuK76X+JwHz2XlnwZIUAccHeiSu9KU4NucgU1AOiopERlnkHAFfYLUrBACFhiEME8V57Q6sb6aX97ul5NXc838EQFcMvA+eYCSMfhfm/QXXObfgiEUFRyArGXllkVcaWSnBkPAEI6+yACRkalBR1vMgTu8T4g5l8cIbDtCDn3knms0G8vk8QIRjvnj3HgPnCws/jFhqElq82UHyBUfwYUqQSE0KCAHfIXiCIInAUGhzHLjCwrJGwozAMhJrEead9qSz2GuYX8DwGwyQZQmdWjAcEMQeA+eaRRcin+0j3dxxSsrp9URcFb78JQnsX4BaVHIVUsswFvCdDDpcB4BGaIDIGgynCTaGAWpNg/F99s5Pvv3kk6tF8eiZ0QeKBBEKiOqd71v5nz7DHvk2G168C+/41v3wOx/vWHbkWGbykaNfv79Z+iFom2A62HGIYX2VkLQmn/PWFYU8uEOoBQXHR2gAy4y8clFQHppGo5KkqCQJBhtNvFCfxo5mA2NhDbXqqEhYf6Aj8W+WUD+ITbRPYuP/8jn2CEBKMS5ZSGps28SVaVT5dOebDvV51wdf154Z6yIj/R6H5GWuK4OMIwYyGu8rwJnnCVfExkBbRqebRbvrYDqNUYlTNLTBYL2BwXoNk7oO0ZmgsWI+whUr4Sm/lKfceYFptu8Itm/ZGQ6/QU6agEUr4ZZHG8tq4yNHYuvTm2nhb/83Vy8ElW591dtdveTD0MQOm+QCKejYHKT2waW8o8ghQqgTSACzMj56Mw7KSYRqmsCXFptrAbbGdYgejf32L8Ab6MEv5Hzs9HvQbgP4NofEJpt3NocrPX7PGxfFHBciTSCHNkxk5y3dclm64dSn4qFN6/56zT2f2genffVFPP+jE/adu3dXNDXmbF6y9z+AlvxlzecXnQu2nGUkHwDbTzigfE4o5JWCJwCJFEWX0Ov7KDgWQ0EDdZ2i5DA21QJs4xo6VzD2O2IJ+pYshHJ99O3aibs2/Aa/7z4cabtGYuP9l5SWzgXR5jdMgxgACfDELoPx7aP7dlP+I6XFx10aD7bH3l4/AwBMje7AS3cdh6HBLW/Ot9PblhzW9bFw7KwdF/QboQTlSyLbKaxYRsRnKqLTPKUKXZ6HWZ6PrDTISwlHaggkiK3GxkaMxGh4wmJTI8AWMYm+fQUOP/ZAdAwsACkHjekqGtUGDrXTeDEYQ6VuEEe1BeHsWQcIw28MQOT2g4RnbDIeRUGAiV0JssWRU7Hlsdutjp97eV2wsQu/+9njSJu8Lt/ufjFXyt7y7Y/nHvZIzHYFLRGS95ICczwh81kl0O656PU9ZCUDDDRtE9YYJMYi0hopYjRNgm3UQDq7iRX7dmDRimXomDcAkhJEBIDBBPhKocM2kX12GoWNO6bXHbxwvDQy/V8mRXsEIFk8BLLt8CQdu2unqb+EymSCviAoJcPru1u61ZLBiVPg7+Q24U/u1979h+lFKyZPO+x4/4Anf1YYK7refEtpF5GhnFDo9Qpo9wkeMSpxE5W4gcikYAsEJkGUq4BKAbyCQJxJMOVloZHHomL7bnDCMMIfnhqEkRI9Tg6FDTuR2WStNxUP7nfP8+sE0RsUxbreBlF5wLiZgZ/IzLzh6SkBC89l02wHh3jpH/K4aPGlELEi8vh013YcXh3uxMTQCFafFPQOzOP98g53lxxJBUeiw/MwL1OCRxZjYQ1DjTKGwyq2xg28lNQwiDJGi0Ogzhp65kqsOOpN0Bkfw1MjKM1f1PpJmJEKhTVbNiJCiDmrDoP33DRUJamFwvnltKemwmxmzzrpjXctebnAZQBY8u6NAIAPfPFD+MnFZyGbX/z4pAnuDBrly4Om4/bO8eZ27X8QvnvaIvRnc6Wmk5xDTJf4JOaK5hIxsulxLNkvdOfOE5ioSuQdBSEsCkogxgR2Bg2MBDXUOEWiCLEVSDVgAYAYxjAKhSKWzp2NOQsXgomQF4SUCGwtSvkszj/nDDiCMLVuI9LERcTyX1PGj12RsT/Ydfee06Bbz5yFXZsrWPdE5fAkEicvftcG8Ka/JIQxspioj2n4i35iZP/2yVGQV5q7HOVfqE2ThU6C9+WSl71+br5z/vxCu+xVc6kxDjTGm+iEi4GcxLycwEBGwEWMnc0GxpMA5HrI+HloOAgtIdJAEmUR1EqIUgMIAoxGh+eg03OQTE+A2YIdBd1soEsJZJo17Nw4hGYi1yZWfV7KzIhm+Yq+9ysGSGTmItg1icoUvaU+nXwElZOKQe0vmegHbv4eSLXB6TpuHTl9D06OGSSm7aAnfnP+ypzjXFrwMh/at9SdOaDUg2WFHBZ5XRD1Iio7A7iRhkspQh1hMo4wEmuwEihlikhIYiROMJVaBJqQsEJKLqqVXmwbmoVdowGSZh3WGDAzlHJgowjBzmGw1rDGIqhOY9dIMhTE7uXUXn/SsMSPx366hwHy+lC8hRElnW3Vsj6wsamyd7Mag//1uL8462wB8dD3U5Eb+GWjmW9URoOlw1tm39Hp5j+6NF/wupRAbOogTuBDwYvaUK01kTiEyPpIkQVEHkplUDGE9UGIzXGMChMiVkitghYKiSRoOKhPd+Dp5ySGNu2AiUNYrbHhxfV47LFn8Mjjz+O5515EVK+hOjE5Hkbh5T8dPea3Sb0LP9r1D3u+WCXZjrE7QOQvULXpDT3Tk8Exc09a88QdAAZXSNrCgu0td+HXt34XC+68fyzbvWh6cueWOYsX0H7OU0Vsqe7EVFCG4JY59HgKEZUQNMcA12JSKzSQomw1RkyIMmvEDoHJhY0NrDawQsIqBjFBGQtIRqWSxcMPlVHsHELvwgE0qjVsfHEdKtUali9fhqinFOsouHl49KW7vvHeH9iLfvynVxehX8mii5fehFxXjKd/uDHXszcdZfX0YW3tNf/g3jPWP1Y+6R1P8ZvfusUeOTCUX9yXfWTjoY1m8WSv4O3vuWsz85b24s9/1lg7sg3VpIG6jjGVhtgWhZimGmbNG8HGtA+/n5DY6CfY4RtMZQUiR8JGDBNopIahXcD6Eo5Q8KyChIIkAUUSU2XC6OgU+rotFu21EMv3W4n9Vu2LOT0daExM/Gh65/A1K5YNRGd954FXH6FfyaL+VfNRr87J+6XJAyFygxoLorHh8QO0SX5oIQdclXPybq6qpLPBI98oYee2Rbm2WrkDgd2EpI/QHNLwlANLElpJaKWgRQFJYhCVLCbyCtJhkAWQGKhaDBum0C5DZwSUI1FIHJRiB0QGMSWQQoHZwDBhcBDoeHgH/sY04eQKYMtIwwBO1teLTzhmgBphfsM/HboSoIVW64iNeThuVB8TUsUrP/jV1weQ3ToEAVHIeV6byPCvBc8+eWqicPLAgm2L1+T6oHQORZEr5Rxnta8UZ4QkBAbN+gI0KoPY6+C98OyzAikYJBiCGWwAjyyMNtDawKQWVjKYLUScIs5ZmHYFSIKfEIpNVe7S/p9yUh4TmGY+52QAYjR0ArYaBjJOrNpFRHNNFCnhusiUSkizXWdXA+/E7pznCcdtF0IokyZIms0J6WZutzq5fs33L6+G05M45JI7XqMG1bYhlZnyUGGRu+mhvRb4s8Z+1tm24M29/S+2z1++AM8/zkgRoaQL6HAL1BSM0XQClCmid6iJ+Sub1u90o8la6rBrHSKGUUBbqQlmiwmSJnGtdquxiyTVRsKyJ5SbkMhFgkqJGstZ94sFFp4ke9K8XAGOFKgmMepxAm2wrbdX/Hr1iUtnU1thfk5qKEmAX0AQsF909Rw35wNCgoQAOQpsuRvWXpKkSbU2tvOrfqFoX7MGpV47xp2OuJDWHzLknVDZIldx/8AzY10vHb7ysA3xM+O5TUPVqH+Ca+0+u37Kqa2J+nB/KNdUpty3LHF2ZQ97y/J77783mJSEvphtLuOZ0oKu8f2UQtIRhTc6O6JBJdK3wpiDXMhihmS2KDztkxrMC+fOlaWuidQmN/iSHSWA6SRG2djI8fDnd53Z98IBh3evClM6tJZKmpYFOEpAN2PkZYRCLgsICcwkkLAMoRSE43pCygszxbYHSYinX3fb55srvwYJEiN17bQfbAr5/AO37L3P0Gmz95tz5QVXrfiD55qFxop+SnTk1YJnjjxk3miWf/Xj5fvHRy0/+rgvfe/MgS/KiTF56Bdkv/I2XTj42EMfz2Sj351wzvL3rl9rp6+5eYUrQtuXg9tblL63Kts+f77rn1SQarEkO5DapKthIozrGMNRPJnmk3889fxZve39nSdCOCUAYKMRhAlMqiFgkS8WWmn/TN3FxsCmKaw1YGOgwxBxrXpzY3L0U36hZA666Dt7pi/23fPPhHBmHZyTj/7k4LeEzUWHdL0nrdgXneUNED2Dr7zvWhxxz5V44Z0HXdbft/36VUcf8li2a/nnaxMTy6fHx07btWHjYWNbto5292fP+/HXpu+/4ZcrMXDKGgwecRO2UIQcxN510ndMqPDwCkXQrKG1QYMtV4Etjqu/ee457ftnu3rfp7K5VjRmBlsLYgYzA8yw1u7+vzUGVqewxkBICZIKbDSSRn1j0qyfQkIO7n/+zXummi/2HoXegz785Ib73nfdumdf/Jrrl6+fu6zzYuDpTWw+DIgSAWfkcj/cOrbhibA2umnjar2p/tOpXaOl6dFRDmr156XAl1YcP//BszPDGDhlDQCg7CrM5rbcZipf8ZI3vc9mt/n72OExK4lVgljFYr1K6cHzzsgeLd3MmSSkBHOL1jAGbCzsDBg8oyXWMiAdWKNh4wg2iaG8DJycAjkulJ9ZaNL0bfMP+ZvBJ78RYfVfadHr6qx+77KbYNU8X1Tv/bue9hcvW7pPsL5vfu4eEmI0aOg5jen04KmRcPXg0zu727oEkSxN7dw09oC15gEh8XvJ2G4B1kM3omkNikL5s1y3R/jJuZv88pteylRulql5ZF5VBiCJjknYw64jje12Pyeb/7lbKC6Ung+SsuVbhAQbAxMFLbCsBQNwehdDtvUC1sAmIYLhTeDqGDJtbZCuB2sM0mb9j1Gt+g6h1NR+592051rPt3/6e4Dbn+PKby7IiucubmubmE1IOWyyCBpSh814O3Ew1dYeHnjgsavGe+e5X61OVG41VkRzjn+25dtW34TNYYhlueyygqNOZScuDGYm//Gi8aUvndb7KB751e0AgCe/cT503PAzbbO+6eVLH5KZDEAEYwEqdMLp6AcRIZ7aiXR8CDZoQHX3I7vwAAjpgghIkwhxs45weBO8aAp+sQiSCiaKqknQOFMq5zfN8hRWf/zbe4Yw+9B15+H71/y2qRZ98JZg+KGHG5Mbj0Q6MQCONWy4xs1MPLnPKvnBrWsbByVhoy+N8leODzWeFpL++PIezAIHtxVQT3lDZPnmamSSEwuH2a6nLgawFQDw1NffDSfXDqnoKOV6pwvXAcBIEwN0zEZm1gIIoWBMCpT6oA1QM8PIOjmgVoFyfTAzrE5hbApT7ERtaheUCuDk8hBKlaRUbw/Gdz3oFdv0bh90w9YGYspQJm0slmxGwNz45F6drwqkD151PADon/0zP+Uvw1ONhyuCgwrE1nfbUht7m9bGcxpVEiPbymhO17vSxByxZe34H1/430ux/JwNuOipi1/eysxc/z7cqgKS+s4OJ9v1UeG4nQBBJxqxFQApoF6BkApsLaLmNGq1KeyqVJCNmuhIQjheFmwNrNZgq2Etg5g5qldJuB5IEED0ZpUr9DNjx26A2BJcjvKG1ClGOP8IoPFatemMU3dbrAWAG982D7XOnjiu5x9OcqXT121J1PyOMrrnFJcdcuJiJ6jF6SvZ9/Ebz0YwvUtmOxZ8UCjnrSQEjDaIY41AeEASINYRYBkmjRAHdTQqY0iTENNxHbEOIRwHQhsgTQG2IKLJYhQ/mrrOCVZrVzgOQFgAolVCyh1PfuNCrL7oVqgZyriXiOYCaO7JoYNL79uBr79jEYjzvzGcrqlDHxDFU4hDvXPhaWvTZ29f/F/u8cdrzkCmsw/KKx4rHfcS4TieZSDVFo3Icp2jZuyXs8YkwoYBbNSEjUOkUYSgEYEBNNMQxvfgg+CzhTAGSJJ12TS93hTallmdLpGuAyFVXrn+kdWRXfflOjstAAgiAhHNBpABkGAPS8JL8MLmP2x24+hjMoyenkp6kIbp7JH7D8yWOvz/9LNr7/goupYdBiGdlV6x7UtOLt9H0kFiCPWEUE/Ei7Exl49F0+t2NMvYFU5jMgkwEUUImwH6rcE+xQLmWYIfxGhEMaaDCGkjhh+a8Yy1a9mY35g0AUBQfgZuofim9vkLerxiaYYwa6UQfWBoAOavmhB7RC6/5zYcspeD/dc9/bhvk8dizkNl3FOqk41j+T+517o7L4NwXFeicqqXL9zhldoOlH4WCStMJw7KkTMYpHTx6Rd+8e91bfpSJwx3ahCqBohTgy6hsHDJUsxdujf23nc5Dp4zDwd3dmNlRxeWtpUwu5grP/nte+pW67t1FE0yWwjXhfL9hU4mO6AyWbz0s2t2R7FOAAJGosU37GFRDtZc9oj1/njhVjcv0yS22UadiulE8O+15kdXQjkOrDGzVCb/ceV5F5ByO42xCLXAZKxQjmh9GqefmPvDq373m8k1kDb9syb5TCjV7ES5KHoe5g70I9/VDZISEkBbNoei1jBJjLA8ibBaLZ/4tU9hcnjnRpMmO8HcJZQCW5shoztIKMACAkwAUAJTJ8BqT0/l3fDELlQu2aKC4w9RE+Hc729zj7+t4SyhBcsX9kys3QoevWb32vU//QI864OE3E95mdull7mclNNptEGtqTHSdDASOc/XE33hxMWfvn/Tu69A1lO49557m4VsdrC/kMdePZ1YuGA+ch2dYAZsmsLMXNa2mEmjjQXzcLNagxAiFlI1hZyp9IkkGC4RQEQQMx0cAWA+gLY9aWJferKMGJ5IhXeoHal24V3XTKu+g39YcZdP1aaDY97+rS8WTFRutZT+6VoIR3pUdE6XrvsD6Xknk5AqiVNM1TS21zy9M/QfqKbivOGPXP6Qd8PVOPczX4FfyOFd7z2R3HxeesUi3HwBJCVMkkDHIXQcQYcRdBgibTaRBk3YNE3Y2hG2FmzSiISooAVOq6HETGztTKJIu/OPhWAsAWF8j1mWkgAjz+CjQNjsZFPESXP9NBY8NVF+6aA5W9fvHYXpk4N3XQFItYjAHyVB7yeSHWwMojjBZEC8K8pum9L+D+qGbu/JF0e+8d7zsfHu2/DULR8CyEO2NLBSKHWsdFyACFa3arKXK/i/FKspTJrAWlNjYAeYEVSmk/ys/jK9XO1zazGzAFu7u6sRgLkLzOfAWP+G9cGeUyPCLAJ1gRHYWUugZq+qh7L3gZF6d0d1onxUZeoteeG2fZgE3UVCfIKt7dBhiGotwlAVozsC99vjqXv6kPavTSBGzj33fdh4922o/fwEHHjR7fBcXiEd5+vS9ZYL1wWJVtuZpPi3l6AWUMYAlkfAdheYccLN92sSNAUSL4Np2VoDa2CthZoxsTJAFsxngPl3UO7PbljXwGX75F8fOMwAaC9mZoZpEhFQ3gQtCg9PJHMnJyfWnOL50/NA3v8CI6vjCFEzRC0Vk1Pa+1XZyO+Pa3rCF0F8/cUX7t727Es/j3MfzXQsf27Z3x7SllzQk5MrpFIQQkJIBek4IKf11ZJmo0WOKQWTxC0eiO1WtrYCQTDlZ/DCz++sEtAqbq1J2dqGnQFTgRkg7ASjCUYbLF+DONwlVOaRG16YxmXL214TNtc/U4XneRRF0ZsBHiWrNKSBLL8I4/RvqKu+JyarG0+Z7dtDiYSyqUalAVuJ5QOVVN80qRt/alOZ8IqLL9+957EX3YZyajCWyv0yLn12fVJ6m58p+sfMM1DTW2ZGcARIKQipYLVGfXQXsh1d8IrFGVaEAeD5Qv/ssDE6ih3/+ieQVBMz1kVWm8SmOgABy8/58oyTZt4FthVYBpj3Zra36ajxdkGeumFt/TVqDxBH8QIARwHYCLJY/YvzcOoijXMGNmb2zmu33PQoDXcqMCNhF+NJ7unAbf9od2nh/U0xFb7/41fv3u64T9wGIpadrno7g37kZIvvXHbAav/AI4/D3NXHw22fBbDFjAsBM4OIkO+eBTefnzEUBjMnzHZdVC7DzeWQBA1Ixykzs7Zaw6SJNkmcmKSVMwtmBoMnWiAx2DDY8jJmvs0afSWA3hsereOGl145UNc/XQVAHoALCbZbkF0vBKN/4TI0d4zI0DoX9ruNt9rpBLXJaVidohYYRFauSWli+3Q0jis/cfvu/U6++LvwJVxi8UFmfKdnVtfyk487GO9963IcurgdDesjzPZASAk2ukWWGdMaE27vgPS83T8amCtgbLLWwM3mWo5YqpjZGpPEMFGUWp3GVqczmbSxIKBirXmOrUFLiwBr9Sxm/iyAO7nIp1nDua88X8FXB//fDvyqP2zHLRs0mE0J4EsJfKEg3igED5FgGG2h8rlS3IiOdySpHr8EE+QQNSJUArKOTF8sBXtr+1fJ6nGfuAMpuaqZ2POFUtcv3Wug7x0nHoK3ruhDV1ZgcCzEQy9N4YVJiVhjhlWcuawBrAWMBRvdYhiBSQtMWEbLoYMAgmu1FiaOYdKkbo1uWNNiPJQ1BiLVBoQ/Mov/RVZ4BGpRA0Y7EupoJnsgiH4pXe8WtvTMDS8F9rJl2b8kg2vqICLJlnua1elDCPR+IhwPcAaE38sAtZ29HQiDJtzGWHU6M/txJdrelJm1CLY2iWriwwjxhETwS+OO4MzzPgcAOOETd8AvZRHVw9OFVJ/r6+9pf8vBy3DEXp0QzHh6Rx3PbxzD+sFtQHkIflsFi7szIKlgpYQwM0pjLKxuaZa2Zkdk4rISotWDcz3oRjyAJHGtNWBra2xsE6IV1dQVyztx/ZoJEOMxwGwEYzkMgUAwSQzhKkBwybJ+nxDqcBBfC2l+dMO6RkKGlIVdnCbxwcpxV4NxGIC9QZSbYT3GQfywyRLOWfM5RG0KW2lfI21wa5zk91ei/UgHHkUhpixPX8VRuklnWtrztk/+A2KdoFlprGDC57q6O7rfcvBeOHKvbrBhPL69isfX7sDGTdtRmaxAGomH4hyKTg3dJYYigLhFVrA2MHGEsNnEaCPafP7aTcG3l3ejnfoRVctzSIiT2RLYWDDzDra2KV4GCDPhDYJ3gMVvAbOcjICUEnHahJIuAIk0iSGls5CE/Gor4pkHGeIitvYsNnYuJDtsWw5SSgWwBQQ/zcTrZvoueHBiJQRbXIFjNt2OX1wIoy/Qla0nYurZTiqvC0g6+PCdrcxaWwNJsguCrvZ9b8W+S+fisKXdiLTGo4NTeG79MDZv3oHqdB1xM4QEYUNUwm9J46CgjoFS2Bq9BRDHCYbrCXY2JSajnl1fWZTyXvMWAMS+AH2KpDwMRIAxIKJ1HUuXJNNbt/0FIJtaCEmWYe8movcwo58sgUggDpvI5Ivg1CAJAnjZXLux6SdB9LcS9DYTpw5rCyjARDGIBCAAZhuA8BMbiZp0Lf68qRPzeAeGxFz6PD2KcO2Ng3Mf2H7JjpNW/5Gs+b4y8QEgfuTWM4Bf9N0BKaST6PSjAuLt/f2dOGL/+ch6Dh5ZP4FnXxrC5i0tcHSogZQBwUi0g3VTnag2Cb1TDZAIIGARGQc12wktuyMjshsq6QIcjGEAdDIJ8QEikjOtswaInq3v2rU7CxcAcOXqPugkgY7CZ4zV91gyYMtwXQ9pFCCNIyjlIJyuttQ1SlfrMDmVtXHiWhNkARMl0FECSRIwFrD8e2vtfSCLy/bvBgDUqQDDggPr8ba9b8bQSasZMvuoKS5cbzPdb1LTjSyMgOMoaKNPlEJ8rJDPqUULemEl4cG1I3h+w05s37FrBpwUaRgB1sKmGrCMJBIYqrTjmeFurB1ux/M7O7Fteg4CMwfK75kolLoHF/VkIJTMwdqz0igqWWNebi6OkhDrAcJ+5934b0n7zx46D198dHuik+Q7ynGOYqJ9BAS8bAaNqUmUentg0hSNqSlYbSkOQrheFkkQwuvtQVitIVPIA5bB4F0gfJ1SUWbRqn4/8qmL/33z8Z1A530YH/rkOb+z2b5TrLtz7rb8kYNpahYy82eklF29szrQ2VXE5uFpbB+qYHRkEtXpOtIohYlSCABSEGABSQQYhtUM1grWtqZCXM9HNluAl81sIM8d2r9tDGx5kU6SVc3J8a25zq7Zbr7ggjFIRCMEgfV3fwppIv7thFlUb+Jbp1/yAoBrIOwog+FmshCSUB0bg+M6GNuwBbte3IBda9Zj6Om1aI6XUR+dhABBkgBbjoj5ZpB9GGBccWj3/zMtOP/nwLbPXM6w6YM2M8uyn115Z+etDrP9hBBidTaXQaGUw8h4DZu2jGNkdBwTE1OIoxg6Slth+6+6qbAWghnEDNEqq+C5LrLZDNysj0zGf8pbtaLWLmpgtqvYGquT5NK40XiejQEJsdGCw8Arg9CiO/5N2+fLx++DL//rMFjzz+HDBex1AM3Od3dgcusQotoUGpNlNCfKYG0BCNgkheu6KLS1wabGkKDvk8R3YMlcfkT3f5lU+kO/hnXb1pps/zr4XctXxL8RCTJnu66iUjEPgkBlso5arYmJiTLCIIKONNhYSBKQxBAMKCFaTtYyrNYtzZIC0lHI5nKQjmoa8J/l2uc5jcfgzpnVLh3nnwn4Fx1Hy02arHYy2XFXeFbqLjgqgJX/weGuzxw6BzKjDIh/AsL5DPssmLnQ1Ymk0UTSaO7OKVhrJI0mTJIiDWLL2vwUxn7BxLZ++RE9ryjrFkGMvb/1pyllgt9P+/NXEZurhRTt2YwPR0nUqg1MlauYmJhCsxHAJBo6SkDcSgqJAWLb4o5NKzFsFZ4MpRS8TAZexodSatCCn9FM8LvaAOBO4ThfgKBIJ/Fg3GykbG0+2DkEEgIL3/k1LDvjuv94iPOKA/pATMYGfB+A98DydwVRNd/VDuU6L/MmICJYYxDV6wjr9X+xli+PmsEYzCtn3VYNbcBjHzsBaWPqyUF5yMKIM3srKZGdGfJuNkNMV2poNAKkcYo0TMGmZVIEhqSWDxK2FXHYGMiZuiuTySCXzwNSQErxYL6rMOIohVXnfQ0mTaYyvbOqpd7+VY6fOT9pNqVJk0WFxXt5r2h44dMH9gEAvvLY0KBQ8hKw/ZPjOpfl2ksrkmYo4mYIJsAYjbBWH6xPTX12Yvv24e6BAVx99qJXfnBu+e3oDtZg2l+yikktUMqB77mwzKg3A4RBiGYzhE40dJiCUwPBaPkb4pbmWAurDYSxuzXImTGtbDYLkmLKWPvrxkjVXnf5Ka0UNjWob9vRmzSbnzVpWhVKXZ8GwQEkRM5qHb/iMeArDpsLDsNw+ZGLfuwq+a5MNvP32VIhVI4Day2klLBp8lxtcmp93Gji+rP3e3VTpMKinFu+zJD3d9pSXgoB13VgjEHYDBEEEXSqEddD6Cht1VYzJuVIAbIMaVvmJeyMowZQyBfgZ7OQSkIJ8XvD9um/PjdijYbRaTUJg6uY+UNge0tYnb6/MT5GzanJ1za88MnbHoTre/npsfLnK6NTF9emqk6xVERHZ8f21Jj3txdyDw+Pl/F/bjjrFe13zEe/CzBnGLiJiC4gEDzPhVIK1hokaQqdaqTNBHEj3B2dJBGUADxHwqYpFHNLs2wLOM910TOrD9lSAeSKUeWq92hjHnrv0Qdh/zfP/XfP8S+XnARrGcpVigQZAHzcdfe+tumOj33tV3B8t3N6rPzd8lTlnUZbLFo4ANf3n56qVP9uaNfYH4vFvPn5jef8p/scff7fQyeJcDL+uQB9ja0tkiA4rgNBBGst0iRFEsRImwmsNpBEIDZwlYSjCA4JcJpCGgaZFueccV2U2ttRbGuHl80YKL7O+snV0ir9lSvf9epPMr3aDzxx/49x0BHvDjO+t40NH9tsNNuSVGN276z+XC57tOPIbBBHQ6WFh1X3ffM7sPmp+/4DcG4FGI50nfcy+MsEdAkpWgXyzPEBa0wrU27GgLYQ3HpYRS3NEcwgYyC0BYyGQMsfFQoFtLV3QCgHQtLDniOupFRVr/3cO1/bUa/X8qG3nnYu5gz0jzQrDSLiIytT0yqKYiyYP7fU3l76GwLemvH9jiRO68W5hzZGNsYaNIAlJ54tV77lXZ1EWEGCLiKiTzuO6iEAtsVLtVTaMnSYIq5H4NS0gGALJQDXVVAEKAtAa0jLYJNCgJHL5VBsa0c2k4WUYisJvjho6Bf8DOHhP/zstR6mfG3yd9f/ClLKUr3a/PbU1NRZ09U6emf3YsXyfVBsK6JSrdnJcmWkWm+uDZN4exhFaZLqPJiXMmExg7qEEMIYA2MM0jQFLMNqCx2l0LsHMQHBDMcRcB0JRdQyK2aw1pDMILbwMz56umZB+T6Ucic9V1x8wWcm7/zBjR343FV/+3pOm742+fS19yEIIzhK7dsMgh9Nlcv715sBsrkc5i8YwMCCucjms4hTjWYQoN4MEIQRwjhu/Q0jxEmCJE6gtZ7pghqkzRhp2PI5rUhFUErAdxVgZyKV1lAzkUiAkctkUSi1o1QoASTKDHyuWBTfiyKkX77htYPzukfwLvvCP6M8VUGpvXRis9H8zlS5PK/WCGEMI1vIoaevBx1dHXB9F6k2COO4BVYjQBTHSJJ0t89JwxRJM4ZNUtDMVIWjBDxXQUlq5T5Gg6xplRRsIYVAzs+go60TyvXhKDUihbwGgn4ARvKVm8/cE+eVX59c8YV70d7eRmPjE+8JguCmqanKrHoQIo410tRAOgpePgPlKjARzEzHwRgLa1rmlIQJbNoqE6QAHCWglIDrKMiWg4JkBqwBWQNCq/Yq5YvIZPLI+llISS9Y0Gccoe5jtubab56FPSF7ZFLhss/fA6UcGcfRWVEYXlep1vrqjSbiRCMOE8RRCmN4ZtIGLVKNMFOJt6KPlNQCxpFwHAkpqOVvrIG0drc5EYBCJotMJod8tgApZeQKfW9Wxl/+7DfvXnPjJWfh0pvO24ON4T0kV171z1COkkEQnhpH8ZcajeayaqOOOE2hU4M00UhjDZ1qWMN4OWRJ2dIWpSSUI6GEgMAMdQuGNRqy1btD1vPheRkUcgVI5Vgl5aAvzTezPPGThP3pq468GHTGnp3c2aOzLp+5+pdo6+qg8eGR/VOdXhFF8dsazWYmCAOkWsO0yDTsHpyyLZ0iQsvHzEQk4r/UVIIIWc+D5/nIZ/IQ0rGOktuIcDeBf9ju0frYWHv1Nz6I/w7Z46/ouvarv8Xw0CTyhUybTvS7U52enybJyiiKnCiKkKYJtGkNBrRAsruLQp4pQKUQcJQD3/XgOC58x4MUKlFCrmfYe6SgnzsSL1mG/sq3PoD/Tvlve4fZZ6/5FfLFHE2MTM4xxrzdWnuqNWal0brLWCNbAxR293kKSYTWJK6AkhKChFWkGgTsFETPgvl+IeghR4khbdje8O1z8EbIf/tL3i7+9F2YUIxeLUpW2yXMvD8RlgO8gEAd1lqHmMlorZWQhq2tKiG3aq3Xw+IlQdgsCaMmRexkCNfdcjbeSHlD34L3kc/+HD2aUJUsHFDWaJMFsyQGaa2NImFhbOQKJyCrjRYurv/6O/H/U/4vVJ0T/Y4lNhcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjlUMDE6NDQ6NDQrMDA6MDDvOrFdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI5VDAxOjQ0OjQ0KzAwOjAwnmcJ4QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII&#x3D;"
        />
      </figure>
    )
  }
)

EmojiMermaidMediumLightSkinTone.displayName = 'EmojiMermaidMediumLightSkinTone'
EmojiMermaidMediumLightSkinTone.defaultProps = {}

export default EmojiMermaidMediumLightSkinTone

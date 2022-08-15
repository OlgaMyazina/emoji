import React from 'react'

import Emoji from './index'

import { AllEmojiNames } from '../../constants/allName'

import styles from './styles.module.scss'

const Emojis =
  (isBigSize = false) =>
  () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleCopyIcon = (emoji: string) => () => {
      const writeValue = ` <Emoji name="${emoji}" />`
      navigator.clipboard.writeText(writeValue).then(() => {
        console.log('Copied', { writeValue })
        alert('Copied')
      })
    }

    return (
      <div className={styles.EmojisWrapper}>
        {AllEmojiNames.map((emoji) => {
          return (
            <div
              className={styles.EmojisWrapper__Emoji}
              key={emoji}
              onClick={handleCopyIcon(emoji)}
            >
              {isBigSize ? (
                <Emoji name={emoji} size={32} />
              ) : (
                <Emoji name={emoji} />
              )}
              <p className={styles.EmojisWrapper__Title}>{emoji}</p>
            </div>
          )
        })}
      </div>
    )
  }

export const EmojisWithUsualSize = Emojis(false)
// @ts-ignore
EmojisWithUsualSize.mdxSource = AllEmojiNames.map((emoji) => {
  return `<Emoji name="${emoji}" />\n`
}).join('')

export const EmojisWithBigSize = Emojis(true)
// @ts-ignore
EmojisWithBigSize.mdxSource = AllEmojiNames.map((emoji) => {
  return `<Emoji name="${emoji}" size="32" />\n`
}).join('')

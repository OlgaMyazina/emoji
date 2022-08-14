import { forwardRef, lazy, Suspense, useMemo } from 'react'
import cn from 'classnames'

// Constants
import { AllEmojiNames } from '../../constants/allName'

import styles from './styles.module.scss'

export type Name = typeof AllEmojiNames[number]

export type Props = Omit<
  JSX.IntrinsicElements['figure'],
  'name' | 'size' | 'tone'
> & {
  /** Название иконки */
  name: Name
  /** Размер */
  size?: string | number

  /** Тон */
  tone?:
    | 'dark-skin-tone'
    | 'light-skin-tone'
    | 'medium-dark-skin-tone'
    | 'medium-light-skin-tone'
    | 'medium-skin-tone'
}

const Emoji = forwardRef<HTMLImageElement, Props>((props: Props, ref) => {
  const { className: cls, name, size = '16', tone, ...otherProps } = props

  if (!name || !AllEmojiNames.includes(name)) {
    throw Error(
      `The "name" property of Icon must be one of: ${AllEmojiNames.toString()}`
    )
  }

  const formatSize = typeof size === 'string' ? parseInt(size, 10) : size

  const sizeFolders = formatSize < 71 ? 'size-72' : 'size-160'

  let emojiName = name
  const checkName = `${name}-${tone}`

  if (
    tone &&
    !name.includes(tone) &&
    AllEmojiNames.includes(checkName as Name)
  ) {
    emojiName = checkName as Name
  }

  const className = cn(styles.Emoji, cls)

  const Emoji = useMemo(
    () => lazy(() => import(`./emoji/${sizeFolders}/${emojiName}.tsx`)),
    [name, size, tone]
  )

  return (
    <Suspense fallback={<span />}>
      <Emoji
        ref={ref}
        {...otherProps}
        style={{ height: size, width: size }}
        className={className}
      />
    </Suspense>
  )
})

Emoji.displayName = 'Emoji'

export default Emoji

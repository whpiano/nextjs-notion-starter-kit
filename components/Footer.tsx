import * as React from 'react'
import { FaTwitter, FaGithub, FaWeixin,FaDonate, FaWeibo, FaZhihu,FaQq,FaUserFriends,FaTelegram   } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright © 2021 {config.author} · All rights reserved. Based on <a href={`https://notion.so`} target='_blank'>Notion</a>.</div>

      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title='Tottle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.weixin && (
          <a
            className={styles.linkedin}
            href={`${config.weixin}`}
            title={`微信 ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWeixin />
          </a>
        )}
        {config.weibo && (
        <a
            className={styles.linkedin}
            href={`https://weibo.com/${config.weibo}`}
            title={`微博 ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWeibo />
          </a>
        )}
        {config.zhihu && (
          <a
            className={styles.linkedin}
            href={`https://weibo.com/${config.zhihu}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
          </a>
        )}
        {config.qq && (
          <a
            className={styles.qq}
            href={`http://wpa.qq.com/msgrd?v=3&uin=${config.qq}&site=qq&menu=yes`}
            title={`QQ ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaQq />
          </a>
        )}
        {config.qqun && (
          <a
            className={styles.qq}
            href={`${config.qqun}`}
            title={`QQ群 ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaUserFriends />
          </a>
        )}
        {config.telegram && (
          <a
            className={styles.telegram}
            href={`https://t.me/${config.telegram}`}
            title={`Telegram ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTelegram />
          </a>
        )}
        {config.donate && (
          <a
            className={styles.donate}
            href={`${config.donate}`}
            title={`打赏 ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaDonate />
          </a>
        )}
      </div>
    </footer>
  )
}

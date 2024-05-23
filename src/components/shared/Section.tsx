import classNames from 'classnames/bind'
import styles from './Section.module.scss'
import React from 'react'

const cx = classNames.bind(styles)

function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: React.ReactNode
}) {
  return (
    <section className={cx(['container', className])}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      {children}
    </section>
  )
}

export default Section

import classNames from 'classnames/bind'
import { ReactNode } from 'react'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

const Section = ({
  title,
  children,
  className,
}: {
  title?: ReactNode
  children: ReactNode
  className?: string
}) => {
  return (
    <section className={cx(['container', className])}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      {children}
    </section>
  )
}

export default Section

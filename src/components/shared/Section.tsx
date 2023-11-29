import classNames from 'classnames/bind'
import { ReactNode } from 'react'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

const Section = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <section className={cx(['container', className])}>{children}</section>
}

export default Section

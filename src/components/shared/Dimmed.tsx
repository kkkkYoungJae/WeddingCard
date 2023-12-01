import classNames from 'classnames/bind'
import { ReactNode } from 'react'
import styles from './Dimmed.module.scss'

const cx = classNames.bind(styles)

interface DimmedProps {
  children: ReactNode
}

const Dimmed = ({ children }: DimmedProps) => {
  return <div className={cx('dimmed')}>{children}</div>
}

export default Dimmed

import './App.css'

import classNames from 'classnames/bind'

import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  return (
    <div className={cx('container')}>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  )
}

export default App

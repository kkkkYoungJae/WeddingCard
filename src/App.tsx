import AttendCountModal from '@components/AttendCountModal'
import Calendar from '@components/sections/Calendar'
import Contact from '@components/sections/Contact'
import Heading from '@components/sections/Heading'
import ImageGallery from '@components/sections/ImageGallery'
import Intro from '@components/sections/Intro'
import Invitation from '@components/sections/Invitation'
import Map from '@components/sections/Map'
import Share from '@components/sections/Share'
import Video from '@components/sections/Video'
import { Wedding } from '@models/wedding'
import FullScreenMessage from '@shared/FullScreenMessage'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [count, setCount] = useState(0)

  // 1. 데이터 호출
  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.log(e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <FullScreenMessage type="loading" />
  }

  if (error) {
    return <FullScreenMessage type="error" />
  }

  if (wedding === null) return null

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <button style={{ position: 'fixed', top: 0 }} onClick={() => setCount((prev) => prev + 1)}>
        +{count}
      </button>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      <Share groomName={groom.name} brideName={bride.name} date={date} />
      <AttendCountModal wedding={wedding} />
    </div>
  )
}

export default App

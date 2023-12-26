import Section from '@shared/Section'
import classNames from 'classnames/bind'
import { useState } from 'react'
import ImageViewer from '../imageViewer'
import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles)

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx > -1

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, index) => (
            <li
              key={index}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(index)
              }}
            >
              <picture>
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img src={`${src}.jpg`} alt="photo" />
              </picture>
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer images={images} open={open} selectedIdx={selectedIdx} onClose={handleClose} />
    </>
  )
}

export default ImageGallery

import generateImageUrl from '@/utils/generateImageUrl'
import Dimmed from '@shared/Dimmed'
import classNames from 'classnames/bind'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './ImageViewer.module.scss'
import './swiper.css'

const cx = classNames.bind(styles)

const ImageViewer = ({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open?: boolean
  selectedIdx: number
  onClose: () => void
}) => {
  if (open == false) {
    return null
  }

  return (
    <Dimmed>
      <CloseButton className={cx('icon-close')} onClose={onClose} />
      <Swiper spaceBetween={20} slidesPerView={1} loop initialSlide={selectedIdx}>
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source
                srcSet={generateImageUrl({
                  filename: src,
                  format: 'webp',
                })}
                type="image/webp"
              />
              <img
                src={generateImageUrl({
                  filename: src,
                  format: 'jpg',
                })}
                alt="photo"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </Dimmed>
  )
}

const CloseButton = ({ onClose, className }: { className: string; onClose: () => void }) => {
  return (
    <svg className={className} id="Layer_1" viewBox="0 0 200 200" onClick={onClose}>
      <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z" />
      <path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z" />
    </svg>
  )
}
export default ImageViewer

const generateImageUrl = ({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) => {
  return `https://res.cloudinary.com/dsplx6dbw/image/upload/${option}/v1701397051/${format}/${filename}.${format}`
}

export default generateImageUrl

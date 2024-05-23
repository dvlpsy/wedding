// filename = wedding_01
// format = jpg | webp
// option = c_fill, w_400

function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: {
  filename: string
  format: 'jpg' | 'webp'
  option?: string
}) {
  return `https://res.cloudinary.com/dv6y2jwjp/image/upload/${option}/v1716425123/${format}/${filename}.${format}`
}

export default generateImageUrl

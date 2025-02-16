import imagemin from 'imagemin'
import imageminPngquant from 'imagemin-pngquant'

export default function imagePlugin() {
  return {
    name: 'vite-plugin-image',
    async transform(code, id) {
      if (/\.(png|jpe?g)$/.test(id)) {
        const optimizedBuffer = await imagemin.buffer(
          Buffer.from(code),
          {
            plugins: [
              imageminPngquant({
                quality: [0.6, 0.8]
              })
            ]
          }
        )
        return {
          code: optimizedBuffer,
          map: null
        }
      }
    }
  }
} 
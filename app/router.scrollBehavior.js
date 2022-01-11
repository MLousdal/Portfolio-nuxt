export default function (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash,
      offset: { y: 90 },
      behavior: 'smooth',
    }
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ x: 0, y: 0, behavior: 'instant' })
    }, 190)
  })
}

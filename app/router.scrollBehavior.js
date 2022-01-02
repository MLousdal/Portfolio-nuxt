export default function (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash,
      offset: { y: 90 },
      behavior: 'smooth',
    }
  }
  if (from.path === '/' && to.path === '/') {
    console.log("here")
    return {
      x: 0,
      y: 0,
      behavior: 'smooth',
    }
  }
}

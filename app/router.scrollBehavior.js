export default function (to, from, savedPosition) {
  if (to.hash) {
    console.log(to.hash)
    return {
      selector: to.hash,
      offset: { y: 90 },
      behavior: 'smooth',
    }
  }
}

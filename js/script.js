function startClock() {
  const clockElement = document.getElementById('live-clock')
  function updateTime() {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    clockElement.textContent = `${hours}:${minutes}`
  }
  setInterval(updateTime, 1000)
  updateTime()
}
document.addEventListener('DOMContentLoaded', startClock)

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('drawer-open')
  const closeBtn = document.getElementById('drawer-close')
  const drawer = document.getElementById('mobile-drawer')
  const backdrop = document.getElementById('drawer-backdrop')

  const toggleDrawer = isOpened => {
    if (isOpened) {
      drawer.classList.add('is-active')
      backdrop.classList.add('is-active')
      document.body.style.overflow = 'hidden' // Запрет прокрутки сайта под меню
    } else {
      drawer.classList.remove('is-active')
      backdrop.classList.remove('is-active')
      document.body.style.overflow = ''
    }
  }

  if (openBtn && closeBtn && drawer && backdrop) {
    openBtn.addEventListener('click', () => toggleDrawer(true))
    closeBtn.addEventListener('click', () => toggleDrawer(false))
    backdrop.addEventListener('click', () => toggleDrawer(false))
  }
})

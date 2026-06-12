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

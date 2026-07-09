export default defineNuxtPlugin(() => {
  const loadAnalytics = () => {
    if (document.querySelector('script[data-website-id]')) return

    const script = document.createElement('script')
    script.src = 'https://api.stage.codewithbeto.dev/script.js'
    script.defer = true
    script.dataset.websiteId = 'a5a38b06-22c6-4e51-ba27-cce4f9f8b57f'
    document.head.appendChild(script)
  }

  const schedule = () => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadAnalytics, { timeout: 4000 })
    } else {
      setTimeout(loadAnalytics, 3000)
    }
  }

  if (document.readyState === 'complete') {
    schedule()
  } else {
    window.addEventListener('load', schedule, { once: true })
  }
})

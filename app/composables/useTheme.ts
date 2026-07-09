const STORAGE_KEY = 'theme'

export type Theme = 'light' | 'dark'

export const themeScript = `(function(){var k='${STORAGE_KEY}';function g(){try{var s=localStorage.getItem(k);if(s==='dark'||s==='light')return s}catch(e){}return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}function a(t){var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(t);r.style.colorScheme=t;try{localStorage.setItem(k,t)}catch(e){}window.dispatchEvent(new CustomEvent('themechange',{detail:t}))}function t(){a(document.documentElement.classList.contains('dark')?'light':'dark')}a(g());window.__toggleTheme=t;document.addEventListener('click',function(e){if(e.target.closest('[data-theme-toggle]')){e.preventDefault();t()}},true)})();`

export function useTheme() {
  const theme = useState<Theme>('theme', () => 'light')

  function syncFromDom() {
    if (!import.meta.client) return
    theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  }

  function toggle() {
    if (import.meta.client && typeof window.__toggleTheme === 'function') {
      window.__toggleTheme()
      syncFromDom()
    }
  }

  onMounted(() => {
    syncFromDom()
    window.addEventListener('themechange', (event) => {
      theme.value = (event as CustomEvent<Theme>).detail
    })
  })

  const isDark = computed(() => theme.value === 'dark')

  return { theme, isDark, toggle, syncFromDom }
}

declare global {
  interface Window {
    __toggleTheme?: () => void
  }
}

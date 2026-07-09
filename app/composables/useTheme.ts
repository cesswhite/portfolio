const STORAGE_KEY = 'theme'

export type Theme = 'light' | 'dark'

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'dark' || stored === 'light' ? stored : null
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(theme)
  localStorage.setItem(STORAGE_KEY, theme)
}

export function useTheme() {
  const theme = useState<Theme>('theme', () => 'light')

  function setTheme(next: Theme) {
    theme.value = next
    if (import.meta.client) {
      applyTheme(next)
    }
  }

  function initTheme() {
    if (!import.meta.client) return

    const stored = getStoredTheme() ?? getSystemTheme()
    setTheme(stored)

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      if (getStoredTheme()) return
      setTheme(event.matches ? 'dark' : 'light')
    })
  }

  function toggle() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const isDark = computed(() => theme.value === 'dark')

  return { theme, isDark, toggle, initTheme }
}

export const themeInitScript = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var t=s==='dark'||s==='light'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.add(t)}catch(e){}})();`

<template>
  <a
    :href="href"
    :target="target"
    :rel="rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)"
    class="font-sans text-xs text-zinc-900 dark:text-zinc-100 p-0 hover:underline underline-offset-2"
  >
    <slot>{{ label }}</slot>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  label?: string
  target?: string
  rel?: string
}>()
</script>

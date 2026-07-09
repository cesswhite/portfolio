<template>
    <div class="relative min-h-dvh bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Noise />
        <Header />
        <main class="flex min-h-dvh items-center justify-center px-4">
            <slot />
        </main>
    </div>
</template>

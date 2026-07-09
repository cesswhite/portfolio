<template>
    <div class="relative w-full min-h-dvh h-auto bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
        <Noise />
        <Header />
        <div class="pointer-events-none relative z-20 flex h-screen w-full items-center justify-center">
            <div class="pointer-events-auto">
                <slot />
            </div>
        </div>
    </div>
</template>

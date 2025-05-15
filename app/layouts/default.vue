<template>
    <div class="relative w-full min-h-dvh h-auto bg-dark-50 dark:bg-dark-950 overflow-hidden">
        <Noise />
        <Header />
        <div class="h-screen w-full flex items-center justify-center relative z-20">
            <slot />
        </div>
    </div>
</template>
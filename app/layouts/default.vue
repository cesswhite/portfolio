<template>
    <div class="relative flex min-h-dvh flex-col">
        <Noise />
        <Header />
        <div class="flex flex-1 items-start justify-start px-6 pt-[12vh] sm:items-center sm:justify-center sm:px-4 sm:pt-0">
            <slot />
        </div>
    </div>
</template>

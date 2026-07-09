<template>
    <div class="noise-bg opacity-100 dark:opacity-60 z-10" />
</template>

<style scoped>
.noise-bg {
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    background: transparent url("/noise-transparent.webp") repeat 0 0;
    background-repeat: repeat;
    animation: bg-animation 3s steps(10) infinite;
    pointer-events: none;
}

@keyframes bg-animation {
    0% {
        transform: translate3d(0, 0, 0);
    }

    10% {
        transform: translate3d(-5%, -5%, 0);
    }

    20% {
        transform: translate3d(-10%, 5%, 0);
    }

    30% {
        transform: translate3d(5%, -10%, 0);
    }

    40% {
        transform: translate3d(-5%, 15%, 0);
    }

    50% {
        transform: translate3d(-10%, 5%, 0);
    }

    60% {
        transform: translate3d(15%, 0, 0);
    }

    70% {
        transform: translate3d(0, 10%, 0);
    }

    80% {
        transform: translate3d(-15%, 0, 0);
    }

    90% {
        transform: translate3d(10%, 5%, 0);
    }

    100% {
        transform: translate3d(5%, 0, 0);
    }
}

@media (prefers-reduced-motion: reduce) {
    .noise-bg {
        animation: none;
    }
}
</style>

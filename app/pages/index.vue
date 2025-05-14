<template>
    <NuxtLayout name="default">
        <div class="h-screen w-full flex items-center justify-center">
            <AppInfo />
        </div>
    </NuxtLayout>
</template>

<script setup>
useSeoMeta({
    title: "Céss White | UI/UX Developer & Designer",
    ogTitle: "Céss White | UI/UX Developer & Designer",
    description: "Specialised in websites & web apps, focus on minimalism",
    ogDescription: "Specialised in websites & web apps, focus on minimalism",
    ogImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/cess-white-og-image.webp",
    twitterCard: "summary_large_image",
    ogUrl: 'https://cesswhite.com/',
    twitterImage: "https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/cess-white-og-image.webp",
    twitterCard: "summary_large_image",
    twitterTitle: "Céss White | UI/UX Developer & Designer",
    twitterDescription: "Specialised in websites & web apps, focus on minimalism",
    ogImageWidth: 1200,
    ogImageHeight: 630,
});

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg'
        }
    ]
})
</script>
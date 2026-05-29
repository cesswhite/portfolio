<template>
    <NuxtLayout name="default">
        <Info />
    </NuxtLayout>
</template>

<script setup lang="ts">
const siteUrl = 'https://cesswhite.com/'
const title = 'Céss White | UI/UX Developer & Designer'
const description =
    'Céss White is a UI/UX developer and designer based in México, specialising in minimalist websites and web applications for brands that value clarity and craft.'
const ogImage =
    'https://res.cloudinary.com/dpvsklksg/image/upload/ecov4/cess-white-og-image.webp'

const sameAs = [
    'https://ecostudios.dev/',
    'https://github.com/cesswhite/',
    'https://www.youtube.com/channel/UCrLXsqIkrCsRawK2R3HEmbQ',
    'https://www.linkedin.com/in/cesswhite/',
    'https://x.com/cesswhite_',
]

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: siteUrl,
    ogType: 'website',
    ogSiteName: 'Céss White',
    ogLocale: 'en_US',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    twitterCreator: '@cesswhite_',
    robots: 'index, follow',
})

useHead({
    htmlAttrs: {
        lang: 'en',
    },
    link: [
        {
            rel: 'canonical',
            href: siteUrl,
        },
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/icon.svg',
        },
        {
            rel: 'me',
            href: 'https://github.com/cesswhite/',
        },
        {
            rel: 'me',
            href: 'https://x.com/cesswhite_',
        },
        {
            rel: 'me',
            href: 'https://www.linkedin.com/in/cesswhite/',
        },
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebSite',
                        '@id': `${siteUrl}#website`,
                        url: siteUrl,
                        name: 'Céss White',
                        description,
                        inLanguage: 'en',
                    },
                    {
                        '@type': 'Person',
                        '@id': `${siteUrl}#person`,
                        name: 'Céss White',
                        url: siteUrl,
                        jobTitle: 'UI/UX Developer & Designer',
                        description,
                        email: 'acessloop@gmail.com',
                        address: {
                            '@type': 'PostalAddress',
                            addressCountry: 'MX',
                        },
                        sameAs,
                    },
                    {
                        '@type': 'ProfilePage',
                        '@id': `${siteUrl}#profilepage`,
                        url: siteUrl,
                        name: title,
                        description,
                        mainEntity: {
                            '@id': `${siteUrl}#person`,
                        },
                        isPartOf: {
                            '@id': `${siteUrl}#website`,
                        },
                    },
                ],
            }),
        },
    ],
})
</script>

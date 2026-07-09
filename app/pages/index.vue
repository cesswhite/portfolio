<template>
    <NuxtLayout name="default">
        <Info />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { siteConfig, siteUrl } from '~/config/site'

const {
    title,
    description,
    bio,
    experience,
    ogImage,
    ogImageWidth,
    ogImageHeight,
    ogImageAlt,
    twitterSite,
    locale,
    language,
    sameAs,
    knowsAbout,
    worksFor,
    services,
    faqs,
    name,
    email,
    lastUpdated,
} = siteConfig

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogImageWidth,
    ogImageHeight,
    ogImageAlt,
    ogUrl: siteUrl,
    ogType: 'profile',
    ogSiteName: name,
    ogLocale: locale,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    twitterImageAlt: ogImageAlt,
    twitterSite,
    twitterCreator: twitterSite,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
})

useHead({
    htmlAttrs: {
        lang: language,
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
            rel: 'alternate',
            type: 'text/plain',
            href: '/llms.txt',
            title: 'LLM context',
        },
        {
            rel: 'alternate',
            type: 'text/markdown',
            href: '/about.md',
            title: 'About (Markdown)',
        },
        {
            rel: 'alternate',
            type: 'text/markdown',
            href: '/experience.md',
            title: 'Experience (Markdown)',
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
                        name,
                        description,
                        inLanguage: language,
                        publisher: {
                            '@id': `${siteUrl}#person`,
                        },
                    },
                    {
                        '@type': 'Organization',
                        '@id': `${worksFor.url}#organization`,
                        name: worksFor.name,
                        url: worksFor.url,
                        founder: {
                            '@id': `${siteUrl}#person`,
                        },
                    },
                    {
                        '@type': 'Person',
                        '@id': `${siteUrl}#person`,
                        name,
                        url: siteUrl,
                        image: ogImage,
                        jobTitle: 'UI/UX Developer & Designer',
                        description: bio,
                        email,
                        address: {
                            '@type': 'PostalAddress',
                            addressCountry: 'MX',
                        },
                        knowsAbout,
                        hasOccupation: {
                            '@type': 'Occupation',
                            name: 'UI/UX Developer & Frontend Engineer',
                            occupationalCategory: 'Software Development',
                            skills: experience.strengths.join(', '),
                            description: experience.summary,
                        },
                        worksFor: {
                            '@id': `${worksFor.url}#organization`,
                        },
                        sameAs,
                    },
                    {
                        '@type': 'ProfessionalService',
                        '@id': `${siteUrl}#service`,
                        name: `${name} — Enterprise UI/UX & Frontend`,
                        url: siteUrl,
                        description: experience.summary,
                        provider: {
                            '@id': `${siteUrl}#person`,
                        },
                        areaServed: 'Worldwide',
                        serviceType: services,
                        knowsAbout: experience.industries,
                    },
                    {
                        '@type': 'ProfilePage',
                        '@id': `${siteUrl}#profilepage`,
                        url: siteUrl,
                        name: title,
                        description,
                        datePublished: '2025-05-07',
                        dateModified: lastUpdated,
                        mainEntity: {
                            '@id': `${siteUrl}#person`,
                        },
                        isPartOf: {
                            '@id': `${siteUrl}#website`,
                        },
                    },
                    {
                        '@type': 'FAQPage',
                        '@id': `${siteUrl}#faq`,
                        url: `${siteUrl}faq.md`,
                        dateModified: lastUpdated,
                        mainEntity: faqs.map((faq) => ({
                            '@type': 'Question',
                            name: faq.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.answer,
                            },
                        })),
                    },
                ],
            }),
        },
    ],
})
</script>

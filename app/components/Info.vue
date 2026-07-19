<template>
    <div class="flex flex-col items-start sm:items-center w-full">
        <header class="flex flex-col items-start sm:items-center text-left sm:text-center">
            <h1 class="text-sm font-sans text-zinc-900 dark:text-zinc-100">Céss White</h1>
            <p class="text-xs font-sans text-zinc-900 dark:text-zinc-100">
                UI/UX Developer/Designer based in México.
            </p>
            <p class="text-xs font-sans text-zinc-900 dark:text-zinc-100">
                Specialised in websites and web apps, focus on minimalism.
            </p>
        </header>
        <nav aria-label="Social and contact links" class="flex flex-col sm:flex-row gap-2 items-start sm:items-center mt-4">
            <SiteLink href="https://ecostudios.dev/?ref=cesswhite" label="[My Studio]" target="_blank" />
            <SiteLink href="https://youtu.be/jvLL0v-dlx0?ref=cesswhite" label="[My Music]" target="_blank" />
            <SiteLink href="https://open.spotify.com/artist/2YtwRcqtcCzgpP38CzeflE?ref=cesswhite" label="[Spotify]"
                target="_blank" />
            <SiteLink href="https://music.apple.com/mx/artist/c%C3%A9ss-white/6785069095?ref=cesswhite"
                label="[Apple Music]" target="_blank" />
            <SiteLink href="https://github.com/cesswhite/?ref=cesswhite" label="[GitHub]" target="_blank" />
            <SiteLink href="https://www.youtube.com/channel/UCrLXsqIkrCsRawK2R3HEmbQ?ref=cesswhite" label="[YouTube]"
                target="_blank" />
            <SiteLink href="https://www.linkedin.com/in/cesswhite/?ref=cesswhite" label="[LinkedIn]" target="_blank" />
            <SiteLink href="https://x.com/cesswhite_?ref=cesswhite" label="[X]" target="_blank" />
            <SiteLink
                href="mailto:acessloop@gmail.com?subject=Hello%20Céss%20White&body=Hello%20Céss,%20I%20am%20interested%20in%20your%20work.%20I%20would%20like%20to%20know%20more%20about%20your%20services.%20Thank%20you.%20Best%20regards.%20"
                label="[...]" />
        </nav>
        <section aria-labelledby="working-on-heading" class="flex flex-col items-start sm:items-center">
            <h2 id="working-on-heading"
                class="text-xs font-sans text-zinc-900 dark:text-zinc-100 mt-4 font-normal">
                Working on
            </h2>
            <nav aria-label="Current projects" class="flex flex-col sm:flex-row gap-2 items-start sm:items-center mt-2">
                <SiteLink href="https://codewithbeto.dev/?ref=cesswhite" label="[codewithbeto]" target="_blank" />
                <SiteLink href="https://www.landinuxt.com/?ref=cesswhite" label="[landinuxt]" target="_blank" />
                <SiteLink href="https://www.ecosdepachuca.com/?ref=cesswhite" label="[ecos de pachuca]" target="_blank" />
                <SiteLink href="https://v420.ecostudios.dev/?ref=cesswhite" label="[v4.20]" target="_blank" />
            </nav>
        </section>
    </div>
</template>

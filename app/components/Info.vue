<template>
    <main class="flex flex-col items-center">
        <header class="flex flex-col items-center text-center">
            <h1 class="text-sm font-family-inter text-dark-900 dark:text-dark-100">Céss White</h1>
            <p class="text-xs font-family-inter text-dark-900 dark:text-dark-100">
                UI/UX Developer/Designer based in México.
            </p>
            <p class="text-xs font-family-inter text-dark-900 dark:text-dark-100">
                Specialised in websites and web apps, focus on minimalism.
            </p>
        </header>
        <nav aria-label="Social and contact links" class="flex gap-2 items-center mt-4">
            <UButton to="https://ecostudios.dev/?ref=cesswhite" label="[My Studio]" target="_blank" variant="link"
                color="neutral" size="xs" class="font-family-inter p-0" rel="noopener noreferrer" />
            <UButton to="https://youtu.be/jvLL0v-dlx0?ref=cesswhite" label="[My Music]" target="_blank" variant="link"
                color="neutral" size="xs" class="font-family-inter p-0" rel="noopener noreferrer" />
            <UButton to="https://github.com/cesswhite/?ref=cesswhite" label="[GitHub]" target="_blank" variant="link"
                color="neutral" size="xs" class="font-family-inter p-0" rel="noopener noreferrer" />
            <UButton to="https://www.youtube.com/channel/UCrLXsqIkrCsRawK2R3HEmbQ?ref=cesswhite" label="[YouTube]"
                target="_blank" variant="link" color="neutral" size="xs" class="font-family-inter p-0"
                rel="noopener noreferrer" />
            <UButton to="https://www.linkedin.com/in/cesswhite/?ref=cesswhite" label="[LinkedIn]" target="_blank"
                variant="link" color="neutral" size="xs" class="font-family-inter p-0" rel="noopener noreferrer" />
            <UButton to="https://x.com/cesswhite_?ref=cesswhite" label="[X]" target="_blank" variant="link"
                color="neutral" size="xs" class="font-family-inter p-0" rel="noopener noreferrer" />
            <UButton
                to="mailto:acessloop@gmail.com?subject=Hello%20Céss%20White&body=Hello%20Céss,%20I%20am%20interested%20in%20your%20work.%20I%20would%20like%20to%20know%20more%20about%20your%20services.%20Thank%20you.%20Best%20regards.%20"
                label="[...]" variant="link" color="neutral" size="xs" class="font-family-inter p-0" />
        </nav>
        <section aria-labelledby="working-on-heading" class="flex flex-col items-center">
            <h2 id="working-on-heading"
                class="text-xs font-family-inter text-dark-900 dark:text-dark-100 mt-4 font-normal">
                Working on
            </h2>
            <nav aria-label="Current projects" class="flex gap-2 items-center">
                <UButton to="https://codewithbeto.dev/?ref=cesswhite" label="[codewithbeto]" target="_blank"
                    variant="link" color="neutral" size="xs" class="font-family-inter p-0" rel="noopener noreferrer" />
                <UButton to="https://www.landinuxt.com/?ref=cesswhite" label="[landinuxt]" target="_blank"
                    variant="link" color="neutral" size="xs" class="font-family-inter p-0" rel="noopener noreferrer" />
                <UButton to="https://www.ecosdepachuca.com/?ref=cesswhite" label="[ecos de pachuca]" target="_blank"
                    variant="link" color="neutral" size="xs" class="font-family-inter p-0" rel="noopener noreferrer" />
                <UButton to="https://v420.ecostudios.dev/?ref=cesswhite" label="[v4.20]" target="_blank" variant="link"
                    color="neutral" size="xs" class="font-family-inter p-0" rel="noopener noreferrer" />
            </nav>
        </section>
    </main>
</template>

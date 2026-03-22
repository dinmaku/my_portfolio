<template>
  <section class="py-32 bg-surface" id="skills">
    <div class="max-w-7xl mx-auto px-8">

      <!-- Section Heading -->
      <div class="text-center mb-20 reveal-up">
        <div class="font-label text-secondary uppercase tracking-[0.3em] font-bold mb-4">
          02 / Skillset
        </div>
        <h2 class="font-headline text-5xl font-bold tracking-tight">
          Engineered to Build.
        </h2>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

        <!-- Tech Stack Card -->
        <div class="md:col-span-2 bg-surface-container p-8 rounded-3xl border border-outline-variant/5 flex flex-col justify-between hover:bg-surface-container-high hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 reveal-up">
          <div>
            <h3 class="font-headline text-2xl font-bold mb-6">Tech Stack</h3>
            <div class="flex flex-wrap gap-3">
              <div v-for="tech in frontendTech" :key="tech" class="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-xl border-l-2 border-primary hover:bg-surface-bright transition-colors">
                <span class="font-label text-sm">{{ tech }}</span>
              </div>
            </div>
          </div>
          <span class="material-symbols-outlined text-4xl text-primary/20 self-end mt-8">layers</span>
        </div>

        <!-- UI/UX Design Card -->
        <div class="bg-surface-container p-8 rounded-3xl border border-outline-variant/5 group hover:bg-surface-container-high hover:scale-[1.02] hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500 reveal-up [transition-delay:100ms]">
          <span class="material-symbols-outlined text-3xl text-secondary mb-4" data-weight="fill">brush</span>
          <h3 class="font-headline text-xl font-bold mb-2">UI/UX Design</h3>
          <p class="text-sm text-on-surface-variant mb-6">Figma, Adobe Photoshop, Adobe Illustrator, Prototyping.</p>
          <div class="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
            <div class="bg-secondary h-full w-[95%] transition-all duration-1000 group-hover:w-full"></div>
          </div>
        </div>

        <!-- Backend / Architecture Card -->
        <div class="bg-surface-container p-8 rounded-3xl border border-outline-variant/5 group hover:bg-surface-container-high hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 reveal-up [transition-delay:200ms]">
          <span class="material-symbols-outlined text-3xl text-primary mb-4">database</span>
          <h3 class="font-headline text-xl font-bold mb-2">Architecture</h3>
          <p class="text-sm text-on-surface-variant mb-6">PostgreSQL, Draw.io (UML & ERDs), Database Normalization.</p>
          <div class="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
            <div class="bg-primary h-full w-[88%] transition-all duration-1000 group-hover:w-full"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      frontendTech: ['Vue.js', 'TailwindCSS', 'Flask', 'Laravel', 'Git']
    }
  }
}
</script>

<style scoped>
.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.reveal-up.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
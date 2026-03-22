<template>
  <section class="py-32 bg-surface-container-lowest" id="projects">
    <div class="max-w-7xl mx-auto px-8">

      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal-up">
        <div class="max-w-xl">
          <div class="font-label text-primary uppercase tracking-[0.3em] font-bold mb-4">03 / Works</div>
          <h2 class="font-headline text-5xl font-bold tracking-tight">Recent Projects.</h2>
        </div>
        <router-link 
          to="/all-projects" 
          class="font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group"
        >
          View All Projects
          <span class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">open_in_new</span>
        </router-link>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div 
          v-for="(project, index) in projects" 
          :key="index" 
          class="group relative bg-surface-container-low rounded-[2rem] overflow-hidden border border-outline-variant/5 reveal-up reveal-parent"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <!-- Image -->
          <div class="aspect-[16/10] overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.alt" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
          </div>

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent opacity-90"></div>

          <!-- Project Content -->
          <div class="absolute inset-0 p-10 flex flex-col justify-end">
            <div class="translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
              <div class="flex gap-2 mb-4">
                <span 
                  v-for="(label, i) in project.labels" 
                  :key="i" 
                  :class="['text-[10px] uppercase font-label px-3 py-1 rounded-full border', label.bgClass, label.textClass, label.borderClass]"
                >
                  {{ label.name }}
                </span>
              </div>
              <h3 class="font-headline text-3xl font-bold mb-3">{{ project.title }}</h3>
              <p class="text-on-surface-variant text-sm mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 reveal-on-hover translate-y-4">
                {{ project.description }}
              </p>
              <a 
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                :class="['inline-flex items-center gap-2 font-bold group/btn reveal-on-hover opacity-0 translate-y-4 w-fit', project.buttonClass]"
              >
                Visit Website 
                <span class="material-symbols-outlined text-sm transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1">open_in_new</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          title: 'RedCarpet Wedding Services',
          description: 'A full-featured event booking landing platform with user authentication, supplier viewing, and book tracking.',
          image: new URL('../assets/images/prj1.png', import.meta.url).href,
          alt: 'Modern dark analytics dashboard UI design',
          labels: [
            { name: 'Saas', bgClass: 'bg-primary/20', textClass: 'text-primary', borderClass: 'border-primary/20' },
             { name: 'VueJS', bgClass: 'bg-white/10', textClass: 'text-white', borderClass: 'border-white/10' },
            { name: 'Flask', bgClass: 'bg-white/10', textClass: 'text-white', borderClass: 'border-white/10' }
          ],
          buttonClass: 'text-primary',
          link: 'https://eims-client-frontend.vercel.app/'
        },
        {
          title: 'Events Information Management System',
          description: 'A management console designed to help staff and administrators manage event bookings, track customer data, and monitor scheduling efficiently.',
          image: new URL('../assets/images/prj2.png', import.meta.url).href,
          alt: 'Abstract mobile e-commerce application interface',
          labels: [
            { name: 'SaaS', bgClass: 'bg-secondary/20', textClass: 'text-secondary', borderClass: 'border-secondary/20' },
            { name: 'VueJS', bgClass: 'bg-white/10', textClass: 'text-white', borderClass: 'border-white/10' },
            { name: 'Flask', bgClass: 'bg-white/10', textClass: 'text-white', borderClass: 'border-white/10' }
          ],
          buttonClass: 'text-secondary',
          link: 'https://redcarpetadmin.vercel.app/ '
        }
      ]
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
.reveal-on-hover {
  transition: all 0.5s ease;
}
.reveal-parent:hover .reveal-on-hover {
  transform: translateY(0);
  opacity: 1;
}
</style>
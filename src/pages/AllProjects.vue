<template>
  <div class="bg-surface text-on-surface font-body min-h-screen">
    <main class="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <nav class="mb-12">
        <router-link 
          to="/" 
          class="flex items-center gap-2 text-on-surface-variant/60 hover:text-primary-container transition-colors font-label text-sm uppercase tracking-widest"
        >
          <span class="material-symbols-outlined text-sm">arrow_back</span>
          Back to Home
        </router-link>
      </nav>

      <section class="mb-20">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div class="max-w-2xl">
            <span class="font-label text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portfolio / 2026</span>
            <h1 class="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-6 leading-[0.9]">
              Recent <span class="text-primary-container text-glow">Projects</span>
            </h1>
            <p class="text-on-surface-variant text-lg leading-relaxed max-w-lg">
              A collection of projects where I applied my skills in full-stack development and UI/UX design. Each one reflects my growth in building functional, user-focused applications.
            </p>
          </div>
        </div>
      </section>

      <section class="mb-16">
        <div class="flex flex-wrap items-center gap-3 p-1 bg-surface-container-low rounded-2xl w-fit">
          <button 
            v-for="filter in filters" 
            :key="filter"
            @click="activeFilter = filter"
            :class="activeFilter === filter ? 'bg-primary-container text-on-primary shadow-lg' : 'text-on-surface-variant hover:bg-surface-container-highest'"
            class="px-6 py-2.5 rounded-xl text-sm font-label font-bold tracking-wider uppercase transition-all"
          >
            {{ filter }}
          </button>
        </div>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          :class="{'md:mt-12': index % 2 !== 0}"
          class="group relative flex flex-col bg-surface-container-low rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
        >
          <div class="aspect-[16/10] overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 z-10"></div>
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute top-6 left-6 z-20">
              <span class="bg-surface-container/80 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-label font-bold tracking-widest uppercase border-l-2 border-primary-container">
                {{ project.category }}
              </span>
            </div>
          </div>

          <div class="p-8 relative">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-3xl font-headline font-bold group-hover:text-primary-container transition-colors">{{ project.title }}</h3>
              <span class="material-symbols-outlined text-primary-container opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">arrow_outward</span>
            </div>
            <p class="text-on-surface-variant mb-8 line-clamp-2">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 bg-surface-container-highest rounded-lg text-xs font-label text-on-surface-variant">
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  data() {
    return {
      activeFilter: 'All',
      filters: ['All', 'SaaS', 'Mobile', 'UI/UX Design'],
      projects: [
        {
          id: 1,
          title: 'Red Carpet Wedding Services',
          description: 'A full-featured event booking landing platform with user authentication, supplier viewing, and book tracking.',
          category: 'SaaS',
          tags: ['Vue.js', 'Flask', 'PostgreSQL'],
          image:  new URL('../assets/images/prj1.png', import.meta.url).href
        },
        {
          id: 2,
          title: 'AppRhitis',
          description: 'A high level prototype mobile application that simulates the prevention of Osteoarthritis primarily with Elder People.',
          category: 'UI/UX Design',
          tags: ['Figma', 'Photoshop', 'Illustrator'],
          image: new URL('../assets/images/project_3.png', import.meta.url).href
        },
        {
          id: 3,
          title: 'Events Management Information System',
          description: 'A management console designed to help staff and administrators manage event bookings, track customer data, and monitor scheduling efficiently.',
          category: 'Saas',
          tags: ['Vue.js', 'Flask', 'PostgreSQL'],
          image: new URL('../assets/images/prj2.png', import.meta.url).href
        },
        {
          id: 4,
          title: 'WorkSpace',
          description: 'A project management system for a small team to manage their projects and tasks.',
          category: 'SaaS',
          tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
          image: new URL('../assets/images/prj3.png', import.meta.url).href
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'All') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.activeFilter);
    }
  }
}
</script>

<style scoped>
.text-glow {
  text-shadow: 0 0 20px rgba(255, 154, 0, 0.3);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
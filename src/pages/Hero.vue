<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
    <!-- Background Glow -->
    <div class="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-secondary-container/20 blur-[120px] rounded-full"></div>
    <div class="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-primary-container/10 blur-[100px] rounded-full"></div>

    <div class="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">

      <!-- Text Content -->
      <div class="md:col-span-7 animate-fadeInUp">
        <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface-container-highest/50 backdrop-blur-md mb-6 border border-outline-variant/10">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span class="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
            Available for projects
          </span>
        </div>

        <h1 class="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8">
          Crafting <span class="text-transparent bg-clip-text bg-gradient-to-tr from-primary-container to-secondary-container">Digital</span> Structures.
        </h1>

        <p class="font-body text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed opacity-90">
          Dean, a recent Software Developer with an interest in full-stack development and UI/UX design. I focus on building clean, functional applications while continuously learning to improve performance, usability, and design.
        </p>

        <div class="flex flex-wrap gap-4">
          <router-link 
            to="/all-projects" 
            class="bg-primary-container cursor-pointer text-on-primary-fixed px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary-container/20"
          >
            View All Projects
            <span class="material-symbols-outlined">arrow_forward</span>
          </router-link>

          <button 
            @click="downloadCV()" 
            class="px-8 py-4 rounded-xl cursor-pointer font-bold text-on-surface border border-outline-variant/20 hover:bg-surface-container-high hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Download CV
          </button>
        </div>
      </div>

      <!-- Image / Floating Stats -->
      <div class="md:col-span-5 relative animate-fadeInUp [animation-delay:200ms] group cursor-pointer">
        <!-- Red-Wine Glow Behind the Image Wrapper -->
        <div class="absolute inset-0 bg-[#722f37] opacity-0 group-hover:opacity-40 blur-3xl rounded-3xl transition-opacity duration-700 pointer-events-none transform group-hover:scale-105"></div>
        
        <div class="aspect-square rounded-3xl overflow-hidden bg-surface-container relative animate-float shadow-2xl transition-transform duration-700 z-10">
          <img 
            alt="Dean Portfolio Photo" 
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" 
            src="../assets/images/2.png"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  emits: ['view-projects', 'download-cv'],
  data() {
    return {
      
    }
  },
  methods: {
    downloadCV() {
      const link = document.createElement('a');
      link.href = "./assets/Dean Mark Belano - Resume.pdf";
      link.download = 'Dean Mark Belano - Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  }
}


</script>

<style scoped>
/* Optional additional scoped animations if needed */
</style>
<template>
  <nav class="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(145,11,1,0.06)]">
    <div class="flex justify-between items-center px-8 py-10 max-w-7xl mx-auto">
      
      <!-- Logo / Brand -->
      <div class="text-2xl font-black tracking-tighter text-[#FF9A00] uppercase font-lowercase ">
        dn.
      </div>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8 font-plus-jakarta text-md font-bold tracking-tight">
        <a 
          :class="linkClass('home')" 
          @click.prevent="scrollToSection('home')" 
          href="#home"
        >Home</a>
        <a 
          :class="linkClass('about')" 
          @click.prevent="scrollToSection('about')" 
          href="#about"
        >About</a>
        <a 
          :class="linkClass('skills')" 
          @click.prevent="scrollToSection('skills')" 
          href="#skills"
        >Skills</a>
        <a 
          :class="linkClass('projects')" 
          @click.prevent="scrollToSection('projects')" 
          href="#projects"
        >Projects</a>
      </div>

      <!-- Contact Button -->
      <button 
        @click="$emit('open-contact')" 
        class="bg-primary-container text-md cursor-pointer text-on-primary-fixed px-6 py-2.5 rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-300 hover:bg-primary"
      >
        Contact Me
      </button>

      <!-- Mobile Hamburger -->
      <button @click="isMobileOpen = !isMobileOpen" class="md:hidden ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#FF9A00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Mobile Menu -->
      <div v-if="isMobileOpen" class="absolute top-full left-0 w-full bg-[#131313]/90 backdrop-blur-lg md:hidden flex flex-col items-center gap-6 py-6">
        <a 
          v-for="link in links" 
          :key="link.id" 
          :class="mobileLinkClass(link.id)" 
          @click.prevent="scrollToSection(link.id); isMobileOpen = false" 
          href="#"
        >{{ link.label }}</a>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  emits: ['open-contact'],
  data() {
    return {
      isMobileOpen: false,
      activeSection: 'home',
      links: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
      ],
    }
  },
  methods: {
    linkClass(section) {
      return [
        'transition-all duration-300',
        this.activeSection === section ? 'text-[#FF9A00] border-b-2 border-[#FF9A00] pb-1' : 'text-[#DAC2AD] hover:text-[#FFC183]'
      ]
    },
    mobileLinkClass(section) {
      return [
        'text-lg font-bold transition-colors duration-300',
        this.activeSection === section ? 'text-[#FF9A00]' : 'text-[#DAC2AD] hover:text-[#FFC183]'
      ]
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
        this.activeSection = sectionId
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 100
      for (const link of this.links) {
        const section = document.getElementById(link.id)
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          this.activeSection = link.id
        }
      }
    })
  }
}
</script>

<style scoped>
</style>
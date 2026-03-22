<template>
  <main class="pt-10">
    <!-- Removed class="reveal-up" from root elements because sections manage their own internal reveal animations -->
    <Hero id="home" />
    <About id="about" />
    <Skills id="skills" />
    <Projects id="projects" />
    <CTA id="contact" />
  </main>
</template>

<script>
import Hero from './Hero.vue';
import About from './About.vue';
import Skills from './Skills.vue';
import Projects from './Projects.vue';
import CTA from './CTA.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    About,
    Skills,
    Projects,
    CTA,
  },
  mounted() {
    setTimeout(() => {
      // Intersection Observer for reveal animations
      const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve after revealing to prevent re-triggering and jitter
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Re-added .reveal-parent and .reveal-on-hover that were mistakenly removed
      document.querySelectorAll('.reveal-up, .reveal-parent, .reveal-on-hover').forEach((el) => {
        observer.observe(el);
      });
    }, 250); // Increased timeout to 250ms to ensure Vue Router has fully attached the DOM
  },
};
</script>

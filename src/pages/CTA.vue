<template>
  <section class="py-32 bg-surface">
    <div class="max-w-4xl mx-auto px-8 text-center reveal-up">
      <div class="p-12 md:p-20 rounded-[3rem] bg-gradient-to-tr from-surface-container-low to-surface-container-highest border border-outline-variant/10 relative overflow-hidden group">
        
        <!-- Background Glow -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 blur-[80px] group-hover:bg-primary-container/20 transition-colors duration-700"></div>
        
        <!-- CTA Content -->
        <div class="relative z-10">
          <h2 class="font-headline text-5xl font-bold mb-8 group-hover:scale-[1.01] transition-transform duration-500">
           Looking to bring ideas to life?
          </h2>
          <p class="text-on-surface-variant text-lg mb-12">
           I’m a recent full-stack developer eager to collaborate and learn. Let’s turn your concept into a working application.
          </p>
          <div class="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="mailto:[deanmark.belano@gmail.com]"
              class="bg-primary-container text-on-primary-fixed px-10 py-5 rounded-2xl font-bold hover:scale-105 hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-primary-container/20"
            >
              Start a Conversation
              <span class="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CtaSection",
};
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
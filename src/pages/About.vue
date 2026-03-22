<template>
  <section class="py-32 bg-surface-container-low relative reveal-up" id="about">
    <div class="max-w-7xl mx-auto px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-40 items-center">

        <!-- Text Content -->
        <div class="space-y-8">
          <div class="font-label text-primary uppercase tracking-[0.3em] font-bold">
            01 / The Architect
          </div>

          <h2 class="font-headline text-5xl font-bold tracking-tight">
            Software Engineering meets Creative Vision.
          </h2>

          <p class="font-body text-on-surface-variant leading-relaxed text-lg">
           I’m a recent graduate passionate about building thoughtful digital experiences. While I’m still early in my journey, I focus on writing clean, reliable code and continuously improving my skills across the full stack—from backend logic to user-facing design.

          I believe good software is not just functional, but meaningful. I aim to create applications that are both practical and visually engaging, always learning and growing with every project.
          </p>

          <!-- Feature Cards -->
          <div class="grid grid-cols-2 gap-6 pt-4">

            <div class="p-6 rounded-2xl bg-surface-dim border border-outline-variant/5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <span class="material-symbols-outlined text-primary mb-3">code</span>
              <h4 class="font-bold mb-1">Clean Code</h4>
              <p class="text-sm text-on-surface-variant">Exploring both frontend and backend to build complete, well-rounded applications</p>
            </div>

            
            <div class="p-6 rounded-2xl bg-surface-dim border border-outline-variant/5 transition-all duration-300 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5">
              <span class="material-symbols-outlined text-secondary mb-3">palette</span>
              <h4 class="font-bold mb-1">Full-Stack Approach</h4>
              <p class="text-sm text-on-surface-variant">High-fidelity designs that prioritize the human touch.</p>
            </div>
          </div>
        </div>

        <!-- Image / Creative Visual -->
        <div class="relative group">
          <div class="rounded-3xl bg-surface-container-highest p-2 rotate-3 overflow-hidden shadow-2xl transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.02]">
            <img 
              alt="Workplace setup" 
              class="rounded-2xl w-full h-[400px] object-cover opacity-80" 
              data-alt="Minimal dark workspace with mechanical keyboard and code" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRSvuiWJv_KG1vox4NPG3IytYshrDeP-UhJBSUOSE-FsoE4wn9zycebzt_5KqzcH5hXcTELC5-5iBOi89IMV3knz51PEQLCoMgWa7C9Ho8rgW_7meQKF5QFJl3xgricDAwp12YRHNcV6cBRHy1MdKD3YvKHnckipt4XGX-ZxqjMmMWfhdvXyK2fSiWBmM7E1F5GdD1LQipTk5QO_KwswBLj4tYj9xo1f3Usny5RWscQl12hnTTd2LtMQBdpT7flIonwT5IAFfknhi3"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<style scoped>
/* Optional scoped reveal-up animation */
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
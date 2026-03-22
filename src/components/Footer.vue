<template>
  <footer class="bg-[#0E0E0E] w-full py-12 border-t border-[#353534]/15">
    <div class="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-6">
      
      <!-- Brand -->
      <div class="text-lg font-bold text-[#910B01] font-headline uppercase tracking-tighter">
        Dean
      </div>

      <!-- Copyright -->
      <div class="font-space-grotesk text-xs uppercase tracking-widest text-[#DAC2AD]/60">
        © 2026 Dean's Mind. Built with Precision.
      </div>

      <!-- Social / Links -->
      <div class="flex gap-8 font-space-grotesk text-xs uppercase tracking-widest">
        <a href="https://www.linkedin.com/in/dean-mark-belano-2a9672387/" target="_blank" 
         rel="noopener noreferrer" class="text-[#DAC2AD]/60 hover:text-[#FF9A00] transition-all duration-300 hover:-translate-y-1">LinkedIn</a>
        <a href="https://github.com/dinmaku" target="_blank" 
         rel="noopener noreferrer" class="text-[#DAC2AD]/60 hover:text-[#FF9A00] transition-all duration-300 hover:-translate-y-1">GitHub</a>
        <a href="https://www.facebook.com/sasss1994" target="_blank" 
         rel="noopener noreferrer" class="text-[#DAC2AD]/60 hover:text-[#FF9A00] transition-all duration-300 hover:-translate-y-1">Facebook</a>
        <a href="#" class="text-[#DAC2AD]/60 hover:text-[#FF9A00] transition-all duration-300 hover:-translate-y-1">Instagram</a>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Nothing extra needed — tailwind handles most of it */
</style>
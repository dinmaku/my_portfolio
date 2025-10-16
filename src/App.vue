<template>
 <div class="w-full min-h-screen overflow-x-hidden bg-black bg-opacity-90 scroll-smooth">
  <!-- Navbar -->
    <nav class="w-full h-20 flex justify-between items-center px-5 text-white bg-black bg-opacity-90 fixed top-0 z-50">

      <!-- Hamburger Button (Mobile) -->
      <button @click="isNavOpen = !isNavOpen" class="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Navigation Links -->
      <ul :class="['flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-12 text-lg font-semibold px-10 absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 z-40', isNavOpen ? 'flex' : 'hidden']">
        <li class="hover:text-[#FF9A00] hover:underline hover:underline-offset-4">
          <a href="#Home" :class="{ 'text-[#FF9A00] underline underline-offset-4': activeSection === 'Home'}" @click="activeSection = 'Home'; isNavOpen = false">Home</a>
        </li>
        <li class="hover:text-[#FF9A00] hover:underline hover:underline-offset-4">
          <a href="#About" :class="{ 'text-[#FF9A00] underline underline-offset-4': activeSection === 'About'}" @click="activeSection = 'About'; isNavOpen = false">About</a>
        </li>
        <li class="hover:text-[#FF9A00] hover:underline hover:underline-offset-4">
          <a href="#Skills" :class="{ 'text-[#FF9A00] underline underline-offset-4': activeSection === 'Skills'}" @click="activeSection = 'Skills'; isNavOpen = false">Skills</a>
        </li>
        <li class="hover:text-[#FF9A00] hover:underline hover:underline-offset-4">
          <a href="#Projects" :class="{ 'text-[#FF9A00] underline underline-offset-4': activeSection === 'Projects'}" @click="activeSection = 'Projects'; isNavOpen = false">Projects</a>
        </li>
      </ul>
    </nav>

  <div id="Home" class="w-full min-h-screen flex flex-col justify-center items-center text-white space-y-10 pt-10 md:pt-20 px-4 md:px-10 bg-black">
    <div class="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-[140px] mb-20 max-w-screen-xl w-full">
      
      <!-- Text Content -->
      <div class="flex flex-col justify-center items-start space-y-5 text-left max-w-lg">
        <h1 class="text-3xl md:text-5xl font-bold">Hi, I'm Dean</h1>
        <h2 class="text-xl md:text-2xl font-semibold">
          A <span class="text-[#FF9A00]">Software Developer</span> and 
          <span class="text-[#8F0900]">UI/UX designer</span>
        </h2>
        <p class="text-base md:text-lg font-normal">
          This is a brief introduction about myself and my work, showcasing my passion for creativity and dedication to delivering high-quality results.
        </p>
        <div class="flex flex-row justify-start items-center space-x-5 mt-5">
          <button @click="downloadCV" class="bg-[#FF9A00] px-5 py-2 rounded-md text-white font-semibold cursor-pointer hover:bg-[#CC7A00] transition duration-300 transform hover:scale-105">
            Download CV
          </button>
          <button @click="showContactMe" class="bg-[#360900] px-5 py-2 rounded-md text-white font-semibold cursor-pointer hover:bg-[#8F0900] transition duration-300 transform hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>

      <!-- Image -->
      <img src="./assets/images/lwl.png" alt="Dean" class="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#6E1200]" />
    </div>
  </div>
   
  <!--About-->
   <div id="About" class="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center text-white px-4 py-10
    bg-[radial-gradient(at_30%_20%,_white_2%,_zinc-900_98%)]
    bg-[url('./assets/images/about-us_bg.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay">

    <!-- Image Section -->
    <div class="flex justify-center items-center mb-10 lg:mb-0 lg:mr-20">
      <img src="./assets/images/portfolio_img.jpg" alt="About Me Image"
        class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[600px] h-auto object-cover rounded-lg" />
    </div>

    <!-- Text Section -->
    <div class="flex flex-col justify-center items-center space-y-5 text-left max-w-3xl">
      <div class="py-10 px-6 bg-white/50 backdrop-blur-md rounded-lg space-y-10 w-full max-w-md">
        <h1 class="text-3xl md:text-4xl font-bold text-[#360900] text-end italic">About Me</h1>
        <p class="text-base md:text-lg font-semibold text-gray-900
          first-letter:text-5xl md:first-letter:text-6xl
          first-letter:font-semibold first-letter:float-left
          first-letter:mr-3 first-letter:leading-none first-letter:-mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius turpis eros, eget varius sem molestie eget.
          Sed porta odio et commodo faucibus. Aliquam lacinia maximus felis, eget egestas lorem convallis eget.
          Curabitur nunc nisi, lobortis at dignissim ut, venenatis a diam. Curabitur maximus aliquet tortor, sed porta leo pharetra ac.
          Nam vestibulum gravida mauris, ut congue risus pulvinar a. In dolor massa, faucibus non erat at, tincidunt auctor dolor.
          Duis eu sapien ut lorem fringilla sodales. Donec varius aliquet erat, at tempor neque convallis in.
          Morbi tincidunt et elit sed porttitor.
        </p>
      </div>
    </div>
  </div>

    <div id="Skills" class="w-full min-h-screen flex flex-col justify-center items-center bg-[#171717] p-6 md:p-10">
    <!-- Skills Icon -->
    <img src="./assets/images/skills.png" alt="Skills Icon" class="w-1/2 sm:w-1/3 md:w-1/4 mb-10" />

    <!-- Skills Content -->
    <div class="flex flex-col lg:flex-row justify-center items-center gap-10 w-full max-w-screen-xl">
      
      <!-- Tool Lists -->
      <div class="flex flex-col space-y-10 w-full max-w-3xl">
        <!-- Design Tools -->
        <ul class="flex flex-wrap items-center text-white text-xl md:text-2xl font-bold bg-gray-700 rounded-lg px-5 py-4 gap-x-6 gap-y-4">
          <span class="w-full mb-2">Design Tools</span>
          <li class="border-l-2 border-white h-10"></li>
          <li><img src="./assets/images/photoshop.png" class="w-16 md:w-20" /></li>
          <li><img src="./assets/images/illustrator.png" class="w-16 md:w-20" /></li>
          <li><img src="./assets/images/figma.png" class="w-16 md:w-20" /></li>
        </ul>

        <!-- Frontend Tools -->
        <ul class="flex flex-wrap items-center text-white text-xl md:text-2xl font-bold bg-gray-700 rounded-lg px-5 py-4 gap-x-6 gap-y-4">
          <span class="w-full mb-2">Frontend Tools</span>
          <li class="border-l-2 border-white h-10"></li>
          <li><img src="./assets/images/html.png" class="w-16 md:w-20" /></li>
          <li><img src="./assets/images/css-3.png" class="w-16 md:w-20" /></li>
          <li><img src="./assets/images/vue.png" class="w-16 md:w-20" /></li>
        </ul>

        <!-- Backend Tools -->
        <ul class="flex flex-wrap items-center text-white text-xl md:text-2xl font-bold bg-gray-700 rounded-lg px-5 py-4 gap-x-6 gap-y-4">
          <span class="w-full mb-2">Backend Tools</span>
          <li class="border-l-2 border-white h-10"></li>
          <li><img src="./assets/images/python.png" class="w-16 md:w-20" /></li>
          <li><img src="./assets/images/postgresql.png" class="w-16 md:w-20" /></li>
          <li><img src="./assets/images/git.png" class="w-16 md:w-20" /></li>
        </ul>
      </div>

      <!-- Skills Description -->
      <div class="flex flex-col justify-center items-start bg-gray-700 rounded-lg p-6 md:p-10 space-y-10 w-full max-w-3xl">
        <div class="flex flex-col md:flex-row justify-between items-start gap-10">
          
          <!-- Technical Skills -->
          <div class="flex flex-col space-y-5 max-w-md">
            <h1 class="text-lg md:text-xl font-bold italic text-[#FF9A00]">Technical Skills</h1>
            <ul class="font-semibold text-white list-disc list-inside space-y-3">
              <li>Proficient in front-end development.</li>
              <li>Experienced with Vue.js framework.</li>
              <li>Familiarity with Python</li>
              <li>DBMS using PostgreSQL.</li>
              <li>Version control using Git and GitHub.</li>
            </ul>
          </div>

          <!-- Divider -->
          <div class="hidden md:block border-l-2 border-gray-500 h-auto"></div>

          <!-- Soft Skills -->
          <div class="flex flex-col space-y-5 max-w-md">
            <h1 class="text-lg md:text-xl font-bold italic text-[#FF9A00]">Soft Skills</h1>
            <ul class="font-semibold text-white list-disc list-inside space-y-3">
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
              <li>Communication</li>
              <li>Detail Oriented</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Projects Section -->
    <div id="Projects" class="w-full min-h-screen flex flex-col justify-center items-center bg-black px-4 py-10">
      <div class="flex flex-col justify-center items-center space-y-5 text-white/40">
        <h1 class="text-3xl md:text-4xl font-bold text-[#FF9A00]">Projects</h1>
        <p class="text-base md:text-lg font-normal max-w-2xl text-center tracking-wider italic">
          Here are some of the projects I've worked on, showcasing my skills and expertise in software development and UI/UX design.
        </p>

        <!-- Project Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 w-full max-w-screen-xl">
          <!-- Project 1 -->
          <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src="./assets/images/project_1.png" alt="Project 1" class="w-full h-60 object-cover" />
            <div class="p-5">
              <h2 class="text-lg md:text-xl font-bold text-white mb-2">Red Carpet Wedding Services</h2>
              <p class="text-gray-300 text-sm md:text-base">A full-featured event booking landing platform with user authentication, supplier viewing, and book tracking.</p>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src="./assets/images/project_2.png" alt="Project 2" class="w-full h-60 object-cover" />
            <div class="p-5">
              <h2 class="text-lg md:text-xl font-bold text-white mb-2">Events Information Management System</h2>
              <p class="text-gray-300 text-sm md:text-base">A management console designed to help staff and administrators manage event bookings, track customer data, and monitor scheduling efficiently.</p>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img src="./assets/images/project_3.png" alt="Project 3" class="w-full h-60 object-cover" />
            <div class="p-5">
              <h2 class="text-lg md:text-xl font-bold text-white mb-2">Appthritis UI/UX</h2>
              <p class="text-gray-300 text-sm md:text-base">A high level prototype mobile application that simulates the prevention of Osteoarthritis primarily with Elder People.</p>
            </div>
          </div>
        </div>

        <!-- Pagination Dots -->
        <div class="flex items-center justify-center space-x-2 mt-8">
          <button class="w-3 h-3 rounded-full bg-blue-600 transition duration-300 cursor-pointer"></button>
          <button class="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition duration-300 cursor-pointer"></button>
          <button class="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition duration-300 cursor-pointer"></button>
          <button class="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition duration-300 cursor-pointer"></button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="w-full flex flex-col justify-center items-center bg-[#171717] px-4 py-6">
      <div class="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-xl space-y-4 md:space-y-0 md:space-x-10">
        <p class="text-gray-500 text-sm md:text-md font-semibold text-center md:text-left">
          &copy; 2024 Dean's Portfolio. All rights reserved.
        </p>
        <div class="flex flex-row justify-center items-center space-x-4 text-white">
          <a href="#" class="hover:text-[#FF9A00] transition duration-300">
            <img src="./assets/images/linkedin.png" alt="LinkedIn" class="w-6 h-6 md:w-7 md:h-7 transform hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="#" class="hover:text-[#FF9A00] transition duration-300">
            <img src="./assets/images/facebook.png" alt="Facebook" class="w-6 h-6 md:w-7 md:h-7 transform hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="#" class="hover:text-[#FF9A00] transition duration-300">
            <img src="./assets/images/github.png" alt="GitHub" class="w-6 h-6 md:w-7 md:h-7 transform hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="#" class="hover:text-[#FF9A00] transition duration-300">
            <img src="./assets/images/gmail.png" alt="Gmail" class="w-6 h-6 md:w-7 md:h-7 transform hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="#" class="hover:text-[#FF9A00] transition duration-300">
            <img src="./assets/images/twitter.png" alt="Twitter" class="w-6 h-6 md:w-7 md:h-7 transform hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>

    </div>

 
    <div v-if="contactMe" @click.self="closeContactMe" class="fixed inset-0 bg-gray-800/50 overflow-y-auto flex justify-center items-center z-999">
      <div class="bg-white p-5 rounded-lg shadow-lg h-[500px] w-[560px] border-l-4">
        <div class="flex flex-col items-center mb-4">
          <h2 class="text-2xl text-gray-900 itatlic font-bold mb-2">Contact Me</h2>
          <p class="text-gray-600 mb-4 text-center">Feel free to reach out to me via email. I would happy to answer your questions.</p>
          </div>
          <div class = "flex flex-col justify-center items-start space-y-7">
           <input type="text" placeholder="Name" class ="w-3/4 p-2 mb-3 border border-gray-300 rounded shadow-sm" />
           <input type="email" placeholder="Email" class ="w-full p-2 mb-3 border border-gray-300 rounded shadow-sm" />
           <input type="text" placeholder="Subject" class="w-full p-2 mb-3 border border-gray-300 rounded shadow-sm"/>
            <textarea placeholder="Message" class = "w-full p-2 mb-3 border border-gray-300 rounded h-20 shadow-sm"></textarea>
        </div>
        <div class="flex justify-end space-x-3 mt-5">
          <button @click="closeContactMe" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300 cursor-pointer">Close</button>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 cursor-pointer">Send</button>
      </div>
      </div>
    </div>

</template>

<script>


export default {
  name: 'MyPortfolio',


  data() {
    return {
      home: true,
      activeSection: 'Home',
      contactMe: false,
      isNavOpen: false,
    };
  },
  methods: {
    downloadCV() {
      const link = document.createElement('a');
      link.href = "./assets/Dean-Mark_Belano_CV.pdf";
      link.download = 'Dean-Mark_Belano_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    showContactMe() {
      this.contactMe = true;
    },
    closeContactMe() {
      this.contactMe = false;
    }

  }

};

</script>

<style scoped>
 html {
  scroll-behavior: smooth;
 }

</style>
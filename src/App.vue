<template>
 <div class="w-full min-h-screen overflow-x-hidden bg-black bg-opacity-90 scroll-smooth">
  <nav class="w-full h-20 flex justify-end items-center px-5 text-white bg-black bg-opacity-90 fixed top-0 z-50">
      <ul class = "flex justify-between space-x-12 text-lg font-semibold px-10">
       <li class ="hover:text-[#FF9A00] hover:underline hover:underline-offset-4">
        <a href="#Home" :class="{ 'text-[#FF9A00] underline underline-offset-4': activeSection === 'Home'}" @click="activeSection = 'Home'">Home</a></li>
        <li class ="hover:text-[#FF9A00] hover:underline hover:underline-offset-4">
          <a href="#About" :class="{ 'text-[#FF9A00] underline underline-offset-4': activeSection === 'About'}" @click="activeSection = 'About'">About</a></li>
        <li class ="hover:text-[#FF9A00] hover:underline hover:underline-offset-4">
          <a href="#Skills" :class="{ 'text-[#FF9A00] underline underline-offset-4': activeSection === 'Skills'}" @click="activeSection = 'Skills'">Skills</a></li>
        <li class ="hover:text-[#FF9A00] hover:underline hover:underline-offset-4">
          <a href="#Projects" :class="{ 'text-[#FF9A00] underline underline-offset-4': activeSection === 'Projects'}" @click="activeSection = 'Projects'">Projects</a></li>
      </ul>
  </nav>

  <div id="Home" class = "w-full h-[calc(110vh-5rem)] flex flex-col justify-center items-center text-white space-y-5 pt-20">
    <div class = "flex flex-row justify-between items-center space-x-140 mb-40">
     <div class = "flex flex-col justify-center items-start space-y-5 text-left max-w-lg">
      <h1 class = "text-5xl font-bold">Hi, I'm Dean</h1>
      <h2 class = "text-2xl font-semibold">A <span class = "text-[#FF9A00]">Software Developer</span> and <span class="text-[#8F0900]">UI/UX designer</span></h2>
      <p class = "text-lg font-normal">This is a brief introduction about myself  and my work,
        showcasing my passion for creativity and dedication to deleivering high-quality results.
      </p>
      <div class = "flex flex-row justify-start items-center space-x-5 mt-5">
       <button @click="downloadCV" class = "bg-[#FF9A00] px-5 py-2 rounded-md text-white font-semibold cursor-pointer hover:bg-[#CC7A00]
       transform-transition duration-300 transform hover:scale-105">Download CV </button>
      <button @click="showContactMe" class = "bg-[#360900] px-5 py-2 rounded-md text-white font-semibold cursor-pointer hover:bg-[#8F0900]
       transform-transition duration-300 transform hover:scale-105">Contact Me</button>
     </div>
     </div>
     <img src = "./assets/images/lwl.png" alt = "Dean" class = "w-85 h-85 rounded-full object-cover border-4 border-[#6E1200]"/>
    </div>

  </div>

   <div id = "About"
  class="w-full h-[90vh] flex flex-row justify-center items-center text-white bg-[radial-gradient(at_30%_20%,_white_2%,_zinc-900_98%)] 
  bg-[url('./assets/images/about-us_bg.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay"
>
<div class = "flex flex-row justify-start items-center mr-40">
  <img src="./assets/images/portfolio_img.jpg" alt="About Me Image" class="w-[600px] h-[859px] object-cover" />
  
   <div class="flex flex-col justify-center items-center space-y-5 text-left max-w-3xl">
    <div class = "py-20 px-5 bg-white/50 backdrop-blur-md rounded-lg space-y-20 max-w-md">
    <h1 class="text-4xl font-bold text-[#360900] text-end italic">About Me</h1>
    <p class="first-letter:text-6xl first-letter:font-semibold
     first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:-mt-3
     text-lg font-semibold text-gray-900">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius turpis eros, eget varius sem molestie eget. 
     Sed porta odio et commodo faucibus. Aliquam lacinia maximus felis, eget egestas lorem convallis eget. 
     Curabitur nunc nisi, lobortis at dignissim ut, venenatis a diam. Curabitur maximus aliquet tortor, sed porta leo pharetra ac.
      Nam vestibulum gravida mauris, ut congue ris  us pulvinar a. In dolor massa, faucibus non erat at, tincidunt auctor dolor.
      Duis eu sapien ut lorem fringilla sodales. Donec varius aliquet erat, at tempor neque convallis in. 
      Morbi tincidunt et elit sed porttitor.
    </p>
     </div>
    </div>
  </div>
</div>

  <div id="Skills" class="w-full h-[100vh] flex flex-col justify-center items-center bg-[#171717] p-10">
    <img src="./assets/images/skills.png" alt="Skills Icon" class="w-1/4 mb-10" />
    <div class="flex flex-row justify-between items-center space-x-20">
       <div class = "flex flex-col space-y-10">
            <ul class="flex flex-row items-center text-white text-2xl font-bold mb-10 bg-gray-700 h-30 w-[800px] rounded-lg px-5 gap-x-10">
              <span class="mr-15">Design Tools</span>
              <li class="border-l-2 border-white h-20 mr-32"></li>
              <li><img src="./assets/images/photoshop.png" class="w-20"></li>
              <li><img src="./assets/images/illustrator.png" class="w-20"></li>
              <li><img src="./assets/images/figma.png" class="w-20"></li>
            </ul>
            <ul class="flex flex-row items-center text-white text-2xl font-bold mb-10 bg-gray-700 h-30 w-[800px] rounded-lg px-5 gap-x-10">
              <span class="mr-10">Frontend Tools</span>
              <li class="border-l-2 border-white h-20 mr-30"></li>
              <li><img src="./assets/images/html.png" class="w-20"></li>
              <li><img src="./assets/images/css-3.png" class="w-20"></li>
              <li><img src="./assets/images/vue.png" class="w-20"></li>
            </ul>
            <ul class="flex flex-row items-center text-white text-2xl font-bold mb-10 bg-gray-700 h-30 w-[800px] rounded-lg px-5 gap-x-10">
              <span class="mr-12">Backend Tools</span>
              <li class="border-l-2 border-white h-20 mr-30"></li>
              <li><img src="./assets/images/python.png" class="w-20"></li>
              <li><img src="./assets/images/postgresql.png" class="w-20"></li>
              <li><img src="./assets/images/git.png" class="w-20"></li>
            </ul>
       </div>
       <div class="flex flex-col justify-center items-start bg-gray-700 h-[480px] w-[780px] rounded-lg p-10 space-y-10">
        <div class ="flex justify-between items-start space-x-10">
           <div class = "flex flex-col space-y-5 max-w-lg mr-15">
            <h1 class="text-xl font-bold italic text-[#FF9A00]">Technical Skills</h1>
              <ul class="font-semibold text-white list-disc list-inside space-y-3 max-w-xs">
                <li>Proficient in front-end development.</li>
                <li>Experienced with Vue.js framework.</li>
                <li>Familiarity with Python</li>
                <li>DBMS using PostgreSQL.</li>
                <li>Version control using Git and GitHub.</li>
              </ul>
           </div>
            <div class="border-l-2 border-gray-500 h-[230px] mr-28"></div> 
            <div class = "flex flex-col space-y-5 max-w-lg">
            <h1 class="text-xl font-bold italic text-[#FF9A00]">Soft Skills</h1>
              <ul class="font-semibold text-white list-disc list-inside space-y-3 max-w-xs">
                <li>Team Collaboration</li>
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Communication.</li>
                <li>Detail Oriented</li>
              </ul>
           </div>
        </div>
   

       </div>
    </div>
  </div>

  <div id="Projects" class="w-full h-[100vh] flex flex-col justify-center items-center bg-black p-10">
    <div class="flex flex-col justify-center items-center space-y-5 text-white/40">
      <h1 class="text-4xl font-bold text-[#FF9A00]">Projects</h1>
      <p class="text-lg font-normal max-w-2xl text-center tracking-wider italic">
        Here are some of the projects I've worked on, showcasing my skills and expertise in software development and UI/UX design.
      </p>
    <div class = "grid grid-cols-3 gap-10 mt-10">
      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src="./assets/images/project_1.png" alt="Project 1" class="w-full h-70 object-cover" />
        <div class="p-5">
          <h2 class="text-xl font-bold text-white mb-2">Red Carpet Wedding Services</h2>
          <p class="text-gray-300">A full-featured event booking landing platform with user authentication, supplier viewing, and book tracking.</p>
        </div>
      </div>
      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src="./assets/images/project_2.png" alt="Project 2" class="w-full h-69 object-cover" />
        <div class="p-5">
          <h2 class="text-xl font-bold text-white mb-2">Events Information Management System</h2>
          <p class="text-gray-300"> A management console designed to help staff and administrators manage event bookings, 
            track customer data, and monitor scheduling efficiently.</p>
        </div>
      </div>
      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img src="./assets/images/project_3.png" alt="Project 3" class="w-full h-69 object-cover" />
        <div class="p-5">
          <h2 class="text-xl font-bold text-white mb-2">Appthritis UI/UX</h2>
          <p class="text-gray-300">A high level prototype mobile application that simulates the prevention of Osteoarthritis primarily with Elder People.</p>
        </div>
      </div>

    </div>
    <div class="flex items-center justify-center space-x-2 mt-8">
      <!-- Page 1 (active) -->
      <button class="w-3 h-3 rounded-full bg-blue-600 transition duration-300 cursor-pointer"></button>

      <!-- Page 2 -->
      <button class="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition duration-300 cursor-pointer"></button>

      <!-- Page 3 -->
      <button class="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition duration-300 cursor-pointer"></button>

      <!-- Page 4 -->
      <button class="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-400 transition duration-300 cursor-pointer"></button>
    </div>


  </div>
  </div>

<div class="w-full h-[10vh] flex flex-col justify-center items-center bg-[#171717] p-10">
    <div class = "flex justiy-between items-center space-x-70">
       <p class="text-gray-500 text-md font-semibold">&copy; 2024 Dean's Portfolio. All rights reserved.</p>

        <div class = "flex flex-row justify-center items-center space-x-5 text-white">
          <a href="#" class="hover:text-[#FF9A00] transition duration-300">
            <img src="./assets/images/linkedin.png" alt="LinkedIn" class="w-7 h-7 transform hover:scale-110 transition-transform duration-300"/>
          </a>
          <span>|</span>
          <a href="#" class="hover:text-[#FF9A00] transition duration-300">
             <img src="./assets/images/facebook.png" alt="LinkedIn" class="w-7 h-7 transform hover:scale-110 transition-transform duration-300"/>
          </a>
          <span>|</span>
          <a href="#" class="hover:text-[#FF9A00] transition duration-300">
              <img src="./assets/images/github.png" alt="GitHub" class="w-7 h-7 transform hover:scale-110 transition-transform duration-300"/>
          </a>
          <span>|</span>
          <a href="#" class="hover:text-[#FF9A00] transition duration-300">
              <img src="./assets/images/gmail.png" alt="GitHub" class="w-7 h-7 transform hover:scale-110 transition-transform duration-300"/>
          </a>
          <span>|</span>
          <a href="#" class="hover:text-[#FF9A00] transition duration-300">
              <img src="./assets/images/twitter.png" alt="GitHub" class="w-7 h-7 transform hover:scale-110 transition-transform duration-300"/>
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
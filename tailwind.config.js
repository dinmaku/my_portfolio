// tailwind/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#FF9A00',
        'on-primary': '#111111',
        'primary-container': '#FF9A00',
        'on-primary-container': '#261400',
        'on-primary-fixed': '#111111',
        
        'secondary': '#FFB86D',
        'on-secondary': '#111111',
        'secondary-container': '#D96B00',
        'on-secondary-container': '#FFEDDB',
        
        'surface': '#131313',
        'surface-dim': '#0E0E0E',
        'surface-bright': '#393939',
        
        'surface-container-highest': '#333333',
        'surface-container-high': '#2A2A2A',
        'surface-container': '#222222',
        'surface-container-low': '#1A1A1A',
        'surface-container-lowest': '#0F0F0F',
        
        'on-surface': '#E5E2E1',
        'on-surface-variant': '#A3A3A3',
        
        'outline': '#79747E',
        'outline-variant': '#49454F',
        'surface-tint': '#ffb86d',
      },
      fontFamily: {
        headline: ['Plus Jakarta Sans'],
        body: ['Inter'],
        label: ['Space Grotesk'],
      },
      borderRadius: { DEFAULT: '0.25rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
      keyframes: {
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
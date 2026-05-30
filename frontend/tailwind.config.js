/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pipeline: {
          app: '#0d1117',
          surface: '#161b22',
          elevated: '#1c2333',
          border: '#30363d',
          text: '#e6edf3',
          muted: '#8b949e',
          handle: '#a78bfa',
        },
      },
      boxShadow: {
        pipeline: '0 8px 24px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

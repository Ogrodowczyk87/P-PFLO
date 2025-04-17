const plugin = require('tailwindcss/plugin')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure Tailwind scans your files
    theme: {
        extend: {
            colors: {
                primary: '#1E3A8A', // Custom blue
                secondary: '#9333EA', // Custom purple
                accent: '#F59E0B', // Custom yellow
                danger: '#EF4444', // Custom red
                success: '#10B981', // Custom green
            },
            fontFamily: {
                sans: ['Roboto', 'Arial', 'sans-serif'], // Custom sans-serif font
                serif: ['Merriweather', 'serif'], // Custom serif font
                mono: ['Fira Code', 'monospace'], // Custom monospace font
            },
        },
        container: {
            center: true, // Center the container by default
            padding: '1rem', // Add padding to the container
            screens: {
                sm: '640px', // Small screens
                md: '768px', // Medium screens
                lg: '1024px', // Large screens
                xl: '1280px', // Extra large screens
                '2xl': '1536px', // 2x Extra large screens
            },
        },
        animation: {
            'spin-slow': 'spin 3s linear infinite', // Animacja obracania z wolniejszą prędkością
        }
    },
};
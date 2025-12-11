/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // OfflineClean brand colors from iOS app
        'brand-green': '#4CD964',       // swooshGreen - Keep/Success
        'brand-green-dark': '#3CB853',  // Darker green
        'brand-red': '#FF3B30',         // swooshRed - Delete/Error
        'brand-blue': '#007AFF',        // swooshBlue - Interactive
        'brand-gold': '#FFD700',        // swooshGold - Premium
        'brand-orange': '#FF9500',      // swooshOrange - Complete
        // Background colors
        'brand-bg': '#000000',          // Main dark background
        'brand-card': '#1C1C1E',        // Card background
        'brand-secondary': '#2C2C2E',   // Secondary background
        'brand-tertiary': '#3A3A3C',    // Tertiary background
        // Text colors
        'brand-text': '#FFFFFF',        // Primary text
        'brand-text-secondary': '#8E8E93', // Secondary text
        'brand-text-tertiary': '#636366',  // Tertiary text
        // Legacy accent colors (for backwards compatibility)
        accent: '#007AFF',
        'accent-dark': '#0056B3',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #45CDFB 0%, #0C6EC7 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #3BB8E0 0%, #0A5BA8 100%)',
      },
    },
  },
  plugins: [],
}

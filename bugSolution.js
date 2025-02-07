```javascript
//tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Add content paths
  theme: {
    extend: {
      colors: {
        'theme-color-primary': '#e63946',
      }
    }
  },
  plugins: [],
}
```
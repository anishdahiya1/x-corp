/** @type {import('tailwindcss').Config} */
module.exports = {
darkMode: 'class',
content: [
'./pages/**/*.{js,jsx}',
'./components/**/*.{js,jsx}',
'./app/**/*.{js,jsx}'
],
theme: {
extend: {
colors: {
base: {
900: '#050508',
800: '#0a0a10',
700: '#12121a'
},
brand: {
400: '#38e8ff',
500: '#22d3ee',
600: '#06b6d4',
700: '#0ea5b7'
}
},
boxShadow: {
glow: '0 0 40px rgba(34, 211, 238, 0.18)'
}
}
},
plugins: []
}
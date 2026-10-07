// Import CSS (Webpack will bundle it)
import './styles.css';

// Example JS
console.log('Webpack production build running');

// Add event listener for a button (example)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.textContent = 'Click Me';
  btn.addEventListener('click', () => alert('Button clicked!'));
  document.body.appendChild(btn);
});

// Add responsive lazy-loaded image
const picture = document.createElement('picture');

picture.innerHTML = `
  <source srcset="./images/example-800.webp" type="image/webp" media="(min-width: 800px)">
  <source srcset="./images/example-400.webp" type="image/webp" media="(max-width: 799px)">
  <img src="./images/example-400.webp" alt="Example Image" loading="lazy">
`;

document.body.appendChild(picture);

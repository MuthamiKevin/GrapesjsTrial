// Import the GrapesJS library
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

// Start from the canvas
const editor = grapesjs.init({
  // Indicate where to init the editor
  container: '#gjs',
  // Get the content for the canvas directly from the element
  fromElement: true,
  // Size of the editor
  height: '300px',
  width: 'auto',
  // Disable the storage manager for the moment
  storageManager: false,
  // Avoid any default panel
  panels: { defaults: [] },
});

// Customize canvas appearance
document.getElementById('gjs').style.border = '3px solid #444';
document.querySelector('.gjs-cv-canvas').style.top = '0';
document.querySelector('.gjs-cv-canvas').style.width = '100%';
document.querySelector('.gjs-cv-canvas').style.height = '100%';

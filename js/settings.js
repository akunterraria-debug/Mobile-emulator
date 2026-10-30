// js/settings.js

window.EJS_defaultOptions = {
    'shader': 'disabled', // Turns off the heavy CRT filter to save GPU power
    'vsync': 'disabled',  // Reduces touch-input lag
    'saveStateLocation': 1,
    'volume': 0.7,
};

// Forces the browser to use WebGL1, which is often much faster on budget phones
window.EJS_useWebGL2 = false; 

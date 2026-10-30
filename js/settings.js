// js/settings.js

// These options apply globally to every game launched.
// Reference: https://emulatorjs.org/docs/options

window.EJS_defaultOptions = {
    // Apply a CRT filter for a retro look by default.
    // Comment out if you prefer sharp pixels.
    'shader': 'crt-easymode.glslp',

    // Default volume (0.0 to 1.0)
    'volume': 0.7,

    // Default save state slot
    'saveStateLocation': 1,
};

// To enable Netplay (multiplayer), you need to set a unique game ID.
// window.EJS_gameID = 1; // Uncomment and set a unique number to enable

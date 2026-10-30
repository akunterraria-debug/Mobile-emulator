// js/app.js

// ================= GAME LIBRARY DATABASE =================
// Add your games here. The 'platform' key must match a core name
// and a gamepad profile defined above.
// 'cover' is an optional URL to an image. If omitted, a placeholder is shown.

const gameLibrary = [
    {
        name: "Super Mario Bros.",
        platform: "nes",
        rom: "roms/nes/super-mario-bros.nes",
        cover: "" // Add a URL to a cover image if you have one
    },
    {
        name: "Super Metroid",
        platform: "snes",
        rom: "roms/snes/super-metroid.sfc",
        cover: ""
    },
    {
        name: "Pokémon Emerald",
        platform: "gba",
        rom: "roms/gba/pokemon-emerald.gba",
        cover: ""
    },
    {
        name: "Final Fantasy VII",
        platform: "psx",
        rom: "roms/psx/final-fantasy-vii.bin",
        cover: ""
    },
    {
        name: "Super Mario 64",
        platform: "n64",
        rom: "roms/n64/super-mario-64.z64",
        cover: ""
    }
    // Add more games following this format...
];

// ================= UI RENDERING =================
function renderLibrary() {
    const libraryContainer = document.getElementById('game-library');
    libraryContainer.innerHTML = '';

    gameLibrary.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card';

        // Use a placeholder if no cover is provided
        const coverUrl = game.cover || 'https://via.placeholder.com/300x300/222/555?text=' + encodeURIComponent(game.name.charAt(0));

        card.innerHTML = `
            <div class="game-cover" style="background-image: url('${coverUrl}')"></div>
            <h3>${game.name}</h3>
            <p>${game.platform.toUpperCase()}</p>
        `;

        card.addEventListener('click', () => launchGame(game));
        libraryContainer.appendChild(card);
    });
}

// ================= EMULATOR LAUNCHER =================
function launchGame(game) {
    // 1. Switch Views
    document.getElementById('library-view').style.display = 'none';
    document.getElementById('emulator-view').style.display = 'block';

    // 2. Clear any previous emulator instance
    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = '';

    // 3. Configure EmulatorJS Global Variables
    window.EJS_player = '#game';
    window.EJS_core = game.platform; // e.g., 'nes', 'snes', 'psx'
    window.EJS_gameUrl = game.rom;
    window.EJS_gameName = game.name; // Used for save state filenames
    window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/'; // Using the Stable CDN
    window.EJS_startOnLoaded = true;

    // 4. Apply the Custom Gamepad Profile for this Platform
    // If no profile exists for the platform, EmulatorJS will use its default.
    const profile = gamepadProfiles[game.platform];
    if (profile) {
        window.EJS_VirtualGamepadSettings = profile;
    } else {
        // Important: Unset it if a previous game had a custom profile
        delete window.EJS_VirtualGamepadSettings;
    }

    // 5. Dynamically Load the EmulatorJS Loader Script
    // We remove any old loader script first to prevent conflicts.
    const oldScript = document.getElementById('ejs-loader');
    if (oldScript) oldScript.remove();

    const script = document.createElement('script');
    script.id = 'ejs-loader';
    script.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
    document.body.appendChild(script);

    console.log(`Launching ${game.name} (${game.platform})...`);
}

// ================= BACK BUTTON =================
function setupBackButton() {
    document.getElementById('back-btn').addEventListener('click', () => {
        // Switch views back
        document.getElementById('emulator-view').style.display = 'none';
        document.getElementById('library-view').style.display = 'block';

        // Clear the emulator container to stop the game and free resources
        document.getElementById('game').innerHTML = '';
    });
}

// ================= INITIALIZATION =================
window.addEventListener('load', () => {
    renderLibrary();
    setupBackButton();
});

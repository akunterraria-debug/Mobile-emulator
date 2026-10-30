// js/app.js

// ================= GAME LIBRARY DATABASE =================
const gameLibrary = [
    {
        name: "Super Mario 64",
        platform: "n64",
        rom: "roms/nes/snes/gba/psx/n64/Super Mario 64 (USA).z64",
        cover: ""
    }
    // Add more games below. Don't forget the comma after the bracket above!
];

// ================= UI RENDERING =================
function renderLibrary() {
    const libraryContainer = document.getElementById('game-library');
    libraryContainer.innerHTML = '';

    if (gameLibrary.length === 0) {
        libraryContainer.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#888;">No games yet. Add entries to gameLibrary in app.js.</p>';
        return;
    }

    gameLibrary.forEach((game) => {
        const card = document.createElement('div');
        card.className = 'game-card';

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
    document.getElementById('library-view').style.display = 'none';
    document.getElementById('emulator-view').style.display = 'block';

    const gameContainer = document.getElementById('game');
    gameContainer.innerHTML = '';

    window.EJS_player = '#game';
    window.EJS_core = game.platform;      
    window.EJS_gameUrl = game.rom;        
    window.EJS_gameName = game.name;      
    window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
    window.EJS_startOnLoaded = true;

    // ================= PERFORMANCE BOOST =================
    // Forces a lighter emulator core for low-end phones
    window.EJS_forceLegacyCores = true; 
    
    // Skips 2 frames to keep the game speed fast (sacrifices a little visual smoothness)
    window.EJS_defaultOptions = {
        'frameskips': 2,
        'threads': 2
    };
    // =====================================================

    // Apply the virtual gamepad profile
    if (typeof gamepadProfiles !== 'undefined' && gamepadProfiles[game.platform]) {
        window.EJS_VirtualGamepadSettings = gamepadProfiles[game.platform];
    } else {
        delete window.EJS_VirtualGamepadSettings;
    }

    // Load EmulatorJS
    const oldScript = document.getElementById('ejs-loader');
    if (oldScript) oldScript.remove();

    const script = document.createElement('script');
    script.id = 'ejs-loader';
    script.src = 'https://cdn.emulatorjs.org/stable/data/loader.js';
    document.body.appendChild(script);

    console.log(`Launching ${game.name} (${game.platform}) from ${game.rom}`);
}

// ================= BACK BUTTON =================
function setupBackButton() {
    document.getElementById('back-btn').addEventListener('click', () => {
        document.getElementById('emulator-view').style.display = 'none';
        document.getElementById('library-view').style.display = 'block';
        document.getElementById('game').innerHTML = '';
        const oldScript = document.getElementById('ejs-loader');
        if (oldScript) oldScript.remove();
    });
}

// ================= INITIALIZATION =================
window.addEventListener('load', () => {
    renderLibrary();
    setupBackButton();
});

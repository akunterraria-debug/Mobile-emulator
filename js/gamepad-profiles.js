// js/gamepad-profiles.js

const gamepadProfiles = {

    // --- NES ---
    nes: [
        { type: "dpad", location: "left", left: "10%", top: "40%", inputValues: [4, 5, 6, 7] },
        { type: "button", text: "B", id: "b", location: "right", left: 0, top: 50, fontSize: 35, input_value: 1 },
        { type: "button", text: "A", id: "a", location: "right", left: 70, top: 50, fontSize: 35, input_value: 0 }
    ],

    // --- SNES ---
    snes: [
        { type: "dpad", location: "left", left: "10%", top: "40%", inputValues: [4, 5, 6, 7] },
        { type: "button", text: "X", id: "x", location: "right", left: 40, top: 10, fontSize: 26, input_value: 1 },
        { type: "button", text: "Y", id: "y", location: "right", left: 0, top: 40, fontSize: 26, input_value: 3 },
        { type: "button", text: "A", id: "a", location: "right", left: 80, top: 40, fontSize: 26, input_value: 0 },
        { type: "button", text: "B", id: "b", location: "right", left: 40, top: 70, fontSize: 26, input_value: 2 },
        { type: "button", text: "L", id: "l", location: "right", left: -20, top: -10, fontSize: 18, input_value: 4 },
        { type: "button", text: "R", id: "r", location: "right", left: 100, top: -10, fontSize: 18, input_value: 5 },
        { type: "button", text: "Start", id: "start", location: "center", left: 60, fontSize: 18, input_value: 3 },
        { type: "button", text: "Select", id: "select", location: "center", left: -10, fontSize: 18, input_value: 2 }
    ],

    // --- GBA (Huge Buttons & Fixed Jump) ---
    gba: [
        { type: "dpad", location: "left", left: "10%", top: "40%", inputValues: [4, 5, 6, 7] },
        // B Button (Left)
        { type: "button", text: "B", id: "b", location: "right", left: 0, top: 70, fontSize: 40, input_value: 0 },
        // A Button (Right) - The Jump Button
        { type: "button", text: "A", id: "a", location: "right", left: 80, top: 30, fontSize: 40, input_value: 8 },
        // Shoulder Buttons
        { type: "button", text: "L", id: "l", location: "left", left: -10, top: -80, fontSize: 24, block: true, input_value: 10 },
        { type: "button", text: "R", id: "r", location: "right", right: -10, top: -80, fontSize: 24, block: true, input_value: 11 },
        // Start / Select
        { type: "button", text: "Start", id: "start", location: "center", left: 60, fontSize: 22, block: true, input_value: 3 },
        { type: "button", text: "Select", id: "select", location: "center", left: -5, fontSize: 22, block: true, input_value: 2 }
    ],

    // --- PS1 ---
    psx: [
        { type: "zone", location: "left", left: "5%", top: "50%", joystickInput: true, inputValues: [19, 18, 17, 16] },
        { type: "dpad", location: "left", left: "5%", top: "5%", inputValues: [4, 5, 6, 7] },
        { type: "button", text: "△", id: "triangle", location: "right", left: 40, top: 10, fontSize: 30, input_value: 3 },
        { type: "button", text: "○", id: "circle", location: "right", left: 80, top: 30, fontSize: 30, input_value: 1 },
        { type: "button", text: "✕", id: "cross", location: "right", left: 40, top: 50, fontSize: 30, input_value: 0 },
        { type: "button", text: "□", id: "square", location: "right", left: 0, top: 30, fontSize: 30, input_value: 2 },
        { type: "button", text: "L1", id: "l1", location: "right", left: -20, top: -10, fontSize: 20, input_value: 9 },
        { type: "button", text: "L2", id: "l2", location: "right", left: -20, top: 100, fontSize: 20, input_value: 10 },
        { type: "button", text: "R1", id: "r1", location: "right", left: 100, top: -10, fontSize: 20, input_value: 11 },
        { type: "button", text: "R2", id: "r2", location: "right", left: 100, top: 100, fontSize: 20, input_value: 12 },
        { type: "button", text: "Start", id: "start", location: "center", left: 60, fontSize: 20, input_value: 3 },
        { type: "button", text: "Select", id: "select", location: "center", left: -10, fontSize: 20, input_value: 2 }
    ],

    // --- N64 ---
    n64: [
        { type: "zone", location: "left", left: "10%", top: "40%", joystickInput: true, inputValues: [19, 18, 17, 16] },
        { type: "button", text: "A", id: "a", location: "right", left: 70, top: 20, fontSize: 35, input_value: 0 },
        { type: "button", text: "B", id: "b", location: "right", left: 20, top: 70, fontSize: 35, input_value: 1 },
        { type: "dpad", location: "right", left: "80%", top: "40%", inputValues: [11, 12, 13, 14] },
        { type: "button", text: "Z", id: "z", location: "right", left: -20, top: 10, fontSize: 24, input_value: 2 },
        { type: "button", text: "Start", id: "start", location: "center", left: 60, fontSize: 24, input_value: 3 }
    ]
};

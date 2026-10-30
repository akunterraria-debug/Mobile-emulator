// js/gamepad-profiles.js

// Define a virtual gamepad layout for each platform.
// Types: "button", "dpad", "zone" (joystick)
// Reference: https://emulatorjs.org/docs4devs/virtual-gamepad-settings/

const gamepadProfiles = {

    // --- NES: Simple D-Pad + A/B Buttons ---
    nes: [
        {
            type: "dpad",
            location: "left",
            left: "15%",
            top: "55%",
            inputValues: [4, 5, 6, 7] // D-Pad values
        },
        {
            type: "button",
            text: "B",
            id: "b",
            location: "right",
            left: 10,
            top: 40,
            input_value: 1
        },
        {
            type: "button",
            text: "A",
            id: "a",
            location: "right",
            left: 75,
            top: 40,
            input_value: 0
        }
    ],

    // --- SNES: D-Pad + A/B/X/Y + Shoulder Buttons ---
    snes: [
        {
            type: "dpad",
            location: "left",
            left: "15%",
            top: "55%",
            inputValues: [4, 5, 6, 7]
        },
        // Face Buttons (Diamond Layout)
        { type: "button", text: "X", id: "x", location: "right", left: 40, top: 15, input_value: 1 },
        { type: "button", text: "Y", id: "y", location: "right", left: 10, top: 40, input_value: 3 },
        { type: "button", text: "A", id: "a", location: "right", left: 70, top: 40, input_value: 0 },
        { type: "button", text: "B", id: "b", location: "right", left: 40, top: 65, input_value: 2 },
        // Shoulder Buttons
        { type: "button", text: "L", id: "l", location: "right", left: 0, top: 5, fontSize: 12, input_value: 4 },
        { type: "button", text: "R", id: "r", location: "right", left: 90, top: 5, fontSize: 12, input_value: 5 },
        // Start/Select
        { type: "button", text: "Start", id: "start", location: "center", left: 60, fontSize: 12, input_value: 3 },
        { type: "button", text: "Select", id: "select", location: "center", left: -10, fontSize: 12, input_value: 2 }
    ],

    // --- GBA: D-Pad + A/B + Shoulder Buttons ---
    gba: [
        {
            type: "dpad",
            location: "left",
            left: "15%",
            top: "55%",
            inputValues: [4, 5, 6, 7]
        },
        { type: "button", text: "B", id: "b", location: "right", left: 15, top: 50, input_value: 1 },
        { type: "button", text: "A", id: "a", location: "right", left: 75, top: 50, input_value: 0 },
        { type: "button", text: "L", id: "l", location: "right", left: 0, top: 10, fontSize: 12, input_value: 4 },
        { type: "button", text: "R", id: "r", location: "right", left: 90, top: 10, fontSize: 12, input_value: 5 },
        { type: "button", text: "Start", id: "start", location: "center", left: 60, fontSize: 12, input_value: 3 },
        { type: "button", text: "Select", id: "select", location: "center", left: -10, fontSize: 12, input_value: 2 }
    ],

    // --- PS1: Dual Analog Sticks + Full Button Set ---
    psx: [
        // Left Analog Stick (Zone)
        {
            type: "zone",
            location: "left",
            left: "15%",
            top: "65%",
            joystickInput: true, // Essential for analog control[reference:1]
            inputValues: [19, 18, 17, 16]
        },
        // D-Pad (for games that require it)
        {
            type: "dpad",
            location: "left",
            left: "5%",
            top: "20%",
            inputValues: [4, 5, 6, 7]
        },
        // Face Buttons (△ ○ ✕ □)
        { type: "button", text: "△", id: "triangle", location: "right", left: 40, top: 10, input_value: 3 },
        { type: "button", text: "○", id: "circle", location: "right", left: 80, top: 30, input_value: 1 },
        { type: "button", text: "✕", id: "cross", location: "right", left: 40, top: 50, input_value: 0 },
        { type: "button", text: "□", id: "square", location: "right", left: 0, top: 30, input_value: 2 },
        // Shoulder Buttons (L1/L2/R1/R2)
        { type: "button", text: "L1", id: "l1", location: "right", left: 0, top: 5, fontSize: 12, input_value: 9 },
        { type: "button", text: "L2", id: "l2", location: "right", left: 0, top: 95, fontSize: 12, input_value: 10 },
        { type: "button", text: "R1", id: "r1", location: "right", left: 90, top: 5, fontSize: 12, input_value: 11 },
        { type: "button", text: "R2", id: "r2", location: "right", left: 90, top: 95, fontSize: 12, input_value: 12 },
        // Start/Select
        { type: "button", text: "Start", id: "start", location: "center", left: 60, fontSize: 12, input_value: 3 },
        { type: "button", text: "Select", id: "select", location: "center", left: -10, fontSize: 12, input_value: 2 }
    ],

    // --- N64: Analog Stick + C-Buttons + Z-Trigger ---
    n64: [
        {
            type: "zone",
            location: "left",
            left: "20%",
            top: "55%",
            joystickInput: true,
            inputValues: [19, 18, 17, 16]
        },
        // A/B Buttons
        { type: "button", text: "A", id: "a", location: "right", left: 70, top: 30, input_value: 0 },
        { type: "button", text: "B", id: "b", location: "right", left: 40, top: 55, input_value: 1 },
        // C-Buttons (D-Pad style for simplicity)
        {
            type: "dpad",
            location: "right",
            left: "80%",
            top: "55%",
            inputValues: [11, 12, 13, 14] // C-button values
        },
        // Z-Trigger
        { type: "button", text: "Z", id: "z", location: "right", left: 0, top: 5, fontSize: 12, input_value: 2 },
        // Start
        { type: "button", text: "Start", id: "start", location: "center", left: 60, fontSize: 12, input_value: 3 }
    ]
};

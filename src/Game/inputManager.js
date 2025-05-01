export class InputManager {
    constructor() {
        this.keys = new Set();
        window.addEventListener("keydown", e => {
            this.keys.add(e.key)
            this.keys.add(e.detail.key);
        });
        window.addEventListener("keyup",   e => {
            this.keys.delete(e.key)
            this.keys.delete(e.detail.key);
        });
    }

    isDown(key) {
        return this.keys.has(key);
    }
}
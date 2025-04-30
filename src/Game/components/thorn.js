import * as PIXI from "pixi.js";
import Matter from "matter-js";
import {LABELS} from "../constants";

export class Thorn {
    constructor(configs) {
        this.configs = configs;
        this.init();
    }

    init() {
        const {x, y, angle = 0} = this.configs;
        const width = 120, height = 50;

        this.body = Matter.Bodies.rectangle(x, y, width, height, {
            isStatic: true,
            friction: 0.1,
            restitution: 0,
            label: LABELS.THORN,
            angle,
        });

        this.graphics = PIXI.Sprite.from('./thorn.png');
        this.graphics.width = width;
        this.graphics.height = height;
        this.graphics.anchor.set(0.5, 0.5);
        this.graphics.position.set(x, y);
    }

    update() {
        const {x, y} = this.body.position;
        this.graphics.position.set(x, y);
        this.graphics.rotation = this.body.angle;
    }
}

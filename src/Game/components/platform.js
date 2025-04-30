import * as PIXI from "pixi.js";
import Matter from "matter-js";
import {LABELS} from "../constants";

export class Platform {
    constructor(configs) {
        this.configs = configs;
        this.init();
    }

    init() {
        const {x, y, width, height} = this.configs;

        this.body = Matter.Bodies.rectangle(x, y, width, height, {
            isStatic: true,
            friction: 0.1,
            restitution: 0,
            label: LABELS.PLATFORM,
        });

        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(0xdddddd);
        this.graphics.drawRect(-width / 2, -height / 2, width, height);
        this.graphics.endFill();
        this.graphics.x = x;
        this.graphics.y = y;
    }

    update() {
        this.graphics.x = this.body.position.x;
        this.graphics.y = this.body.position.y;
        this.graphics.rotation = this.body.angle;
    }
}

import Matter from "matter-js";
import {LABELS} from "../constants";
import * as PIXI from "pixi.js";

export class Door{
    constructor(configs) {
        this.configs = configs;
        this.init();
    }

    init() {
        const {x, y, angle = 0} = this.configs;
        const width = 150, height = 200 ;

        this.body = Matter.Bodies.rectangle(x, y, width, height, {
            isStatic: true,
            friction: 0.1,
            restitution: 0,
            label: LABELS.DOOR,
            angle,
        });

        this.graphics = PIXI.Sprite.from('./door.png');
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

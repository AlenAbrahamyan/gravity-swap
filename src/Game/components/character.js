import * as PIXI from "pixi.js";
import Matter from "matter-js";
import {LABELS} from "../constants";

export class Character {
    constructor(configs) {
        this.configs = configs;
        this.init();
    }

    init() {
        const {x, y} = this.configs;

        this.body = Matter.Bodies.rectangle(x, y, 100, 100, {
            restitution: 0.3,
            friction: 0,
            label: LABELS.CHARACTER,
        });

        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(0x888888);
        this.graphics.lineStyle(5, 0x000000, 1);
        this.graphics.drawRect(-50, -50, 100, 100);
        this.graphics.endFill();
        this.graphics.x = x;
        this.graphics.y = y;
    }

    moveLeft() {
        Matter.Body.applyForce(this.body, this.body.position, {x: -0.02, y: 0});
    }

    moveRight() {
        Matter.Body.applyForce(this.body, this.body.position, {x: +0.02, y: 0});
    }

    jump(direction = 1) {
        Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: -0.7 * direction});
    }

    update() {
        this.graphics.x = this.body.position.x;
        this.graphics.y = this.body.position.y;
        this.graphics.rotation = this.body.angle;
    }
}

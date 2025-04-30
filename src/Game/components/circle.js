import {gsap} from "gsap";
import * as PIXI from "pixi.js";
import Matter from "matter-js";
import {LABELS} from "../constants";

export class Circle {
    constructor(configs) {
        this.configs = configs;
        this.init();
    }

    init() {
        const {x, y, radius=50} = this.configs;

        this.body = Matter.Bodies.circle(x, y, radius, {
            isStatic: true,
            friction: 0.1,
            restitution: 0,
            label: LABELS.CIRCLE,
        });

        this.graphics = PIXI.Sprite.from('./circle.png');
        this.graphics.width = 2 * radius;
        this.graphics.height = 2 * radius;
        this.graphics.anchor.set(0.5, 0.5);
        this.graphics.position.set(x, y);

        this.runBodyAnimation();
    }

    runBodyAnimation() {
        gsap.to(this.body, {
            angle: 2 * Math.PI,
            duration: 3,
            repeat: -1,
            ease: "none",
            onUpdate: () => {
                Matter.Body.setAngle(this.body, this.body.angle);
            },
        });
    }

    update() {
        const {x, y} = this.body.position;
        this.graphics.position.set(x, y);
        this.graphics.rotation = this.body.angle;
    }
}

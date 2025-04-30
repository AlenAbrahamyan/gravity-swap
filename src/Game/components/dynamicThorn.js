import {gsap} from "gsap";
import * as PIXI from "pixi.js";
import Matter from "matter-js";
import {LABELS} from "../constants";

export class DynamicThorn {
    constructor(configs) {
        this.configs = configs;
        this.init();
    }

    init() {
        const {pos1, pos2, radius = 100} = this.configs;

        this.body = Matter.Bodies.circle(pos1.x, pos1.y, radius, {
            friction: 0.1,
            restitution: 0,
            label: LABELS.DYNAMIC_THORN,
        });

        this.lineGraphic = new PIXI.Graphics();
        this.lineGraphic
            .lineStyle(5, 0xF5F5F5)
            .moveTo(pos1.x, pos1.y)
            .lineTo(pos2.x, pos2.y);

        this.sprite = PIXI.Sprite.from('./dynamicThorn.png');
        this.sprite.width = 2 * radius;
        this.sprite.height = 2 * radius;
        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.position.set(pos1.x, pos1.y,);

        this.graphics = new PIXI.Container();
        this.graphics.addChild(this.lineGraphic, this.sprite)


        this.runBodyAnimation();
    }

    runBodyAnimation() {
        const {pos1, pos2} = this.configs;

        // animate a plain object
        const proxy = {x: pos1.x, y: pos1.y};
        gsap.to(proxy, {
            x: pos2.x,
            y: pos2.y,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'none',
            onUpdate: () => {
                Matter.Body.setPosition(this.body, {x: proxy.x, y: proxy.y});
            },
        });
    }

    update() {
        const {x, y} = this.body.position;
        this.sprite.position.set(x, y);
        this.sprite.rotation = this.body.angle;
    }
}

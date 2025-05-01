import * as PIXI from "pixi.js";
import Matter from "matter-js";
import {LABELS} from "./constants";
import {Character} from "./components/character";
import {Platform} from "./components/platform";
import {InputManager} from "./inputManager";
import {Thorn} from "./components/thorn";
import {Door} from "./components/door";
import {Circle} from "./components/circle";
import {DynamicThorn} from "./components/dynamicThorn";
import {LEVELS} from "../constants/levels";
import {store} from "../store";
import {pageNames} from "../constants";

export class Game {
    width = 1920;
    height = 1080;
    components = {};

    constructor(canvasContainer) {
        this.canvasContainer = canvasContainer;
        this.input = new InputManager();
        this.initGame();
        this.addLevelComponents();
        this.runTicker();
    }

    get character() {
        return this.components[LABELS.CHARACTER][0];
    }

    initGame() {
        this.pixiApp = new PIXI.Application({
            width: this.width,
            height: this.height,
            backgroundColor: 0x1e1e1e,
            backgroundAlpha: 0,
        });
        this.canvasContainer.appendChild(this.pixiApp.view);
        this.engine = Matter.Engine.create();
        this.physicsWorld = this.engine.world;

        for (const label of Object.values(LABELS)) {
            this.components[label] = [];
        }

        this.runCollisionDetector();

        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
    }

    runCollisionDetector() {
        Matter.Events.on(this.engine, 'collisionStart', event => {
            event.pairs.forEach(pair => {
                const a = pair.bodyA.label
                const b = pair.bodyB.label

                if (a === LABELS.CHARACTER || b === LABELS.CHARACTER) {
                    if (a === LABELS.DOOR || b === LABELS.DOOR) store.setPageName(pageNames.WIN_PAGE);
                    if (a === LABELS.THORN || b === LABELS.THORN) store.setPageName(pageNames.LOSE_PAGE);
                    if (a === LABELS.DYNAMIC_THORN || b === LABELS.DYNAMIC_THORN) store.setPageName(pageNames.LOSE_PAGE);
                    if (a === LABELS.CIRCLE || b === LABELS.CIRCLE) store.setPageName(pageNames.LOSE_PAGE);
                }
            })
        })

    }

    addLevelComponents() {
        for (const [label, componentsConfigs] of Object.entries(LEVELS[store.levelIndex])) {
            for (const componentsConfig of componentsConfigs) {
                const component = new Components[label](componentsConfig);
                Matter.World.add(this.physicsWorld, component.body);
                this.pixiApp.stage.addChild(component.graphics);
                this.components[label].push(component);
            }
        }
    }

    update() {
        for (const components of Object.values(this.components)) {
            for (const component of components) {
                component.update();
            }
        }
    }

    handleInput() {
        for (const key of this.input.keys) {
            switch (key) {
                case "ArrowLeft":
                    this.character.moveLeft();
                    break;
                case "ArrowRight":
                    this.character.moveRight();
                    break;
                default:
                    break;
            }
        }
    }

    handleKeyDown(e) {
        if (e.repeat) {
            return;
        }

        if (e.code === 'ArrowUp' || e.detail.code === 'ArrowUp') {
            if (this.isHaveCollision(this.character.body)) this.character.jump(this.physicsWorld.gravity.y > 0 ? 1 : -1);
        } else if (e.code === 'Space' || e.detail.code === 'Space') {
            this.physicsWorld.gravity.y *= -1;
        }
    }

    runTicker() {
        this.pixiApp.ticker.add(() => {
            this.handleInput();
            Matter.Engine.update(this.engine, this.pixiApp.ticker.deltaMS);
            this.update();
        });
    }

    isHaveCollision(body) {
        const all = Matter.Composite.allBodies(this.engine.world);
        const collisions = Matter.Query.collides(body, all);
        return collisions.length > 1
    }

    destroy() {
        this.pixiApp.destroy(true);
    }
}

const Components = {
    [LABELS.CHARACTER]: Character,
    [LABELS.PLATFORM]: Platform,
    [LABELS.THORN]: Thorn,
    [LABELS.DOOR]: Door,
    [LABELS.CIRCLE]: Circle,
    [LABELS.DYNAMIC_THORN]: DynamicThorn,
}

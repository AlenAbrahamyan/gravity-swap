import {pageNames} from "../constants";
import {makeAutoObservable} from "mobx";

class Store {
    pageName = pageNames.MEIN_MENU;
    levelIndex = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setLevelIndex(value){
        this.levelIndex = value;
    }

    setPageName(name) {
        this.pageName = name;
    }
}

export const store = new Store();

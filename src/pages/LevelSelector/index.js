import {pageNames} from "../../constants";
import {store} from "../../store";
import {LEVELS} from "../../constants/levels";

export const LevelSelector = () => {
    return (
        <div className="menu">
            <p className="menu-title" style={{marginTop: '-40px'}}>LEVEL SELECTOR</p>
            <div className={'levels-numbers-container'}>
                {
                    LEVELS.map((_, index) =>
                        <div>
                            <div className="menu-item" onClick={() => {
                                store.setPageName(pageNames.IN_GAME);
                                store.setLevelIndex(index);
                            }}>{index + 1}</div>
                        </div>
                    )
                }

                {/*<div>*/}
                {/*    <div className="menu-item">2</div>*/}
                {/*    <div className="menu-item">5</div>*/}
                {/*    <div className="menu-item">6</div>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <div className="menu-item">3</div>*/}
                {/*    <div className="menu-item">8</div>*/}
                {/*    <div className="menu-item">9</div>*/}
                {/*</div>*/}
            </div>
            <div className="menu-item" style={{marginTop: '40px'}}
                 onClick={() => store.setPageName(pageNames.MEIN_MENU)}>BACK
            </div>
        </div>
    );
}
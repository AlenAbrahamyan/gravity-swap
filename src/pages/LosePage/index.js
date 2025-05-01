import './styles.css';
import {store} from "../../store";
import {pageNames} from "../../constants";
import {LEVELS} from "../../constants/levels";

export const LosePage = () => {
    return (
        <div className="lose-page">
            <div className="menu">
                <div className="menu-title">YOU LOSE</div>
                <div className="menu-item" onClick={() => store.setPageName(pageNames.IN_GAME)}>Try Again</div>
                <div className="menu-item" onClick={() => store.setPageName(pageNames.LEVELS_SECTION)}>Levels</div>
                <div className="menu-item" onClick={() => store.setPageName(pageNames.MEIN_MENU)}>Menu< /div>
            </div>
        </div>
    );
}


export const WinPage = () => {
    return (
        <div className="win-page">
            <div className="menu">
                <div className="menu-title">YOU WIN</div>
                {store.levelIndex !== LEVELS.length - 1 ?
                    <div className="menu-item" onClick={() => {
                        store.setPageName(pageNames.IN_GAME)
                        store.setLevelIndex(store.levelIndex + 1)
                    }}>Next Level</div> :
                    null
                }
                <div className="menu-item" onClick={() => store.setPageName(pageNames.LEVELS_SECTION)}>Levels</div>
                <div className="menu-item" onClick={() => store.setPageName(pageNames.MEIN_MENU)}>Menu< /div>
            </div>
        </div>
    );
}
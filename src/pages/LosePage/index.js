import './styles.css';
import {store} from "../../store";
import {pageNames} from "../../constants";

export const LosePage = () => {
    return (
        <div className="lose-page">
            <div className="menu">
                <div className="menu-title">YOU LOSE</div>
                <div className="menu-item" onClick={() => store.setPageName(pageNames.MEIN_MENU)}>Menu< /div>
                <div className="menu-item" onClick={() => store.setPageName(pageNames.LEVELS_SECTION)}>Levels</div>
            </div>
        </div>
    );
}


export const WinPage = () => {
    return (
        <div className="win-page">
            <div className="menu">
                <div className="menu-title">YOU WIN</div>
                <div className="menu-item" onClick={() => store.setPageName(pageNames.MEIN_MENU)}>Menu< /div>
                <div className="menu-item" onClick={() => store.setPageName(pageNames.LEVELS_SECTION)}>Levels</div>
            </div>
        </div>
    );
}
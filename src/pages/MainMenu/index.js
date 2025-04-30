import {store} from "../../store";
import {pageNames} from "../../constants";

export const MainMenu = () => {
    return (
        <div className="menu">
            <div className="menu-title">GRAVITY SWAP</div>
            <div className="menu-item" onClick={() => store.setPageName(pageNames.LEVELS_SECTION)}> PLAY< /div>
            <div className="menu-item" onClick={() => store.setPageName(pageNames.INFO_SECTION)}>HOW TO PLAY</div>
            <div className="menu-item" >EXIT</div>
        </div>
    );
};
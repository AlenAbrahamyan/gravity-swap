import {pageNames} from "../../constants";
import {store} from "../../store";

export const InfoSection = () => {
    return <div className={'info-section'}>
        <img src={'./info-section.png'} alt={'info'}/>
        <div className={'menu-item'} style={{fontSize: '50px'}} onClick={() => store.setPageName(pageNames.MEIN_MENU)}>BACK</div>
    </div>
}
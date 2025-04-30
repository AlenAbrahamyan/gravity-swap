import './App.css';
import {MainMenu} from "./pages/MainMenu";
import {ApplicationWrapper} from "./ApplcationWrapper";
import {store} from "./store";
import {pageNames} from "./constants";
import {LevelSelector} from "./pages/LevelSelector";
import {InfoSection} from "./pages/InfoSection";
import {observer} from "mobx-react-lite";
import {GameContainer} from "./Game";
import {LosePage, WinPage} from "./pages/LosePage";

const CurrentPage = observer(() => {
    switch (store.pageName) {
        case pageNames.IN_GAME:
            return <GameContainer/>;
        case pageNames.LEVELS_SECTION:
            return <LevelSelector/>;
        case pageNames.INFO_SECTION:
            return <InfoSection/>;
        case pageNames.LOSE_PAGE:
            return <LosePage/>;
        case pageNames.WIN_PAGE:
            return <WinPage/>;
        default:
            return <MainMenu/>;
    }
});

const App = observer(() => {
    return (
        <div className="App">
            <ApplicationWrapper>
                <CurrentPage/>
                {/*<GameContainer/>*/}
            </ApplicationWrapper>
        </div>
    );
})

export default App;

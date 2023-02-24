import Routes from "../routes";
import "../i18n/config";
import ReduxProvider from "../core/ReduxProvider";
import ThemWrapper from "../themes";

const App = () => {
    return (
        <ReduxProvider>
            <ThemWrapper>
                <Routes />
            </ThemWrapper>
        </ReduxProvider>
    );
};

export default App;

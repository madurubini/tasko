import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <Toaster />
            <GlobalStyles />
            <Routes />
        </>
    );
}

export default App;

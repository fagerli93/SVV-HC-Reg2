import ChatRoom from "./components/ChatRoom";
import AppContainer from "./components/AppContainer";
import useFirebase from "./utils/firebaseConfig";
import Header from "./components/Header";

function App() {
    useFirebase();
    return (
        <>
            <Header actions={[]} />
            <AppContainer>
                <ChatRoom />
            </AppContainer>
        </>
    );
}

export default App;

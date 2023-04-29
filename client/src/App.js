import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <section className="App">
            <section className="todoapp">
                <Header />
                <Content />
            </section>
            <Footer />
        </section>
    );
}

export default App;

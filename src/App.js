import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./pages/Home";
import PageError from "./pages/PageError";
import publicRouter from "./routes";

function App() {
    return (
        <Router>
            <Routes>
                {publicRouter.map((route, index) => {
                    const Page = route.component;

                    var Layout = ({ children }) => {
                        return <>{children}</>;
                    };
                    if (route.layout) {
                        Layout = ({ children }) => {
                            return <route.layout>{children}</route.layout>;
                        };
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <DefaultLayout>
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </DefaultLayout>
                            }
                        ></Route>
                    );
                })}
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="*"
                    element={
                        <DefaultLayout>
                            <PageError />
                        </DefaultLayout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Layout from '../components/Layout';
const AppRoutes = () => {
    return (
        <Router>
            <Layout>
            <Routes>
                <Route exact path = "/" element = {<Dashboard />} />
            </Routes>
            </Layout>
        </Router>
    )
}
export default AppRoutes;
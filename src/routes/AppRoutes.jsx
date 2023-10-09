import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path = "/" element = {<Dashboard />} />
            </Routes>
        </Router>
    )
}
export default AppRoutes;
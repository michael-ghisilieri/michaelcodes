import ReactDOM from 'react-dom';
import createRoutes from './routes';
// import 'bootstrap/dist/css/bootstrap.css'

const routes = createRoutes();

ReactDOM.render(routes, document.getElementById('root'));

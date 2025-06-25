import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Citas from './pages/Citas/Citas';
import Diagnosticos from './pages/Diagnosticos/Diagnosticos';
import Historial from './pages/Historial/Historial';
import Pagos from './pages/Pagos/Pagos';
import Usuarios from './pages/Usuarios/Usuarios';

/* Ionic Core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark Mode */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/citas">
          <Citas />
        </Route>
        <Route exact path="/diagnosticos">
          <Diagnosticos />
        </Route>
        <Route exact path="/historial">
          <Historial />
        </Route>
        <Route exact path="/pagos">
          <Pagos />
        </Route>
        <Route exact path="/usuarios">
          <Usuarios />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

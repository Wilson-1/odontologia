import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Usuarios: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Usuarios</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            Gestión de usuarios del sistema: doctores, recepcionistas y administradores.
        </IonContent>
        </IonPage>
    );
    };

export default Usuarios;

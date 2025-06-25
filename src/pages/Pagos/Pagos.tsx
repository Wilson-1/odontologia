import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Pagos: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Pagos</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
            Registra y visualiza los pagos realizados por los pacientes.
        </IonContent>
        </IonPage>
    );
    };

export default Pagos;

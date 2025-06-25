import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

const Diagnosticos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Diagnósticos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        En esta sección se registran y consultan los diagnósticos realizados a los pacientes.
      </IonContent>
    </IonPage>
  );
};

export default Diagnosticos;

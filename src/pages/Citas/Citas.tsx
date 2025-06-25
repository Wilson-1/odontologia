import {
    IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonInput, IonButton, IonDatetime, IonToast
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { getCitas, createCita } from '../../services/citasService';
import { Cita } from '../../models/Cita';

const Citas: React.FC = () => {
    const [citas, setCitas] = useState<Cita[]>([]);
    const [paciente, setPaciente] = useState('');
    const [doctor, setDoctor] = useState('');
    const [motivo, setMotivo] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [showToast, setShowToast] = useState(false);

    const cargarCitas = async () => {
    try {
        const res = await getCitas();
        setCitas(res.data);
    } catch (error) {
        console.error('Error al cargar citas', error);
    }
    };

    const registrarCita = async () => {
        if (!paciente || !doctor || !fecha || !hora || !motivo) return;

    const nuevaCita: Cita = { paciente, doctor, fecha, hora, motivo };

    try {
        await createCita(nuevaCita);
        setShowToast(true);
        setPaciente('');
        setDoctor('');
        setMotivo('');
        setFecha('');
        setHora('');
        cargarCitas();
    } catch (error) {
        console.error('Error al crear cita', error);
    }
    };

    useEffect(() => {
        cargarCitas();
    }, []);

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Citas</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

            <h2>Registrar Nueva Cita</h2>
            <IonInput
            label="Paciente"
            labelPlacement="floating"
            value={paciente}
            onIonChange={e => setPaciente(e.detail.value!)}
        />
        <IonInput
            label="Doctor"
            labelPlacement="floating"
            value={doctor}
            onIonChange={e => setDoctor(e.detail.value!)}
            />
            <IonInput
            label="Motivo"
            labelPlacement="floating"
            value={motivo}
            onIonChange={e => setMotivo(e.detail.value!)}
            />
    <IonDatetime
            presentation="date"
            value={fecha}
            onIonChange={e => {
                const fechaValor = e.detail.value;
                if (typeof fechaValor === 'string') {
                setFecha(fechaValor.split('T')[0]);
    }
    }}
/>

    <IonDatetime
            presentation="time"
            value={hora}
            onIonChange={e => {
                const horaValor = e.detail.value;
                if (typeof horaValor === 'string') {
                setHora(horaValor.substring(0, 5));
                }
            }}
/>

        <IonButton expand="block" onClick={registrarCita}>Guardar Cita</IonButton>

        <IonToast
            isOpen={showToast}
            message="Cita registrada correctamente"
            duration={2000}
            onDidDismiss={() => setShowToast(false)}
        />

        <h2 style={{ marginTop: '2rem' }}>Lista de Citas</h2>
        <IonList>
            {citas.map((cita, index) => (
                <IonItem key={index}>
                <IonLabel>
                    <h3>{cita.paciente} - {cita.doctor}</h3>
                    <p>{cita.fecha} a las {cita.hora}</p>
                    <p><strong>Motivo:</strong> {cita.motivo}</p>
                </IonLabel>
                </IonItem>
            ))}
            </IonList>
        </IonContent>
        </IonPage>
    );
};

export default Citas;

import Head from 'next/head'
import { useEffect, useState } from 'react';
import { materiasArray } from '../../hooks/materia.hooks';
import { Typography } from 'antd';
import { IMateria } from '../../interface/subject';
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../services/Firebase"
import { useRecoilState } from 'recoil';
import { Container } from '../../components/Materia/style';
import Content from '../../components/Materia/Content';
import Modal from '../../components/Materia/Modal';
import ConfigDrawer from '../../components/Materia/ConfigDrawer';
import { ConfigFixedButton } from '../../components/Materia/style';
const { Title, Paragraph } = Typography;


export default function Materia() {
    const [materias, setMaterias] = useRecoilState(materiasArray);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalData, setModalData] = useState<IMateria | undefined>();
    const [cardLoading, setCardLoading] = useState(true);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const showModal = (data: IMateria) => {
        setIsModalVisible(true);
        setModalData(data);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const openDrawer = () => {
        setIsDrawerVisible(true);
    }

    const closeDrawer = () => {
        setIsDrawerVisible(false);
    };

    const ApiGetData = async () => {
        const db = getDatabase(app);
        const starCountRef = ref(db, "subjects/");
        let arrayToSort: IMateria[] = []
        onValue(starCountRef, (snapshot) => {
            setMaterias([]);
            snapshot.forEach((childSnapshot) => {
                const childData: IMateria = childSnapshot.val();
                const data = { ...childData, highlighted: false }
                //pega o estado da matéria
                const stateList = JSON.parse(localStorage.getItem("stateSaved") || '[{}]');
                stateList.some((element: { code: string; state: string }) => {
                    if (data.code === element.code) {
                        data.state = element.state
                    }
                    return
                });


                arrayToSort = [...arrayToSort, data]
            });

            arrayToSort.sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            })



            setMaterias(arrayToSort)
            setCardLoading(false)
        });
    }

    useEffect(() => {
        ApiGetData()
        setCardLoading(false)
    }, [])

    return (
        <Container>
            <Head>
                <title>Santa sala | Matérias</title>
                <meta name="description" content="Matérias" />
            </Head>
            <Title style={{ textAlign: 'center', marginBottom: '.5rem' }}>Matérias</Title>
            <Paragraph style={{ textAlign: 'center', marginBottom: '1rem' }}>Aqui você encontra todas as matérias do curso de Sistemas de informação.</Paragraph>
            <hr style={{ marginBottom: '2rem' }} />

            <Content showModal={showModal} cardLoading={cardLoading} />

            <Modal visible={isModalVisible} handleCancel={handleCancel} handleOk={handleOk} data={modalData} />
            <ConfigDrawer visible={isDrawerVisible} closeDrawer={closeDrawer} />
            <ConfigFixedButton onClick={() => setIsDrawerVisible(true)}>Filtro</ConfigFixedButton>
        </Container>
    )
}

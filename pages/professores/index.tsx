import Head from 'next/head'
import { useEffect, useState } from 'react';
import { professoresArray } from '../../hooks/professor.hooks';
import { Row, Typography } from 'antd';
import { Iprofessor } from '../../interface/teacher';
import ProfessorCard from '../../components/Professor/ProfessorCard';
import ProfessorModal from '../../components/Professor/ProfessorModal';
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../services/Firebase"
import { useRecoilState } from 'recoil';
import { Container } from '../../styles/global';
const { Title, Paragraph } = Typography;


export default function Professors() {

    const [professor, setProfessor] = useRecoilState(professoresArray);
    const [modalProfessor, setModalProfessor] = useState<Iprofessor | undefined>();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const ApiGetData = async () => {
        const db = getDatabase(app);
        const starCountRef = ref(db, "teachers/");
        onValue(starCountRef, (snapshot) => {
            setProfessor([]);
            snapshot.forEach((childSnapshot) => {
                const childData: Iprofessor = childSnapshot.val();
                setProfessor(professor => [...professor, childData])
            });
        });
    }

    useEffect(() => {
        ApiGetData()
    }, [])

    const showModal = (professor: Iprofessor) => {
        setModalProfessor(professor);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Container>
            <Head>
                <title>Santa sala | Professores</title>
                <meta name="description" content="professors da sala" />
            </Head>
            <Title style={{ textAlign: 'center', marginBottom: '.5rem' }}>Professores</Title>
            <Paragraph style={{ textAlign: 'center', marginBottom: '1rem' }}>Aqui você encontra todos os professores de Sistemas de informação.</Paragraph>
            <hr style={{ marginBottom: '2rem' }} />
            <Row gutter={[16, 32]}>
                {professor.map(professor => {
                    return (
                        <ProfessorCard key={professor.id} professor={professor} showModal={showModal} />
                    )
                })}
            </Row>
            <ProfessorModal handleOk={handleOk} modalProfessor={modalProfessor} isModalVisible={isModalVisible} handleCancel={handleCancel} />
        </Container>
    )
}

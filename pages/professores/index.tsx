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

const fakeData: Iprofessor = {
    id: "string",
    name: "string",
    profile: "https://lh3.googleusercontent.com/pw/AM-JKLVXy8WXUn1feI37hu-Dg5iYsE8jTBbnrIj2m9kIOmQoF7Q0J4ZOXcM6MWqcgRDZRkd08Uv9X_USc9LescpRoEIu-fgo85SLMXr-xc-aBPgE2OgBGz2ZhDz_Euv8h9mEj_BsuERYHQbn2cXi-r3Q6De9=w564-h820-no?authuser=0",
    banner: "https://lh3.googleusercontent.com/pw/AM-JKLVXy8WXUn1feI37hu-Dg5iYsE8jTBbnrIj2m9kIOmQoF7Q0J4ZOXcM6MWqcgRDZRkd08Uv9X_USc9LescpRoEIu-fgo85SLMXr-xc-aBPgE2OgBGz2ZhDz_Euv8h9mEj_BsuERYHQbn2cXi-r3Q6De9=w564-h820-no?authuser=0",
    masterSubject: "string",
    subjects: ["string", "string"],
    phrase: "string",
    phrases: ["string", "string"],
    description: "string",
    social: {
        emails: ["string", "string"],
        linkedin: "string",
    }
}

export default function professors() {

    const [professor, setProfessor] = useRecoilState(professoresArray);
    const [modalProfessor, setModalProfessor] = useState<Iprofessor | undefined>();
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const ApiGetData = async () => {
    //     const db = getDatabase(app);
    //     const starCountRef = ref(db, "students/");
    //     onValue(starCountRef, (snapshot) => {
    //         setAluno([]);
    //         snapshot.forEach((childSnapshot) => {
    //             const childData: Ialuno = childSnapshot.val();
    //             setAluno(aluno => [...aluno, childData])
    //         });
    //     });
    // }

    useEffect(() => {
        setProfessor([fakeData])
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

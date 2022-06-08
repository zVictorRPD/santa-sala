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
const { Title, Paragraph } = Typography;

const fakeData: IMateria = {
    name: 'calculo 1',
    code: 'IC241',
    description: 'descrição',
    hours: 60,
    dependence: [{
        id: 1,
        name: 'calculo 2',
    }],
    lock: [],
    period: 1,
    optional: false,
    state: 'doing'
}

export default function Professors() {

    const [materias, setMaterias] = useRecoilState(materiasArray);
    const [cardLoading, setCardLoading] = useState(true);

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
        setMaterias([fakeData]);
        setCardLoading(false)
    }, [])

    return (
        <Container>
            <Head>
                <title>Santa sala | Matérias</title>
                <meta name="description" content="professors da sala" />
            </Head>
            <Title style={{ textAlign: 'center', marginBottom: '.5rem' }}>Matérias</Title>
            <Paragraph style={{ textAlign: 'center', marginBottom: '1rem' }}>Aqui você encontra todas as matérias do curso de Sistemas de informação.</Paragraph>
            <hr style={{ marginBottom: '2rem' }} />
            
            <Content cardLoading={cardLoading}  />

        </Container>
    )
}

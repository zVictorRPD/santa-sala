import Head from 'next/head'
import { useEffect, useState } from 'react';
import { materiasArray } from '../../hooks/materia.hooks';
import { Card, Col, Row, Tooltip, Typography } from 'antd';
import { Imateria } from '../../interface/subject';
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../services/Firebase"

import { useRecoilState } from 'recoil';
import { Container, FluxContainer, Overflow, SubjectCard, SubjectCardBody, SubjectCardHeader } from './style';
const { Title, Paragraph } = Typography;
import {
    PartitionOutlined,
    EyeOutlined,
    FormOutlined
} from '@ant-design/icons';

const fakeData: Imateria = {
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
    optional: false
}

export default function professors() {

    const [materias, setMaterias] = useRecoilState(materiasArray);
    const [cardLoading, setCardLoading] = useState(true);
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
        setMaterias([fakeData]);
        setCardLoading(false)
    }, [])


    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Container>
            <Head>
                <title>Santa sala | Matérias</title>
                <meta name="description" content="professors da sala" />
            </Head>
            <Title style={{ textAlign: 'center', marginBottom: '.5rem' }}>Matérias</Title>
            <Paragraph style={{ textAlign: 'center', marginBottom: '1rem' }}>Aqui você encontra todas as matérias do curso de Sistemas de informação.</Paragraph>
            <hr style={{ marginBottom: '2rem' }} />
            <FluxContainer hideScrollbars={false}>
                <Overflow>
                    <Row gutter={[16, 32]}>
                        {[...Array(8)].map((col, index) => {
                            return (
                                <Col key={index} span={3}>
                                    {[...materias].map((subject, i) => {
                                        return (
                                            <Card
                                                key={i}
                                                loading={cardLoading}
                                                actions={[
                                                    <Tooltip placement="bottom" title='Destacar suas depêndencias' key={'Destacar'}>
                                                        <PartitionOutlined />
                                                    </Tooltip>,
                                                    <Tooltip placement="bottom" title='Visualizar informações da matéria' key={'Visualizar'}>
                                                        <EyeOutlined />
                                                    </Tooltip>,
                                                    <Tooltip placement="bottom" title='Editar matéria' key={'Editar'}>
                                                        <FormOutlined />
                                                    </Tooltip>,
                                                ]}
                                                bodyStyle={{ padding: '0' }}
                                                style={{ marginBottom: 16 }}
                                            >
                                                <SubjectCard>
                                                    <SubjectCardHeader>
                                                        {subject?.code} - {subject?.hours}h
                                                    </SubjectCardHeader>
                                                    <SubjectCardBody>
                                                        <Title style={{ margin: 0}}level={3}>{subject?.name}</Title>
                                                    </SubjectCardBody>
                                                </SubjectCard>
                                            </Card>
                                        )
                                    })}
                                </Col>
                            )
                        })}
                    </Row>
                </Overflow>
            </FluxContainer>

        </Container>
    )
}

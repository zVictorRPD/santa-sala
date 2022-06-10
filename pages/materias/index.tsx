import Head from 'next/head'
import { useEffect, useState } from 'react';
import { materiasArray } from '../../hooks/materia.hooks';
import { Typography } from 'antd';
import { IMateria } from '../../interface/subject';

import { useRecoilState } from 'recoil';
import { Container } from '../../components/Materia/style';
import Content from '../../components/Materia/Content';
import Modal from '../../components/Materia/Modal';
const { Title, Paragraph } = Typography;


export default function Materia() {

    const [materias, setMaterias] = useRecoilState(materiasArray);
    const [cardLoading, setCardLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalData, setModalData] = useState<IMateria | undefined>();

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

    return (
        <Container>
            <Head>
                <title>Santa sala | Matérias</title>
                <meta name="description" content="Matérias" />
            </Head>
            <Title style={{ textAlign: 'center', marginBottom: '.5rem' }}>Matérias</Title>
            <Paragraph style={{ textAlign: 'center', marginBottom: '1rem' }}>Aqui você encontra todas as matérias do curso de Sistemas de informação.</Paragraph>
            <hr style={{ marginBottom: '2rem' }} />
            
            <Content showModal={showModal}  />
            <Modal visible={isModalVisible} handleCancel={handleCancel} handleOk={handleOk} data={modalData} />
        </Container>
    )
}

import React from 'react'
import { Modal, Avatar, Button, Typography, Badge } from 'antd';
import {
    UserOutlined,
    LinkedinOutlined,
    MailOutlined
} from '@ant-design/icons';
import { Flex } from '../../styles/global';
import Link from 'next/link';
import { Iprofessor } from '../../interface/teacher'
import styles from './style.module.sass'

interface ProfessorModalProps {
    handleCancel: () => void;
    isModalVisible: boolean;
    modalProfessor: Iprofessor | undefined;
    handleOk: () => void;
}
const { Text, Paragraph } = Typography;

export default function ProfessorModal(props: ProfessorModalProps) {
    return (
        <Modal
            title={props.modalProfessor?.name}
            visible={props.isModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            footer={[
                <Button key="link" type='primary'>
                    <Link href={`professores/${props.modalProfessor?.name}?id=${props.modalProfessor?.id}`}>Ver perfil</Link>
                </Button>
            ]}
        >
            <Flex>
                <Avatar size={64} icon={<UserOutlined />} src={props.modalProfessor?.profile} />
            </Flex>
            <Flex style={{ marginTop: '16px' }}>
                {props.modalProfessor?.social?.emails.map((mail, index) => ( <a key={index} target="_blank" href={mail} rel="noreferrer"><MailOutlined className={styles.modalIcon} /></a>)) }
                {props.modalProfessor?.social?.linkedin && <a target="_blank" href={props.modalProfessor?.social?.linkedin} rel="noreferrer"><LinkedinOutlined className={styles.modalIcon} style={{ color: '#0077b5' }} /></a>}
            </Flex>
            <Paragraph className={styles.phraseLine}>
                <Text italic>{`"${props.modalProfessor?.phrase}"`}</Text>
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
                <Text strong>Descrição:</Text> {props.modalProfessor?.description}
            </Paragraph>
            <Paragraph style={{ marginTop: '.5rem' }}>
                <>
                    <Text strong>Matérias:</Text>
                    {props.modalProfessor?.subjects?.map((tag, index) => { return <Badge style={{ marginLeft: '5px' }} count={tag} key={index} /> })}
                </>
            </Paragraph>
        </Modal>
    )
}

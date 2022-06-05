import React from 'react'
import { Modal, Avatar, Button, Typography, Badge } from 'antd';
import {
    UserOutlined,
    GithubOutlined,
    LinkedinOutlined,
    InstagramOutlined,
    FacebookOutlined,
    TwitterOutlined
} from '@ant-design/icons';
import { Flex } from '../../styles/global';
import Link from 'next/link';
import { Ialuno } from '../../interface/student'
import styles from './style.module.sass'

interface AlunoModalProps {
    handleCancel: () => void;
    isModalVisible: boolean;
    modalAluno: Ialuno | undefined;
    handleOk: () => void;
}
const { Text, Paragraph } = Typography;

export default function AlunoModal(props: AlunoModalProps) {
    return (
        <Modal
            title={props.modalAluno?.name}
            visible={props.isModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            footer={[
                <Button key="link" type='primary'>
                    <Link href={`alunos/${props.modalAluno?.name}?id=${props.modalAluno?.id}`}>Ver perfil</Link>
                </Button>
            ]}
        >
            <Flex>
                <Avatar size={64} icon={<UserOutlined />} src={props.modalAluno?.profile} />
            </Flex>
            <Flex style={{ marginTop: '16px' }}>
                {props.modalAluno?.social?.twitter && <a target="_blank" href={props.modalAluno?.social?.twitter} rel="noreferrer"><TwitterOutlined className={styles.modalIcon} style={{ color: '#1DA1F2' }} /></a>}
                {props.modalAluno?.social?.facebook && <a target="_blank" href={props.modalAluno?.social?.facebook} rel="noreferrer"><FacebookOutlined className={styles.modalIcon} style={{ color: '#4267B2' }} /></a>}
                {props.modalAluno?.social?.instagram && <a target="_blank" href={props.modalAluno?.social?.instagram} rel="noreferrer"><InstagramOutlined className={styles.modalIcon} style={{ color: '#833AB4' }} /></a>}
                {props.modalAluno?.social?.linkedin && <a target="_blank" href={props.modalAluno?.social?.linkedin} rel="noreferrer"><LinkedinOutlined className={styles.modalIcon} style={{ color: '#0077b5' }} /></a>}
                {props.modalAluno?.social?.github && <a target="_blank" href={props.modalAluno?.social?.github} rel="noreferrer"><GithubOutlined className={styles.modalIcon} style={{ color: '#4078c0' }} /></a>}
            </Flex>
            <Paragraph className={styles.phraseLine}>
                <Text italic>{`"${props.modalAluno?.phrase}"`}</Text>
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
                <Text strong>Descrição:</Text> {props.modalAluno?.description}
            </Paragraph>
            <Paragraph>
                <>
                    <Text strong>Tags:</Text>
                    {props.modalAluno?.tags?.map((tag, index) => { return <Badge style={{marginLeft:'5px'}}count={tag} key={index}/> })}
                </>
            </Paragraph>
        </Modal>
    )
}

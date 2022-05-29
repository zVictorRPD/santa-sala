import React from 'react'
import { Modal, Avatar, Button } from 'antd';
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

interface AlunoModalProps {
    handleCancel: () => void;
    isModalVisible: boolean;
    modalAluno: Ialuno | undefined;
    handleOk: () => void;
}

export default function AlunoModal(props: AlunoModalProps) {
    return (
        <Modal
            title={props.modalAluno?.name}
            visible={props.isModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            footer={[
                <Button key="link" type='primary'>
                    <Link href={`alunos/${props.modalAluno?.name}`}>Ver perfil</Link>
                </Button>
            ]}
        >
            <Flex>
                <Avatar size={64} icon={<UserOutlined />} src={true ? '' : props.modalAluno?.profile} />
            </Flex>
            <Flex>
                {props.modalAluno?.social?.twitter && <TwitterOutlined />}
                {props.modalAluno?.social?.facebook && <FacebookOutlined />}
                {props.modalAluno?.social?.instagram && <InstagramOutlined />}
                {props.modalAluno?.social?.linkedin && <LinkedinOutlined />}
                {props.modalAluno?.social?.github && <GithubOutlined />}
            </Flex>
        </Modal>
    )
}

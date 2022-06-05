import React from 'react'
import { Avatar, Badge, Card, Col, Tooltip, Typography } from 'antd';
import {
    ArrowsAltOutlined,
    EyeOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import Meta from 'antd/lib/card/Meta';
import Link from 'next/link';
import { Flex } from '../../styles/global';
import { Ialuno } from '../../interface/student'

interface AlunoCardProps {
    aluno: Ialuno;
    showModal: (aluno: Ialuno) => void;
}

const { Text } = Typography;
export default function AlunoCard(props: AlunoCardProps) {

    return (
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={6} key={props.aluno.id}>
            <Flex>
                <Badge.Ribbon text={props.aluno.mastertag || 'não informado'} color="red">
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <Image
                                placeholder='blur'
                                blurDataURL='/assets/loading.svg'
                                src={props.aluno.banner}
                                width={300}
                                height={300}
                                objectFit={'cover'}
                                alt={`Banner do aluno:${props.aluno.name}`}
                            />
                        }
                        actions={[
                            <Tooltip placement="bottom" title='Visualizar prévia do aluno' key={'Visualizar'}>
                                <ArrowsAltOutlined onClick={() => props.showModal(props.aluno)} />
                            </Tooltip>,
                            <Link href={`alunos/${props.aluno?.name}?id=${props.aluno.id}`} key={'Página do aluno'}>
                                <Tooltip placement="bottom" title='Ver página do aluno'>
                                    <EyeOutlined />
                                </Tooltip>
                            </Link>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={props.aluno?.profile} />}
                            title={props.aluno?.name}
                            description={<Text italic>{`"${props.aluno?.phrase}"`}</Text>}
                        />
                    </Card>
                </Badge.Ribbon>

            </Flex>
        </Col>
    )
}

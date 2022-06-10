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
import { Iprofessor } from '../../interface/teacher'

interface ProfessorCardProps {
    professor: Iprofessor;
    showModal: (professor: Iprofessor) => void;
}

const { Text } = Typography;
export default function ProfessorCard(props: ProfessorCardProps) {

    return (
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={6} key={props.professor.id}>
            <Flex>
                <Badge.Ribbon text={props.professor.masterSubject || 'não informado'} color="red">
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <Image
                                placeholder='blur'
                                blurDataURL='/assets/loading.svg'
                                src={props.professor.banner}
                                width={300}
                                height={300}
                                objectFit={'cover'}
                                alt={`Banner do professor:${props.professor.name}`}
                            />
                        }
                        actions={[
                            <Tooltip placement="bottom" title='Visualizar prévia do professor' key={'Visualizar'}>
                                <EyeOutlined onClick={() => props.showModal(props.professor)} />
                            </Tooltip>,
                            <Link href={`professores/${props.professor?.name}?id=${props.professor.id}`} key={'Página do professor'}>
                                <Tooltip placement="bottom" title='Ver página do professor'>
                                    <ArrowsAltOutlined />
                                </Tooltip>
                            </Link>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar size={48} src={props.professor?.profile} />}
                            title={props.professor?.nickname}
                            description={<Text italic>{`"${props.professor?.phrase}"`}</Text>}
                        />
                    </Card>
                </Badge.Ribbon>

            </Flex>
        </Col>
    )
}

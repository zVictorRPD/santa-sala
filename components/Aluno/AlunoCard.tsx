import React from 'react'
import { Avatar, Card, Col, Tooltip, } from 'antd';
import {
    ArrowsAltOutlined,
    EyeOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import Meta from 'antd/lib/card/Meta';
import Link from 'next/link';
import { FlexCenter } from '../../styles/global';
import { Ialuno } from '../../interface/student'

interface AlunoCardProps {
    aluno: Ialuno;
    showModal: (aluno:Ialuno) => void;
}

export default function AlunoCard(props: AlunoCardProps) {
    return (
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={6} key={props.aluno.id}>
            <FlexCenter>
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
                            alt={`Banner do aluno:`}
                        />
                    }
                    actions={[
                        <Tooltip placement="bottom" title='Visualizar prévia do aluno' key={'Visualizar'}>
                            <ArrowsAltOutlined onClick={() => props.showModal(props.aluno)} />
                        </Tooltip>,
                        <Link href={`alunos/${props.aluno?.name}`} key={'Página do aluno'}>
                            <Tooltip placement="bottom" title='Ver página do aluno'>
                                <EyeOutlined />
                            </Tooltip>
                        </Link>,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={props.aluno?.name}
                        description={<i>{`"${props.aluno?.phrase}"`}</i>}
                    />
                </Card>
            </FlexCenter>
        </Col>
    )
}

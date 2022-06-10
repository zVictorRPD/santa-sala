import { Card, Tooltip, Typography } from 'antd';
import { SubjectCard, SubjectCardBody, SubjectCardHeader } from './style';
import { IMateria } from '../../interface/subject';
const { Title } = Typography;
import styles from './style.module.sass'
import {
    PartitionOutlined,
    EyeOutlined,
} from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { materiasArray } from '../../hooks/materia.hooks';
import { useState } from 'react';

interface MateriaCardProps {
    subject: IMateria;
    cardLoading: boolean;
    id: number;
    showModal: (data: IMateria) => void;
}


export default function MateriaCard(props: MateriaCardProps) {
    const [materias, setMaterias] = useRecoilState(materiasArray);
    const [locks, setLocks] = useState<string[]>(['']);

    const listHighlighted = (subject: IMateria) => {
        
        if (subject.lock !== undefined) setLocks(subject.lock);

        setMaterias([]);
        locks.map((subjectLock) => {
            materias.map((materia) => {
                console.log(subjectLock, materia);
                
                if (materia.name === subjectLock) {
                    const data = { ...materia, highlighted: true }
                    setMaterias(materias => [...materias, data])
                } else {
                    const data = { ...materia, highlighted: false }
                    setMaterias(materias => [...materias, data])
                }
            })
        })
    }
    return (
        <Card
            key={props.id}
            loading={props.cardLoading}
            actions={[
                <Tooltip placement="bottom" title='Destacar suas depêndencias' key={'Destacar'}>
                    <PartitionOutlined onClick={() => listHighlighted(props.subject)} />
                </Tooltip>,
                <Tooltip placement="bottom" title='Visualizar informações da matéria' key={'Visualizar'}>
                    <EyeOutlined onClick={() => props.showModal(props.subject)} />
                </Tooltip>,
            ]}
            bodyStyle={{ padding: '0' }}
            style={{ marginBottom: 16 }}
            className={props.subject.highlighted ? styles.highlighted : ''}
        >
            <SubjectCard>
                <SubjectCardHeader>
                    {props.subject.code} - {props.subject.hours}h
                </SubjectCardHeader>
                <SubjectCardBody>
                    <Title style={{ margin: 0, fontWeight: 400 }} level={3}>{props.subject.name}</Title>
                </SubjectCardBody>
            </SubjectCard>
        </Card>

    )
}

import { Card, Tooltip, Typography } from 'antd';
import { SubjectCard, SubjectCardBody, SubjectCardHeader } from './style';
import { IMateria } from '../../interface/subject';
const { Title } = Typography;
import styles from './style.module.sass'
import {
    PartitionOutlined,
    EyeOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';
import { useRecoilState } from 'recoil';
import { materiasArray } from '../../hooks/materia.hooks';
import { useEffect, useState } from 'react';

interface MateriaCardProps {
    subject: IMateria;
    cardLoading: boolean;
    id: number;
    showModal: (data: IMateria) => void;
}

const stateTitle: any = {
    'todo': 'Matéria a fazer',
    'doing': 'Matéria sendo feita',
    'done': 'Matéria já feita'
}


export default function MateriaCard(props: MateriaCardProps) {
    const [materias, setMaterias] = useRecoilState(materiasArray);
    const [locks, setLocks] = useState<string[]>(props?.subject.lock || ['']);
    const [dependencies, setDependencies] = useState<string[]>(props?.subject.dependence || ['']);
    const clearHighligths = () => {
        const clearMaterias: any[] = [];
        materias.map((materia) => {
            clearMaterias.push({ ...materia, highlighted: false })
        })
        setMaterias(clearMaterias)
    }

    const listHighlighted = (subject: IMateria) => {
        clearHighligths();
        if (subject.highlighted) return
        const highlightedLocks: any[] = [];
        materias.map((materia) => {
            if (locks.includes(materia.name) || dependencies.includes(materia.name) || subject === materia) {
                highlightedLocks.push({ ...materia, highlighted: true })
            } else {
                highlightedLocks.push({ ...materia, highlighted: false })
            }
        })
        setMaterias(highlightedLocks)
    }

    const getStateIcon = (state: string) => {
        switch (state) {
            case 'done': return <CheckCircleOutlined onClick={() => changeState(props.subject)} width={16} />
            case 'doing': return <ClockCircleOutlined onClick={() => changeState(props.subject)} width={16} />
            default: return <QuestionCircleOutlined onClick={() => changeState(props.subject)} width={16} />
        }
    }

    const changeState = (subject: IMateria) => {
        switch (subject.state) {
            case 'done': subject = { ...subject, state: 'todo' }
                break
            case 'doing': subject = { ...subject, state: 'done' }
                break
            default: subject = { ...subject, state: 'doing' }
        }
        const arrayToSort = [...materias.filter(materia => {
            return materia.id !== subject.id
        }), subject]
        arrayToSort.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })
        setMaterias(arrayToSort)
    }

    return (
        <Card
            key={props.id}
            bordered={false}
            loading={props.cardLoading}
            actions={[
                <Tooltip placement="bottom" title='Destacar suas depêndencias' key={'Destacar'}>
                    <PartitionOutlined width={16} onClick={() => listHighlighted(props.subject)} />
                </Tooltip>,
                <Tooltip placement="bottom" title={stateTitle[props.subject.state || 'todo']} key={'Estado'}>
                    {getStateIcon(props?.subject?.state || 'todo')}
                </Tooltip>,
                <Tooltip placement="bottom" title='Visualizar informações da matéria' key={'Visualizar'}>
                    <EyeOutlined width={16} onClick={() => props.showModal(props.subject)} />
                </Tooltip>,
            ]}
            bodyStyle={{ padding: '0' }}
            style={{ marginBottom: 16, border: '1px solid rgb(119, 68, 156,.06)' }}
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

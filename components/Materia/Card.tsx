import { Card, Tooltip, Typography } from 'antd';
import { SubjectCard, SubjectCardBody, SubjectCardFooter, SubjectCardHeader } from './style';
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

const stateColor: any = {
    'todo': '#77449c',
    'doing': '#096dd9',
    'done': '#389e0d'
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
            case 'done': return <CheckCircleOutlined onClick={() => changeState(props.subject)} style={{ color: stateColor[state] }} width={16} />
            case 'doing': return <ClockCircleOutlined onClick={() => changeState(props.subject)} style={{ color: stateColor[state] }} width={16} />
            default: return <QuestionCircleOutlined onClick={() => changeState(props.subject)} style={{ color: stateColor[state] }} width={16} />
        }
    }

    const changeState = (subject: IMateria) => {
        //troca o estado
        switch (subject.state) {
            case 'done': subject = { ...subject, state: 'todo' }
                break
            case 'doing': subject = { ...subject, state: 'done' }
                break
            default: subject = { ...subject, state: 'doing' }
        }
        //ordena as matérias
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

        //pega os estados
        const storageData = JSON.parse(localStorage.getItem("stateSaved") || '[{}]');
        const newStorageData: object[] = []

        //verificar se o estado já existe e o altera
        const editStorage = storageData.some((element: { code: string; state: string }) => {
            if (element.code === subject.code) {
                element.state = subject.state
                newStorageData.push(...storageData);
                return true
            }
            return false
        });
        //se ele n existe, adiciona o mesmo
        if (!editStorage) {
            newStorageData.push(...storageData, { 'code': subject.code, 'state': subject.state });
        }
        localStorage.setItem("stateSaved", JSON.stringify(newStorageData))
        setMaterias(arrayToSort)
    }

    const getSassState = (state: string) => {
        switch (state) {
            case 'done': return styles.highlightedDone
            case 'doing': return styles.highlightedDoing
            default: return styles.highlightedTodo
        }
    }

    return (
        <Card
            key={props.id}
            bordered={false}
            loading={props.cardLoading}
            bodyStyle={{ padding: '0' }}
            style={{ marginBottom: 8, border: '1px solid rgb(119, 68, 156,.06)' }}
            className={props.subject.highlighted ? getSassState(props.subject.state || 'todo') : ''}
            size={'small'}
        >
            <SubjectCard>
                <SubjectCardHeader stateColor={stateColor[props.subject.state || 'todo']}>
                    {props.subject.code} - {props.subject.hours}h
                </SubjectCardHeader>
                <SubjectCardBody>
                    <Title style={{ margin: 0, fontWeight: 400, textTransform: 'lowercase' }} level={5}>{props.subject.name}</Title>
                </SubjectCardBody>
                <SubjectCardFooter>
                    <li>
                        <Tooltip placement="bottom" title='Destacar suas depêndencias' key={'Destacar'}>
                            <PartitionOutlined width={16} onClick={() => listHighlighted(props.subject)} style={{ color: stateColor[props.subject.state || 'todo'] }} />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip placement="bottom" title={stateTitle[props.subject.state || 'todo']} key={'Estado'}>
                            {getStateIcon(props?.subject?.state || 'todo')}
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip placement="bottom" title='Visualizar informações da matéria' key={'Visualizar'}>
                            <EyeOutlined width={16} onClick={() => props.showModal(props.subject)} style={{ color: stateColor[props.subject.state || 'todo'] }} />
                        </Tooltip>
                    </li>
                </SubjectCardFooter>
            </SubjectCard>
        </Card>

    )
}

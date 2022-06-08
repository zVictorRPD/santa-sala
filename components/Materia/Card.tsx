import { Card, Tooltip, Typography } from 'antd';
import { SubjectCard, SubjectCardBody, SubjectCardHeader } from './style';
import { IMateria } from '../../interface/subject';
const { Title } = Typography;
import {
    PartitionOutlined,
    EyeOutlined,
} from '@ant-design/icons';

interface MateriaCardProps {
    subject: IMateria;
    cardLoading: boolean;
    id: number;
}


export default function MateriaCard(props: MateriaCardProps) {
    return (
        <Card
            key={props.id}
            loading={props.cardLoading}
            actions={[
                <Tooltip placement="bottom" title='Destacar suas depêndencias' key={'Destacar'}>
                    <PartitionOutlined />
                </Tooltip>,
                <Tooltip placement="bottom" title='Visualizar informações da matéria' key={'Visualizar'}>
                    <EyeOutlined />
                </Tooltip>,
            ]}
            bodyStyle={{ padding: '0' }}
            style={{ marginBottom: 16 }}
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

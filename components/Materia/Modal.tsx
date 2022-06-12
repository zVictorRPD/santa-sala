import { Button, Modal, Typography } from 'antd';
import Link from 'next/link';
import { IMateria } from '../../interface/subject';
const { Title } = Typography;

const period: any = {
    1: 'Primeiro',
    2: 'Segundo',
    3: 'Terceiro',
    4: 'Quarto',
    5: 'Quinto',
    6: 'Sexto',
    7: 'Sétimo',
    8: 'Oitavo',
}

interface MateriaModalProps {
    visible: boolean;
    handleCancel: () => void;
    handleOk: () => void;
    data: IMateria | undefined;
}
const { Text, Paragraph } = Typography;

export default function MateriaModal(props: MateriaModalProps) {
    return (
        <Modal
            title={props.data?.name}
            visible={props.visible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            footer={[
                <Button key="link" type='default' onClick={props.handleCancel}>Fechar</Button>
            ]}
        >
            <Paragraph style={{ textAlign: 'justify' }}>
                <Text strong>Código:</Text> {props.data?.code}
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
                <Text strong>Periodo:</Text> {period[props.data?.period || 1]}
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
                <Text strong>Carga horária:</Text> {props.data?.hours} Horas
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
                <Text strong>Descrição:</Text> {props.data?.description}
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
                <Text strong>Requisitos:</Text>
                <ul>
                    {props.data?.dependence !== undefined ?
                        props.data?.dependence?.map(dependence => { return <li key={dependence}>{dependence}</li> })
                        : 'Não tem nenhum requisito'}
                </ul>
            </Paragraph>
            <Paragraph style={{ textAlign: 'justify' }}>
                <Text strong>Tranca:</Text>
                <ul>
                    {props.data?.lock !== undefined ?
                        props.data?.lock.map(lock => { return <li key={lock}>{lock}</li> })
                        : 'Não tranca nenhuma matéria'}
                </ul>
            </Paragraph>
        </Modal>
    )
}

import { Modal, Typography } from 'antd';
import { IMateria } from '../../interface/subject';
const { Title } = Typography;

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { materiasArray } from '../../hooks/materia.hooks';

interface MateriaModalProps {
    visible: boolean;
    handleCancel: () => void;
    handleOk:  () => void;
    data: IMateria | undefined;
}


export default function MateriaModal(props: MateriaModalProps) {
    return (
        <Modal title={props.data?.name} visible={props.visible} onOk={props.handleOk} onCancel={props.handleCancel}>
            
        </Modal>
    )
}

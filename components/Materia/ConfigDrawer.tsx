import { Button, Drawer } from 'antd';
import { useState } from 'react';
import { IMateria } from '../../interface/subject';


interface MateriaDrawerProps {
    closeDrawer: () => void;
    visible: boolean;
}

export default function MateriaDrawer(props: MateriaDrawerProps) {
    
    return (
        <Drawer
            title={`Drawer`}
            placement="right"
            size={'default'}
            onClose={props.closeDrawer}
            visible={props.visible}
            extra={
                <Button type="primary" onClick={props.closeDrawer}>
                    OK
                </Button>
            }
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}

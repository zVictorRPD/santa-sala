import { materiasArray } from '../../hooks/materia.hooks';
import { Col, Row, Typography } from 'antd';
import { useRecoilState } from 'recoil';
import { FluxContainer, Overflow } from './style';
import MateriaCard from './Card';
import { IMateria } from '../../interface/subject';
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../services/Firebase"
import { useEffect, useState } from 'react';
const { Title } = Typography;
interface ContentProps {
    showModal: (data: IMateria) => void;
}

export default function Content(props: ContentProps) {
    const [materias, setMaterias] = useRecoilState(materiasArray);
    const [cardLoading, setCardLoading] = useState(true);

    const ApiGetData = async () => {
        const db = getDatabase(app);
        const starCountRef = ref(db, "subjects/");
        onValue(starCountRef, (snapshot) => {
            setMaterias([]);
            snapshot.forEach((childSnapshot) => {
                const childData: IMateria = childSnapshot.val();
                const data = { ...childData, highlighted: false }
                setMaterias(materias => [...materias, data])
            });
        });
        setCardLoading(false)
    }

    useEffect(() => {
        ApiGetData()
        setCardLoading(false)
    }, [])

    return (
        <FluxContainer hideScrollbars={true}>
            <Overflow>
                <Row gutter={[16, 32]}>
                    {[...Array(8)].map((col, index) => {
                        return (
                            <Col key={index} span={3}>
                                <Title level={3} style={{ textAlign: 'center' }}>{index + 1}° Período</Title>
                                {materias.map((subject, i) => {
                                    if (subject.period === index + 1) return (<MateriaCard key={i} id={i} subject={subject} cardLoading={cardLoading} showModal={props.showModal} />)
                                })}
                            </Col>
                        )
                    })}
                </Row>
            </Overflow>
        </FluxContainer>
    )
}

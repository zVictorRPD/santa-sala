import { materiasArray } from '../../hooks/materia.hooks';
import { Col, Row, Typography } from 'antd';
import { useRecoilState } from 'recoil';
import { FluxContainer, Overflow } from './style';
import MateriaCard from './Card';
import { IMateria } from '../../interface/subject';

const { Title } = Typography;
interface ContentProps {
    showModal: (data: IMateria) => void;
    cardLoading: boolean;
}

export default function Content(props: ContentProps) {
    const [materias, setMaterias] = useRecoilState(materiasArray);

    return (
        <FluxContainer hideScrollbars={true}>
            <Overflow>
                <Row gutter={[8, 32]}>
                    {[...Array(8)].map((col, index) => {
                        return (
                            <Col key={index} span={3}>
                                <Title level={3} style={{ textAlign: 'center' }}>{index + 1}° Período</Title>
                                {materias.map((subject, i) => {
                                    if (subject.period === index + 1) return (<MateriaCard key={i} id={i} subject={subject} cardLoading={props.cardLoading} showModal={props.showModal} />)
                                })}
                            </Col>
                        )
                    })}
                </Row>
            </Overflow>
        </FluxContainer>
    )
}

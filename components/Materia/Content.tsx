import { materiasArray } from '../../hooks/materia.hooks';
import { Col, Row, Typography } from 'antd';
import { useRecoilState } from 'recoil';
import { FluxContainer, Overflow } from './style';
import MateriaCard from './Card';
const { Title } = Typography;
interface ContentProps {
    cardLoading: boolean;
}

export default function Content(props: ContentProps) {
    const [materias, setMaterias] = useRecoilState(materiasArray);

    return (
        <FluxContainer hideScrollbars={true}>
            <Overflow>
                <Row gutter={[16, 32]}>
                    {[...Array(8)].map((col, index) => {
                        return (
                            <Col key={index} span={3}>
                                <Title level={3} style={{ textAlign: 'center' }}>{index + 1}° Período</Title>
                                {[...materias, ...materias, ...materias, ...materias, ...materias, ...materias, ...materias, ...materias,].map((subject, i) => {
                                    return (<MateriaCard key={index} id={index} subject={subject} cardLoading={props.cardLoading} />)
                                })}
                            </Col>
                        )
                    })}
                </Row>
            </Overflow>
        </FluxContainer>
    )
}

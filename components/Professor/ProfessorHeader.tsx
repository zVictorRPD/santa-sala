import { Avatar, Badge, Col, Row, Typography } from "antd";
import { Iprofessor } from '../../interface/teacher';
import { Flex } from "../../styles/global";
import {
    UserOutlined,
    LinkedinOutlined,
    MailOutlined,
    FileProtectOutlined
} from '@ant-design/icons';
import styles from './style.module.sass'

interface ProfessorHeaderProps {
    professor?: Iprofessor;
}


export default function ProfessorHeader(props: ProfessorHeaderProps) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { Text, Paragraph, Title } = Typography;
    return (
        <>
            <Row gutter={[16, 32]}>
                <Col xs={24} md={6}>
                    <Flex>
                        <Avatar size={180} icon={<UserOutlined />} src={props.professor?.profile} />
                    </Flex>
                </Col>
                <Col xs={24} md={18}>
                    <Title level={2} style={{ fontWeight: '400', marginBottom: '0.5em' }}>{props.professor?.nickname}</Title>
                    <Title level={4} style={{ fontWeight: '600', marginTop: '0em' }}>{props.professor?.name}</Title>
                    <Flex style={{ margin: '16px 0', justifyContent: 'start' }}>
                        {props.professor?.social?.email && <a href={`mailto:${props.professor?.social?.email}`} rel="noreferrer"><MailOutlined className={styles.modalIcon} /></a>}
                        {props.professor?.social?.linkedin && <a target="_blank" href={props.professor?.social?.linkedin} rel="noreferrer"><LinkedinOutlined className={styles.modalIconPerfil} style={{ color: '#0077b5' }} /></a>}
                        {props.professor?.social?.lattes && <a target="_blank" href={props.professor?.social?.lattes} rel="noreferrer"><FileProtectOutlined className={styles.modalIconPerfil} style={{ color: '#36366a' }} /></a>}
                    </Flex>
                    <Paragraph style={{ textAlign: 'justify' }}>
                        <Text strong>Descrição:</Text> {props.professor?.description}
                    </Paragraph>
                    {/* <Paragraph style={{ marginTop: '.5rem' }}>
                        <>
                            <Text strong>Matérias:</Text>
                            {props.professor?.subjects?.map((tag, index) => { return <Badge style={{ marginLeft: '5px' }} count={tag} key={index} /> })}
                        </>
                    </Paragraph> */}
                </Col>
            </Row>
        </>
    )
}

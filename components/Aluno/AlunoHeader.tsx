import { useState } from "react";
import { Avatar, Badge, Col, Row, Typography } from "antd";
import { Ialuno } from '../../interface/student';
import { Flex } from "../../styles/global";
import {
  UserOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import styles from './style.module.sass'

interface AlunoHeaderProps {
    aluno?: Ialuno;
}


export default function AlunoHeader(props: AlunoHeaderProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { Text, Paragraph, Title } = Typography;
  return (
    <>
      <Row gutter={[16, 32]}>
        <Col xs={24} md={6}>
          <Flex>
            <Avatar size={180} icon={<UserOutlined />} src={props.aluno?.profile} />
          </Flex>
        </Col>
        <Col xs={24} md={18}>
          <Title level={2} style={{ fontWeight: '400', marginBottom: '0.5em' }}>{props.aluno?.nickname}</Title>
          <Title level={4} style={{ fontWeight: '600', marginTop: '0em' }}>{props.aluno?.name}</Title>
          <Flex style={{ margin: '16px 0', justifyContent: 'start' }}>
            {props.aluno?.social?.twitter && <a target="_blank" href={props.aluno?.social?.twitter} rel="noreferrer"><TwitterOutlined className={styles.modalIconPerfil} style={{ color: '#1DA1F2' }} /></a>}
            {props.aluno?.social?.facebook && <a target="_blank" href={props.aluno?.social?.facebook} rel="noreferrer"><FacebookOutlined className={styles.modalIconPerfil} style={{ color: '#4267B2' }} /></a>}
            {props.aluno?.social?.instagram && <a target="_blank" href={props.aluno?.social?.instagram} rel="noreferrer"><InstagramOutlined className={styles.modalIconPerfil} style={{ color: '#833AB4' }} /></a>}
            {props.aluno?.social?.linkedin && <a target="_blank" href={props.aluno?.social?.linkedin} rel="noreferrer"><LinkedinOutlined className={styles.modalIconPerfil} style={{ color: '#0077b5' }} /></a>}
            {props.aluno?.social?.github && <a target="_blank" href={props.aluno?.social?.github} rel="noreferrer"><GithubOutlined className={styles.modalIconPerfil} style={{ color: '#4078c0' }} /></a>}
          </Flex>
          <Paragraph style={{ textAlign: 'justify' }}>
            <Text strong>Descrição:</Text> {props.aluno?.description}
          </Paragraph>
          <Paragraph>
            <>
              <Text strong>Tags:</Text>
              {props.aluno?.tags.map((tag, index) => { return <Badge style={{ marginLeft: '5px' }} count={tag} key={index} /> })}
            </>
          </Paragraph>
        </Col>
      </Row>
    </>
  )
}

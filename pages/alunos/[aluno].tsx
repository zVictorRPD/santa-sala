import { useEffect, useState } from "react";
import { Avatar, Badge, Col, List, Row, Space, Tabs, Typography, Image } from "antd";
import { Ialuno } from '../../interface/student';
import Head from "next/head";
import { useRouter } from "next/router";
import { Flex } from "../../styles/global";
import {
  UserOutlined,
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  FontColorsOutlined,
  EyeOutlined,
  CameraOutlined
} from '@ant-design/icons';
import styles from './style.module.sass'
import app from "../../services/Firebase"
import { getDatabase, ref, onValue, query } from "firebase/database";



export default function aluno() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const router = useRouter();
  const { aluno, id } = router.query;
  const [alunoAtual, setAlunoAtual] = useState<Ialuno>();

  const queryById = () => {
    if (id === undefined) return
    const db = getDatabase(app);
    const topUserPostsRef = query(
      ref(db, `students/${id}`)
    );
    onValue(topUserPostsRef, (snapshot) => {
      setAlunoAtual(snapshot.val())
    });
  };

  useEffect(() => {
    queryById()
  }, [id])

  const { Text, Paragraph, Title } = Typography;
  const { TabPane } = Tabs;
  return (
    <>
      <Head>
        <title>Santa sala | {aluno}</title>
        <meta name="description" content="alunos da sala" />
      </Head>
      <Row gutter={[16, 32]}>
        <Col xs={24} md={6}>
          <Flex>
            <Avatar size={180} icon={<UserOutlined />} src={alunoAtual?.profile} />
          </Flex>
        </Col>
        <Col xs={24} md={18}>
          <Title level={2} style={{ fontWeight: '400', marginBottom: '0.5em' }}>{alunoAtual?.nickname}</Title>
          <Title level={4} style={{ fontWeight: '600', marginTop: '0em' }}>{alunoAtual?.name}</Title>
          <Flex style={{ margin: '16px 0', justifyContent: 'start' }}>
            {alunoAtual?.social?.twitter && <a target="_blank" href={alunoAtual?.social?.twitter} rel="noreferrer"><TwitterOutlined className={styles.modalIcon} style={{ color: '#1DA1F2' }} /></a>}
            {alunoAtual?.social?.facebook && <a target="_blank" href={alunoAtual?.social?.facebook} rel="noreferrer"><FacebookOutlined className={styles.modalIcon} style={{ color: '#4267B2' }} /></a>}
            {alunoAtual?.social?.instagram && <a target="_blank" href={alunoAtual?.social?.instagram} rel="noreferrer"><InstagramOutlined className={styles.modalIcon} style={{ color: '#833AB4' }} /></a>}
            {alunoAtual?.social?.linkedin && <a target="_blank" href={alunoAtual?.social?.linkedin} rel="noreferrer"><LinkedinOutlined className={styles.modalIcon} style={{ color: '#0077b5' }} /></a>}
            {alunoAtual?.social?.github && <a target="_blank" href={alunoAtual?.social?.github} rel="noreferrer"><GithubOutlined className={styles.modalIcon} style={{ color: '#4078c0' }} /></a>}
          </Flex>
          <Paragraph style={{ textAlign: 'justify' }}>
            <Text strong>Descrição:</Text> {alunoAtual?.description}
          </Paragraph>
          <Paragraph>
            <>
              <Text strong>Tags:</Text>
              {alunoAtual?.tags.map((tag, index) => { return <Badge style={{ marginLeft: '5px' }} count={tag} key={index} /> })}
            </>
          </Paragraph>
        </Col>
      </Row>

      <Tabs style={{ marginTop: '2rem' }} defaultActiveKey="1" centered>
        <TabPane
          tab={
            <span>
              <CameraOutlined />
              Galeria
            </span>
          }
          key="1"
        >
          <Image.PreviewGroup>
            <Flex className={styles.galleryFlex}>
              {[...alunoAtual?.gallery || [], alunoAtual?.banner, alunoAtual?.profile].map((image, index) => {
                return (
                  <Image
                    key={index}
                    width={300}
                    height={300}
                    style={{ objectFit: 'cover' }}
                    src={image}
                    alt="imagem do aluno"
                    preview={{
                      maskClassName: 'customize-mask',
                      mask: (
                        <>
                          <EyeOutlined />
                          <span style={{ paddingLeft: '4px' }}>Visualizar</span>
                        </>
                      ),
                    }}
                  />
                )
              })
              }
            </Flex>
          </Image.PreviewGroup>
        </TabPane>
        <TabPane
          tab={
            <span>
              <FontColorsOutlined />
              Frases icônicas
            </span>
          }
          key="2"
        >
          <List
            size="large"
            bordered
            dataSource={alunoAtual?.phrases || ['']}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </TabPane>
      </Tabs>
    </>
  )
}

import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { alunosArray } from '../../hooks/alunos.hooks';
import { ApiGetData } from '../../services/Api';
import { Row, Typography } from 'antd';
import { Ialuno } from '../../interface/student';
const { Title } = Typography;
import AlunoCard from '../../components/Aluno/AlunoCard'
import AlunoModal from '../../components/Aluno/AlunoModal';


export default function alunos() {
  const [aluno, setAluno] = useRecoilState(alunosArray);
  const [modalAluno, setModalAluno] = useState<Ialuno | undefined>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (aluno: Ialuno) => {
    setModalAluno(aluno);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    ApiGetData({ rota: 'https://6293a4ec089f87a57ac3ca4f.mockapi.io/Alunos', state: setAluno });
  }, [setAluno]);

  return (
    <>
      <Head>
        <title>Santa sala | Alunos</title>
        <meta name="description" content="alunos da sala" />
      </Head>
      <Title>Alunos</Title>
      <Row gutter={[16, 32]}>
        {aluno.map(aluno => {
          return (
            <AlunoCard key={aluno.id} aluno={aluno} showModal={showModal} />
          )
        })}
      </Row>

      <AlunoModal handleOk={handleOk} modalAluno={modalAluno} isModalVisible={isModalVisible} handleCancel={handleCancel} />

    </>

  )
}

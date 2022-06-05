import Head from 'next/head'
import { useEffect, useState } from 'react';
import { alunosArray } from '../../hooks/alunos.hooks';
import { Row, Typography } from 'antd';
import { Ialuno } from '../../interface/student';
import AlunoCard from '../../components/Aluno/AlunoCard'
import AlunoModal from '../../components/Aluno/AlunoModal';
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../services/Firebase"
import { useRecoilState } from 'recoil';
const { Title, Paragraph } = Typography;


export default function alunos() {

  const [aluno, setAluno] = useRecoilState(alunosArray);
  const [modalAluno, setModalAluno] = useState<Ialuno | undefined>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const ApiGetData = async () => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "students/");
    onValue(starCountRef, (snapshot) => {
      setAluno([]);
      snapshot.forEach((childSnapshot) => {
        const childData: Ialuno = childSnapshot.val();
        setAluno(aluno => [...aluno,childData])
      });
    });
  }

  useEffect(()=>{
    ApiGetData()
  },[])

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

  return (
    <>
      <Head>
        <title>Santa sala | Alunos</title>
        <meta name="description" content="alunos da sala" />
      </Head>
      <Title style={{ textAlign: 'center', marginBottom: '.5rem' }}>Alunos</Title>
      <Paragraph style={{ textAlign: 'center', marginBottom: '1rem' }}>Aqui você encontra todos os alunos de Sistema de informação da turma de 2019.</Paragraph>
      <hr style={{ marginBottom: '2rem' }} />
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

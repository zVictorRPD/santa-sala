import Head from 'next/head'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { alunosArray } from '../../hooks/alunos.hooks';
import { ApiGetData } from '../../services/Api';

export default function alunos() {
  const [aluno, setAluno] = useRecoilState(alunosArray);

  useEffect(() => {
    ApiGetData({ rota: 'https://6292791b9d159855f08b2bb7.mockapi.io/Alunos', state: setAluno });
  }, [setAluno]);
  console.log(aluno);
  
  return (
    <>
      <Head>
        <title>Santa sala | Alunos</title>
        <meta name="description" content="alunos da sala" />
      </Head>
      <h1>Alunos</h1>
    </>

  )
}

import { useEffect, useState } from "react";
import { Ialuno } from '../../interface/student';
import Head from "next/head";
import { useRouter } from "next/router";
import app from "../../services/Firebase"
import { getDatabase, ref, onValue, query } from "firebase/database";
import AlunoHeader from "../../components/Aluno/AlunoHeader";
import AlunoTabs from "../../components/Aluno/AlunoTabs";
import { Container } from "../../styles/global";

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

  return (
    <Container>
      <Head>
        <title>Santa sala | {aluno}</title>
        <meta name="description" content="alunos da sala" />
      </Head>

      <AlunoHeader aluno={alunoAtual} />

      <AlunoTabs aluno={alunoAtual} />
    </Container>
  )
}

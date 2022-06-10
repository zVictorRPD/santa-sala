import { useEffect, useState } from "react";
import { Iprofessor } from '../../interface/teacher';
import Head from "next/head";
import { useRouter } from "next/router";
import app from "../../services/Firebase"
import { getDatabase, ref, onValue, query } from "firebase/database";
import ProfessorHeader from "../../components/Professor/ProfessorHeader";
import ProfessorTabs from "../../components/Professor/ProfessorTabs";
import { Container } from "../../styles/global";

export default function professor() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const router = useRouter();
  const { professor, id } = router.query;
  const [professorAtual, setProfessorAtual] = useState<Iprofessor>();

  const queryById = () => {
    if (id === undefined) return
    const db = getDatabase(app);
    const topUserPostsRef = query(
      ref(db, `teachers/${id}`)
    );
    onValue(topUserPostsRef, (snapshot) => {
      setProfessorAtual(snapshot.val())
    });
  };

  useEffect(() => {
    queryById()
  }, [id])

  return (
    <Container>
      <Head>
        <title>Santa sala | {professor}</title>
        <meta name="description" content="professors da sala" />
      </Head>

      <ProfessorHeader professor={professorAtual} />
      <ProfessorTabs professor={professorAtual} />
    </Container>
  )
}

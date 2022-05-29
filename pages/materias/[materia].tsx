import Head from "next/head";
import { useRouter } from "next/router";

export default function aluno() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const {materia} = router.query;
  
  return (
    <>
      <Head>
        <title>Santa sala | {materia}</title>
        <meta name="description" content="alunos da sala" />
      </Head>
      <h1>Matéria</h1>
    </>
  )
}

import Head from "next/head";
import { useRouter } from "next/router";

export default function aluno() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const {aluno} = router.query;
  
  return (
    <>
      <Head>
        <title>Santa sala | {aluno}</title>
        <meta name="description" content="alunos da sala" />
      </Head>
      <h1>Aluno</h1>
    </>
  )
}

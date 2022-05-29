import Head from "next/head";
import { useRouter } from "next/router";

export default function aluno() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const {pessoa} = router.query;
  
  return (
    <>
      <Head>
        <title>Santa sala | {pessoa}</title>
        <meta name="description" content="Pessoa da sala" />
      </Head>
      <h1>Pessoa honrosa</h1>
    </>
  )
}

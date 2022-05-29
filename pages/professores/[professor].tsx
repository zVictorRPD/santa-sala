import Head from "next/head";
import { useRouter } from "next/router";

export default function aluno() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const {professor} = router.query;
  
  return (
    <>
      <Head>
        <title>Santa sala | {professor}</title>
        <meta name="description" content="professor da sala" />
      </Head>
      <h1>Professor</h1>
    </>
  )
}

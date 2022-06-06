import { useEffect, useState } from "react";
import { Iprofessor } from '../../interface/teacher';
import Head from "next/head";
import { useRouter } from "next/router";
import app from "../../services/Firebase"
import { getDatabase, ref, onValue, query } from "firebase/database";
import ProfessorHeader from "../../components/Professor/ProfessorHeader";
import ProfessorTabs from "../../components/Professor/ProfessorTabs";


const fakeData: Iprofessor = {
  id: "string",
  name: "string",
  profile: "https://lh3.googleusercontent.com/pw/AM-JKLVXy8WXUn1feI37hu-Dg5iYsE8jTBbnrIj2m9kIOmQoF7Q0J4ZOXcM6MWqcgRDZRkd08Uv9X_USc9LescpRoEIu-fgo85SLMXr-xc-aBPgE2OgBGz2ZhDz_Euv8h9mEj_BsuERYHQbn2cXi-r3Q6De9=w564-h820-no?authuser=0",
  banner: "https://lh3.googleusercontent.com/pw/AM-JKLVXy8WXUn1feI37hu-Dg5iYsE8jTBbnrIj2m9kIOmQoF7Q0J4ZOXcM6MWqcgRDZRkd08Uv9X_USc9LescpRoEIu-fgo85SLMXr-xc-aBPgE2OgBGz2ZhDz_Euv8h9mEj_BsuERYHQbn2cXi-r3Q6De9=w564-h820-no?authuser=0",
  masterSubject: "string",
  subjects: ["string", "string"],
  phrase: "string",
  phrases: ["string", "string"],
  description: "string",
  social: {
      emails: ["string", "string"],
      linkedin: "string",
  }
}

export default function professor() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const router = useRouter();
  const { professor, id } = router.query;
  const [professorAtual, setProfessorAtual] = useState<Iprofessor>();

  // const queryById = () => {
  //   if (id === undefined) return
  //   const db = getDatabase(app);
  //   const topUserPostsRef = query(
  //     ref(db, `students/${id}`)
  //   );
  //   onValue(topUserPostsRef, (snapshot) => {
  //     setProfessorAtual(snapshot.val())
  //   });
  // };

  useEffect(() => {
    // queryById()
    setProfessorAtual(fakeData)
  }, [id])

  return (
    <>
      <Head>
        <title>Santa sala | {professor}</title>
        <meta name="description" content="professors da sala" />
      </Head>

      <ProfessorHeader professor={professorAtual} />

      <ProfessorTabs professor={professorAtual} />
    </>
  )
}

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "../components/Login";
import { useRouter } from "next/router";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  Firestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { nanoid } from "nanoid";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);

  const createNewDocument = async () => {
    var nanoId = nanoid();
    const colref = collection(db, "userdocs");
    const docref = doc(
      db,
      "userdocs/users",
      session?.user?.email ?? "loggedinuser",
      nanoId
    );
    await setDoc(docref, {
      title: "New Document",
      createdOn: serverTimestamp(),
    });
    router.push(`/doc/${nanoId}`);
  };

  if (!session) {
    return <Login />;
  } else {
    return (
      <div>
        <Head>
          <title>Google Docs</title>
          <link rel="icon" href="/docs.ico" />
        </Head>

        <Header />
        <section className="bg-[#F8F9FA] pb-10 px-10">
          <div className="max-w-3xl mx-auto">
            <div className="py-6 flex justify-between">
              <h3 className="text-gray-700 text-lg">Start a new document</h3>
              <span className="material-icons-round">more_vert</span>
            </div>
            <div>
              <div
                onClick={() => createNewDocument()}
                className="relative 
            h-52 w-40 
            cursor-pointer border-2 border-transparent hover:border-blue-700"
              >
                <Image src="/docs-blank-googlecolors.png" layout="fill" />
              </div>
              <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
                Blank
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-10 md:px-0">
          <div className="max-w-3xl mx-auto py-9">
            <div
              className="flex items-center 
          justify-between pb-5
          text-sm text-gray-700"
            >
              <h2 className="font-medium flex-grow">My Documents</h2>
              <p className="mr-12 font-medium">Date Created</p>
              <span className="material-icons-round">folder</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Home;

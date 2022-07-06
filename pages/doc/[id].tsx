import { Button } from "@material-tailwind/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { NextPage } from "next/types";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

const Doc: NextPage = () => {
  const [documentName, setdocumentName] = useState("New Document");
  const { data: session } = useSession();
  return (
    <div>
      <header
        className="flex 
      items-center px-4 py-4 shadow-md sticky top-0 z-50"
      >
        <div className="flex cursor-pointer">
          <Image
            src="/Docs.png"
            width={30}
            height={30}
            className="rounded-lg cursor-pointer"
          />
        </div>
        <div className="flex-grow">
          <input
            className="text-xl 
           px-4
           text-grey-600
           border-transparent 
            border-grey-300
           focus-within:px-2
           focus-within:text-grey-900"
            type="text"
            value={documentName}
          />
          <div className="flex items-center px-2 ">
            <p className="mx-2 text-sm text-grey-700">File</p>
            <p className="mx-2 text-sm text-grey-700">Edit</p>
            <p className="mx-2 text-sm text-grey-700">View</p>
            <p className="mx-2 text-sm text-grey-700">Format</p>
            <p className="mx-2 text-sm text-grey-700">Help</p>
          </div>
        </div>

        <div className="flex items-center">
          <Button className="mr-3">Share</Button>
          <Image
            loading="lazy"
            src={session?.user?.image ?? "/satish.jpg"}
            onClick={() => signOut()}
            width={30}
            height={30}
            className="cursor-pointer h-12 w-12 rounded-full ml-6"
          />
        </div>
      </header>
      <div className="bg-[#F8F9FA] min-h-screen pb-16">
        <Editor
          toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
          editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border-transparent"
        />
      </div>
    </div>
  );
};

export default Doc;

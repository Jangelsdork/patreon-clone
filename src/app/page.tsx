import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UserForm } from "../components/UserForm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 mt-[15vh] ">
      <div className="min-w-[60vw]">
      <UserForm/>
      

      </div>
    </main>
  );
}

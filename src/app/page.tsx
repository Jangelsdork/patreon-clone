import { UserForm } from "../components/UserForm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="min-w-[60vw]">
      <UserForm />

      </div>
    </main>
  );
}

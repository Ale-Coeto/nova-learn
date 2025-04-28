import AuthCard from "./components/authCard";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="text-3xl font-bold mb-10 text-neutral-800">
        Bienvenido a Nova Learn
      </div>
      <AuthCard />
    </div>
  );
}

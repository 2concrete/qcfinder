import Test from "./components/Test";

export default function Product() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full mt-40 justify-center bg-white dark:bg-black">
        <Test />
      </main>
    </div>
  );
}

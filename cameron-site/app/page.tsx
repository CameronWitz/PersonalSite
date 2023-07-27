import Image from "next/image";

export default function Home() {
  const numbers = Array(10).fill(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {numbers.map((item, ind) => {
        return <p key={ind}>{item}</p>;
      })}
    </main>
  );
}

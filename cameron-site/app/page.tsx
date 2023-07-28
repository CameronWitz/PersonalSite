import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomePageItem>
        <div
          className="flex relative overflow-hidden rounded-3xl"
          style={{ height: "100%", minWidth: "300px" }}
        >
          <Image
            alt="Cameron's Picture"
            src="/images/CameronSiteProfileCropped.png"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </HomePageItem>

      <HomePageItem>
        <h1 className="flex font-bold text-5xl">About me:</h1>
        <p className="flex text-lg mt-4 indent-14 ">
          {
            "Hello! I'm Cameron Witz, a Computer Science Masters student with a strong passion for web development, AI, and game creation. Throughout my academic journey and professional experiences, I have cultivated a deep interest in these fields and honed my skills to contribute to innovative and dynamic software engineering teams."
          }
        </p>
      </HomePageItem>
    </>
  );
}

function HomePageItem({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="Column info"
      className="flex flex-col relative items-center justify-center mt-6  h-96 "
      style={{
        width: "70vh",
      }}
    >
      {children}
    </div>
  );
}

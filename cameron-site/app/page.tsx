import Image from "next/image";

export default function Home() {
  return (
    <>
      <ImageContainer
        alt="Cameron's Picture"
        src="/images/CameronSiteProfileCropped.png"
      />

      <div
        id="About-me"
        className="flex flex-col relative items-center justify-center mt-6  flex-wrap max-w-4xl"
        style={{
          width: "50%",
        }}
      >
        <h1 className="flex font-bold text-5xl">About me:</h1>
        <p className="flex text-lg mt-4 indent-14 ">
          {
            "Hello! I'm Cameron Witz, a Computer Science Masters student with a strong passion for web development, AI, and game creation. Throughout my academic journey and professional experiences, I have cultivated a deep interest in these fields and honed my skills to contribute to innovative and dynamic software engineering teams."
          }
        </p>
        <p className="flex text-lg mt-4 indent-14 ">
          {
            "In web development, I have a solid foundation and proficiency in various technologies. I am well-versed in building responsive websites and web applications using frameworks like Flask, Express, and Angular. Recently, I've delved into modern frontend technologies such as React, Next.js, and Tailwind.css, allowing me to create more interactive and user-friendly interfaces."
          }
        </p>
        <p className="flex text-lg mt-4 indent-14 ">
          {
            "Moreover, my exploration of AI and deep learning has been a fascinating journey. As a researcher and developer, I have contributed to projects involving Deep Reinforcement Learning, where I devised novel model architectures to enable agents to generalize to unseen actions at testing time. I'm eager to explore more applications of AI in web development and game creation to create intelligent and dynamic experiences."
          }
        </p>

        <p className="flex text-lg mt-4 indent-14 ">
          {
            "I had an amazing experience as a Software Engineering Intern at Applovin, where I developed C# scripts in Unity Engine for a match-3 puzzle game. I also implemented new challenging mechanics and fixed bugs to ensure a smooth production environment. This experience fueled my passion for game development, and I'm excited to further explore the fusion of AI and game design to create captivating and immersive gaming experiences."
          }
        </p>
        <p className="flex text-lg mt-4 indent-14 ">
          {
            "Overall, my journey in both academic and professional settings has led me to develop a diverse skill set that includes Python, Java/C#, C/C++, SQL, and JavaScript/Node.js. I am confident in my abilities to tackle complex problems, lead projects, and collaborate effectively with teams to achieve outstanding results."
          }
        </p>
        <p className="flex text-lg mt-4 indent-14 ">
          {
            "My ultimate goal is to leverage my knowledge in web development, AI, and game creation to contribute to cutting-edge projects that push the boundaries of technology. I am excited about the endless possibilities these fields offer and look forward to making a positive impact in the software development industry. If you're interested in working with me, please don't hesitate to reach out!"
          }
        </p>
      </div>
    </>
  );
}

function ImageContainer({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      id="Column info"
      className="flex flex-col relative items-center justify-center mt-6  h-96"
      style={{
        width: "70vh",
        minHeight: "24rem",
      }}
    >
      <div
        className="flex relative overflow-hidden rounded-3xl"
        style={{ height: "100%", minWidth: "300px" }}
      >
        <Image
          alt={alt}
          src={src}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

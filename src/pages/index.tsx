import React from "react";
const Resume = () => {
  return (
    <section style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <link rel="icon" href="./logo.png" />
      <title>Hamdy-Mohamed</title>
      <meta
        name="description"
        content="Hi, I'm Hamdy Mohamed, a Front End Developer based in Alexandria, Egypt. I began my programming journey in 2020 and have since built a diverse set of skills and experience. My work spans web, mobile, and desktop applications, with notable achievements in both front-end technologies."
      />
      <meta
        name="keywords"
        content="hamdymohamedak, hamdymohamed resume, hamdy mohamed askander"
      />
      <meta property="og:title" content="Hamdy Mohamed" />
      <meta
        property="og:description"
        content="Hi, I'm Hamdy Mohamed, a Front End Developer based in Alexandria, Egypt. I began my programming journey in 2020 and have since built a diverse set of skills and experience. My work spans web, mobile, and desktop applications, with notable achievements in both front-end technologies."
      />
      <meta property="og:image" content="./logo.png" />
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontWeight: "bold", textTransform: "capitalize" }}>
          Hamdy Mohamed
        </h1>
        <p style={{ fontSize: "1.2rem" }}>Front End Developer</p>
      </header>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <p>
          <strong>&#9993;</strong>{" "}
          <a
            href="mailto:mohameddhamdy407@gmail.com"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            mohameddhamdy407@gmail.com
          </a>
        </p>
        <p>
          <strong>📞</strong>+20 12788 59768
        </p>
        <p>
          <strong
            onClick={() => {
              window.open(
                "https://www.google.com/search?q=alexandria+egypt&oq=Alexandria+eg&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBggFEEUYOTIHCAYQABiABDIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDQwNzRqMGo3qAIAsAIA&client=ubuntu-chr&sourceid=chrome&ie=UTF-8"
              );
            }}
            style={{ color: "blue" }}
          >
            Location:
          </strong>{" "}
          Alexandria
        </p>
        <p>
          <strong>Portfolio:</strong>{" "}
          <a
            href="https://askander.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://askander.vercel.app
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/hamdymohamedak"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://github.com/hamdymohamedak
          </a>
        </p>
      </div>
      <section style={{ marginBottom: "2rem" }}>
        <h2>Profile</h2>
        <p>
          Skilled React.js developer with expertise in creating responsive,
          user-friendly interfaces and high-quality code. Proven ability to
          deliver innovative solutions in fast-paced environments.
          <a
            href="https://github.com/hamdymohamedak/Portfolio-master/blob/main/README.md"
            style={{ color: "blue" }}
          >
            SeeMore
          </a>
        </p>
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2>Professional Experience</h2>
        <ul>
          <li>inmotion production, From 2021 to 2022</li>
          <li>Freelancer, From 2022 to 2024</li>
        </ul>
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong
              onClick={() => {
                window.open("https://amt-egypt.vercel.app");
              }}
            >
              AMT:
            </strong>{" "}
            Portfolio for freelancer team.
          </li>
          <li>
            <strong
              onClick={() => {
                window.open("https://magia-chat.vercel.app");
              }}
            >
              Magia-chat:
            </strong>{" "}
            An AI chatbot using Google Gemini API and React Larose Library.
          </li>
          <li>
            <strong
              onClick={() => {
                window.open("https://larose.vercel.app");
              }}
            >
              LaRose:
            </strong>{" "}
            A React library offering a comprehensive collection of hooks and
            components.
          </li>
          <li>
            <strong
              onClick={() => {
                window.open("https://ses-pi.vercel.app/");
              }}
            >
              SES:
            </strong>{" "}
            Portfolio website for SES company.
          </li>
          <li>
            <strong
              onClick={() => {
                window.open("https://elmaram.vercel.app");
              }}
            >
              Elmaram App:
            </strong>{" "}
            React Native app for ordering drugs.
          </li>
          <li>
            <strong
              onClick={() => {
                window.open("https://hamdymohamedak.github.io/vithub/");
              }}
            >
              Vithub:
            </strong>{" "}
            An animal blog discussing famous diseases.
          </li>
          <li>
            <strong
              onClick={() => {
                window.open("https://ak-macros.vercel.app");
              }}
            >
              AK Macros:
            </strong>{" "}
            Rust library with frequently used macros.
          </li>
          <li>
            <strong
              onClick={() => {
                window.open("https://github.com/hamdymohamedak/css-vita");
              }}
            >
              CSS-Vita:
            </strong>{" "}
            A framework to help Rust developers write CSS with programming
            language logic.
          </li>
          <li>
            <strong
              onClick={() => {
                window.open("https://rsto.vercel.app");
              }}
            >
              Rsto:
            </strong>{" "}
            E-commerce for Medical Personal Protective Equipment.
          </li>
          <li>
            <strong
              onClick={() => {
                window.open("https://hamdymohamedak.github.io/WasSender/");
              }}
            >
              WasSender:
            </strong>{" "}
            Portfolio website for WaSender App.
          </li>
        </ul>
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>TailwindCSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Sass</li>
          <li>React.js</li>
          <li>React Native</li>
          <li>MUI</li>
          <li>Next.js</li>
          <li>Electron.js</li>
          <li>Rust</li>
          <li>Tauri.rs</li>
          <li>Yew.rs</li>
        </ul>
      </section>
      <section style={{ marginBottom: "2rem" }}>
        <h2>Education</h2>
        <p>Diploma in Electronics</p>
      </section>
      <section>
        <h2>Languages</h2>
        <ul>
          <li>Arabic (Native)</li>
          <li>English (Good)</li>
        </ul>
      </section>
    </section>
  );
};
export default Resume;

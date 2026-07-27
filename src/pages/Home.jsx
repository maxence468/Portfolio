import TextType from "../components/TextType";
import img from "../assets/img.png";
import { FolderGit2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="relative h-screen flex items-center justify-center border-b border-border">
        <div className="relative z-10 text-center">
          <TextType
            text={["Bienvenue sur mon portfolio", "Maxence BARTHELEMY"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={true}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
            className="text-6xl font-bold text-primary"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="pt-30 pb-5 text-5xl font-bold text-primary">
          Projets
        </div>
        <hr className="w-60 border-border" />

        <div className="flex justify-center border-amber-600 h-120 w-5/6 mt-20">
          <div className=" border-b-emerald-900 flex-1 overflow-hidden">
            <img
              src={img}
              alt="description"
              className="w-full h-full object-cover"
            />{" "}
          </div>
          <div className=" border-b-blue-500 flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">Weather API Wrapper</h1>
              <h3 className="font-bold pb-5 flex ">
                Node.js <p className="text-primary px-3"> // </p> Express
                <p className="text-primary px-3"> // </p> Redis
                <p className="text-primary px-3"> // </p> Axios
              </h3>
              <p className="text-zinc-500 pb-5">
                API REST développée en Node.js / Express servant de wrapper vers
                l'API météo Visual Crossing. Elle récupère les données météo
                d'une ville en temps réel via Axios, puis met les résultats en
                cache dans Redis (hébergé sur Upstash) pendant 12 heures afin de
                limiter les appels externes inutiles. L'API est également
                protégée contre les abus grâce à un rate limiting par IP avec
                express-rate-limit. Les clés API et URLs sensibles sont gérées
                via des variables d'environnement avec dotenv. Projet réalisé en
                suivant le parcours roadmap.sh.
              </p>
            </div>

            <a
              href="https://github.com/maxence468/Weather_API"
              className="border border-border w-fit text-center px-10 py-5 flex gap-3.5"
              target="_blank"
            >
              <FolderGit2 className="size-6 text-primary" />
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

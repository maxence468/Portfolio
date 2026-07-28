import TextType from "../components/TextType";
import img from "../assets/img.png";
import { FolderGit2, SquareArrowOutUpRight } from "lucide-react";
import Carousel from "../components/Carousel";

import reponse from "../assets/reponse_api_meteo.jpg";
import limit from "../assets/limit_api_meteo.png";
import request from "../assets/request_api_meteo.png";

import accueil from "../assets/accueil_cineforall.jpg";
import trello from "../assets/trello.jpg";
import gantt from "../assets/gantt.png";
import prog from "../assets/prog_cineforall.jpg";
import admin from "../assets/admin_cineforall.jpg";
import schema_cine from "../assets/Schema_architecture_applicative_laravel.drawio.png";

import connexion from "../assets/connexion_javafx.png";
import accueil2 from "../assets/accueil_javafx.png";
import liste from "../assets/liste_javafx.png";
import schema_javafx from "../assets/schema_architecture_applicative_javafx.drawio.png";

export default function Home() {
  return (
    <main>
      {/* PARTIE ACCUEIL */}
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
      {/* PARTIE PROJET */}
      <div className="flex flex-col items-center justify-center border-b border-border py-30">
        <div className=" pb-5 text-5xl font-bold text-primary">Projets</div>
        <hr className="w-60 border-border" />

        {/* API METEO */}
        <div className="flex justify-center border-amber-600 h-120 w-5/6 mt-20">
          <div className=" border-b-emerald-900 flex-1 overflow-hidden rounded bg-black">
            <Carousel images={[reponse, limit, request]} />
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
              className="border border-border w-fit text-center px-5 py-3 flex gap-3.5 rounded"
              target="_blank"
            >
              <FolderGit2 className="size-6 text-primary" />
              Voir le projet
            </a>
          </div>
        </div>

        {/* CINEFORALL */}
        <div className="flex justify-center border-amber-600 h-120 w-5/6 mt-20">
          <div className=" border-b-blue-500 flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">CinéForAll</h1>
              <h3 className="font-bold pb-5 flex ">
                Laravel <p className="text-primary px-3"> // </p> PHP
                <p className="text-primary px-3"> // </p> MySQL
                <p className="text-primary px-3"> // </p> HTML/CSS
              </h3>
              <p className="text-zinc-500 pb-5">
                Application web de réservation de cinéma développée en équipe de
                3 avec la méthode SCRUM. Permet aux visiteurs de consulter les
                films et la programmation, aux utilisateurs authentifiés de
                gérer leurs réservations, et aux administrateurs de gérer
                l'intégralité du catalogue (films, acteurs, cinémas,
                programmation). Projet réalisé avec le framework Laravel 12 en
                respectant l'architecture MVC.
              </p>
              <p className="text-muted-foreground text-sm">
                Rôle : Développeur Backend
              </p>
            </div>

            <a
              href="https://github.com/maxence468/Projet_Cinema_Laravel"
              className="border border-border w-fit text-center px-5 py-3 flex gap-3.5 rounded"
              target="_blank"
            >
              <FolderGit2 className="size-6 text-primary" />
              Voir le projet
            </a>
          </div>
          <div className=" border-b-emerald-900 flex-1 overflow-hidden rounded bg-black">
            <Carousel
              images={[accueil, prog, admin, trello, gantt, schema_cine]}
            />
          </div>
        </div>

        {/* JAVAFX FRANCHISE */}
        <div className="flex justify-center border-amber-600 h-120 w-5/6 mt-20">
          <div className=" border-b-emerald-900 flex-1 overflow-hidden rounded bg-black">
            <Carousel images={[connexion, accueil2, liste, schema_javafx]} />
          </div>
          <div className=" border-b-blue-500 flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">Ciné-Franchise</h1>
              <h3 className="font-bold pb-5 flex ">
                Java 21 <p className="text-primary px-3"> // </p> JavaFX
                <p className="text-primary px-3"> // </p> PostgreSQL
                <p className="text-primary px-3"> // </p> Gradle
              </h3>
              <p className="text-zinc-500 pb-5">
                Application desktop de gestion d'un réseau de franchises de
                cinémas, réalisée seul dans le cadre de l'épreuve E6 du BTS SIO.
                Le projet consistait à reprendre une application existante,
                corriger ses anomalies et la faire évoluer. Elle permet la
                gestion complète des franchises, cinémas, salles et utilisateurs
                avec authentification sécurisée via jBCrypt. Un système de
                journalisation des actions (ajouts, modifications, suppressions)
                a été mis en place via des triggers PostgreSQL pour tracer
                l'activité des utilisateurs. L'architecture respecte le pattern
                MVC avec des couches BO/DAO, et l'application a été packagée en
                exécutable natif avec jlink/jpackage.
              </p>
            </div>

            <a
              href="https://github.com/maxence468/javafx-cinema-etudiants"
              className="border border-border w-fit text-center px-5 py-3 flex gap-3.5 rounded"
              target="_blank"
            >
              <FolderGit2 className="size-6 text-primary" />
              Voir le projet
            </a>
          </div>
        </div>
      </div>

      {/* PARTIE EXPERIENCE  */}
      <div className="flex flex-col items-center justify-center py-30">
        <div className=" pb-5 text-5xl font-bold text-primary">EXPERIENCE</div>
        <hr className="w-60 border-border" />

        {/* API METEO */}
        <div className="flex justify-center border-amber-600 h-120 w-5/6 mt-20">
          <div className=" border-b-emerald-900 flex-1 overflow-hidden rounded bg-black">
            <Carousel images={[]} />
          </div>
          <div className=" border-b-blue-500 flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">SECA</h1>
              <h3 className="font-bold pb-5 flex ">Janvier 2026</h3>
              <p className="text-zinc-500 pb-5">blaboabaobao</p>
            </div>

            <a
              href="https://seca-systemes.com/"
              className="border border-border w-fit text-center px-5 py-3 flex gap-3.5 rounded"
              target="_blank"
            >
              <SquareArrowOutUpRight className="size-6 text-primary" />
              VOIR L'ENTREPRISE
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

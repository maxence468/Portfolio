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

import logo_seca from "../assets/logo_seca.png";
import architecture_seca from "../assets/architecture_seca.png";
import seca_page_disque from "../assets/seca_page_disque.png";
import seca_page_filtre from "../assets/seca_page_filtre.png";
import seca_utilitaire_intel from "../assets/seca_utilitaire_intel.png";
import serveur_seca from "../assets/serveur_seca.jpeg";

import logo_exo from "../assets/exo_RVB.png";

import portfolio from "../assets/portfolio.jpg";

import proxmox from "../assets/proxmox.jpg";

export default function Home() {
  return (
    <main>
      {/* PARTIE ACCUEIL */}
      <div
        id="accueil"
        className="relative h-screen flex items-center justify-center border-b border-border"
      >
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

      {/* PARTIE A PROPOS */}
      <div
        id="apropos"
        className="flex flex-col items-center justify-center border-b border-border py-30 h-screen"
      >
        <div className="pb-5 text-5xl font-bold text-primary">À PROPOS</div>
        <hr className="w-60 border-border mb-16" />

        <div className="flex flex-col md:flex-row items-start gap-12 w-5/6 max-w-4xl">
          {/* Texte */}
          <div className="flex-1">
            <p className="text-zinc-500 leading-relaxed text-lg">
              Étudiant de 19 ans basé à Lyon, titulaire d'un BTS SIO option
              SLAM, je recherche une alternance à partir de septembre 2026 pour
              préparer un Bachelor Développement Web Fullstack.
            </p>
            <p className="text-zinc-500 leading-relaxed text-lg mt-4">
              Passionné par le développement backend, j'aime construire des
              applications robustes et comprendre ce qui se passe sous le capot.
              En dehors du code, je gère mon propre homelab sous Proxmox, ce qui
              me permet d'explorer l'infrastructure, le réseau et
              l'auto-hébergement.
            </p>
            <a
              href="/Portfolio/CV_Maxence_Barthelemy.pdf"
              download
              className="mt-8 px-5 py-3 border border-border rounded flex items-center gap-3 w-fit text-zinc-400 hover:text-primary hover:border-primary transition-colors"
            >
              Télécharger mon CV
            </a>
          </div>

          {/* Tags compétences */}
          <div className="flex flex-wrap gap-2 md:w-48">
            {[
              "PHP",
              "Laravel",
              "Java",
              "Kotlin",
              "C",
              "JavaScript",
              "React",
              "HTML/CSS",
              "SQL/PL-SQL",
              "Godot",
              "Linux",
              "Proxmox",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full border border-border text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PARTIE PROJET */}
      <div
        id="projets"
        className="flex flex-col items-center justify-center border-b border-border py-30"
      >
        <div className=" pb-5 text-5xl font-bold text-primary">Projets</div>
        <hr className="w-60 border-border" />

        {/* PORTFOLIO */}
        <div className="flex justify-center min-h-120 w-5/6 mt-20">
          <div className=" flex-1 overflow-hidden rounded bg-black h-120">
            <Carousel images={[portfolio]} />
          </div>
          <div className="  flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">Portfolio</h1>
              <h3 className="font-bold pb-5 flex ">
                React <span className="text-primary px-3"> // </span> Vite{" "}
                <span className="text-primary px-3"> // </span> Tailwind CSS
              </h3>
              <p className="text-zinc-500 pb-5">
                Portfolio personnel développé en React 19 avec Vite, présentant
                mes projets et mon parcours. Le style est géré avec Tailwind CSS
                4, et la navigation multi-pages via React Router.
              </p>
            </div>

            <a
              href="https://github.com/maxence468/Portfolio"
              className="border border-border w-fit text-center px-5 py-3 flex gap-3.5 rounded"
              target="_blank"
            >
              <FolderGit2 className="size-6 text-primary" />
              Voir le projet
            </a>
          </div>
        </div>

        {/* Homelab */}
        <div className="flex justify-center  min-h-120 w-5/6 mt-20">
          <div className="  flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">Homelab</h1>
              <h3 className="font-bold pb-5 flex ">
                Proxmox VE <span className="text-primary px-3"> // </span>{" "}
                OPNsense <span className="text-primary px-3"> // </span> Pi-hole{" "}
                <span className="text-primary px-3"> // </span> Nextcloud{" "}
                <span className="text-primary px-3"> // </span> Tailscale{" "}
                <span className="text-primary px-3"> // </span> Linux
              </h3>
              <p className="text-zinc-500 pb-5">
                Serveur personnel auto-hébergé, monté sur un HP 800 G2 Desktop
                Mini. L'hyperviseur Proxmox VE permet d'isoler chaque service
                dans sa propre VM/conteneur. Le réseau est sécurisé par un
                pare-feu OPNsense et un filtrage DNS via Pi-hole. Nextcloud
                héberge le stockage de données personnel sur un disque dur
                dédié, avec un second disque en boîtier externe assurant des
                sauvegardes régulières. L'accès distant sécurisé aux services
                est assuré par Tailscale (VPN mesh WireGuard), sans exposition
                de ports sur internet.
              </p>
            </div>
          </div>
          <div className="  flex-1 overflow-hidden rounded bg-black h-120">
            <Carousel images={[proxmox]} />
          </div>
        </div>

        {/* API METEO */}
        <div className="flex justify-center  min-h-120 w-5/6 mt-20">
          <div className="  flex-1 overflow-hidden rounded bg-black h-120">
            <Carousel images={[reponse, limit, request]} />
          </div>
          <div className="  flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">Weather API Wrapper</h1>
              <h3 className="font-bold pb-5 flex ">
                Node.js <span className="text-primary px-3"> // </span> Express
                <span className="text-primary px-3"> // </span> Redis
                <span className="text-primary px-3"> // </span> Axios
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
        <div className="flex justify-center  min-h-120 w-5/6 mt-20">
          <div className="  flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">CinéForAll</h1>
              <h3 className="font-bold pb-5 flex ">
                Laravel <span className="text-primary px-3"> // </span> PHP
                <span className="text-primary px-3"> // </span> MySQL
                <span className="text-primary px-3"> // </span> HTML/CSS
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
          <div className="  flex-1 overflow-hidden rounded bg-black h-120">
            <Carousel
              images={[accueil, prog, admin, trello, gantt, schema_cine]}
            />
          </div>
        </div>

        {/* JAVAFX FRANCHISE */}
        <div className="flex justify-center  min-h-120 w-5/6 mt-20">
          <div className="  flex-1 overflow-hidden rounded bg-black h-120">
            <Carousel images={[connexion, accueil2, liste, schema_javafx]} />
          </div>
          <div className="  flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">Ciné-Franchise</h1>
              <h3 className="font-bold pb-5 flex ">
                Java 21 <span className="text-primary px-3"> // </span> JavaFX
                <span className="text-primary px-3"> // </span> PostgreSQL
                <span className="text-primary px-3"> // </span> Gradle
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
      <div
        id="experience"
        className="flex flex-col items-center justify-center py-30"
      >
        <div className=" pb-5 text-5xl font-bold text-primary">EXPERIENCE</div>
        <hr className="w-60 border-border" />

        {/* SECA */}
        <div className="flex justify-center  min-h-120 w-5/6 mt-20">
          <div className="  flex-1 overflow-hidden rounded bg-black h-120">
            <Carousel
              images={[
                logo_seca,
                architecture_seca,
                seca_page_disque,
                seca_page_filtre,
                seca_utilitaire_intel,
                serveur_seca,
              ]}
            />
          </div>
          <div className="  flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">SECA - Janvier 2026</h1>
              <h3 className="font-bold pb-5 flex ">
                Laravel <span className="text-primary px-3"> // </span> PHP{" "}
                <span className="text-primary px-3"> // </span> JavaScript{" "}
                <span className="text-primary px-3"> // </span> Ajax{" "}
                <span className="text-primary px-3"> // </span> SQL{" "}
                <span className="text-primary px-3"> // </span> WampServer{" "}
                <span className="text-primary px-3"> // </span>
                HTML/CSS
              </h3>
              <p className="text-zinc-500 pb-5">
                Stage de 6 semaines au sein de SECA, bureau d'études spécialisé
                dans l'ingénierie ferroviaire et urbaine. J'ai participé au
                développement d'un Système d'Aide à la Maintenance (SAM) du RER
                B pour la RATP, une application web hébergée en local avec
                WampServer. Mes missions ont inclus la configuration d'un
                serveur physique sous Windows avec RAID 1 et alimentations
                redondantes, le développement de nouvelles fonctionnalités sur
                le site Laravel existant : création de légendes sur plusieurs
                vues, gestion du zoom sur les schémas, fenêtre pop-up de
                supervision du disque dur avec gestion des droits utilisateurs,
                bouton d'affichage du mot de passe, et refonte complète du
                système de filtres multi-critères (date, domaine/nature, groupe
                fonctionnel) via des requêtes AJAX et SQL dynamiques.
              </p>
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

        {/* EXOPARTNER */}
        <div className="flex justify-center  min-h-120 w-5/6 mt-20">
          <div className="  flex-1 m-10 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl pb-3">EXO-PARTNERS - Juillet 2025</h1>
              <h3 className="font-bold pb-5 flex ">
                SQL Server <span className="text-primary px-3"> // </span>{" "}
                Procédures stockées{" "}
                <span className="text-primary px-3"> // </span> SQL Server
                Management Studio{" "}
                <span className="text-primary px-3"> // </span>
                Grafana{" "}
              </h3>
              <p className="text-zinc-500 pb-5">
                Stage de 6 semaines au sein d'Exo Partners, ESN familiale
                spécialisée dans les systèmes d'information pour les réseaux
                hôteliers. J'ai participé à la maintenance et à l'évolution
                d'outils de reporting sous Grafana pour le suivi de l'activité
                de clients hôteliers. Mes missions ont inclus la migration de
                vignettes d'un ancien site Grafana vers une nouvelle plateforme
                unifiée avec vérification de la cohérence des données, la
                création et duplication de dashboards clients via des requêtes
                SQL adaptées, l'écriture de procédures stockées SQL Server pour
                simplifier le traitement des dashboards, la conception d'un
                modèle d'intégration de données (import Excel vers base de
                données) pour l'historique client d'un hôtel, l'automatisation
                de mails d'alerte via des jobs SQL détectant les anomalies,
                ainsi que la mise en place d'un contrôle d'intégrité
                référentielle entre les tables de la base de données.
              </p>
            </div>

            <a
              href="https://www.exo-partners.com/"
              className="border border-border w-fit text-center px-5 py-3 flex gap-3.5 rounded"
              target="_blank"
            >
              <SquareArrowOutUpRight className="size-6 text-primary" />
              VOIR L'ENTREPRISE
            </a>
          </div>
          <div className="  flex-1 overflow-hidden rounded bg-black h-120">
            <Carousel images={[logo_exo]} />
          </div>
        </div>
      </div>
    </main>
  );
}

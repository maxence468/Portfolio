import TextType from "../components/TextType";

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
            className="text-5xl font-bold text-primary"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="pt-30 pb-5 text-3xl font-bold text-primary">
          Projets
        </div>
        <hr className="w-60 border-border" />
      </div>
    </main>
  );
}

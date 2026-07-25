import Plasma from "../components/Plasma";
import Threads from "../components/Threads";
import DarkVeil from "../components/DarkVeil";
import PixelBlast from "../components/PixelBlast";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#B497CF"
          patternScale={2.5}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0}
          transparent
        />
      </div>

      <div className="relative z-10 p-50">
        <h1>Bonjour</h1>
      </div>
    </main>
  );
}

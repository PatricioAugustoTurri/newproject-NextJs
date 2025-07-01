import { Oi } from "next/font/google";

/* eslint-disable @next/next/no-img-element */
const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function AboutPage() {
  return (
    <div className="flex flex-col">
      <h1 className={`${oi.className} text-3xl font-bold text-center`}>
        Sobre mi ...
      </h1>
      <img
        src="/R0000371.JPG"
        alt="foto"
        className="aspect-video object-cover shadow-md rounded-lg mt-8"
      />
      <p className="md:mt-16 mt-8 text-start px-6 md:px-20 md:text-xl text-base">
        ¡Hola! Soy Pato, fotógrafo con la cámara siempre lista y el pasaporte
        nunca muy lejos. Para mí, la fotografía es una forma de coleccionar
        momentos, de guardar pedacitos del mundo y de las personas que voy
        conociendo por el camino. Me encanta viajar, conocer culturas nuevas y
        perderme en lugares que nunca imaginé. Cada destino me regala historias,
        colores, miradas y luces únicas que intento capturar con el corazón. Más
        que buscar la foto perfecta, busco que cada imagen sea una experiencia
        compartida. Este sitio es mi rincón donde comparto todo eso que me
        emociona. Si te gusta lo que ves, estás más que invitado/a a quedarte,
        explorar y, si quieres, conectar.
      </p>
    </div>
  );
}

export default AboutPage;

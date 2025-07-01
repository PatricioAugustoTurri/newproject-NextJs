import NewForm from "./components/NewForm";

export default function ContactoPage() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 px-2 md:px-10 items-start">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold mb-10">Contáctame</h1>
        <div className="flex flex-col gap-1 text-center lg:text-start">
          <h1>Si quieres enviarme una email</h1>
          <p className="text-xl font-bold">Escribe a mi correo</p>
          <a
            href="mailto:patricioturri2391@gmail.com"
            className="text-blue-500 hover:underline"
          >
            patricioturri2391@gmail.com
          </a>
        </div>
      </div>
      <div>
        <NewForm />
      </div>
    </div>
  );
}

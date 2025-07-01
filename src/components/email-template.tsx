interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export function EmailTemplate(prop: EmailTemplateProps) {
  const { name, message, email } = prop;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Hola Pato!!!</h1>
      <p className="text-xl font-bold">{name} te mando un mensaje</p>
      <p>Este es su mensaje: {message}</p>
      <p className="text-xs text-blue-500">Su correo: {email}</p>
    </div>
  );
}

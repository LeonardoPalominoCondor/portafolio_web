export default function ReflexionPage() {
  return (
    <section className="reflexion section min-h-screen bg-fixed bg-cover bg-center bg-[url('/bg.jpg')] py-10 font-roboto flex flex-col justify-start items-center">
      <div className="reflexion__container container mx-auto max-w-4xl text-center">
        <h1 className="reflexion__title text-4xl font-bold text-white mb-4 mt-0">Reflexión</h1>
        <p className="reflexion__description text-lg text-gray-300">
          Aquí puedes compartir tus pensamientos finales y reflexiones sobre el proyecto o curso que has presentado en tu portafolio.
        </p>
      </div>
    </section>
  );
}
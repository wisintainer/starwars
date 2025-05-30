interface JumbotromProps {
  titulo: string;
  subtitulo: string;
}

const Jumbotron = (props: JumbotromProps) => {
  const titulo = props.titulo;
  const subtitulo = props.subtitulo;
  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white text-center py-16 px-4 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold mb-4">{titulo}</h1>
      <p className="text-lg max-w-2xl mx-auto">{subtitulo}</p>
    </div>
  );
};

export default Jumbotron;

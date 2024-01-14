
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const TrabajoSemana = () => {
  const router = useRouter();
  const { week } = router.query;
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (week) {
      const selectedWeek = week.replace('semana-', ''); // Elimina el prefijo "semana-"

      if (selectedWeek === '1') {
        setMessage('Esta es la semana 1');
      } else if (selectedWeek === '2') {
        setMessage('Esta no es la semana 1');
      } else {
        setMessage('Mensaje predeterminado o para otras semanas');
      }
    } else {
      setMessage('Semana no especificada');
    }
  }, [week]);

  return (
    <div>
      <h1>Trabajos - Semana {week}</h1>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TrabajoSemana;
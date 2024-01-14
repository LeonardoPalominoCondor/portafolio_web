/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Otras opciones de configuración según sea necesario
}

module.exports = {
  ...nextConfig,
  async redirects() {
    return [
      {
        source: '/trabajos/semana/:week',
        destination: '/trabajos/[week]',
        permanent: true,
      },
      // Puedes agregar más redirecciones según sea necesario
    ];
  },
};

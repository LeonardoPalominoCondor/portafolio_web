/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/trabajos/semana/:week',
        destination: '/trabajos/[week]',
        permanent: true,
      },
    ];
  },
};

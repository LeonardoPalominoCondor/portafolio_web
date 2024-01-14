/** @type {import('next').NextConfig} */
const nextConfig ={
  output:"export",
}
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

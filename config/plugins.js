module.exports = ({ env }) => ({
 
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('djaeotvyy'),
        api_key: env('577462481181483'),
        api_secret: env('1MleBK_oP1cFq3Z3eV72Nf1VG8s'),
      },
    },
  });
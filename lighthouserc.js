module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4200/'],
      //numberOfRuns: 2,
      startServerCommand: 'npm run start', // Comando para iniciar el servidor
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};

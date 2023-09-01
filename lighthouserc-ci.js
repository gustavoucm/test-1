module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4200/'],
      //numberOfRuns: 2,
      startServerCommand: 'npm run start', // Comando para iniciar el servidor
    },
    asserts: {
      assertions: {
        'categories:performance': ['error', { minScore: .6}],
        'categories:accessibility': ['error', { minScore: .6}],
        'categories:best-practices': ['error', { minScore: .6}],
        'categories:seo': ['error', { minScore: .6}],
        'categories:pwa': 'off'
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};

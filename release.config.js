module.exports = {
  branches: [
    { name: 'master' },
    { name: 'alpha', prerelease: true },
    { name: 'beta', prerelease: true },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      }
    ],
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
}

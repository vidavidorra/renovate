module.exports = {
  platform: 'github',
  token: 'xxx',
  logFileLevel: 'warn',
  logLevel: 'debug',
  onboarding: false,
  enabledManagers: ['github-actions', 'regex'],
  trustLevel: 'high',
  dryRun: true,
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  repositories: ['vidavidorra/.github-renovate-test'],
  regexManagers: [
    {
      fileMatch: ['^\\.github/workflows/[^/]+\\.ya?ml$'],
      matchStrings: ['uses: (?<depName>.*?)@(?<currentValue>.*?)\\s'],
      datasourceTemplate: 'github-tags',
    },
  ],
};

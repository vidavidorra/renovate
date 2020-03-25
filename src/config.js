const branchName = 'github-renovate';

module.exports = {
  branchPrefix: `${branchName}/`,
  enabledManagers: ['github-actions', 'regex'],
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  logLevel: 'debug',
  onboarding: true,
  onboardingBranch: `${branchName}/configure`,
  platform: 'github',
  regexManagers: [
    {
      datasourceTemplate: 'github-tags',
      fileMatch: ['^\\.github/workflows/[^/]+\\.ya?ml$'],
      matchStrings: ['uses: (?<depName>.*?)@(?<currentValue>.*?)\\s'],
    },
  ],
  repositories: ['vidavidorra/.github-renovate-test'],
};

import { JsonObject } from './json';

const branchName = 'github-renovate';

const config: JsonObject = {
  branchPrefix: `${branchName}/`,
  dependencyDashboardTitle: 'Dependency Dashboard self-hosted',
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
  repositories: [
    'vidavidorra/coap',
    'vidavidorra/commitlint-config',
    'vidavidorra/commitlint-plugin-function-rules',
    'vidavidorra/docker-linux-images',
    'vidavidorra/github-renovate',
    'vidavidorra/global-linters',
    'vidavidorra/homebrew-caboodle',
    'vidavidorra/next-standard-version',
    'vidavidorra/repo-template',
    'vidavidorra/rigol-csv-analyser',
    'vidavidorra/tools',
  ],
};

/**
 * Export single object, according to the CommonJS model. The CommonJS module is
 * explicitly used here as that's the kind of module Renovate requires for its
 * configuration.
 */
export = config;

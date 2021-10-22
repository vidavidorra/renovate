import * as renovateConfig from './renovate-config';
import { describe, expect, it } from '@jest/globals';
import { JsonArray } from '../src/json';

describe('renovate configuration', () => {
  it("exports a CommonJS module with 'rules' object", () => {
    expect(renovateConfig).toBeDefined();
  });

  it("uses 'github' as 'platform'", () => {
    expect(renovateConfig.platform).toBe('github');
  });

  /**
   * The `branchPrefix` is checked against a static value, retrieved from
   * Renovate v23.41.0. This is an internal part of Renovate so it is not easy
   * to check with the dynamic value from Renovate itself. This makes is
   * vulnerable to changes, but the value is unlikely to change frequently.
   *
   * https://github.com/renovatebot/renovate/blob/23.41.0/lib/config/presets/internal/default.ts#L142
   */
  it("uses a different 'branchPrefix' as the Renovate default", () => {
    const renovateBranchPrefix = 'renovate/';
    expect(renovateConfig.branchPrefix).not.toEqual(renovateBranchPrefix);
  });

  describe('repositories', () => {
    it('is an array of strings', () => {
      expect(renovateConfig.repositories).toBeDefined();
      expect(renovateConfig.repositories).not.toBeNull();
      expect(Array.isArray(renovateConfig.repositories)).toBe(true);

      expect(
        (renovateConfig.repositories as JsonArray).every(
          (e) => typeof e === 'string',
        ),
      ).toBe(true);
    });

    it('are specified as <user>/<repo>', () => {
      const repositories: string[] = renovateConfig.repositories as string[];
      repositories.forEach((e) => {
        expect(/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(e)).toBe(true);
      });
    });

    it('are of allowed users', () => {
      const repositories: string[] = renovateConfig.repositories as string[];
      const allowedUsers = ['vidavidorra'];
      repositories.forEach((e) => {
        const user = (e as string).split('/', 1)[0];
        expect(allowedUsers).toContain(user);
      });
    });
  });
});

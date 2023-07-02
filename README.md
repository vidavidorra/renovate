# Self-hosted [**Renovate**][renovate] <!-- omit in toc -->

Self-hosted [**Renovate**][renovate] using the [`renovatebot/github-action`][renovate-action] [**GitHub**][github] Action.

---

[![Renovate enabled](https://img.shields.io/badge/Renovate-enabled-brightgreen.svg?logo=renovatebot&logoColor&style=flat-square)](https://renovatebot.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/github/license/vidavidorra/renovate.svg?style=flat-square)](LICENSE.md)

- [Documentation](#documentation)
- [Contributing](#contributing)
- [Security policy](#security-policy)
- [License](#license)

## Documentation

This repository is running a self-hosted [**Renovate**][renovate] using it's [**GitHub**][github] Action, [`renovatebot/github-action`][renovate-action]. The [`renovate` workflow](.github/workflows/renovate.yml) runs runs on a schedule, making it a little bit less responsive than the [Renovate GitHub App][renovate-app]. The configuration for the self-hosted [**Renovate**][renovate] is configured to prevent conflicts with the [Renovate GitHub App][renovate-app] and can be found in [`.github/renovate-global.json`](.github/renovate-global.json).

## Contributing

Please [create an issue](https://github.com/vidavidorra/renovate/issues/new/choose) if you have a bug report or feature proposal, or [create a discussion](https://github.com/vidavidorra/renovate/discussions) if you have a question. If you like this project, please consider giving it a star ⭐ and/or become a [sponsor](https://github.com/sponsors/jdbruijn) to support my work.

Refer to the [contributing guide](CONTRIBUTING.md) detailed information about other contributions, like pull requests.

[![Conventional Commits: 1.0.0](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow?style=flat-square)](https://conventionalcommits.org)
[![XO code style](https://shields.io/badge/code_style-5ed9c7?logo=xo&labelColor=gray&style=flat-square)](https://github.com/xojs/xo)
[![Code style](https://img.shields.io/badge/code_style-Prettier-ff69b4?logo=prettier&style=flat-square)](https://github.com/prettier/prettier)

## Security policy

Please refer to the [Security Policy on GitHub](https://github.com/vidavidorra/renovate/security/) for the security policy.

## License

This project is licensed under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html).

Copyright © 2019-2023 Jeroen de Bruijn

<details><summary>License notice</summary>
<p>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

The full text of the license is available in the [LICENSE](LICENSE.md) file in this repository and [online](https://www.gnu.org/licenses/gpl.html).

</details>

<!-- References -->

[github]: https://github.com/
[renovate]: https://www.mend.io/renovate/
[renovate-action]: https://github.com/renovatebot/github-action
[renovate-app]: https://github.com/marketplace/renovate

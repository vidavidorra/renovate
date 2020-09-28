# GitHub Renovate

Self-hosted instance of Renovate.

## Table of contents

- [Badges](#badges)
- [Documentation](#documentation)
- [License](#license)

## Badges

| Badge                                                                                                                                                                                                                              | Description          | Service              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------- |
| <a href="https://github.com/prettier/prettier#readme"><img alt="code style" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>                                                               | Code style           | Prettier             |
| <a href="https://conventionalcommits.org"><img alt="Conventional Commits: 1.0.0" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square"></a>                                                 | Commit style         | Conventional Commits |
| <a href="https://github.com/semantic-release/semantic-release"><img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square"></a>                   | Version management   | `semantic-release`   |
| <a href="https://renovatebot.com"><img alt="Renovate enabled" src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg?style=flat-square"></a>                                                                           | Dependencies         | Renovate             |
| <a href="https://github.com/vidavidorra/github-renovate/actions"><img alt="GitHub workflow status" src="https://img.shields.io/github/workflow/status/vidavidorra/github-renovate/Lint%20commit%20messages?style=flat-square"></a> | Lint commit messages | GitHub Actions       |
| <a href="https://github.com/vidavidorra/github-renovate/actions"><img alt="GitHub workflow status" src="https://img.shields.io/github/workflow/status/vidavidorra/github-renovate/Build?style=flat-square"></a>                    | Build                | GitHub Actions       |

## Documentation

This repository is running a self-hosted [Renovate](https://renovate.whitesourcesoftware.com/), which is keeping the GitHub Actions workflows up to date in a bunch of repositories in the [vidavidorra](https://github.com/vidavidorra) organisation. For this, it uses the [github-actions-renovate](https://github.com/vidavidorra/github-action-renovate) action. The [workflow](./.github/workflows/renovate.yml) for this is running on a schedule, to run e.g. every fifteen minutes. It is a little bit less responsive, especially when rebasing a PR, then e.g. using the GitHub Renovate App since this is bound to a schedule. Still, this works wonderful!
See the [workflow](./.github/workflows/renovate.yml) and [configuration](./src/config.js) file for details on how this is set up.

## License

This project is licensed under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html).

Copyright © 2019-2020 Jeroen de Bruijn

<details><summary>License details.</summary>
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

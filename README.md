# JPYC Node SDKs

[![HitCount](https://hits.dwyl.com/jcam1/sdks.svg?style=flat-square)](http://hits.dwyl.com/jcam1/sdks)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/jcam1/sdks/issues/new/choose)

Monorepo for JPYC Node SDKs.

## 🌈 Available SDKs

Please refer to `README`s of each SDK for version specific details.

|    SDK | `README`                                   |
| -----: | :----------------------------------------- |
| `core` | [packages/core](./packages/core/README.md) |
|   `v1` | [packages/v1](./packages/v1/README.md)     |

## 🔨 Development

### Git Submodules

This repo uses [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) to be in sync with [JPYCv2](https://github.com/jcam1/JPYCv2/tree/main) repo.

To include submodules when cloning the repo, add `--recursive` option like below.

```sh
$ git clone --recursive https://github.com/jcam1/sdks.git
```

### Yarn Workspaces

This repo uses [Yarn Workspaces](https://yarnpkg.com/features/workspaces) primarily as a monorepo management tool. Please refer to the inserted link for details.

To install dependencies for all the workspaces, run the following.

```sh
# cd into this repo
$ cd sdks
# Install dependencies
$ yarn
```

### Yarn Scripts

To run yarn scripts defined in workspaces, run the following.

```sh
$ yarn workspace <workspace name> run <command name>
```

### Dependencies

To add dependencies, run one of the following. To prevent unexpected behaviors, always pin the exact versions of the dependencies to be installed.

```sh
# Add dependencies to the specified workspace
$ yarn workspace <workspace name> add -E <dependencies>

# Add dev dependencies to the specified workspace
$ yarn workspace <workspace name> add -E -D <dependencies>

# Add dev dependencies to the workspaces root
$ yarn add -E -D -W <dependencies>
```

To remove dependencies, run one of the following.

```sh
# Remove dependencies from the specified workspace
$ yarn workspace <workspace name> remove <dependencies>

# Remove dependencies from the workspaces root
$ yarn remove -W <dependencies>
```

## 🔥 How to Contribute

Feel free to create new issues from [here](https://github.com/jcam1/sdks/issues/new/choose) to propose/request new features or report bugs.

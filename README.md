# JPYC Node SDKs

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/jcam1/sdks/issues/new/choose)

Monorepo for JPYC Node SDKs.

## 🌈 Available SDKs

Please refer to `README`s of each SDK for the version specific details.

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

> [!NOTE]
> Please use Node `v20.12.0` for this repo.

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
$ yarn workspace ${workspace_name} run ${command_name}
```

### Dependencies

To add dependencies, run one of the following. To prevent unexpected behaviors, always pin the exact versions of the dependencies to be installed.

```sh
# Add dependencies to the specified workspace
$ yarn workspace ${workspace_name} add -E ${dependencies}

# Add dev dependencies to the specified workspace
$ yarn workspace ${workspace_name} add -E -D ${dependencies}

# Add dev dependencies to the workspaces root
$ yarn add -E -D -W ${dependencies}
```

To remove dependencies, run one of the following.

```sh
# Remove dependencies from the specified workspace
$ yarn workspace ${workspace_name} remove ${dependencies}

# Remove dependencies from the workspaces root
$ yarn remove -W ${dependencies}
```

### Documentation

To generate Markdown documentation from source code, run the following.

```sh
$ yarn run docs
```

## 🔥 How to Contribute

We appreciate your interest to contribute to this project! Please read the following steps to see how to contribute to this project.

### 1. Create an Issue

The first thing to do is to create a new issue. Feel free to create new issues from [here](https://github.com/jcam1/sdks/issues/new/choose) to propose/request new features or report bugs.

### 2. Clone This Repository

Next, clone this repo. Our default branch is `develop`.

```sh
$ git clone --recursive https://github.com/jcam1/sdks.git
```

### 3. Checkout to a New Branch

You then need to checkout to a new branch (name whatever you would like) from the cloned `develop` branch.

```sh
$ git checkout -b ${your_branch_name}
```

### 4. Write Code

Now, write code to implement the proposed features and/or to fix bugs.

### 5. Open a Pull Request

Finally, open a new PR from your branch to `develop` branch to describe what you'll have done.

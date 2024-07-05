# JPYC SDKs

Monorepo for JPYC SDKs.

## 🔨 Development

### Git Submodules

This repo uses [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) to be in sync with [JPYCv2](https://github.com/jcam1/JPYCv2/tree/main) repo.  

To include submodules when cloning the repo, add `--recursive` option like below. 

```sh
$ git clone --recursive https://github.com/jcam1/sdks.git
```

### Yarn Workspaces

This repo uses [Yarn Workspaces](https://yarnpkg.com/features/workspaces) primarily as a monorepo management tool. Please refer to the inserted link for details.

### NPM Scripts

To run NPM scripts defined in workspaces, run the following. 

```sh
$ npm run -w <workspace name> <command name>
```

Please see a list of NPM scripts below.

| Command | Workspace | Description |
|--------:|:----------|:------------|
| `gen` | `@jpyc/node-sdk-v0` | Generate types for ABIs |

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

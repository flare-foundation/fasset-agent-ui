# FAsset agent UI

## Installation for development

### Local setup

1. Copy `.env.example` to `.env`
2. Make changes in `.env` to fulfil your requirements
3. Run npm install
4. Run npm run dev
5. Open <http://localhost:3000> with your browser to see the result

### Docker setup

1. Copy `.env.example` to `.env`
2. Make changes in `.env` to fulfil your requirements
3. Run docker-compose up -d --build (add build command only once)
4. Open <http://localhost:3000> with your browser to see the result

Wallet connect project id can be obtained from flare fassets support telegram.

## Image release process

Releases container images to the GitLab Container Registry.
The `releaser` tool creates a Git tag, which triggers a CI pipeline that
builds and pushes the image.

- **Pre-release tags** (e.g., `v1.2.3-rc.1`, `v1.2.3-alpha.1`) push to staging
- **Stable tags** (e.g., `v1.2.3`) push to production (requires a protected branch and maintainer role)

### Prerequisites

- [`just`](https://github.com/casey/just)
- [`releaser`](https://gitlab.com/flarenetwork/internal-resources/internal-toolbelt/-/blob/main/docs/releaser/README.md)

### Usage

**Interactive release** (for creating a new pre-release or promoting to stable):

```bash
just release
```

**Fast release** (auto-bumps the pre-release version, e.g., `rc.1` → `rc.2`):

```bash
just release --fast
```

> `--fast` only works when the current version is already a pre-release.

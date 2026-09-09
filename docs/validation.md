# Validation status

## Verified locally

- Content validation: 14 projects and 11 experience records.
- Eight Node tests pass, covering project selection, dates, metadata, and clipboard outcomes.
- An isolated compatibility checkout compiled and generated 25 routes using cached Next.js 15.1.6 dependencies. This does not verify the declared Next.js 16.3.4 dependency set. The older checkout also reported an ESLint configuration error; its build is not a complete quality-check pass.

## Pending

The execution environment denied network access and binding a local HTTP server. Installing the declared dependencies, generating the lockfile, running the full lint/build checks, and browser QA remain pending. CI temporarily supports the first install without a lockfile. Commit the generated lockfile and use npm ci after the first successful install.

Do not treat the compatibility build as release approval. Follow release-checklist.md before deploying.

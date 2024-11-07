# Assignment on package managers

## Package managers other than npm and yarn:
1. Bun
2. PNPM

## Comparisons
| Package manager | pros | cons
| --------------- | ---- | ---- |
| npm | 1. It has the most extensive collection of public and private packages. | 1. It can cause dependency conflicts and versioning issues when too many dependencies or packages are installed.
|     | 2. It allows developers easily manage different versions of packages or dependencies which helps in effectively maintaining compatibility between different parts of an application. | 2.The packages installed from npm rely on third-party code that the developer has no control over and this makes fixing bugs, if the package maintainers are unresponsive, difficult.
| PNPM | 1. It is a faster method than npm. | 1. Some packages or tools are optimized for npm and may not be compatible with pnpm's structure without additional setup processes.
|      | 2. It optimizes disk space usage.  | 2. pnpm has a more complex structure which can make manual inspection more difficult.
| Bun | 1. Bun is optimized for high speeds because of its use of the Zig programming language | 1. It does not currently have a stable release for Windows, limiting usability for some developers
|     | 2. Native TypeScript support without the need for additional setup. | 2. There might be compatibility issues with specific npm modules.
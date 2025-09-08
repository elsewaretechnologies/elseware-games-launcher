# elseware Games Client Web

## React File Organization

1. Hooks / Node modules / Styles
2. Reducers / Actions
3. Utils
4. Components
5. Sub-Components
6. Data / Images / Icons

Use following comments for properly visualize import module sectioning. (Remove unnecessary sections)
```
// Hooks / Node modules / Styles

// Reducers / Actions

// Utils / Functions

// Components

// Sub-Components

// Data / Images / Icons
```

## Version Bumping

```
npm version patch
```
- patch → increases last digit (1.0.0 → 1.0.1)
- minor → increases middle digit (1.0.0 → 1.1.0)
- major → increases first digit (1.0.0 → 2.0.0)


## Release

When you want to release a new version of your Electron app (and trigger the GitHub Action build), you’ll use the npm version command.

```
# make sure you’re on main branch and up to date
git pull origin main

# bump version (choose patch, minor, or major)
npm version patch

# push commit + tag to GitHub
git push origin main --follow-tags
```
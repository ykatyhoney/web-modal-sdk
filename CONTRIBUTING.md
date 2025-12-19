# Contributing to Lucky Web SDK

Thank you for your interest in contributing to Lucky Web SDK! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/web-modal-sdk.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `yarn install`

## Development Workflow

### Running the Development Server

```bash
yarn dev
```

This starts the development server on port 3039.

### Building

```bash
# Build the React app
yarn build

# Build the SDK bundle
yarn bundle
```

### Linting

```bash
# Check for linting errors
yarn lint

# Auto-fix linting errors
yarn lint --fix
```

## Code Style

- Follow the existing code style and formatting
- Use TypeScript for all new code
- Write clear, descriptive variable and function names
- Add JSDoc comments for public functions and components
- Ensure all code passes the linter

## Commit Guidelines

- Write clear, descriptive commit messages
- Use present tense ("Add feature" not "Added feature")
- Reference issue numbers when applicable: "Fix #123: Description"

## Pull Request Process

1. Ensure your code follows the project's style guidelines
2. Make sure all tests pass (if applicable)
3. Update documentation if needed
4. Submit a pull request with a clear description of changes
5. Respond to any feedback or requested changes

## Reporting Bugs

Please use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md) when reporting bugs. Include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (browser, OS, versions)

## Suggesting Features

Please use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md) when suggesting new features. Include:

- Clear description of the feature
- Use case and motivation
- Proposed implementation (if you have ideas)

## Questions?

Feel free to open an issue for any questions or concerns. We're here to help!

Thank you for contributing! 🎉


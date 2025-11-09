# Contributing Workflow Guide

This document outlines the complete development workflow for contributing to the Orion Next.js Starter project. Follow these steps to ensure consistency, maintainability, and quality across the codebase.

## Overview

The development workflow consists of the following phases:

1. Feature/fix planning and preparation
2. Branch creation and development
3. Atomic commits and quality assurance
4. Branch management and merging
5. Pull request and review process
6. Issue resolution and documentation

## 1. Feature/Fix Planning and Preparation

### 1.1 Pre-Implementation Checks

Before starting any development work, perform the following checks:

```bash
# Check current git status and changes
git status
git diff
git log --oneline -10
```

### 1.2 Research and Planning

- Determine what feature or fix needs to be implemented based on the PRD
- Identify logical next steps in the development process
- Recognize dependencies with other features
- Understand how the work fits into the overall project architecture

### 1.3 Branch Strategy

Use the feature-branch workflow with the following branch types:

- `main` - Production-ready code (protected branch)
- `dev` - Main development branch (protected branch)
- `feature/*` - Feature development branches
- `fix/*` - Bug fix branches
- `hotfix/*` - Urgent production fixes

### 1.4 Branch Naming Convention

- **Feature branches**: `feature/descriptive-feature-name`
  - Examples: `feature/setup-storybook`, `feature/add-msw`, `feature/implement-auth`
- **Bug fix branches**: `fix/descriptive-bug-name`
  - Examples: `fix/tailwind-import-issue`, `fix/vitest-setup-error`
- **Hotfix branches**: `hotfix/urgent-fix-name`
  - Examples: `hotfix/security-patch`, `hotfix-critical-bug`

## 2. Branch Creation and Development

### 2.1 Create a New Feature Branch

Start a new feature branch from the `dev` branch:

```bash
# Ensure you're on the latest dev branch
git checkout dev
git pull origin dev

# Create a new feature branch with descriptive naming
git checkout -b feature/descriptive-feature-name
```

### 2.2 Implementation Process

- Implement the feature or fix incrementally
- Write tests for new functionality
- Follow the existing code style and architecture patterns
- Use descriptive variable and function names
- Add necessary documentation and comments
- Keep related changes together in logical chunks

## 3. Atomic Commits and Quality Assurance

### 3.1 Quality Assurance

Before committing, ensure:

- All existing tests pass
- New tests pass
- Code is formatted correctly
- Linting passes
- The feature works as expected
- No console errors or warnings

Run the quality checks:

```bash
yarn lint
yarn format
yarn test:ci
```

### 3.2 Atomic Commits

Make focused, atomic commits that:

- Contain related changes only
- Have clear, descriptive commit messages
- Follow the conventional commit format
- Include all related files (implementation, tests, documentation)

### 3.3 Commit Message Format

We follow conventional commits with the format:

```
type(scope): brief description

- Optional detailed description
- Bullet points for multiple changes
```

### 3.4 Commit Types

- `feat` - New features
- `fix` - Bug fixes
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Test-related changes
- `chore` - Other maintenance tasks

### 3.5 Example Commits

```bash
# Good commit messages
git commit -m "feat(auth): implement login form with validation"
git commit -m "fix(api): resolve CORS issue with authentication endpoints"
git commit -m "docs(readme): update installation guide with new requirements"
git commit -m "test(auth): add unit tests for login form validation"
```

## 4. Branch Management and Pushing to Remote

### 4.1 Push Changes to Remote

After making commits, push your feature branch to the remote repository:

```bash
git push origin feature/descriptive-feature-name
```

### 4.2 If Your Branch is Rejected

If pushing is rejected, pull the latest changes first:

```bash
git pull origin feature/descriptive-feature-name
git push origin feature/descriptive-feature-name
```

## 5. Pull Request Process

### 5.1 Create a Pull Request

Use the GitHub CLI to create a pull request:

```bash
gh pr create --base dev --head feature/descriptive-feature-name --title "feat: descriptive title" --body "Detailed description of changes"
```

Alternatively, you can create the PR through the GitHub web interface.

### 5.2 PR Description Template

When creating a pull request, include:

- **Summary of Changes**: High-level overview of what was implemented
- **Changes Made**: List of specific features, fixes, or improvements
- **Breaking Changes**: Any changes that might affect other parts of the system
- **Testing**: How the changes were tested
- **Related Issues**: Any linked issues or tickets

### 5.3 Review Process

- Share the PR with team members for review
- Address any feedback or comments raised during review
- Make necessary changes based on feedback
- Ensure all CI checks pass before merging

### 5.4 Merging the Pull Request

After PR approval and successful CI checks:

```bash
# Merge the PR using CLI (if you have permissions)
gh pr merge <PR_NUMBER> --merge

# Or merge through the GitHub web interface
```

### 5.5 Clean Up

After merging, clean up the local and remote feature branches:

```bash
# Delete local feature branch
git checkout dev
git branch -d feature/descriptive-feature-name

# Delete remote feature branch (if done through CLI)
git push origin --delete feature/descriptive-feature-name
```

## 6. Integration with Main Branch

### 6.1 Merge Dev to Main

Periodically merge the dev branch to main following the same PR process:

```bash
# Create PR from dev to main
gh pr create --base main --head dev --title "feat: integrate latest development changes" --body "Summary of changes from dev branch"
```

### 6.2 Update Local Branches

After merging, update your local branches:

```bash
git checkout main
git pull origin main
git checkout dev
git pull origin dev
```

## 7. Issue Resolution Process

### 7.1 Identify and Document Issues

When issues arise (such as in CI/CD workflows):

1. Create an `error.txt` file to document the issue
2. Analyze the error messages and identify root causes
3. Research potential solutions and best practices
4. Implement fixes incrementally

### 7.2 Apply Fixes Following Workflow

1. Create a new fix branch from the appropriate base branch
2. Implement the fix with proper testing
3. Commit the fix following atomic commit principles
4. Push the fix branch to remote
5. Create a PR to merge the fix
6. Review and merge the fix

### 7.3 Remove Error Documentation

After successfully resolving issues:

```bash
rm error.txt
git add .
git commit -m "docs: clean up error documentation after issue resolution"
```

## 8. Best Practices

### 8.1 Branch Management

- Keep feature branches short-lived (1-2 days of work)
- Regularly rebase or merge from the base branch to stay up-to-date
- Avoid working on multiple features in the same branch

### 8.2 Code Quality

- Follow existing code patterns and conventions
- Write comprehensive tests for new functionality
- Document complex logic with comments
- Ensure code is maintainable by others

### 8.3 Communication

- Write clear, descriptive commit messages
- Provide comprehensive PR descriptions
- Respond promptly to code review feedback
- Communicate blockers or challenges early

## 9. Tools and Automation

### 9.1 GitHub CLI

- Use `gh` commands for PR management
- Utilize automation scripts where appropriate
- Follow the project's tooling standards

### 9.2 Continuous Integration

- Ensure all CI checks pass before merging
- Address failing builds immediately
- Update tests when making functional changes

## Summary

Following this workflow ensures a consistent, reliable development process that scales across team members. Each step is designed to maintain code quality, facilitate collaboration, and enable smooth integration of new features and fixes into the main codebase.

#!/usr/bin/env bash
set -euo pipefail

REMOTE="${1:-origin}"
BRANCH="${2:-main}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: not inside a git repository." >&2
  exit 1
fi

current_branch="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$current_branch" != "$BRANCH" ]]; then
  echo "Error: current branch is '$current_branch', expected '$BRANCH'." >&2
  echo "Switch to '$BRANCH' first, or pass a branch name explicitly." >&2
  exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Error: working tree is not clean." >&2
  echo "Commit or stash changes before running safe push." >&2
  exit 1
fi

echo "Fetching $REMOTE/$BRANCH..."
git fetch "$REMOTE" "$BRANCH"

remote_ref="refs/remotes/$REMOTE/$BRANCH"
if ! git show-ref --verify --quiet "$remote_ref"; then
  echo "Error: remote ref '$REMOTE/$BRANCH' not found after fetch." >&2
  exit 1
fi

echo "Rebasing $BRANCH onto $REMOTE/$BRANCH..."
git rebase "$REMOTE/$BRANCH"

echo "Pushing $BRANCH to $REMOTE..."
git push "$REMOTE" "$BRANCH"

echo "Done: $BRANCH is synced and pushed."

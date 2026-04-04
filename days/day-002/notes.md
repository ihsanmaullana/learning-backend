# Day 2 — Git Fundamentals

## Key Concepts

- **Git:** A version control system that tracks every change in your code over time.
- **Repository (repo):** A folder tracked by Git — it stores the full history of all changes.
- **Commit:** A snapshot of your code at a specific point in time.
- **Commit message:** A short note explaining what changed and why.
- **Remote:** A copy of your repository hosted on a server (e.g., GitHub).
- **Push:** Upload your local commits to the remote repository.
- **Staging area:** A middle step between editing files and committing — you choose exactly
  what goes into each snapshot using `git add`.

---

## Commands Learned

| Command              | What It Does                                    |
|----------------------|-------------------------------------------------|
| `git init`           | Initialize a new Git repository                 |
| `git status`         | Check which files have changed or are staged    |
| `git add`            | Stage files for the next commit                 |
| `git commit`         | Save a snapshot with a descriptive message      |
| `git log`            | View the full commit history                    |
| `git remote add`     | Connect the local repo to a remote (GitHub)     |
| `git push`           | Upload commits to the remote repository         |

---

## Reflections

Most Git concepts are intuitive once you think of commits as "save points" in a game.
The part that felt confusing was the remote — understanding the difference between the
local repo and the GitHub copy, and why the push step is a separate action. It makes more
sense now: your local Git history is yours until you explicitly share it.

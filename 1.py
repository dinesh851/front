import subprocess
from datetime import datetime, timedelta
import random

def create_commit_dates(commits_per_week, start_date, end_date):
    commit_dates = []
    current_date = start_date

    while current_date <= end_date:
        if current_date.weekday() < 5 and random.random() < commits_per_week:
            n = random.randint(3, 5)

            for _ in range(n):
                commit_datetime = datetime(
                    current_date.year,
                    current_date.month,
                    current_date.day,
                    random.randint(9, 16),
                    random.randint(0, 59),
                    random.randint(0, 59),
                )
                commit_dates.append(commit_datetime)

        current_date += timedelta(days=1)

    return commit_dates

def generate_fake_commits(commits_per_week, start_date, end_date):
    commit_dates = create_commit_dates(
        commits_per_week, start_date, end_date
    )

    for commit_date in commit_dates:
        # Make changes to the README file
        readme_content = "Added new content"
        with open("README.md", "a") as readme_file:
            readme_file.write(readme_content + "\n")

        subprocess.run(["git", "add", "."])
        subprocess.run(["git", "commit", "--date", commit_date.isoformat(), "-m", "232 commit"])
        subprocess.run(["git", "push"])

if __name__ == "__main__":
    commits_per_week = 0.75  # 3 or 4 times a week on average
    start_date = datetime(2023, 3, 17)
    end_date = datetime(2023, 5, 31)

    generate_fake_commits(commits_per_week, start_date, end_date)

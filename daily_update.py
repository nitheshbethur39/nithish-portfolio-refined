import datetime

with open("daily_update.txt", "w") as f:
    f.write(f"# Daily update: {datetime.datetime.utcnow().isoformat()}Z\n")

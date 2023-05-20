import os

for i in range(1, 101):
    path = f"Day - {i}"
    with open(f"{path}/main.js", "w") as f:
        wr = f.write(f"//Day {i}\n")
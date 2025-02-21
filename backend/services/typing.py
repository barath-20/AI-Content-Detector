def analyze_typing_pattern(data: dict) -> str:
    avg_speed = data.get("typing_speed", 0)
    hesitation_time = data.get("hesitation_time", 0)

    if avg_speed > 160 or hesitation_time > 3:
        return "Suspicious - Possible AI assistance detected"
    return "Normal - Human typing detected"

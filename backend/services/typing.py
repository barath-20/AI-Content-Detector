def analyze_typing_pattern(data: dict) -> str:
    """
    Analyze typing patterns (speed, delays) to detect anomalies.
    """
    avg_typing_speed = data.get("typing_speed", 0)
    hesitation_time = data.get("hesitation_time", 0)

    if avg_typing_speed > 150 or hesitation_time > 3:
        return "Suspicious"
    return "Normal"

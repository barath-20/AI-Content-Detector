import whisper
import numpy as np
import io
import soundfile as sf

def analyze_audio(audio_data: bytes) -> str:
    """
    Detects if there are suspicious voices in the background using Whisper AI.
    """
    model = whisper.load_model("base")  # Load Whisper AI model
    audio_np, sample_rate = sf.read(io.BytesIO(audio_data))

    # Convert to correct format
    audio_tensor = whisper.pad_or_trim(audio_np)
    mel = whisper.log_mel_spectrogram(audio_tensor).to(model.device)

    options = whisper.DecodingOptions(fp16=False)
    result = whisper.decode(model, mel, options)

    return f"Detected speech: {result.text}" if result.text else "No speech detected"

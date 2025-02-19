from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from db import Base
from datetime import datetime

class UserActivity(Base):
    __tablename__ = "user_activity"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True)
    typing_speed = Column(Float)
    hesitation_time = Column(Float)
    copy_paste_count = Column(Integer)
    flagged = Column(Boolean, default=False)
    timestamp = Column(DateTime, default=datetime.utcnow)

class AIContentDetection(Base):
    __tablename__ = "ai_content_detection"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True)
    text_submitted = Column(String)
    is_ai_generated = Column(Boolean)
    ai_confidence = Column(Float)
    timestamp = Column(DateTime, default=datetime.utcnow)

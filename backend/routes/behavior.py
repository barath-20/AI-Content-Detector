from fastapi import APIRouter
from services.plagiarism import check_plagiarism

router = APIRouter(prefix="/behavior", tags=["Plagiarism Detection"])

@router.post("/check-plagiarism")
def plagiarism_check(text1: str, text2: str):
    similarity = check_plagiarism(text1, text2)
    return {"similarity_score": similarity}

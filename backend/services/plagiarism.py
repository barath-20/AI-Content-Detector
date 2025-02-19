from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

DATABASE = [
    "This is a sample essay on AI.",
    "The impact of technology in education is significant.",
    "AI is transforming the future of education."
]

def check_plagiarism(text: str) -> bool:
    """
    Check if the given text is plagiarized.
    """
    texts = DATABASE + [text]
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(texts)
    
    similarity_scores = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1])
    max_similarity = max(similarity_scores[0])
    
    return max_similarity > 0.7

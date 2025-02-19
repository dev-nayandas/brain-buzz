# 📘 Brain Buzz Quiz App

An interactive quiz platform built with **React**, **React Router DOM**, **Tailwind CSS**, and **IndexedDB**. Users can take quizzes with multiple-choice and integer-type questions, receive instant feedback, and review their attempt history.


- [Live Link](https://brain-buzz-ebon.vercel.app/)
- [GitHub Link](https://github.com/dev-nayandas/brain-buzz)
---

## 🚀 Features

✅ **Start Screen with Instructions:**  
- Clear guidelines before starting the quiz.  
- "Start Quiz" button to begin.  

✅ **Quiz Functionality:**  
- **Multiple question types:**  
  - Multiple-choice questions (MCQ)  
  - Integer-type questions with integer validation  
- **Timer-based quizzes:**  
  - Each question has a 30-second timer  
  - Automatic progression to the next question when time expires  
- **Multiple attempts per quiz:**  
  - Users can retake the quiz to improve scores  
  - Each attempt is stored separately  

✅ **User Experience Enhancements:**  
- **Instant feedback** (Correct/Incorrect/Time’s up!) after answering  
- **Next button** to manually proceed after answering or timer end  
- **Submit button for integer questions** disables after submission  

✅ **Attempt History & Review:**  
- **Past attempts** are saved using IndexedDB  
- **View all attempts** in a list with timestamps and scores  
- **Click on any attempt** to view detailed question-by-question analysis  

---

## 🖥️ Instructions to Run the App Locally

### 1️⃣ Clone the Repository then got to the cloned folder then npm install  then npm run dev then in browser [localhost](http://localhost:5173/) the app will run
```bash
git clone https://github.com/dev-nayandas/brain-buzz
cd brain-buzz
npm install
npm run dev

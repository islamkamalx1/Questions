const questions = document.querySelectorAll(".question");

questions.forEach((question)=>{
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click",()=>{
        questions.forEach((article)=>{
            if(article !== question){
                article.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});

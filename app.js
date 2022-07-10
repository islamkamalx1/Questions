document.body.innerHTML = `<section class="questions">
<div class="title">
  <h2>general question</h2>
</div>
<div class="section-center">
  <article class="question">
    <div class="question-title">
      <p>do you accept all major credit cards?</p>
      <button class="question-btn">
        <span class="plus-icon">
          <i class="far fa-plus-square"></i>
        </span>
        <span class="minus-icon">
          <i class="far fa-minus-square"></i>
        </span>
      </button>
    </div>
    <div class="question-text">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste quae eum voluptate officia quod, qui aspernatur ex sunt commodi.
      </p>
    </div>
  </article>
  <article class="question">
    <div class="question-title">
      <p>do you support local frames?</p>
      <button class="question-btn">
        <span class="plus-icon">
          <i class="far fa-plus-square"></i>
        </span>
        <span class="minus-icon">
          <i class="far fa-minus-square"></i>
        </span>
      </button>
    </div>
    <div class="question-text">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste quae eum voluptate officia quod, qui aspernatur ex sunt commodi.
      </p>
    </div>
  </article>
  <article class="question">
    <div class="question-title">
      <p>do you use organic ingredients?</p>
      <button class="question-btn">
        <span class="plus-icon">
          <i class="far fa-plus-square"></i>
        </span>
        <span class="minus-icon">
          <i class="far fa-minus-square"></i>
        </span>
      </button>
    </div>
    <div class="question-text">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga iste quae eum voluptate officia quod, qui aspernatur ex sunt commodi.
      </p>
    </div>
  </article>
</div>
</section>`;

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

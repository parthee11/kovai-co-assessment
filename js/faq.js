const faqsObj = [
  {
    id: 1,
    question: "How to create customer panel ?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eaque porro laboriosam dignissimos architecto commodi, labore eligendi aliquid, consequatur nulla qui, eveniet accusantium quae id sequi ipsum corporis nisi. Distinctio!",
  },
  {
    id: 2,
    question: "How the affiliate programe works ?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eaque porro laboriosam dignissimos architecto commodi, labore eligendi aliquid, consequatur nulla qui, eveniet accusantium quae id sequi ipsum corporis nisi. Distinctio!",
  },
  {
    id: 3,
    question: "Is ios app available for the iphone ?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eaque porro laboriosam dignissimos architecto commodi, labore eligendi aliquid, consequatur nulla qui, eveniet accusantium quae id sequi ipsum corporis nisi. Distinctio!",
  },
  {
    id: 4,
    question: "Can a locksmith come to my location ?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eaque porro laboriosam dignissimos architecto commodi, labore eligendi aliquid, consequatur nulla qui, eveniet accusantium quae id sequi ipsum corporis nisi. Distinctio!",
  },
  {
    id: 5,
    question: "How to delete my account ?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eaque porro laboriosam dignissimos architecto commodi, labore eligendi aliquid, consequatur nulla qui, eveniet accusantium quae id sequi ipsum corporis nisi. Distinctio!",
  },
  {
    id: 6,
    question: "How to invite people with referral link ?",
    answer:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eaque porro laboriosam dignissimos architecto commodi, labore eligendi aliquid, consequatur nulla qui, eveniet accusantium quae id sequi ipsum corporis nisi. Distinctio!",
  },
];

function createQnAItem(faq) {
  const faqItem = $("<li>").addClass("faq-item");
  const question = $("<div>")
    .addClass("question")
    .html(
      `<span class="plus">+</span><span class="minus">-</span>${faq.question}</div>`
    );
  const answer = $("<div>").addClass("answer").text(faq.answer);
  faqItem.append(question, answer);
  return faqItem;
}

function loadFAQs() {
  const leftFaq = $(".left-faq .faq-items");
  const rightFaq = $(".right-faq .faq-items");

  // left
  faqsObj.slice(0, 3).forEach((faq) => {
    const item = createQnAItem(faq);
    leftFaq.append(item);
  });

  // right
  faqsObj.slice(3).forEach((faq) => {
    const item = createQnAItem(faq);
    rightFaq.append(item);
  });
}

function handleFAQ() {
  let faqs = $(".faq-item");
  faqs.each(function (_, element) {
    let question = $(element).find(".question");
    let answer = $(element).find(".answer");
    question.click(function () {
      $(".question").not(question).removeClass("open");
      $(".answer").not(answer).slideUp(300).removeClass("open");
      question.toggleClass("open");
      answer.slideToggle(300).toggleClass("open");
    });
  });
}

var survey_arr2 = [
  {
    qn_num: "questionOne",
    type: "radio",
    question_type: "select image",
    question: "I mustache you a question; Who wore it better?",
    options: [
      {
        value: 1,
        image:"http://1.bp.blogspot.com/-ZEItdhqMjrE/UZgE9GfzNNI/AAAAAAAAHTs/AMbRZteqBGs/s400/collage.jpg",
        text: "Yogamaster",
      },
      {
        value: 2,
        image: "http://i1.wp.com/www.frugalbits.com/wp-content/uploads/2011/04/1-03012011anthro1_rect540.jpg",
        text: "Weird Creep",
      }
    ]
  },
  {
    qn_num: "questionTwo",
    type: "radio",
    question_type: "with image",
    question: "Who's most likely to wear this?",
    image:"http://i1.wp.com/www.frugalbits.com/wp-content/uploads/2011/04/1-03012011anthro1_rect540.jpg",
    options: [
      {
        value: 1,
        text: "Shirt",
      },
      {
        value: 2,
        text: "Sandals",
      }
    ]
  }

];

module.exports = survey_arr2;

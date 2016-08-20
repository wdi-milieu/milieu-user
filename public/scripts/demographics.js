var demographics = new Survey.Survey({
  pages: [{
    name: "page1",
    questions: [{
      type: "dropdown",
      choices: [{
        value: "1",
        text: "Male"
      }, {
        value: "2",
        text: "Female"
      }, {
        value: "3",
        text: "Neither"
      }],
      name: "question1",
      title: "Gender:"
    }]
  }, {
    name: "page2",
    questions: [{
      type: "dropdown",
      choices: [{
        value: "1",
        text: "16 - 35 years old"
      }, {
        value: "2",
        text: "36 - 50 years old"
      }, {
        value: "3",
        text: "Above 50 years old"
      }],
      name: "question2",
      title: "Age Group:"
    }]
  }, {
    name: "page3",
    questions: [{
      type: "dropdown",
      choices: [{
        value: "1",
        text: "Chinese"
      }, {
        value: "2",
        text: "Malay"
      }, {
        value: "3",
        text: "Indian"
      }, {
        value: "4",
        text: "Others"
      }],
      name: "question3",
      title: "Ethnicity:"
    }]
  }, {
    name: "page4",
    questions: [{
      type: "dropdown",
      choices: [{
        value: "1",
        text: "Below SGD 3,000"
      }, {
        value: "2",
        text: "SGD 3,000 - 5,999"
      }, {
        value: "3",
        text: "SGD 6,000 - 14,999"
      }, {
        value: "4",
        text: "SGD 15,000 or above"
      }],
      name: "question4",
      title: "Current monthly household income (please add the incomes of everyone in the household):"
    }]
  }, {
    name: "page5",
    questions: [{
      type: "dropdown",
      choices: [{
        value: "1",
        text: "People's Action Party"
      }, {
        value: "2",
        text: "Opposition Party"
      }],
      name: "question5",
      title: "Which political party would you vote for? (Your response will be kept entirely confidential)"
    }]
  }, {
    name: "page6",
    questions: [{
      type: "dropdown",
      choices: ["one", {
        value: "two",
        text: "second value"
      }, {
        value: "three",
        text: "third value"
      }],
      name: "question6"
    }]
  }]
});
survey.onComplete.add(function(s) {
  alert("The results are:" + JSON.stringify(s.data));
});
survey.render("demographics");

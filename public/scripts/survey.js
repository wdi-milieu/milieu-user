var survey_arr = [
  {
    question: "How would you describe your relationship with each of these brands?",
    id: "survey_qn1",
    type: "radio",
    options: [
      {
        value: 1,
        text: "It’s a important part of my life. (I use this brand heavily, and would feel a loss without it)"
      },
      {
        value: 2,
        text: "It’s part of my life, but not critical. (I use this brand sometimes but can find another brand to use easily)"
      },
      {
        value: 3,
        text: "I've used it once or twice. (I have tried the brand once or twice, but not on a regular basis)"
      },
      {
        value: 4,
        text: "I have not used it before but I know about the brand."
      },
      {
        value: 5,
        text: "I don’t know about this brand!"
      }
    ]
  },
  {
    question: "How likely are you going to recommend each of these brands to your friends/colleagues or other people?",
    id: "survey_qn2",
    type: "range",
    min: 0,
    max: 10,
    step: 1,
    value: 0
  },
  {
    question: "What are the key aspects that led you to give the above scores?",
    id: "survey_qn3",
    type: "radio",
    options: [
      {
        value: 1,
        text: "Experience with using the brand's product or services."
      },
      {
        value: 2,
        text: "Heard things about the brand from friends, family or colleagues."
      },
      {
        value: 3,
        text: "Gained a perception of the brand from advertising media."
      },
      {
        value: 4,
        text: "None of the above."
      }
    ]
  }
];

module.exports = survey_arr;

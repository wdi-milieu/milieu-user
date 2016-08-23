var survey_arr = [
  {
    question: "How would you describe your relationship with each of these brands?",
    name: "brandUsage",
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
    question: "From a range of 1 to 10, 1 being the most unlikely, how likely are you to recommend each of these brands to your friends/colleagues or other people?",
    name: "npsScore",
    type: "radio",
    options: [
      {
        value: 1,
        text: "1"
      },
      {
        value: 2,
        text: "2"
      },
      {
        value: 3,
        text: "3"
      },
      {
        value: 4,
        text: "4"
      },
      {
        value: 5,
        text: "5"
      },
      {
        value: 6,
        text: "6"
      },
      {
        value: 7,
        text: "7"
      },
      {
        value: 8,
        text: "8"
      },
      {
        value: 9,
        text: "9"
      },
      {
        value: 10,
        text: "10"
      }
    ]
  },
  {
    question: "What are the key aspects that led you to give the above scores?",
    name: "npsReason",
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

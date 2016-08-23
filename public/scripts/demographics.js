var demographics_arr = [
  {
    label: "First Name",
    id: "first_name",
    type: "textfield"
  },
  {
    label: "Last Name",
    id: "last_name",
    type: "textfield"
  },
  {
    label: "Email",
    id: "email",
    type: "textfield"
  },
  {
    label: "Password",
    id: "password",
    type: "password"
  },
  {
    label: "Gender",
    id: "gender",
    type: "select",
    options: [
      {
        value: 0,
        text: "-- Please select one --"
      },
      {
        value: 1,
        text: "Male"
      },
      {
        value: 2,
        text: "Female"
      },
      {
        value: 3,
        text: "Neither"
      }
    ]
  },
  {
    label: "Age Group",
    id: "age",
    type: "select",
    options: [
      {
        value: 0,
        text: "-- Please select one --"
      },
      {
        value: 1,
        text: "16 - 35 years old"
      },
      {
        value: 2,
        text: "36 - 50 years old"
      },
      {
        value: 3,
        text: "Above 50 years old"
      }
    ]
  },
  {
    label: "Ethnicity",
    id: "ethnicity",
    type: "select",
    options: [
      {
        value: 0,
        text: "-- Please select one --"
      },
      {
        value: 1,
        text: "Chinese"
      },
      {
        value: 2,
        text: "Malay"
      },
      {
        value: 3,
        text: "Indian"
      },
      {
        value: 4,
        text: "Others"
      }
    ]
  },
  {
    label: "Current Monthly Household Income",
    id: "householdIncome",
    type: "select",
    options: [
      {
        value: 0,
        text: "-- Please select one --"
      },
      {
        value: 1,
        text: "Below SGD3,000"
      },
      {
        value: 2,
        text: "SGD3,000 - SGD5,999"
      },
      {
        value: 3,
        text: "SGD6,000 - SGD14,999"
      },
      {
        value: 4,
        text: "SGD15,000 and above"
      }
    ]
  },
  {
    label: "Political Affiliation: Which political party would you vote for?",
    id: "politicalParty",
    type: "select",
    options: [
      {
        value: 0,
        text: "-- Please select one --"
      },
      {
        value: 1,
        text: "People's Action Party"
      },
      {
        value: 2,
        text: "Opposition Party"
      }
    ]
  },
  {
    label: "How much time do you spend online daily for personal consumption? Please consider both desktop and mobile consumption.",
    id: "timeOnline",
    type: "select",
    options: [
      {
        value: 0,
        text: "-- Please select one --"
      },
      {
        value: 1,
        text: "Less than 2 hours"
      },
      {
        value: 2,
        text: "Between 2 hours and 5 hours"
      },
      {
        value: 3,
        text: "More than 5 hours"
      }
    ]
  }
];

module.exports = demographics_arr;

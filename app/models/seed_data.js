user1 = (
  {
    firstName: "Interesting",
    lastName: "Name",
    email: "name@test.com",
    password: "123456",
    gender: 1,
    age: 1,
    ethnicity: 1,
    householdIncome: 1,
    politicalParty: 1,
    timeOnline: 1
  },
  {
    firstName: "Hippie",
    lastName: "Name",
    email: "Hippie@test.com",
    password: "123456",
    gender: 2,
    age: 2,
    ethnicity: 2,
    householdIncome: 2,
    politicalParty: 2,
    timeOnline: 2
  },
  {
    firstName: "Yolo",
    lastName: "Name",
    email: "Yolo@test.com",
    password: "123456",
    gender: 2,
    age: 3,
    ethnicity: 3,
    householdIncome: 3,
    politicalParty: 1,
    timeOnline: 3
  },
)

ObjectId("57b66a67333a9a6dcc38bb65") -> Interesting
ObjectId("57b66bce333a9a6dcc38bb66") -> Hippie
ObjectId("57b66c31333a9a6dcc38bb67") -> Yolo

surveys = (
  db.surveys.insert({ brandName: "Apple", brandUsage: 2, npsScore: 9, npsReason: 1, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Saumsung", brandUsage: 3, npsScore: 10, npsReason: 2, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Breadtalk", brandUsage: 2, npsScore: 6, npsReason: 3, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Singtel", brandUsage: 2, npsScore: 3, npsReason: 1, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Starhub", brandUsage: 1, npsScore: 5, npsReason: 2, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Google", brandUsage: 4, npsScore: 9, npsReason: 3, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "NTUC", brandUsage: 4, npsScore: 8, npsReason: 1, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Giant", brandUsage: 2, npsScore: 5, npsReason: 2, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Trump", brandUsage: 1, npsScore: 2, npsReason: 3, user: ObjectId("57b66a67333a9a6dcc38bb65")})

  db.surveys.insert({ brandName: "Apple", brandUsage: 1, npsScore: 5, npsReason: 3, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Saumsung", brandUsage: 2, npsScore: 4, npsReason: 3, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Breadtalk", brandUsage: 3, npsScore: 5, npsReason: 2, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Singtel", brandUsage: 4, npsScore: 6, npsReason: 2, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Starhub", brandUsage: 4, npsScore: 7, npsReason: 1, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Google", brandUsage: 3, npsScore: 9, npsReason: 1, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "NTUC", brandUsage: 2, npsScore: 5, npsReason: 3, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Giant", brandUsage: 2, npsScore: 6, npsReason: 3, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Trump", brandUsage: 1, npsScore: 1, npsReason: 3, user: ObjectId("57b66bce333a9a6dcc38bb66")})

  db.surveys.insert({ brandName: "Apple", brandUsage: 4, npsScore: 7, npsReason: 2, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Saumsung", brandUsage: 3, npsScore: 6, npsReason: 2, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Breadtalk", brandUsage: 2, npsScore: 7, npsReason: 1, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Singtel", brandUsage: 1, npsScore: 5, npsReason: 1, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Starhub", brandUsage: 1, npsScore: 5, npsReason: 3, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Google", brandUsage: 2, npsScore: 8, npsReason: 3, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "NTUC", brandUsage: 3, npsScore: 8, npsReason: 2, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Giant", brandUsage: 4, npsScore: 7, npsReason: 2, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Trump", brandUsage: 4, npsScore: 2, npsReason: 1, user: ObjectId("57b66c31333a9a6dcc38bb67")})
)

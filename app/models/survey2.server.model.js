var mongoose = require('mongoose');

var classSurveySchema = new mongoose.Schema({
  questionOne: {
    type: Number,
    required: true
  },
  questionTwo: {
    type: Number,
    required: true
  },
  questionThree: {
    type: Number,
    required: true
  },
  questionFour: {
    type: Number,
    required: true
  },
  questionFive: {
    type: Number,
    required: true
  },
  questionSix: {
    type: Number,
    required: true
  },
  datetaken : { type : Date, default: Date.now }
});

// classSurveySchema.methods.aggregateResults = function(cb) {
//   this.aggregate([
//     { $group: {
//       _id: "$questionOne",
//       total: { $sum: 1}
//       }
//     },
//     { $group: {
//       _id: "questionOne",
//       opt1: { $sum: { $cond: [
//         { $eq: ["$_id", 1 ]},
//         "$total",
//         0
//       ]}},
//       opt2: { $sum: { $cond: [
//         { $eq: ["$_id", 2 ]},
//         "$total",
//         0
//       ]}}
//     }
//     },
//     { $sort: { '_id': 1}}
//   ],function(err,result1){
//     question1 = result1;
//   });
//
//
//   this.aggregate([
//     { $group: {
//       _id: "$questionTwo",
//       total: { $sum: 1}
//       }
//     },
//     { $group: {
//       _id: "questionTwo",
//       opt1: { $sum: { $cond: [
//         { $eq: ["$_id", 1 ]},
//         "$total",
//         0
//       ]}},
//       opt2: { $sum: { $cond: [
//         { $eq: ["$_id", 2 ]},
//         "$total",
//         0
//       ]}},
//       opt3: { $sum: { $cond: [
//         { $eq: ["$_id", 3 ]},
//         "$total",
//         0
//       ]}}
//     }
//     },
//     { $sort: { '_id': 1}}
//   ],function(err,result2){
//     question2 = result2;
//   });
//
//   this.aggregate([
//     { $group: {
//       _id: "$questionThree",
//       total: { $sum: 1}
//       }
//     },
//     { $group: {
//       _id: "questionThree",
//       opt1: { $sum: { $cond: [
//         { $eq: ["$_id", 1 ]},
//         "$total",
//         0
//       ]}},
//       opt2: { $sum: { $cond: [
//         { $eq: ["$_id", 2 ]},
//         "$total",
//         0
//       ]}},
//       opt3: { $sum: { $cond: [
//         { $eq: ["$_id", 3 ]},
//         "$total",
//         0
//       ]}}
//     }
//     },
//     { $sort: { '_id': 1}}
//   ],function(err,result3){
//     question3 = result3;
//   });
//
//   this.aggregate([
//     { $group: {
//       _id: "$questionFour",
//       total: { $sum: 1}
//       }
//     },
//     { $group: {
//       _id: "questionFour",
//       opt1: { $sum: { $cond: [
//         { $eq: ["$_id", 1 ]},
//         "$total",
//         0
//       ]}},
//       opt2: { $sum: { $cond: [
//         { $eq: ["$_id", 2 ]},
//         "$total",
//         0
//       ]}},
//       opt3: { $sum: { $cond: [
//         { $eq: ["$total", 3 ]},
//         "$total",
//         0
//       ]}}
//     }
//     },
//     { $sort: { '_id': 1}}
//   ],function(err,result4){
//     question4 = result4;
//   });
//
//
//   this.aggregate([
//     { $group: {
//       _id: "$questionFive",
//       total: { $sum: 1}
//       }
//     },
//     { $group: {
//       _id: "questionFive",
//       opt1: { $sum: { $cond: [
//         { $eq: ["$_id", 1 ]},
//         "$total",
//         0
//       ]}},
//       opt2: { $sum: { $cond: [
//         { $eq: ["$_id", 2 ]},
//         "$total",
//         0
//       ]}}
//     }
//     },
//     { $sort: { '_id': 1}}
//   ],function(err,result5){
//     question5 = result5;
//   });
//
//
//   this.aggregate([
//     { $group: {
//       _id: "$questionSix",
//       total: { $sum: 1}
//       }
//     },
//     { $group: {
//       _id: "questionSix",
//       opt1: { $sum: { $cond: [
//         { $eq: ["$_id", 1 ]},
//         "$total",
//         0
//       ]}},
//       opt2: { $sum: { $cond: [
//         { $eq: ["$_id", 2 ]},
//         "$total",
//         0
//       ]}},
//       opt3: { $sum: { $cond: [
//         { $eq: ["$_id", 3 ]},
//         "$total",
//         0
//       ]}},
//       opt4: { $sum: { $cond: [
//         { $eq: ["$_id", 4 ]},
//         "$total",
//         0
//       ]}}
//     }
//     },
//     { $sort: { '_id': 1}}
//   ],function(err,result6){
//     question6 = result6;
//   });
//
//
//   var qResultsArr = q1 ... q6;
//   return cb(qResultsArr);
// };

var ClassSurvey = mongoose.model('ClassSurvey', classSurveySchema);

module.exports = ClassSurvey;

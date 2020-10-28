var p = MindFusion.Scheduling;

// create a new instance of the calendar
var calendar = new p.Calendar(document.getElementById("calendar"));

calendar.monthSettings.headerStyle = p.MainHeaderStyle.Buttons | p.MainHeaderStyle.Title;
calendar.monthSettings.dayOfWeekFormat = p.DayOfWeekFormat.Full;
calendar.monthSettings.leadingWeekCount = 1;
calendar.monthSettings.showPaddingItems = true;
calendar.monthSettings.maxItems = 3;

calendar.theme = "first-theme";

//visualize the calendar
calendar.render();

// import * as firebase from "firebase/app"
//
// var firebaseConfig = {
//     apiKey: "AIzaSyA4T1DPcq2KQb6y2ZyRcep3Ln25VtnHC1c",
//     authDomain: "fir-wepapp-48855.firebaseapp.com",
//     databaseURL: "https://fir-wepapp-48855.firebaseio.com",
//     projectId: "fir-wepapp-48855",
//     storageBucket: "fir-wepapp-48855.appspot.com",
//     messagingSenderId: "561625258939",
//     appId: "1:561625258939:web:864b7d34b785992c7b029e",
//     measurementId: "G-QSXHW1DVTE"
//   };
//
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//
var button = document.getElementById( 'saveButton' );
button.addEventListener( 'click', function() {

    var data = calendar.schedule.toJson();

    var blob = new Blob( [ data ], {
        type: 'application/json'
    });

    url = URL.createObjectURL( blob );
    var link = document.createElement( 'a' );
    link.setAttribute( 'href', url );
    link.setAttribute( 'download', 'Scheduling.json' );

    var event = document.createEvent( 'MouseEvents' );
    event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent( event );
});

// import firebase from "firebase/app"
// import "firebase/storage"
// // create a reference to the storage
// var storageRef = firebase.storage().ref();
// // Create a reference to the file you are about to create
// // the reference points to "/BUCKET_NAME/FILE_NAME.json"
// var fileRef = storageRef.child("/files/Scheduling.json")
// // upload you blob into the storage fileRef.put(blob).then(function(snapshot) {
//   console.log('Uploaded a blob!');
// });
function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'Scheduling.json', true);
    //console.log(Scheduling.json)
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };

    xobj.send(null);
 }

var button1 = document.getElementById( 'loadButton');
button1.addEventListener( 'click', function() {
	init();
	});


localStorage.setItem("button", JSON.stringify(button));

// Parses the saved string into a JavaScript object again
JSON.parse(localStorage.getItem("button"));



function init() {
 loadJSON(function(response) {
  // load the schedule from the JSON string
    calendar.schedule.fromJson(response);
 });
}

// calendar.loadFromJSON = function(jsonString){
//   var data = JSON.parse(jsonString);
//
//   for (item in data){
//
//     var newItem = new mfScheduling.Item();
//     newItem.subject = data[item].Subject;
//     newItem.startTime = new mfScheduling.DateTime(new Date(data[item].StartTime + "Z"));
//     newItem.endTime = new mfScheduling.DateTime(new Date(data[item].EndTime + "Z"));
//   //  newItem.startTime = new mfScheduling.DateTime(new Date(data[item].StartTime));
//   //  newItem.endTime = new mfScheduling.DateTime(new Date(data[item].EndTime));
//
//
//     calendar.schedule.items.add(newItem);
//   }
//
//   calendar.repaint();
// }

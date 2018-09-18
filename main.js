

 var config = {
    apiKey: "AIzaSyBLBcqTuBgP-GxDJFmLsskKkcGvW20NNFs",
    authDomain: "homework6-2fa6a.firebaseapp.com",
    databaseURL: "https://homework6-2fa6a.firebaseio.com",
    projectId: "homework6-2fa6a",
    storageBucket: "homework6-2fa6a.appspot.com",
    messagingSenderId: "493974155213"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

    // Capture Button Click
    $("#add-train").on("click", function(event) {
        // prevent page from refreshing when form tries to submit itself
        event.preventDefault();
  
        // Capture user inputs and store them into variables
        var train = $("train").val().trim();
        var destination = $("#destination").val().trim();
        var firstTrainTime= moment($("#firstTrainTime").val().trim(), "hh:mm").format("X");
        var frequency = $("#frequency").val().trim();
  
        // Console log each of the user inputs to confirm we are receiving them
        console.log(train);
        console.log(destination);
        console.log(firstTrainTime);
        console.log(frequency);
  
        // Replaces the content in the "recent-member" div with the new info
       

        var newTrain = {
            train: bTrain,
            dest: newDest,
            ftt: firstTT,
            freq: newFreq
          };
        
          // Uploads employee data to the database
          database.ref().push(newTrain);
        
          // Logs everything to console
          console.log(newTrain.train);
          console.log(newTrain.dest);
          console.log(newTrain.ftt);
          console.log(newTrain.freq);
        
          alert("Train successfully added");
        
          // Clears all of the text-boxes
          $("#train-display").val("");
          $("#destination-display").val("");
          $("#firstTrainTime-display").val("");
          $("#frequency-display").val("");
        });
        
        // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
        database.ref().on("child_added", function(childSnapshot) {
          console.log(childSnapshot.val());
        
          // Store everything into a variable.
          var bTrain = childSnapshot.val().train;
          var newDest = childSnapshot.val().dest;
          var firstTT= childSnapshot.val().ftt;
          var newFreq = childSnapshot.val().freq;
        
          // Employee Info
          console.log(bTrain);
          console.log(newDest);
          console.log(firstTT);
          console.log(newFreq);
        
          // Prettify the employee start
          var firstRun = moment.unix(firstTT).format("hh:mm");
        
          // Calculate the months worked using hardcore math
          // To calculate the months worked
          var time = moment().diff(moment(firstTT, "X"), "hours");
          console.log(time);
        
          // Calculate the total billed rate
          var sched = firstTT * newFreq;
          console.log(sched);
        
          // Create the new row
          var newRow = $("<tr>").append(
            $("<td>").text(bTrain),
            $("<td>").text(newDest),
            $("<td>").text(firstRun),
            $("<td>").text(time),
            $("<td>").text(firstTT),
            $("<td>").text(sched)
          );
        
          // Append the new row to the table
          $("#employee-table > tbody").append(newRow);
        });



var tFrequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));



   var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
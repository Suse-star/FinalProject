var firebaseConfig = {
    apiKey: "AIzaSyA4T1DPcq2KQb6y2ZyRcep3Ln25VtnHC1c",
    authDomain: "fir-wepapp-48855.firebaseapp.com",
    databaseURL: "https://fir-wepapp-48855.firebaseio.com",
    projectId: "fir-wepapp-48855",
    storageBucket: "fir-wepapp-48855.appspot.com",
    messagingSenderId: "561625258939",
    appId: "1:561625258939:web:864b7d34b785992c7b029e",
    measurementId: "G-QSXHW1DVTE"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  var firestore = firebase.firestore();

  var color;
  var red = 0;
  var blue = 0;
  var yellow =0;
  firebase.firestore().collection("colors").doc('red')
    .onSnapshot((doc)=>{
      red=doc.data().count
      myChart.data.datasets.forEach((dataset) => {
        dataset.data[0]= red
        document.getElementById('btn1').textContent=red;
      });
      myChart.update();
    });

    firebase.firestore().collection("colors").doc('blue')
    .onSnapshot((doc)=>{
      blue=doc.data().count
      myChart.data.datasets.forEach((dataset) => {
        dataset.data[1]= blue
        document.getElementById('btn2').textContent=blue;
      });
      myChart.update();
    });
    firebase.firestore().collection("colors").doc('yellow')
    .onSnapshot((doc)=>{
      yellow=doc.data().count
      myChart.data.datasets.forEach((dataset) => {
        dataset.data[2]= yellow
        document.getElementById('btn3').textContent=yellow;
      });
      myChart.update();
    });
var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'View of all votes',
            data: [red, blue, yellow],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

function addData(chart, label, data) {

}

document.getElementById('btn1').addEventListener('click',()=>{

      firebase.firestore().collection('colors').doc('red').set({count:red+1})


})

document.getElementById('btn2').addEventListener('click',()=>{
    firebase.firestore().collection('colors').doc('blue').set({count:blue+1})

})

document.getElementById('btn3').addEventListener('click',()=>{

    firebase.firestore().collection('colors').doc('yellow').set({count:yellow+1})
})

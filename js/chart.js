
let myChart ;
function drawChart(){
let ctx = document.getElementById('myChart').getContext('2d');
let data = {
        labels: chartLabels,
        datasets: [{
            label: '# of Votesdsad',
            data: chartdata,
            backgroundColor: [
                '#45F5FF',
                '#4AE887',
                '#F5ED69'
            ],
            borderWidth: 3
        }]
    };
  myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
      options: {
    responsive: false,
  }
});
};
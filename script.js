const lineChart = document.getElementById('lineChart')

const labels = [
    '22,May',
    '23-May',
    '24-May',
    '25-May',
    '26-May',
    '27-May',
    '28-May',
    '29-May',
    '30-May',
    '31-May',
    '1-Jun',
    '2-Jun',
    '3-Jun',
    '4-Jun',
    '5-Jun',
    '6-Jun',
    '7-Jun',
    '8-Jun',
    '9-Jun'
]

new Chart(lineChart, {
    type: 'line',
    responsive: true,
    maintainAspectRatio: false,
    data: {
        labels: labels,
        datasets: [
            {
                label: "Povratni pregledi",
                data: [1844, 1554, 1273, 1284, 1126, 946, 964, 1793, 1432, 1130, 1074, 954, 856, 833, 1536, 1416, 1248, 1226],
                borderColor: 'rgb(66,138,245,1)',
            },
            {
                label: "Novi pregledi",
                data: [1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957, 862, 716, 712, 610, 585, 847, 744, 756, 781],
                borderColor: 'rgb(230, 20, 20)',
            }
        ]
    }
})

const pieChart = document.getElementById('pieChart')

new Chart(pieChart, {
    type: 'pie',
    responsive: true,
    maintainAspectRatio: false,
    data: {
        labels: ['Srb', 'BiH', 'Hrv', 'Makedonija', 'CG', 'Ostali'],
        datasets: [
            {
                label: 'Drzave',
                data: [49.6, 20.3, 9.5, 3.6, 2.6, 14.4],
                backgroundColor: [
                   'rgb(255, 0, 0)',
                   'rgb(60, 179, 113)',
                   'rgb(255, 165, 0)',
                   'rgb(0, 0, 255)',
                   'rgb(238, 130, 238)',
                   'rgb(90, 90, 90)'
                ]
            }
        ]
    }
})

const barChart = document.getElementById('barChart')

new Chart('barChart', {
    type: 'bar',
    responsive: true,
    maintainAspectRatio: false,
    data: {
        labels: ['13 - 17', '18 - 25', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65+'],
        datasets: [
            {
                data: [1.7, 43.3, 34.4, 13.6, 5.6, 1.2, 0.3],
                backgroundColor:  [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Publika po godinama'
            },
            legend: {
                display: false
              },
        }
    }
})

const stackedChart = document.getElementById('stackedChart');

new Chart('stackedChart', {
    type: 'bar',
    data: {
        labels: ['BiH', 'US', 'Njemačka', 'Hrvatska'],
        datasets: [
            {
                data: [7585, 65277, 49156, 15483],
                label: ['Junior'],
                backgroundColor:  [
                    'rgba(255, 99, 132, 1)',

                ],
            },
            {
                data: [10887, 93400, 70334, 22223],
                label: ['Medior'],
                backgroundColor:  [
                    'rgba(54, 162, 235, 1)',

                ],
            },
            {
                data: [13481, 116016, 87366, 27519],
                label: ['Senior'],
                backgroundColor:  [
                    'rgba(230, 200, 60, 1)',

                ],
            }
        ]
    },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Prosjecna godisnja placa frontend developera po drzavama (u eurima)',
        font: {
            size: 14,
          },
      },
      subtitle: {
        display: true,
        text: 'Podaci preuzeti sa: https://www.salaryexpert.com',
        color: 'green',
        font: {
            size: 12,
            family: 'tahoma',
            weight: 'normal',
            style: 'italic'
          },
      },
      
    },
    responsive: true,
    scales: {
      x: {
        stacked: false,
      },
      y: {
        min: 1000,
        max: 120000,
        stacked: false
      }
    }
  }
});

const LineChart2 = document.getElementById('LineChart2');

new Chart('LineChart2', {
    type: 'line',
    data: {
        datasets: [{
          data: [{x:'27.06', y:0.95}, {x:'29.06', y:0.96}, {x:'01.07', y:0.96}, {x:'03.07', y:0.96}, {x:'05.07', y:0.97}, {x:'07.07', y:0.98},  {x:'09.07', y:0.98}, {x:'11.07', y:1}, {x:'13.07', y:1}],
          backgroundColor:  [
            'rgba(255, 99, 132, 1)',
            ],
        }]
      },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Vrijednost 1$ izrazena u eurima'
        },       
      }
    },
})
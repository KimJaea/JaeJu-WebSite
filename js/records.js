// 3차원 데이터 // EEG_Wiset_Web

// value[0]: [['2021_9_08', 1, 0.9164004780000438], ['2021_9_18', 0, 0.9164004780273438], ['2021_9_19', 0, 0.9159774780273438]]
// value[1]: [-0.2647651, -0.28020696, -0.93959024]
// value[2]: [['depression_insomnia', 'depression_insomnia'], ['sadness_miserable', 'depression_insomnia', 'sadness_miserable']]
// [][][] 구성 3차원 형태

window.onload = function() {
    //var dp = {{ value|tojson }};
    var data = [[['2021_9_08', 1, 0.9164004780000438], ['2021_9_18', 0, 0.9164004780273438], ['2021_9_19', 0, 0.9159774780273438]], [-0.2647651, -0.28020696, -0.93959024], [['depression_insomnia', 'depression_insomnia'], ['sadness_miserable', 'depression_insomnia', 'sadness_miserable']]]

    // Total Record Count of EEG
    var data_eeg = data[0];
    const el1 = document.getElementById('data1');
    el1.innerHTML += data_eeg.length;
    
    // Total Depression Count of EEG
    var data_count = 0;
    const el2 = document.getElementById('data2');
    for(let i = 0; i < data_eeg.length; i++) {
        if(data_eeg[i][1] > 0) {
            data_count++;
        }
    }
    el2.innerHTML += data_count;

    // Count each result value
    var count_total = 0;
    var count1 = 0;
    var count2 = 0;
    var data_chat = data[2];
    for(let i = 0; i < data_chat.length; i++) {
        for(let j = 0; j < data_chat[i].length; j++) {
            const symptom = data_chat[i][j];
            count_total++;
            if(symptom.indexOf('sadness') == 0) {
                count1++;
            }
            if(symptom.indexOf('depression') == 0) {
                count2++;
            }
        }
    }

    // Chat Bot mental classification
    const el3 = document.getElementById('data3');
    const el4 = document.getElementById('data4');
    if(count1 == 0) {
        el3.innerHTML += 0;
    } else {
        el3.innerHTML += count1/count_total * 100;
    }
    el4.innerHTML += "슬픔";
    
    // Chat Bot insomnia Percentage
    const el5 = document.getElementById('data5');
    if(count2 == 0) {
        el5.innerHTML += 0;
    } else {
        el5.innerHTML += count2/count_total * 100;
    }

    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = ["red", "green","blue","orange","brown"];

    new Chart("graph", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            label: '정신 증상',
            borderColor: "rgba(255, 201, 14, 1)",
            backgroundColor: "rgba(255, 201, 14, 0.5)",
            data: yValues
        }]
    },
    options: {
        scale: {
            y: { beginAtZero: true }
        }, 
        legend: {display: false},
        title: {
        display: true,
        text: "사용자의 뇌파 데이터 기반 정신 증상 분석 그래프"
        }
    }
    });
 
    var DATA_COUNT = 10;
    new Chart("graph2", {
        type: 'bar',
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: "rgba(0, 201, 14, 0.5)",
                data: yValues,
                datalabels: {
                    align: 'end',
                    anchor: 'start'
                }
            }, {
            backgroundColor: "rgba(100, 201, 14, 0.5)",
            data: yValues,
            datalabels: {
                align: 'center',
                anchor: 'center'
            }
            }, {
                backgroundColor: "rgba(255, 201, 14, 0.5)",
            data: yValues,
            datalabels: {
                align: 'end',
                anchor: 'start'
            }
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    color: 'white',
                    display: function(context) {
                        return context.dataset.data[context.dataIndex] > 15;
                    },
                    font: {
                        weight: 'bold'
                    },
                    formatter: Math.round
                }
            },

            // Core options
            aspectRatio: 5 / 3,
            layout: {
                padding: {
                    top: 24,
                    right: 16,
                    bottom: 0,
                    left: 8
                }
            },
            elements: {
                line: {
                    fill: false
                },
                point: {
                    hoverRadius: 7,
                    radius: 5
                }
            },
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }

    });


}

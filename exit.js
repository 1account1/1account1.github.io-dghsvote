document.createElement('script').src = 'https://cdn.jsdelivr.net/npm/chart.js';
window.addEventListener('DOMContentLoaded', () => {   
    let labl = [];
    let labll = [];
    fetch('https://opensheet.elk.sh/1rLXQcYhpojVO1jQTf40umojl8AHeAtYT7x-vxIdBxYM/candidate')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            labl.push(element.이름)
            labll.push(element.출구조사)
        })
        const ctx = document.getElementById('myChart').getContext('2d');

        const verticalBarChart = new Chart(ctx, {
            type: '', // 'bar'는 기본적으로 세로 막대그래프입니다
            data: {
            labels: labl,
            datasets: [{
                label: '',
                data: labll,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
            },
            options: {
            responsive: true,
            scales: {
                y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: '득표'
                }
                },
                x: {
                title: {
                    display: true,
                    text: ''
                }
                }
            },
            plugins: {
                title: {
                display: true,
                text: '출구조사'
                }
            }
            }
        });
    });
})
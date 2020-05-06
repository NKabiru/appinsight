import Chart from 'chart.js';

fetch('/aggregates').then(response => response.json()).then(data => {
    console.log(data)
    let osChart = new Chart(document.getElementById('os-chart'), {
        type: 'pie',
        data: {
            datasets: [{
                data: Object.values(data.oses)
            }],
            labels: Object.keys(data.oses)
        }
    });

    let editorChart = new Chart(document.getElementById('text-editor-chart'), {
        type: 'pie',
        data: {
            datasets: [{
                data: Object.values(data.textEditors)
            }],
            labels: Object.keys(data.textEditors)
        }
    });

    let mailReaderChart = new Chart(document.getElementById('mail-reader-chart'), {
        type: 'pie',
        data: {
            datasets: [{
                data: Object.values(data.mailReaders)
            }],
            labels: Object.keys(data.mailReaders)
        }
    });

    let cloudStorageChart = new Chart(document.getElementById('cloud-storage-chart'), {
        type: 'pie',
        data: {
            datasets: [{
                data: Object.values(data.cloudStorage)
            }],
            labels: Object.keys(data.cloudStorage)
        }
    });

    let officeSuiteChart = new Chart(document.getElementById('office-suite-chart'), {
        type: 'pie',
        data: {
            datasets: [{
                data: Object.values(data.officeSuites)
            }],
            labels: Object.keys(data.officeSuites)
        }
    });

    let browserChart = new Chart(document.getElementById('browser-chart'), {
        type: 'pie',
        data: {
            datasets: [{
                data: Object.values(data.browsers)
            }],
            labels: Object.keys(data.browsers)
        }
    });

    let todoListChart = new Chart(document.getElementById('todo-list-chart'), {
        type: 'pie',
        data: {
            datasets: [{
                data: Object.values(data.todos)
            }],
            labels: Object.keys(data.todos)
        }
    });


})

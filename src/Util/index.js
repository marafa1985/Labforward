const ChartOption = (title) => {
    return {
        chart: {
            zoom: {
                enabled: false
            },

        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            labels: {
                formatter: function (val) {
                    return ((val + 1) % 2) === 0 ? val : '.';
                }
            }
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: title,
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },

    };
}

const ArrayMidValue = (data) => {
    return Math.max(...data) / 2;
}
const FromateSignal = (arrdata, newvalue) => {
    return arrdata.map(value => value > newvalue ? 1 : 0);
}

const AcceptOnlyumber = (value) => {
    const re = /^[0-9\b]+$/;

    if (value === '' || re.test(value)) {
        return true
    }
    return false;
}

const seriesList = [
    {
        name: "Series 1",
        data: [1, 2, 1, 0, 1, 2, 1, 8, 9, 8, 1, 2, 0, 2, 1, 2, 3, 1, 2, 0, 8, 9, 2, 0, 3, 0, 2, 1, 2, 3, 8, 10, 2, 1, 2, 3, 0, 1, 2, 1, 2, 7, 6, 9, 1, 2, 0, 1, 2, 1]
    },
    {
        name: "Series 2",
        data: [0, 2, 1, 2, 3, 10, 12, 1, 1, 2, 3, 0, 1, 2, 1, 2, 7, 6, 9, 1, 2, 0, 1, 2, 1, 2, 1, 3, 0, 2, 3, 1, 1, 2, 3, 10, 9, 12, 0, 2, 3, 1, 2, 0, 1, 7, 11, 0, 1, 2]
    },
    {
        name: "Series 3",
        data: [2, 1, 3, 0, 2, 2, 9, 7, 2, 3, 1, 2, 9, 8, 2, 3, 1, 2, 0, 1, 2, 3, 0, 10, 9, 1, 2, 1, 0, 1, 2, 1, 8, 9, 8, 1, 2, 0, 2, 1, 2, 1, 14, 10, 0, 1, 1, 2, 0, 3
        ]
    }
];
const SeriesData = () => {
    return seriesList;
}

export {
    SeriesData,
    AcceptOnlyumber,
    ArrayMidValue,
    FromateSignal,
    ChartOption
};
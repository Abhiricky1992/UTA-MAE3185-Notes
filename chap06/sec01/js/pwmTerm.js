let pwmTermAnim = new animControl();

let pwmTermPlot = new anim('pwmTermPlot', pwmTermAnim);
pwmTermPlot.data = [{
    x: [0, 0, 0.35, 0.35, 1, 1, 1.35, 1.35, 2, 2, 2.35, 2.35, 3, 3, 3.35, 3.35, 4, 4], // x axis data
    y: [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1], // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
pwmTermPlot.layout = {
    height: 200,
    margin: {
        l: 30,
        r: 20,
        b: 10,
        t: 0,
        pad: 0,
    },
    xaxis: {
        gridcolor: '#505050',
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    },
    yaxis: {
        gridcolor: '#505050',
        range: [-0.1, 1.1],
        zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
        showgrid: false,
        dtick: 1,
    },
    annotations: new Array(6),
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
};
pwmTermPlot.config = {
    staticPlot: true,
};
pwmTermPlot.init = function () {
    // Draw t_H text
    this.layout.annotations[0] = {//t_H arrow
        x: 1,
        y: 0.8,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        arrowhead: 3,
        arrowside: "start+end",
        arrowcolor: 'white',
        ax: 1.35,
        ay: 0.8,
        axref: 'x',
        ayref: 'y',
    };
    this.layout.annotations[1] = {//Output text
        x: 1.175,
        y: 0.92,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '$t_H$',//'<i>t<sub>H</sub></i>',
        font: { family: 'Garamond,serif', size: 30, color: 'white' },
    };

    // Draw t_L text
    this.layout.annotations[2] = {//t_L arrow
        x: 1.35,
        y: 0.2,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        arrowhead: 3,
        arrowside: "start+end",
        arrowcolor: 'white',
        ax: 2,
        ay: 0.2,
        axref: 'x',
        ayref: 'y',
    };
    this.layout.annotations[3] = {//Output text
        x: 1.675,
        y: 0.32,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '$t_L$',//'<i>t<sub>H</sub></i>',
        font: { family: 'Garamond,serif', size: 30, color: 'white' },
    };

    // Draw p text
    this.layout.annotations[4] = {//p arrow
        x: 1,
        y: 0.5,
        xref: 'x',
        yref: 'y',
        showarrow: true,
        arrowhead: 3,
        arrowside: "start+end",
        arrowcolor: 'white',
        ax: 2,
        ay: 0.5,
        axref: 'x',
        ayref: 'y',
    };
    this.layout.annotations[5] = {//Output text
        x: 1.5,
        y: 0.62,
        xref: 'x',
        yref: 'y',
        showarrow: false,
        text: '$p$',//'<i>t<sub>H</sub></i>',
        font: { family: 'Garamond,serif', size: 30, color: 'white' },
    };

    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
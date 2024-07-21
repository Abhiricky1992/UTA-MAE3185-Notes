let clkDivAnim = new animControl();

let clkDivSysClk = new anim('clkDivSysClk', clkDivAnim);
clkDivSysClk.clkFrq = 125000000;
clkDivSysClk.dt = 1/125000000/10;
clkDivSysClk.data = [{
    x: new Array(1000), // x axis data
    y: new Array(1000), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
clkDivSysClk.layout = {
    title: 'System Clock',
        titlefont: {
            family: 'Garamond,serif',
            size: 24,
            color: 'white',
        },
    height: 200,
    margin: {
        l: 30,
        r: 20,
        b: 40,
        t: 40,
        pad: 0,
    },
    xaxis: {
        gridcolor: '#505050',
        autorange: 'reversed',
        zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
    },
    yaxis: {
        gridcolor: '#505050',
        range: [0, 1],
        zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
        showgrid: false,
        dtick: 1,
    },
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
};
clkDivSysClk.config = {
    staticPlot: true,
};
clkDivSysClk.init = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
clkDivSysClk.update = function (animT, animDt) {
    Plotly.update(this.id, this.data, this.layout, this.config);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10 + this.dt * animT;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
};
clkDivSysClk.reset = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    this.update(0, 0);
};

let clkDivDivClk = new anim('clkDivDivClk',clkDivAnim);
clkDivDivClk.clkFrq = 125000000;
clkDivDivClk.dt = 1/125000000/10;
clkDivDivClk.data = [{
    x: new Array(1000), // x axis data
    y: new Array(1000), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
clkDivDivClk.layout = {
    title: 'Frequency Divided Clock',
        titlefont: {
            family: 'Garamond,serif',
            size: 24,
            color: 'white',
        },
    height: 200,
    margin: {
        l: 30,
        r: 20,
        b: 40,
        t: 40,
        pad: 0,
    },
    xaxis: {
        gridcolor: '#505050',
        autorange: 'reversed',
        zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
    },
    yaxis: {
        gridcolor: '#505050',
        range: [0, 1],
        zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
        showgrid: false,
        dtick: 1,
    },
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
};
clkDivDivClk.config = {
    staticPlot: true,
};
clkDivDivClk.init = function () {
    this.clkFrq = clkDivSysClk.clkFrq/(7 + 9/16);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
clkDivDivClk.update = function (animT, animDt) {
    this.clkFrq = clkDivSysClk.clkFrq/(7 + 9/16);
    Plotly.update(this.id, this.data, this.layout, this.config);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10 + this.dt * animT;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
};
clkDivDivClk.reset = function () {
    this.clkFrq = clkDivSysClk.clkFrq/(7 + 9/16);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    this.update(0, 0);
};
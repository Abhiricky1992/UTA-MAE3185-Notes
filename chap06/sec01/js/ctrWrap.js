let ctrWrapAnim = new animControl();

let ctrWrapCtrReg = new anim('ctrWrapCtrReg', ctrWrapAnim);
ctrWrapCtrReg.val = 0;
ctrWrapCtrReg.init = function(){
    this.val = 0;
    this.elem.value = this.val;
};
ctrWrapCtrReg.update = function(){
    this.val = Math.floor(ctrWrapDivClk.data[0].x[0] * ctrWrapDivClk.clkFrq) % (99 + 1);
    this.elem.value = this.val;
};
ctrWrapCtrReg.reset = function(){
    this.init();
};

let ctrWrapDivClk = new anim('ctrWrapDivClk',ctrWrapAnim);
ctrWrapDivClk.clkFrq = 1000000;
ctrWrapDivClk.dt = 1/1000000/10;
ctrWrapDivClk.data = [{
    x: new Array(1000), // x axis data
    y: new Array(1000), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
ctrWrapDivClk.layout = {
    title: 'Frequency Divided Clock',
        titlefont: {
            family: 'Garamond,serif',
            size: 24,
            color: 'white',
        },
    height: 200,
    margin: {
        l: 40,
        r: 10,
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
ctrWrapDivClk.config = {
    staticPlot: true,
};
ctrWrapDivClk.init = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
ctrWrapDivClk.update = function (animT, animDt) {
    Plotly.update(this.id, this.data, this.layout, this.config);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10 + this.dt * animT;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
};
ctrWrapDivClk.reset = function () {
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i*this.dt/10;
        var val = Math.sin(2 * Math.PI * this.clkFrq * this.data[0].x[i]);
        this.data[0].y[i] = (val > 0) ? 1 : 0;
    }
    this.update(0, 0);
};
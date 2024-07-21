let ctrCmpAnim = new animControl();

let ctrCmpCtrReg = new anim('ctrCmpCtrReg', ctrCmpAnim);
ctrCmpCtrReg.val = 0;
ctrCmpCtrReg.divClkFrq = 1000000;
ctrCmpCtrReg.dt = 1 / 1000000 / 10;
ctrCmpCtrReg.init = function () {
    this.val = 0;
    this.elem.value = this.val;
};
ctrCmpCtrReg.update = function (animT, animDt) {
    this.val = Math.floor(this.dt * animT * this.divClkFrq) % (9 + 1);
    this.elem.value = this.val;
};
ctrCmpCtrReg.reset = function () {
    this.init();
};

let ctrCmpPwmOut = new anim('ctrCmpPwmOut', ctrCmpAnim);
ctrCmpPwmOut.frq = ctrCmpCtrReg.divClkFrq / (9 + 1);
ctrCmpPwmOut.dt = 1 / ctrCmpCtrReg.divClkFrq / 10;
ctrCmpPwmOut.data = [{
    x: new Array(1000), // x axis data
    y: new Array(1000), // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
ctrCmpPwmOut.layout = {
    title: 'PWM Output',
    titlefont: {
        family: 'Garamond,serif',
        size: 24,
        color: 'white',
    },
    height: 300,
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
ctrCmpPwmOut.config = {
    staticPlot: true,
};
ctrCmpPwmOut.init = function () {
    this.frq = ctrCmpCtrReg.divClkFrq / (9 + 1);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i * this.dt / 10;
        var val = this.data[0].x[i] * ctrCmpCtrReg.divClkFrq;
        this.data[0].y[i] = (val % (9 + 1) < 3) ? 1 : 0;
    }
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
ctrCmpPwmOut.update = function (animT, animDt) {
    Plotly.update(this.id, this.data, this.layout, this.config);
    this.frq = ctrCmpCtrReg.divClkFrq / (9 + 1);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i * this.dt / 10 + this.dt * animT;
        var val = this.data[0].x[i] * ctrCmpCtrReg.divClkFrq;
        this.data[0].y[i] = (val % (9 + 1) < 3) ? 1 : 0;
    }
};
ctrCmpPwmOut.reset = function () {
    this.frq = ctrCmpCtrReg.divClkFrq / (9 + 1);
    for (let i = 0; i < this.data[0].x.length; ++i) {
        this.data[0].x[i] = i * this.dt / 10;
        var val = this.data[0].x[i] * ctrCmpCtrReg.divClkFrq;
        this.data[0].y[i] = (val % (9 + 1) < 3) ? 1 : 0;
    }
    this.update(0, 0);
};
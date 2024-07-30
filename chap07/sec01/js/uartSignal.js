let uartSignalAnim = new animControl();

let uartSignalWire = new anim('uartSignalWire', uartSignalAnim);
uartSignalWire.val = null;
uartSignalWire.init = function(){
    this.val = 1;
    this.elem.value = this.val;
    this.elem.style.opacity = 1;
    this.handleSignal("11111111111");
};
uartSignalWire.handleSignal = function(bitSeq){
    anime.remove(this.elem.style);
    this.elem.style.opacity = 1;
    uartSignalSigPlot.reset();
    anime({
        targets: this.elem.style,
        keyframes: [
            {opacity: 1},
            {opacity: bitSeq[0]},
            {opacity: bitSeq[0]},
            {opacity: bitSeq[0]},
            {opacity: bitSeq[1]},
            {opacity: bitSeq[1]},
            {opacity: bitSeq[1]},
            {opacity: bitSeq[2]},
            {opacity: bitSeq[2]},
            {opacity: bitSeq[2]},
            {opacity: bitSeq[3]},
            {opacity: bitSeq[3]},
            {opacity: bitSeq[3]},
            {opacity: bitSeq[4]},
            {opacity: bitSeq[4]},
            {opacity: bitSeq[4]},
            {opacity: bitSeq[5]},
            {opacity: bitSeq[5]},
            {opacity: bitSeq[5]},
            {opacity: bitSeq[6]},
            {opacity: bitSeq[6]},
            {opacity: bitSeq[6]},
            {opacity: bitSeq[7]},
            {opacity: bitSeq[7]},
            {opacity: bitSeq[7]},
            {opacity: bitSeq[8]},
            {opacity: bitSeq[8]},
            {opacity: bitSeq[8]},
            {opacity: bitSeq[9]},
            {opacity: bitSeq[9]},
            {opacity: bitSeq[9]},
            {opacity: bitSeq[10]},
            {opacity: bitSeq[10]},
        ],
        duration: 11000/4,
        easing: 'easeInOutExpo',
        update: function(anim){
            uartSignalSigPlot.appendVal(anim.progress,uartSignalWire.elem.style.opacity);
        }
    })
};
uartSignalWire.reset = function(){
    this.init();
};

let uartSignalSig = new anim('uartSignalSig', uartSignalAnim);
uartSignalSig.val = '';
uartSignalSig.init = function(){
    this.val = '';
    this.elem.value = this.val;
};
uartSignalSig.handleChange = function(){
    this.val = this.elem.value;
    let bitSeq = "11111111111";
    if (this.val)
    {
        bitSeq = this.val.charCodeAt(0);
        uartSignalSigToAscii.sig2ascii(bitSeq);
        bitSeq = bitSeq.toString(2).padStart(8, "0");
        uartSignalSigToBin.sig2bin(bitSeq);
        bitSeq = bitSeq.split("").reverse().join("");
        bitSeq = "0" + bitSeq + "11";
    }
    uartSignalWire.handleSignal(bitSeq);
};
uartSignalSig.reset = function(){
    this.init();
};

let uartSignalSigToAscii = new anim('uartSignalSigToAscii', uartSignalAnim);
uartSignalSigToAscii.init = function(){
    this.elem.innerHTML = "";
};
uartSignalSigToAscii.sig2ascii = function(val){
    this.elem.innerHTML = val;
};
uartSignalSigToAscii.reset = function(){
    this.init();
};

let uartSignalSigToBin = new anim('uartSignalSigToBin', uartSignalAnim);
uartSignalSigToBin.init = function(){
    this.elem.innerHTML = "";
};
uartSignalSigToBin.sig2bin = function(val){
    this.elem.innerHTML = val;
};
uartSignalSigToBin.reset = function(){
    this.init();
};

let uartSignalSigPlot = new anim('uartSignalSigPlot', uartSignalAnim);
uartSignalSigPlot.data = [{
    x: [], // x axis data
    y: [], // y axis data
    mode: 'lines',
    line: {
        simplify: false,
        width: 3,
    },    // data line property
}];
uartSignalSigPlot.layout = {
    // autosize: false,
    height: 200,
    margin: {
        l: 80,
        r: 10,
        b: 40,
        t: 10,
        pad: 0,
    },
    xaxis: {
        range: [0, 110],
        dtick: 10,
        gridcolor: '#505050',
        // zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
        showticklabels: false,
        title: 'Time',
        titlefont: {
            family: 'Garamond,serif',
            size: 20,
            color: 'white',
        },
    },
    yaxis: {
        gridcolor: '#505050',
        range: [-0.1, 1.1],
        // zeroline: false,
        tickcolor: '#fff',
        tickfont: { family: 'Garamond,serif', size: 20, color: '#fff' },
        showgrid: false,
        dtick: 0.5,
        title: 'GPIO State',
        titlefont: {
            family: 'Garamond,serif',
            size: 20,
            color: 'white',
        },
    },
    paper_bgcolor: '#ffffff00',
    plot_bgcolor: '#ffffff00',
};
uartSignalSigPlot.config = {
    staticPlot: true,
};
uartSignalSigPlot.init = function () {
    Plotly.purge(this.id);
    this.data[0].x = [];
    this.data[0].y = [];
    Plotly.newPlot(this.id, this.data, this.layout, this.config);
};
uartSignalSigPlot.appendVal = function (x,y){
    this.data[0].x.push(x*1.1);
    this.data[0].y.push(y);
    Plotly.update(this.id, this.data, this.layout, this.config);
}
uartSignalSigPlot.reset = function (){
    this.init();
}
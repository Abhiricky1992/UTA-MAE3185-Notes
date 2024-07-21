class animControl {
    #animPlaying = false;
    #animObjs = new Array();
    #animUpdateIntIdx = null;
    #animUpdateCounter = 0;
    #animUpdateDt = 1;      // This exists for the update function that depend on ode solvers. It can be used to change the integration time step on the fly.

    // Functions for animations to register themselves so that update and pause can be controlled
    registerAnim(animObj) {
        this.#animObjs.push(animObj);
    }

    // Function to call the update functions of the animations that are on the current slide
    #callUpdateFuns() {
        this.#animUpdateCounter += this.#animUpdateDt;
        for (let animObj of this.#animObjs)
            if (typeof animObj.update === "function")
                animObj.update(this.#animUpdateCounter, this.#animUpdateDt);
    }

    // Function to call the play functions of the animations that are on the current slide
    #callPlayFuns() {
        for (let animObj of this.#animObjs)
            if (typeof animObj.play === "function")
                animObj.play();
    }

    // Function to call the pause functions of the animations that are on the current slide
    #callPauseFuns() {
        for (let animObj of this.#animObjs)
            if (typeof animObj.pause === "function")
                animObj.pause();
    }

    // Function to call the reset functions of the animations that are on the current slide
    callResetFuns() {
        if (this.#animPlaying) {
            clearInterval(this.#animUpdateIntIdx);
            this.#animPlaying = false;
            this.#callPauseFuns();
        }
        this.#animUpdateCounter = 0;
        this.#animUpdateDt = 1;
        for (let animObj of this.#animObjs)
            if (typeof animObj.reset === "function")
                animObj.reset();
    }

    // Function to update and pause animation on the respective slied
    playPauseAnim() {
        if (this.#animPlaying) {
            clearInterval(this.#animUpdateIntIdx);
            this.#animPlaying = false;
            this.#callPauseFuns();
        }
        else {
            this.#callPlayFuns();
            this.#animPlaying = true;
            this.#animUpdateIntIdx = setInterval(this.#callUpdateFuns.bind(this), 16);
        }
    }

    // Change global time speed
    increaseAnimUpdateDt() {
        this.#animUpdateDt += 0.1;
    }
    decreaseAnimUpdateDt() {
        this.#animUpdateDt -= 0.1;
        if (this.#animUpdateDt < 0) {
            this.#animUpdateDt = 0;
        }
    }
}

class anim {
    #initAnimIntIdx = null;
    constructor(elemID, animControlObj) {
        this.id = elemID;
        this.#initAnimIntIdx = setInterval(this.#initializeAnimation.bind(this), 100);
        this.controller = animControlObj;
    }

    // Function for the animation to initialize itself
    #initializeAnimation() {
        if (document.readyState === 'complete') {
            this.elem = document.getElementById(this.id);
            if (this.elem != null) {
                clearInterval(this.#initAnimIntIdx);
                if (typeof this.init === "function")
                    this.init();
                this.controller.registerAnim(this);
            }
            else {
                clearInterval(this.#initAnimIntIdx);
                throw this.id + ": This element doesn't exist.";
            }
        }
    }
}

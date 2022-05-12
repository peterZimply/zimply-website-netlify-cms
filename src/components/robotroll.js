// I've seen a few of these BB-8 animations about, so I thought I'd take a shot at building one using React as a bit of an exercise. My favorite thing to do is draw circles around him to make him do a little jig, but I'm easily amused.
import React from "react"
import "../styles/robot-roll.css"

class RobotRoll extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            droidX: 0,
            mouseX: 0,
            toTheRight: true,
            speed: 1.7,
            accelMod: 0.4
        }
    }

    // Keep track of the mouse position.
    handleMouseMove(event) {
        this.setState({
            mouseX: event.pageX
        })
    }

    // Speed Mod Bar
    handleSpeedChange(e) {
        if (parseFloat(e.target.value)) {
            this.setState({
                speed: e.target.value
            })
        }
    }

    // Acceleration Mod Bar
    handleAccelChange(e) {
        if (parseFloat(e.target.value)) {
            this.setState({
                accelMod: e.target.value
            })
        }
    }

    // Get moving!
    movement() {
        let { droidX, mouseX, speed, accelMod } = this.state;

        // Need a pretty strict if statement to make sure React doesn't end up in a 
        // render loop with all the state changes / re-rendering going on.
        if (Math.abs(Math.round(droidX) - mouseX) !== 1) {

            let distance = mouseX - droidX;
            let acceleration = Math.abs(distance * accelMod) / 100;

            // Move to the right
            if (droidX < mouseX) {
                this.setState({
                    droidX: droidX + (speed * acceleration),
                    toTheRight: true
                });
            }

            // Move to the left
            else {
                this.setState({
                    droidX: droidX - (speed * acceleration),
                    toTheRight: false
                });
            }
        }
    }

    // Get some initial movement on first mount. 
    componentWillMount() {
        this.setState({
            mouseX: 300
        });
    }

    // Set up the mouse event listener and fire up the movement function.
    componentDidMount() {
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        setInterval(this.movement.bind(this), 1);
    }

    // Clean up.
    componentWillUnmount() {
        document.removeEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    // Away we go.
    render() {
        let { speed, accelMod, droidX, mouseX, toTheRight } = this.state;

        return (
            <div className="rolling-robot-wrapper">

                <div className="bb8" style={{ WebkitTransform: `translateX(${droidX}px)` }}>
                    <div className="head"
                        style={{ WebkitTransform: `translateX(${(mouseX - droidX) / 15}px) rotateZ(${(mouseX - droidX) / 25}deg)` }}>
                        <img src="/images/mascot/head.png" alt="head" />
                    </div>


                    <div className="ball" style={{ WebkitTransform: `rotateZ(${droidX / 2}deg)` }}>
                        <div className="lines one"></div>
                        <div className="lines two"></div>
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                    </div>
                    <div className="shadow"></div>
                </div>
            </div>
        );
    }
}

export default RobotRoll
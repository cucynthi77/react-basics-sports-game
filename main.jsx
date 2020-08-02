// An App component under which all other components will be added

function Game(props) {
    return (
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="stats">
                <Team
                  name = {props.visitingTeam.name}
                  logo = {props.visitingTeam.logo}
                />

                <div className="versus">
                    <h1>VS</h1>
                </div>

                <Team
                    name = {props.homeTeam.name}
                    logo = {props.homeTeam.logo} 
                />
            </div>
        </div>
    )
}









function App(props) {
    let BlackCats = {
        name: "Black Cats",
        logo: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1347,w_2400,x_0,y_17/v1572194246/shape/mentalfloss/87226-gettyimages-537121731.jpg?itok=dyahw2Wq"
    }
    let RedPeppers = {
         name:"Red Peppers",
         logo:"https://cdn4.vectorstock.com/i/1000x1000/66/68/spicy-red-pepper-icon-vector-20206668.jpg"
    }
    let Baddogs = {
        name:"Bad Dogs",
        logo: "https://www.pinclipart.com/picdir/middle/552-5520931_pitbull-dog-bad-mal-co-cachorro-cartoon-desenho.png"
    }
    let Maddeers = {
        name: "Mad Deers",
        logo: "https://coghillcartooning.com/wp-content/uploads/2012/12/Rack-Rubble-sketch-v10.jpg"
    }
    return (
        <div className="App">
            <Game 
            homeTeam ={BlackCats}
            visitingTeam={RedPeppers} 
            venue = {"IND1"}           
            />
            <Game 
            venue="Where the wild things are"
            homeTeam={Maddeers}
            visitingTeam={Baddogs}
             />

        </div>
    )
}

class Team extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            shotsTaken: 0,
            score: 0
        }

        this.shotSound = new Audio("./audio/Back+Board.wav")
        this.scoreSound = new Audio("./audio/Swish+2.wav")
    }
    handleShot = (event) => {

        if (Math.random() > 0.5) {
            this.setState((prestate, props) => {
                this.scoreSound.play()
                setTimeout(() => {
                    this.scoreSound.play()
                }, 300)

                return { score: prestate.score + 1 }

            })
        }
        this.setState((preState, props) => {
            this.shotSound.play()
            return { shotsTaken: preState.shotsTaken + 1 }
            score
        })
    }


    render() {
        let shotPercentdiv
        if (this.state.shotsTaken) {
            let shotPercent = Math.round((this.state.score / this.state.shotsTaken) * 100)
            shotPercentdiv = (
                <div>
                    Shots %:{shotPercent}
                </div>
            )
        }
        return (
            <div>
                <div> team {this.props.name}
                    <img src={this.props.logo} width="150px" />
                </div>
                <div>Score:{this.state.score}</div>
                <div>ShotsTaken: {this.state.shotsTaken}</div>
                {shotPercentdiv}
                <button onClick={this.handleShot}> Shoot</button>
            </div>
        )


    }
}

// Render the App
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
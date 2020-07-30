// An App component under which all other components will be added
function App(props) {
    return (
      <div>
        <Team name="Black Cats" logo="https://images2.minutemediacdn.com/image/upload/c_crop,h_1347,w_2400,x_0,y_17/v1572194246/shape/mentalfloss/87226-gettyimages-537121731.jpg?itok=dyahw2Wq" />
        <Team name="Red Peppers" logo="https://cdn4.vectorstock.com/i/1000x1000/66/68/spicy-red-pepper-icon-vector-20206668.jpg" />
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
        let shotPercent = this.state.score / this.state.shotsTaken
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
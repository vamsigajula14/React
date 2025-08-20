import profilePicture from './assets/react.svg'

function App() {


  return (
   <Profile name = "Vamsi" age = "23" bio = "B.Tech Graduate Student from AIML looking for job"/>
  )
}

function Profile({name, age, bio}){
  return <div>
    <div style={{display:'flex',justifyContent:'center',margin:'100px',padding:'30px',
      backgroundColor:'lightgray', width : '500px'
    }}>
        <div style={{paddingTop:"20px",marginBlock:'2px solid black'}}>
          <img src={profilePicture} alt='profile' width={'150px'} style={{borderRadius:"50%", marginBlock:'2px solid black'}}></img>
        </div>
        <div style={{padding:'20px'}}>
          <div style={{padding:'25px',fontSize:'25px',fontFamily:"serif"}}>
            Name : {name}
          </div >
          <div style={{padding:'25px',fontSize:'25px',fontFamily:"serif"}}>
            Age : {age}
          </div>
          <div style={{padding:'25px',fontSize:'25px',fontFamily:"serif"}}>
            Bio : {bio}
          </div>
        </div>
    </div>
  </div>
}
export default App

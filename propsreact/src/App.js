import './App.css';
import Profile from './profile/profile';
function App() {
  const fullName ='Marwen Zakhama'
  const bio='Bio'
  const profession='Student'
  const stylediv={backgroundColor:'#FFFF'}
  const handleName=()=> {
    alert(`${fullName}`)
  }
  return (
    <div className="App" style={stylediv}>
      <Profile  fullName={fullName} bio={bio} profession={profession} handleName={handleName}><img src='./photo.JPG' alt='photo' style={{width:'250px', height:'250px',borderRadius:'250px', marginTop:'140px'}} /></Profile
      >
    </div>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import About from './Components/About';



function App() {
  return (
    <div className="app">
     
      {/* top left */}
      <div className='app_text_name'>
        <div>
          <span style={{ 'color': '#32a864', 'fontWeight': '500' }}>GIS </span>DEV
        </div>
        <div>
          <a href=""><span style={{ 'fontSize': '0.8em' }}>Marek Wyszyński</span></a>
        </div>
      </div>
      <About/>
      {/* top right */}
      <div className='app_text_full_stack'>
        <a href="https://github.com/gitgeoman">FULL STACK WEB & DATA DEVELOPER &#8599;</a>
      </div>


      {/* bottom right */}
      <div className='app_text_email'>
        <a href="mailto:gitgeoman@gmail.com">EMAIL</a>
      </div>
    </div>
  );
}

export default App;

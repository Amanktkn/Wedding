import { useEffect, useState } from 'react';
import './App.css';
import havan from './Sources/havan.jpeg';
import ambience from './Sources/Ambience.jpeg';
import meh from './Sources/Mehndi.jpeg';
import song from './Sources/song.mp3';

function App() {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  function getTime() {
    let utc_now = new Date();
    let marriage_date = new Date('2022, 12, 03 20:00:00')
    let days = Math.trunc((marriage_date - utc_now) / (1000 * 60 * 60 * 24));
    let hours = Math.trunc((marriage_date - utc_now - (days * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.trunc((marriage_date - utc_now - (days * 1000 * 60 * 60 * 24) - (hours * 1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.trunc((marriage_date - utc_now - (days * 1000 * 60 * 60 * 24) - (hours * 1000 * 60 * 60) - (minutes * 1000 * 60)) / (1000));

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    return;
  }

  useEffect(() => {
    getTime()
  }, []);

  // let audio = new Audio('./Sources/song.mp3');

  setInterval(getTime, 1000);


  return (
    <>
      <div className='dayofdetails'>
        <img src={havan} alt="havan_image" className='havan'></img>
        <h2 className='headline'><center>Details of the <br />day</center></h2>
      </div>
      <div className="row" id="brown-theme">
        <h1 className='count'>Countdown</h1>
        <div className="col-3" id="t-col">
          <p className='timer'>{days}</p>
          <p className='subs'>Days</p>
        </div>
        <div className="col-3" id="t-col">
          <p className='timer'>{hours}</p>
          <p className='subs'>Hours</p>
        </div>
        <div className="col-3" id="t-col">
          <p className='timer'>{minutes}</p>
          <p className='subs'>Minutes</p>
        </div>
        <div className="col-3" id="t-col">
          <p className='timer'>{seconds}</p>
          <p className='subs'>Seconds</p>
        </div>
      </div>
      <div className='countdown'>
        <p className='para1'>We are so incredibly excited to share this special day
          with our favourite people –
          a big thanks for all of your love.</p>
      </div>
      <div className="row" id="intro">
        <div className="col-4" id="f">
          <h1 className='intro'>Jeetesh</h1>
          <p className='font'>D/O Mr. Sompal Singh & Mrs. Usha Singh</p>
        </div>
        <div className="col-4">
          <img src={meh} alt="mehndi_image" id="mehndi"></img>
        </div>
        <div className="col-4" id="m">
          <h1 className='intro'>Shashank</h1>
          <p className='font'>S/O Mr. RajKumar Saini & Mrs. Sushila Saini</p>
        </div>
      </div>
      <div className="row" id="l-h">
        <div className="light-brown">
          <h1 style={{ marginTop: '0.5rem', fontSize: "2rem" }}>When and Where</h1>
        </div>
        <div className="col-6" id="lite-brown">
          <p style={{ fontSize: "1rem" }}>Event details</p>
          <p className="inf">Evening</p>
          <p className="inf">3 / December / 2022</p>
        </div>
        <div className="col-6" id="lite-brown1">
          <p style={{ fontSize: "1rem" }}>Venue details</p>
          <p className="inf">Regal 77, Naugawan Road</p>
          <p className="inf">Tap here for Location
            &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16">
              <a href="https://g.page/Regal77?share"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </a>
            </svg>
          </p>

        </div>
      </div>
      <div className='bigday'>
        <img src={ambience} alt="ambience_image" className='ambience'></img>
        <div className='lastline'>
          <h2 className='fontf'>See you on the big day!</h2>
          <br></br>
          <h2 className='ylastline'>Contact Details</h2>
          <br></br>
          <h2 className='font'>Sub. Maj. S.P Singh(+91 8979199529)</h2>
          <br></br>
          <h2 className='font'>Mr. Aman Rathore(+91 9149003980)</h2>
        </div>
      </div>
    </>
  );
}

export default App;

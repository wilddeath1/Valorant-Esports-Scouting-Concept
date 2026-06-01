import Section1 from './Components/section1/Section1'
import Section2 from './Components/section2/Section2'
import boaster from "./assets/images/boaster.jpg";
import zmjjkk from './assets/images/zmjjkk.jpg'
import demon1 from './assets/images/demon1.jpg'
import chronicle from './assets/images/chronicle.jpg'
import forsaken from './assets/images/forsaken.jpg'
import nats from './assets/images/nats.jpg'
import './font.css';
function App() {
  const players = [
    {
      name: 'ZMJJKK',
      img: zmjjkk,
      intro: 'Explosive entry fragger known for fast site executions and aggressive playstyle.',
      tag: 'Duelist',
      color: '#FF5C5C',
      profile: 'https://liquipedia.net/valorant/ZmjjKK'
    },

    {
      name: 'BOASTER',
      img: boaster,
      intro: 'Strategic controller player with calm mid-round decision making.',
      tag: 'Controller/IGL',
      color: '#FF8A00',
      profile: 'https://liquipedia.net/valorant/Boaster'
    },

    {
      name: 'FORSAKEN',
      img: forsaken,
      intro: 'Flexible fragger with coordinated team utility setups and good calling.',
      tag: 'Flex/IGL',
      color: '#8B5CF6',
      profile: 'https://liquipedia.net/valorant/F0rsakeN'
    },

    {
      name: 'DEMON1',
      img: demon1,
      intro: 'High-tempo duelist capable of creating instant space and site entries.',
      tag: 'Duelist/Flex',
      color: '#2563EB',
      profile: 'https://liquipedia.net/valorant/Demon1'
    },

    {
      name: 'CHRONICLE',
      img: chronicle,
      intro: ' Consistent fragging initator with strong clutch conversion rate and good positioning.',
      tag: 'Initiator',
      color: '#84CC16',
      profile: 'https://liquipedia.net/valorant/Chronicle'
    },

    {
      name: 'NATS',
      img: nats,
      intro: 'Experienced IGL focused on macro strats, rotations, and adapting playstyle.',
      tag: 'Sentinel/IGL',
      color: '#06B6D4',
      profile: 'https://liquipedia.net/valorant/NAts'
    }
  ]
  return (
    <>
      <div>
        <Section1 players={players} />
        
      </div>
    </>
  )
}

export default App

import './App.css';
import Card from './Card.js';
import aa from './109t.jpg';
import bb from './mp5.jpg';
import cc from './sar9.jpg';


function App() {
  return (
    <div className="sevo">
      <Card  
      img={aa}
      title="Sar109T"
      description=" SAR 109T, 9x19 milimetre mühimmat kullanırken dakikada yaklaşık 900 atım yapabiliyor. "
      />
      <Card
      img={bb}
      title="Mp5"
      description="Kullandığı mermi 9x19mm Parabellum'dur. Ancak .40 S&W (MP5/40) ve 10mm Auto (MP5/10) mermilerini kullanan versiyonları da vardır. "
      />
      <Card
      img={cc}
      title="SAR9 METE"
      description="Yeni nesil hafif polimer gövdeli SAR9 METE , yalnızca 750 gram ağırlığa sahip olmasıyla dikkat çekiyor"
      />
    </div>
  );
}

export default App;
import './App.css';
import InsuranceDetails from './components/insuranceDetails'

function App() {
  return (
    <div className="container">
        <div className="row">
           <div className="col-md-1"></div>
           <div className="col-md-10">
              <InsuranceDetails></InsuranceDetails>
           </div>
           <div className="col-md-1"></div>
        </div>
        
    </div>
  );
}

export default App;

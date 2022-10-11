import './Home.css';
import ProjectCards from './ProjectCards';

function Home() {
  return (
    <div>
            <div className="screen1">
                <h1>This is Section1</h1>

                <ProjectCards/>
            </div>
            <div className="screen2">
                <h1>This is Section2</h1>
            </div>
            <div className="screen3">
                <h1>This is Section3</h1>
            </div>
            <div className="screen4">
                <h1>This is Section4</h1>
            </div>
    </div>
  );
}

export default Home;

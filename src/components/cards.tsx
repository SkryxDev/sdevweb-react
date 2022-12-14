import jsimg from '../images/js.png'
import tsimg from '../images/ts.png'
import reactimg from '../images/react.png'
import '../App.css'

export default function Cards() {
    return(
        <div className="col">
            <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                <img src={jsimg} className="card-img-top" alt="js"/>
                <div className="card-body">
                    <p className="card-text">Professional Javascript developer using Node.JS and NPM</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                <img src={tsimg} className="card-img-top" alt="js"/>
                <div className="card-body">
                    <p className="card-text">Medium TypeScript developer.</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                <img src={reactimg} className="card-img-top" alt="js"/>
                <div className="card-body">
                    <p className="card-text">Learning ReactJS using TypeScript</p>
                </div>
            </div>
        </div>
    )
}
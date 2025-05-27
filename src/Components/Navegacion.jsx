import { Link } from 'react-router-dom';

function Navegacion(){
    return(
        <nav style={{ padding: '10px', background:'#f2f2f2', marginBottom: '20px'}}>
            <Link to="/" style={{ marginRight: '10px'}}> Inicio </Link> 
            &nbsp;&nbsp;
            <Link to="/equipo"> Mi equipo </Link> 
            &nbsp;&nbsp;
            
        </nav>
    );
}

export default Navegacion;
import { Routes } from '../../Utils/Routes';
import { getBase } from '../../Api/index';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';



const Header = () =>{
    const [base , setBase] = useState(null)
    const [state , setState] = useState('Posts')
    const [route , setRoute] = useState('posts')

    useEffect(() =>{
        getBase(route)
        .then(res => res.json())
        .then(r => setBase(r))
    }, [route])

    const chooseRoute = routes =>{
        setRoute(routes)
    }


    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <Link className="navbar-brand text-warning" to="">Jsonplaceholder</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            {
                                Routes.map(item =>{
                                    return(
                                        <li key={item.title}>
                                            <button 
                                                className="btn nav-link"
                                                onClick={() => {
                                                    chooseRoute(`${item.route}`)
                                                    setState(`${item.title}`)
                                                }}
                                            >
                                                {item.title}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <h3>/ <span className="text-warning">{state}</span></h3>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <Card base={base} routes={route}/>
                </div>
            </div>
        </>
    )
}
export default Header
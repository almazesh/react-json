
const Card = ({base , routes}) =>{
    return(
        <>
            {
                base ? (
                    base.map(item =>{
                        if(routes === 'posts'){
                            return (
                                <div className="col-xl-4 mt-4" key={item.id}>
                                    <div className="card">
                                        <div className="card-header bg-warning">
                                            <p className="text-center" style={{textTransform:'capitalize', margin:'0'}}>{item.title}</p>
                                        </div>  
                                        <div className="card-body">
                                            <h6>{item.body}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        }else if(routes === 'comments'){
                            return(
                                <div className="col-xl-4 mt-4" key={item.id}>
                                    <div className="card">
                                        <div className="card-header bg-warning">
                                            <p className="text-center" style={{textTransform:'capitalize', margin:'0'}}>{item.name}</p>
                                        </div>  
                                        <div className="card-body">
                                            <h6>{item.email}</h6>
                                            <p>{item.body}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }else if(routes === 'albums'){
                            return(
                                <div className="col-xl-4 mt-4" key={item.id}>
                                    <div className="card">
                                        <div className="card-header bg-success">
                                            <p className="text-center text-light" style={{textTransform:'capitalize', margin:'0'}}>{item.title}</p>
                                        </div>  
                                    </div>
                                </div>
                            )
                        }else if(routes === 'photos'){
                            return(
                                <div className="col-xl-4 mt-4" key={item.id}>
                                    <div className="card">
                                        <div className="card-header bg-dark">
                                            <p className="text-center text-light" style={{textTransform:'capitalize', margin:'0'}}>{item.title}</p>
                                        </div>  
                                        <div className='card-image'>
                                            {/* <img 
                                                src={item.url} 
                                                className="w-100"
                                                style={{height:'200px'}}
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                            )
                        }else if(routes === 'todos'){
                            return(
                                <div className="col-xl-4 mt-4" key={item.id}>
                                    <div className="card">
                                        <div className="card-header bg-warning">
                                            <p className="text-center text-light" style={{textTransform:'capitalize', margin:'0'}}>{item.title}</p>
                                        </div>  
                                    </div>
                                </div>
                            )
                        }else if(routes === 'users'){
                            return(
                                <div className="col-xl-4 mt-4" key={item.id}>
                                    <div className="card">
                                        <div className="card-header bg-warning">
                                            <p className="text-center " style={{textTransform:'capitalize', margin:'0'}}>{item.name}</p>
                                        </div>  
                                        <div className='card-body'>
                                            <p>Username: {item.username}</p>
                                            <p>Email: {item.email}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                ) : (
                    <p>loading...</p>
                )
            }
        </>
    )
}

export default Card;
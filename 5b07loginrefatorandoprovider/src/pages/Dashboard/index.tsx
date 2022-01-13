import { useAuth } from '../../providers/AuthContent'

const Dashboard = () => {

    const { Logout } = useAuth();

    const logOut = () => {
        Logout()
    }

    return(
        <div className='dashboard-box'>
            <div className='box2'>
            <h1 className='titulo-dashboard'>Bem-vindo ao Dashboard!</h1>
            <img src="data:image/png;base64,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" alt="kenzie img" />
            <div>
                <button className='button-dash' onClick={() => Logout()}>Logout</button>
            </div>
            </div>
            
        </div>
        
    )
}

export default Dashboard
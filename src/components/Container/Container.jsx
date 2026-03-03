import './Container.css'

const Container = ({children,revers}) => {
    return (
        <div className={`container ${revers ? "revers":""}`}>
                {children}
        </div>
    )
}

export default Container

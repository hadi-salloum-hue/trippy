import './Title.css'
const Title = ({mainTitle,subTiltle}) => {
    return (
        <>
            <h1 className='tilte'>{mainTitle}</h1>
            <p className='subtilte' >{subTiltle}</p>
        </>
    )
}

export default Title

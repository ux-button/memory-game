import '../App.css'

function NavigationBar ({ score }) {
    return (
        <div className='navigation-bar'>
            Score: {score.points} ✦ Best score: {score.best}
        </div>
    )
}

export { NavigationBar }
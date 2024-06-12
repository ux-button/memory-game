import '../App.css'

function NavigationBar ({ score }) {
    return (
        <div role='textbox' className='navigation-bar'>
            Score: {score.points} ✦ Best score: {score.best}
        </div>
    )
}

export { NavigationBar }
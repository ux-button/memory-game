function NavigationBar ({ score }) {
    return (
        <>
            Score: {score.points} ✦ Best score: {score.best}
        </>
    )
}

export { NavigationBar }
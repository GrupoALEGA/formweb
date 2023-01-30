const CompHead = () => {
    const meicimg = 'logo_meic.jpg'
    return (
    <header>
        <nav className="navbar navbar-light shadow max-w-7xl mx-auto py-6 px-1 sm:px-6 lg:px-8">
            <div className="container mx-1">
                <a className="navbar-brand" href="#">
                    <img src={meicimg} alt="MEIC" width="191" height="84" />
                </a>
            </div>
        </nav>
    </header>)
}

export default CompHead
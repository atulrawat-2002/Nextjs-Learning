 function Layout(
    {children}: Readonly<{
        children: React.ReactNode
    }>
 ) {
    return <>
        <div className="bg-green-700" >
            These are home routes
            {
                children
            }
        </div>
    </>
}

export default Layout;
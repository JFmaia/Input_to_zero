// Pegando valores pelo props do componente
function Title({children, className='teste'}){
    return <h1 className={className}>{children}</h1>
}
// Componete react
export function Home(){
    const title = "Olá José!";
    const className = "title";

    return (
        <div className="container">
            <Title>
                Olá React!
            </Title>
        </div>
    )
}

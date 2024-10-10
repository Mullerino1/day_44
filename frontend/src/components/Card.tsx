import Title from "./Title"

type CardProps = {
    title?: string
    description?: string
    username: string
    setUserName: any
}

export default function Card(props: CardProps){
    const { description = 'description', title = 'title', setUserName, username } = props

    const changeUserName = () =>{
        setUserName('logged out')
      }
   
    return (
        <article>
            <Title title={title} username={username} />

            {/* <h2> { Title } </h2> */}
            <p> { description } </p>
            <button onClick={changeUserName}>Log out</button> 
            

        </article>
    )
}
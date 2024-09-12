import Title from "./components/Title"
import Card from "./components/Card"
import { useState } from "react"



function App() {
  
  // const [username, setUserName] = useState(1)
  const [username, setUserName] = useState('name')


  // // const changeUserName = () =>{
  // //   setUserName('Logged out')
  // // }
  // const changeUserName = () =>{
  //   setUserName('logged out')
  // }

  const products = [
    {
      id: 1,
      title: 'CardTitle', 
      description: 'CardDescription'
    },
    {
      id: 2,
      title: 'CardTitle 2',
      description: 'Card description 2'
    }
  ]
  return ( 
    <section>


      {/* <p>{username}</p>
      <button onClick={changeUserName}>Log out</button> */}
      {
        products?.map(product => 
        <Card key={product.id} 
          title={product.title} 
          description={product.description} 
          
        setUserName={setUserName} username={username} />)
      }

  {/* <Title title = 'Products' />
  <Title title = 'Medlemstilbud' /> */}
  {/* <Card title = 'Cardtitle' description='CardDescription'/>
  <Card title = 'Cardtitle Two' description='CardDescription Two'/> */}
  


  </section>
  )
  
}

export default App

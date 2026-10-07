import './styles.css'
function App(){
  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8}

  const textoDoRotulo = 'Nome:'
  const obterTextoBotao = () => 'Enviar'
  const aoClicar = () => alert('clicou')
  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label
        className='rotulo' 
        style={{display: 'block', marginBottom: 4}}
        htmlFor="nome">
        {textoDoRotulo}
      </label> 
      <input 
        id="nome" 
        type="text"
        style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}} />
      <button
        onClick={() => aoClicar()}
        style={estilosBotao}>
        {obterTextoBotao()}
      </button> 
    </div>
  )
}
export default App



// //criar um componente que exibe o seu nome

// //criar um componente que exibe a sua idade

// //no App, exibir "Oi, meu nome é Ana, tenho 22 anos, dentro de um p no App."

// const Hello = function(){
//   return <p>Hello</p>
// }

// const App = () => {
//   return(
//     <div>
//       <Hello />
//       <p>
//         Meu primeiro componente React
//       </p>
//     </div>
//   )
// }

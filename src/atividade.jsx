
const produtos = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        id: 2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        id: 3,
        nome: 'Tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786'],
    },
];

const Produtos = () => {
    const filtro = produtos.filter((item) => Number(item.preco.replace("R$", "") > 1500))
    return (
        <>
            {filtro.map((item) => (
                <div>
                <h1 key={item.id}>{item.nome}</h1>
                <h3 key={item.id}>{item.preco}</h3>
                <span key={item.id}>
                  {item.cores.map((item) => (
                  <p  style={{ backgroundColor: item }}> {item}</p>
                  )) 
                  }
                </span>
              </div>
            ))
            }
        </>
    )


}
export default Produtos
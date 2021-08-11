// Seu código aqui!

const products = [
  {
    id: 1,
    nome: 'Iphone 11',
    tags: ['smartphone', 'tech', 'apple']
  },
    {
    id: 2,
    nome: 'Macbook Pro',
    tags: ['laptop', 'tech', 'apple']
  },
    {
    id: 3,
    nome: 'JBL Headphones',
    tags: ['headphone', 'tech', 'jbl']
  },
    {
    id: 4,
    nome: 'Nike Shorts',
    tags: ['shorts', 'clothing', 'nike']
  },
];

// Declare sua funçao aqui. Nao se esqueça de invocar a função para conseguir testar!

function filterProducts(categoria) {
  const newArr = []
  for (let count = 0; count < products.length; count++) {
    if (products[count].tags.includes(categoria)) {
      newArr.push(products[count])
    }
  }
    return newArr
  }
  const produtoApple = filterProducts('apple');
  console.log(produtoApple);
import cube from '../assets/Images/the_cube.webp'
import worm from '../assets/Images/the_worm.webp'
import cherrybomb from '../assets/Images/cherry_bomb.webp'

export const itemArray = [
    {   itemName: 'Delta 9 The CUBE',
        itemPrice: 35,
        productImage: <img src= {cube} alt= 'The Cube' className='productImage'/>,
        itemGroup: 'Edible',
        itemSubGroup: 'Gummy',
        theLowestGroup: 'Delta 9 Gummy'
    },
    {   itemName: 'Delta 8 The Worm',
        itemPrice: [30, 10],
        productImage: <img src= {worm} alt= 'The Worm' className='productImage'/>,
        itemGroup: 'Edible',
        itemSubGroup: 'Gummy',
        theLowestGroup: 'Delta 8 Gummy'
    },
    {   itemName: 'Cherry Bomb',
        itemPrice: 75,
        productImage: <img src={cherrybomb} alt= 'Cherry Bomb' className='productImage'/>,
        itemGroup: 'Tincture',
        itemSubGroup: 'CBD Tincture'
    },
    {}
]
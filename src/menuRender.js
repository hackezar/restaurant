import Everything from './everything.jpeg';
import Plain from './plain.jpeg';
import Egg from './egg.jpeg';

export const menuRender = () => {
    let mainDiv = document.getElementById('mainDiv');
    mainDiv.remove();
    console.log("rendered");
    mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');
    const menuTitle = document.createElement('h1');
    menuTitle.innerText = 'Menu';
    document.body.appendChild(mainDiv);
    mainDiv.appendChild(menuTitle);
    let bagelList = document.createElement('ul');
    bagelList.setAttribute('id', 'bagelList');
    mainDiv.appendChild(bagelList);
    class Bagel {
        constructor(type, price, image) {
            this.type = type;
            this.price = price;
            this.image = image;
        }
        addBagel() {
            let bagelList = document.getElementById('bagelList');
            let bagelItem = document.createElement('li');
            let bagelItemText = document.createElement('p');
            let bagelItemPic = new Image();
            bagelItemPic.src = this.image;
            bagelItemText.innerText = `Type: ${this.type} | Price: ${this.price}`;
            bagelItem.appendChild(bagelItemText);
            bagelItem.appendChild(bagelItemPic);
            bagelList.appendChild(bagelItem);
        }
    }
    const everythingBagel = new Bagel('Everything' , '$3.69', Everything);
    everythingBagel.addBagel();
    const plainBagel = new Bagel ('Plain', '$2.99', Plain);
    plainBagel.addBagel();
    const eggBagel = new  Bagel('Egg', '$3.99', Egg);
    eggBagel.addBagel();
}


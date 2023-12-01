import Icon from './bagel.jpg';

export const homePage = () => {
    let mainDiv = document.getElementById('mainDiv');
    if (!mainDiv) {
    const element = document.createElement('div');
    element.classList.add('container');
    const title = document.createElement('h1');
    title.classList.add('header');
    title.innerText = 'The Bagel Haven: A Culinary Oasis of Flavor and Tradition'
    mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');
    //adds the image to our existing div
    const bagelPic = new Image();
    bagelPic.src = Icon;
    bagelPic.classList.add('image');
    element.appendChild(bagelPic);
    const description = document.createElement('p');
    description.innerText = 'Nestled in the heart of our community, The Bagel Haven stands as a culinary oasis, enchanting locals and visitors alike with its delectable offerings and inviting ambiance. Celebrating its first year of existence, this charming bagel restaurant has quickly become a beloved establishment, weaving a tapestry of flavor and tradition that captivates the taste buds and warms the hearts of all who enter.';
    description.classList.add('description');
    mainDiv.appendChild(title);
    mainDiv.appendChild(bagelPic)
    mainDiv.appendChild(description);
    element.appendChild(mainDiv);
    document.body.appendChild(element);
    } else {
        mainDiv.remove();
        homePage();
    }
};



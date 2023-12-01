export const contactRender = () => {
    let mainDiv = document.getElementById('mainDiv');
    mainDiv.remove();
    mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'mainDiv');
    let title = document.createElement('h1');
    title.innerText = "Contact Us";
    mainDiv.appendChild(title);
    let contactList = document.createElement('ul');
    mainDiv.appendChild(contactList);
    document.body.appendChild(mainDiv);
    class Contact {
        constructor(name, role, phone, email) {
            this.name = name;
            this.role = role;
            this.phone = phone;
            this.email = email;
        }

        addContact() {
            let newItem = document.createElement('li');
            let nameItem = document.createElement('p');
            nameItem.innerText = this.name;
            newItem.appendChild(nameItem);
            let roleItem = document.createElement('p');
            roleItem.innerText = this.role;
            newItem.appendChild(roleItem);
            let phoneItem = document.createElement('p');
            phoneItem.innerText = this.phone;
            newItem.appendChild(phoneItem);
            let emailItem = document.createElement('p');
            emailItem.innerText = this.email;
            newItem.appendChild(emailItem);
            contactList.appendChild(newItem);
        }
    }
    const ceo = new Contact ('Jack', 'CEO', '443-356-9130', 'jackhalcisak@outlook.com');
    ceo.addContact();
    const chef = new Contact ('Jim', 'Chef', '555-555-5555', 'chefStuff@gmail.com')
    chef.addContact();
    const cashier = new Contact('Becky', 'Cashier', '324-234-4352', 'cashierLady@outlook.com');
    cashier.addContact();
}
/*Positions Array*/
const positions = [
    {
      name: 'Select modal positions...',
      id: 0
    },
    {
      name: 'Top',
      id: 1
    },
    {
      name: 'Right',
      id: 2
    },
    {
      name: 'Bottom',
      id: 3
    },
    {
      name: 'Left',
      id: 4
    },
    {
      name: 'Top Right',
      id: 5
    },
    {
      name: 'Bottom Right',
      id: 6
    },
    {
      name: 'Bottom Left',
      id: 7
    },
    {
      name: 'Top Left',
      id: 8
    }
];

/*Statuses Array*/
const statuses = [
  {
    id: 0,
    name: 'Select your modal status...'
  },
  {
    id: 1,
    name: 'Information',
  },
  {
    id: 2,
    name: 'Success',
  },
  {
    id: 3,
    name: 'Warning',
  },
  {
    id: 4,
    name: 'Error',
  },
];

/*Adding styles in the body*/
const body = document.querySelector('body');
body.style = `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #FFD194, #D1913C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `;

let modal = document.createElement('div');
let createModal = (statusColor) => {

  if(statusColor) {
    const modalHeader = document.createElement('div');
    modalHeader.style = `
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    height: 75px;
    width: 100%;
    background-color: ${statusColor};
    `;

    modal.appendChild(modalHeader);

    const closeIcon = document.createElement('div');
    closeIcon.style = `
      clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
      background-color: #ffffff;
      font-size: 16px;
      margin: 10px 10px 0 0;
      cursor: pointer;
      width: 20px;
      height: 20px;
    `;

    modalHeader.appendChild(closeIcon);

    closeIcon.addEventListener('click', () => {
      modal.remove();
      modalHeader.remove();
      statusDropDown.removeAttribute('disabled');
      positionsDropDown.removeAttribute('disabled');
    });

    modal.appendChild(modalHeader);
  }
};

/*Creating Status Dropdown*/
const statusDropDown = document.createElement('select');
statusDropDown.style = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 50px;
  outline: none;
  border: none;
  font-size: 18px;
  z-index: 1;
  margin: 0 20px 0 0;
  border-radius: 5px;
  `;
/*Fill in Statuses Dropdown*/
statuses.forEach(status => {
  const statusOption = document.createElement('option');
  let statusId = status.id;
  let statusName = status.name;
  statusOption.setAttribute('value', statusId);
  statusOption.innerText = statusName;
  statusDropDown.appendChild(statusOption);
});
statusDropDown.addEventListener('change', event => {
  const statusColor = event.target.value;

  positionsDropDown.removeAttribute('disabled');

  if(!parseInt(statusColor)== 0 || !parseInt(statusColor) == '' || !parseInt(statusColor) == null) {
    positionsDropDown.removeAttribute('disabled');
  } else {
    positionsDropDown.setAttribute('disabled', '');
  }

  switch (parseInt(statusColor)) {
    case 1:
      createModal('#1765D8');
      break;
    case 2:
      createModal('#34AA44');
      break;
    case 3:
      createModal('#F6AB2F');
      break;
    case 4:
      createModal('#E6492D');
      break;
    default:
      break;
  }    
});

/*Creating Positions Dropdown*/
const positionsDropDown = document.createElement('select');
positionsDropDown.setAttribute('disabled', '');
positionsDropDown.style = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 50px;
  outline: none;
  border: none;
  font-size: 18px;
  z-index: 1;
  border-radius: 5px;
  `;
/*Fill in Positions Dropdown*/
positions.forEach(position => {
  const positionOption = document.createElement('option');
  
  positionOption.setAttribute('value', position.id);
  positionOption.innerText = position.name;

  positionsDropDown.appendChild(positionOption);
});

/*Positions and Statuses dropdowns appended in the body*/
document.body.appendChild(statusDropDown);
document.body.appendChild(positionsDropDown);


let modalTop = () => {
  createModal();
  statusDropDown.setAttribute('disabled', '');
  positionsDropDown.setAttribute('disabled', '');

  modal.style = `
    background-color: #FFF;
    overflow: hidden;
    position: fixed;
    top: -50%;
    right: 50%;
    transform: translate(50%, -50%);
    height: 250px;
    width: 500px;
    border-radius: 10px;
    z-index: 2;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    transition: all 2s;
    `;
  
  document.body.appendChild(modal);
  modal.offsetWidth;
  
  modal.style.top = "50%";
  modal.style.transform = "translate(50% 50%)";
};

let modalRight = () => {
  createModal();
  statusDropDown.setAttribute('disabled', '');
  positionsDropDown.setAttribute('disabled', '');

  modal.style = `
  background-color: #FFF;
  overflow: hidden;
  position: fixed;
  top: 50%;
  right: -50%;
  transform: translate(50%, -50%);
  height: 250px;
  width: 500px;
  border-radius: 10px;
  z-index: 2;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  transition: all 2s;
  `;
  
  document.body.appendChild(modal); 
  modal.offsetWidth;
  
  modal.style.right = "50%";
  modal.style.transform = "translate(-50% 50%)";
};

let modalBottom = () => {
  createModal();
  statusDropDown.setAttribute('disabled', '');
  positionsDropDown.setAttribute('disabled', '');

  modal.style = `
    background-color: #FFF;
    overflow: hidden;
    position: fixed;
    bottom: -50%;
    right: 50%;
    transform: translate(50%, 50%);
    height: 250px;
    width: 500px;
    border-radius: 10px;
    z-index: 2;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    transition: all 2s;
    `;

  document.body.appendChild(modal);
  modal.offsetWidth;
  
  modal.style.bottom = "50%";
  modal.style.transform = "translate(50% 50%)";
};

let modalLeft = () => {
  createModal();
  statusDropDown.setAttribute('disabled', '');
  positionsDropDown.setAttribute('disabled', '');

    modal.style = `
  background-color: #FFF;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: -50%;
  transform: translate(-50%, -50%);
  height: 250px;
  width: 500px;
  border-radius: 10px;
  z-index: 2;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  transition: all 2s;
  `;

  document.body.appendChild(modal); 
  modal.offsetWidth;
  
  modal.style.left = "50%";
  modal.style.transform = "translate(-50% 50%)";
};

let modalTopRight = () => {
  createModal();
  statusDropDown.setAttribute('disabled', '');
  positionsDropDown.setAttribute('disabled', '');

  modal.style = `
  background-color: #FFF;
  overflow: hidden;
  position: fixed;
  top: 1%;
  right: 1%;
  height: 250px;
  width: 500px;
  border-radius: 10px;
  z-index: 2;
  opacity: 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  transition: ease-in-out 1s;
  `;

  document.body.appendChild(modal); 
  modal.offsetWidth;
  
  modal.style.opacity = "1";
};

let modalBottomRight = () => {
  createModal();
  statusDropDown.setAttribute('disabled', '');
  positionsDropDown.setAttribute('disabled', '');

  modal.style = `
  background-color: #FFF;
  overflow: hidden;
  position: fixed;
  bottom: 1%;
  right: 1%;
  height: 250px;
  width: 500px;
  border-radius: 10px;
  z-index: 2;
  opacity: 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  transition: ease-in-out 1s;
  `;

  document.body.appendChild(modal); 
  modal.offsetWidth;
  
  modal.style.opacity = "1";
};

let modalBottomLeft = () => {
  createModal();
  statusDropDown.setAttribute('disabled', '');
  positionsDropDown.setAttribute('disabled', '');

  modal.style = `
  background-color: #FFF;
  overflow: hidden;
  position: fixed;
  bottom: 1%;
  left: 1%;
  height: 250px;
  width: 500px;
  border-radius: 10px;
  z-index: 2;
  opacity: 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  transition: ease-in-out 1s;
  `;

  document.body.appendChild(modal); 
  modal.offsetWidth;
  
  modal.style.opacity = "1";
};

let modalTopLeft = () => {
  createModal();
  statusDropDown.setAttribute('disabled', '');
  positionsDropDown.setAttribute('disabled', '');

  modal.style = `
  background-color: #FFF;
  overflow: hidden;
  position: fixed;
  top: 1%;
  left: 1%;
  height: 250px;
  width: 500px;
  border-radius: 10px;
  z-index: 2;
  opacity: 0;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  transition: ease-in-out 1s;
  `;

  document.body.appendChild(modal); 
  modal.offsetWidth;
  
  modal.style.opacity = "1";
};

positionsDropDown.addEventListener('change', () => {
  const dropDownValue = positionsDropDown.value;
  switch(parseInt(dropDownValue)) {
    case 0:
        '';
        break;
    case 1:
        modalTop();
        break;
    case 2:
        modalRight();
        break;
    case 3:
        modalBottom();
        break;
    case 4:
        modalLeft();
        break;
    case 5:
        modalTopRight();
        break;
    case 6:
        modalBottomRight();
        break;
    case 7:
        modalBottomLeft();
        break;
    case 8:
        modalTopLeft();
    default:
        break;
  }
});
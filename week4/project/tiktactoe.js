
function addO(element) {
  element.innerText = 'O';
};

const addX = (element) => {
  const imAnImportantVariable = 0;
  element.innerText = 'X';
};

const onLoad = () => {
  
  const topLElement = document.getElementById('topL');
  
  topLElement.onclick = () => {
    addX(topLElement);
  };

};

window.onload = onLoad;

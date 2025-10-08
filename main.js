let worksData = [];

fetch('info.json')
  .then(res => res.json())
  .then(data => {
    worksData = data;
    Works(worksData);
  })
  .catch(err => console.error('โหลด JSON ไม่สำเร็จ:', err));



function Works(data) {
  const container = document.getElementById('works-container');
  container.innerHTML = '';

  data.forEach(item => {
    const div = document.createElement('div');
    div.className = `work-item ${item.category}`;

    div.onclick = () => showDetail(item.id);

    div.innerHTML = `
      <img src="${item.images[0]}" alt="${item.title}">
      <h3>${item.title}</h3>
    `;
    container.appendChild(div);
  });
}


function filterCategory(category) {
  const filtered = category === 'all'
    ? worksData
    : worksData.filter(item => item.category === category);
  Works(filtered);
}


function showDetail(id) {
  const item = worksData.find(work => work.id === id);
  if (!item) return;

  document.getElementById('Title').innerText = item.title;
  document.getElementById('Description').innerText = item.description;


  
  const imageContainer = document.getElementById('ImageContainer');
  imageContainer.innerHTML = '';



  item.images.slice(0, 4).forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    imageContainer.appendChild(img);
  });



  const linkContainer = document.getElementById('LinkContainer');
linkContainer.innerHTML = ''; 
if(item.link){
  const a = document.createElement('a');
  a.href = item.link;
  a.innerText = "See more";
  a.style.color = "#ff6600";
  linkContainer.appendChild(a);


  document.getElementById('work').style.display = 'flex';
}


}
function closeProject() {
  document.getElementById('work').style.display = 'none';
}

window.onclick = function(event) {
  const Project = document.getElementById('work');
  if (event.target === Project) {
    Project.style.display = 'none';
  }
};

import { getChannels } from "../api/api.js";


window.addEventListener('load', async () => {
    const response = await getChannels();
    let content = document.getElementById('content');
    if (response.error) {
        window.localStorage.removeItem('token');
        window.location.href = '/index.html';
    } else {
        let channels = response.message.rows;
        console.log(channels)
        for(let i=0; i < channels.length; i++){
            let items = document.createElement("div");
            let img = document.createElement("img");
            let name = document.createElement("h5");
            items.setAttribute('class', 'items');
            items.setAttribute('items_url', channels[i].url);
            img.setAttribute('src', channels[i].image);
            name.innerHTML = channels[i].name;
            items.appendChild(img);
            items.appendChild(name);
            content.appendChild(items);        
        };
    };

    content.addEventListener('click', (e)=>{
        let url = e.target.getAttribute('items_url');
        if (!url) {
         url = e.target.parentElement.getAttribute('items_url');
        };
        if (url) {
            window.localStorage.setItem('url', url);
            window.location.href = '/vido.html'  ;
        };  
    },);
});

    
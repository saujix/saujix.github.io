import './photos.css';

export default function Photos(){

    function Images(){

        const images = require.context('../public/pImg', false, /\.(png|jpe?g|gif)$/);
        const imageNames = images.keys().map((file) => file.replace('./',''));

        let imgLink = "";

        for(let x = 0 ; x < imageNames.length ; x++){
            imgLink += `<img src="pImg/${imageNames[x]}" width="100px">`;
        }
        return imgLink;
    }

    document.querySelector('.data').innerHTML = `
        
            <div class="imgContainer">
                ${Images()}  
            </div>
        
    `
}
let div = document.createElement("div");


div.innerHTML = `

  <iframe src="https://sm64js.com"

          width="1920"

          height="1080"

          frameborder="0"

          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

          allowfullscreen>

  </iframe>

`;


let body = document.querySelector("body");

body.innerHTML = "";

body.appendChild(div);


// Set the iframe to fullscreen

let iframe = div.querySelector("iframe");

iframe.style.position = "fixed";

iframe.style.top = "0";

iframe.style.left = "0";

iframe.style.width = "100%";

iframe.style.height = "100%"; // Made by gmanthemarioguy, https://github.com/gmanthemarioguy

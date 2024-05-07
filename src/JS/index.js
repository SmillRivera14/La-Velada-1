const $boxers = document.querySelector("#boxers");
const $boxersImages = $boxers.querySelectorAll("img");

$boxersImages.forEach(($img) => {
    $img.addEventListener("mouseleave", ()=>{
        $boxersImages.forEach(($img)=>{
            $img.setAttribute("style", "transition: all .3s ease-in-out")
        })
    })


    $img.addEventListener("mouseenter", ()=>{
        const sectionImages = $img.parentNode.children;
        const position = Array.from(sectionImages).indexOf($img);
        //get image for the left side and the right side
        const [leftBoxer, rightBoxer] = [
            $boxersImages[position], 
            $boxersImages[position + $boxersImages.length / 2]
        ]

        //ocultar los boxeadores que no seleccione

        $boxersImages.forEach(($img)=>{
            $img.setAttribute(
                "style",
                "filter: blur(2px) grayscale(.8); transition: all .3s ease-in-out"
            )
        })

        leftBoxer.setAttribute(
            "style",
            "scale: 1.05; contrast: 1.1; transition: all .3s ease-in-out"
        )

        rightBoxer.setAttribute(
            "style",
            "scale: 1.05; contrast: 1.1; transition: all .3s ease-in-out"
        )
    })
});
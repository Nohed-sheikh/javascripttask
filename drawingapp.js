window.addEventListener('load',function(){
    const canva = document.querySelector('#canvas');
    const ctx = canva.getContext('2d')
    //resizing
    canva.height = window.innerHeight;
    canva.width = window.innerWidth;


    // ctx.fillRect(150,50,200,500);
    /*
    ctx.strokeStyle = "red";
    ctx.lineWidth = 10;
    ctx.strokeRect(150,50,200,500);
    */

    /*
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(200,100);
    ctx.lineTo(200,150);
    ctx.closePath();
    ctx.stroke()
    */

    //variables
    let painting = false;
    
    function startPosition(e){
       painting = true;
       draw(e)
    }

    function finishPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){
       if(!painting) return;
       ctx.linWidth = 10;
       ctx.lineCap = "round"
       ctx.strokeStyle = 'red'

       ctx.lineTo(e.clientX, e.clientY);
       ctx.stroke();
       ctx.beginPath();
       ctx.moveTo(e.clientX, e.clientY);
    }
    // Eventlistners
    canva.addEventListener('touchstart',startPosition);
    canva.addEventListener('touchend',finishPosition);
    canva.addEventListener('touchmove',draw);

})

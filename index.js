//Referencia a los elementos HTML
const p1Btn = document.querySelector("#p1Btn"),
      p2Btn = document.querySelector("#p2Btn"),
      resetBtn = document.querySelector("#resetBtn"),
      p1Display = document.querySelector("#p1Display"),
      p2Display  = document.querySelector("#p2Display"),
      winningScoreSelect = document.querySelector("#playTo");

//Variables globales
let p1Score = 0,
    p2Score = 0,
    winningScore = parseInt(winningScoreSelect.value);
    isGameOver = false;

//Función para resetear valores 
function resetValues(){
    p1Score = 0; 
    p2Score = 0; 
    p1Display.textContent = 0; 
    p2Display.textContent = 0;
    isGameOver = false;
}


//Eventos a los botones +1 de cada jugador
p1Btn.addEventListener("click",()=>{
    if(!isGameOver){
        p1Score++;
        if(p1Score === winningScore) isGameOver = true; 
        p1Display.textContent = p1Score;
    }
})

p2Btn.addEventListener("click",()=>{
    if(!isGameOver){
        p2Score++;
        if(p2Score === winningScore) isGameOver = true; 
        p2Display.textContent = p2Score;
    }
})

//Evento botón reset
resetBtn.addEventListener("click", resetValues);

//Evento al selector de puntos. Cada vez que se produzca un cambio reseteará los valores.
winningScoreSelect.addEventListener("change",(e)=>{
    winningScore = parseInt(e.target.value);  
    resetValues(); 
})


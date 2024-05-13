const mesa = document.querySelector("#mesa")
const jogador = document.querySelector("#jogador")
const infoDisplay = document.querySelector("#info-display")

const width = 8;

const S_pieces = [
  Torre, Cavalo, Bispo, Rainha, Rei, Bispo, Cavalo, Torre,
  Peao, Peao, Peao, Peao, Peao, Peao, Peao, Peao,
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  Peao, Peao, Peao, Peao, Peao, Peao, Peao, Peao,
  Torre, Cavalo, Bispo, Rainha, Rei, Bispo, Cavalo, Torre
]

function createBoard(){
  S_pieces.forEach((s_piece, i)=>{
    const square = document.createElement('div')
    square.classList.add('square')
    square.setAttribute('square-id', i)
    square.classList.add('bege')
    mesa.append(square)
  })
}
createBoard()

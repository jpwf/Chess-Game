const mesa = document.querySelector("#mesa")
const jogador = document.querySelector("#jogador")
const infoDisplay = document.querySelector("#info-display")

const width = 8;

const S_pieces = [
  rook, knight, bishop, queen, king, bishop, knight, rook,
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
  rook, knight, bishop, queen, king, bishop, knight, rook
]

function createBoard(){
  S_pieces.forEach((s_piece)=>{
    const square = document.createElement('div')
    square.classList.add('square')
  })
}

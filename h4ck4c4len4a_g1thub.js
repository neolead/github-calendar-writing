// === НАСТРОЙКИ === 
const MESSAGES = [
  "H4CK3RZ W3LC0M3",
  "GR33TZ FR0M 7H3 M47R1X",
  "3RR0R 404: FUNNY NOT FOUND"
];
const COLORS = ["#197935","#1f883d","#1c8139","#95d8a6"];
const INTERVAL = 50;
// === КОНЕЦ НАСТРОЕК ===

(function(messages, colors, interval) {
  // --- ASCII Header and Footer ---
  const header = `
  ███████╗██╗  ██╗██████╗ ███████╗████████╗███████╗
  ██╔════╝██║  ██║██╔══██╗██╔════╝╚══██╔══╝██╔════╝
  █████╗  ███████║██║  ██║██████╗     ██║   █████╗  
  ██╔══╝  ██╔══██║██║  ██║╚════██╗    ██║   ██╔══╝  
  ███████╗██║  ██║██████╔╝██████╔╝    ██║   ███████╗
  ╚══════╝╚═╝  ╚═╝╚═════╝ ╚═════╝     ╚═╝   ╚══════╝
  `;

  const footer = `
  ███▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀███████
  █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█████████
  `;

  console.log(header);
  console.log("   Welcome to the Hacking Zone!\n");
  console.log(footer);

  // --- Calendar Grid Setup ---
  const rows = Array.from(document.querySelectorAll('tbody tr'));
  const grid = rows.map(tr =>
    Array.from(tr.querySelectorAll('.ContributionCalendar-day'))
  );
  const numRows = grid.length;
  const numCols = grid[0].length;

  // --- Full 5x7 Font Matrix ---
  const font = {
    'A':["01110","10001","10001","11111","10001","10001","10001"],
    'B':["11110","10001","10001","11110","10001","10001","11110"],
    'C':["01110","10001","10000","10000","10000","10001","01110"],
    'D':["11110","10001","10001","10001","10001","10001","11110"],
    'E':["11111","10000","10000","11110","10000","10000","11111"],
    'F':["11111","10000","10000","11110","10000","10000","10000"],
    'G':["01110","10001","10000","10111","10001","10001","01110"],
    'H':["10001","10001","10001","11111","10001","10001","10001"],
    'I':["01110","00100","00100","00100","00100","00100","01110"],
    'J':["00111","00010","00010","00010","00010","10010","01100"],
    'K':["10001","10010","10100","11000","10100","10010","10001"],
    'L':["10000","10000","10000","10000","10000","10000","11111"],
    'M':["10001","11011","10101","10101","10001","10001","10001"],
    'N':["10001","11001","10101","10011","10001","10001","10001"],
    'O':["01110","10001","10001","10001","10001","10001","01110"],
    'P':["11110","10001","10001","11110","10000","10000","10000"],
    'Q':["01110","10001","10001","10001","10101","10010","01101"],
    'R':["11110","10001","10001","11110","10100","10010","10001"],
    'S':["01111","10000","10000","01110","00001","00001","11110"],
    'T':["11111","00100","00100","00100","00100","00100","00100"],
    'U':["10001","10001","10001","10001","10001","10001","01110"],
    'V':["10001","10001","10001","10001","10001","01010","00100"],
    'W':["10001","10001","10001","10101","10101","11011","10001"],
    'X':["10001","10001","01010","00100","01010","10001","10001"],
    'Y':["10001","10001","01010","00100","00100","00100","00100"],
    'Z':["11111","00001","00010","00100","01000","10000","11111"],
    '0':["01110","10001","10011","10101","11001","10001","01110"],
    '1':["00100","01100","00100","00100","00100","00100","01110"],
    '2':["01110","10001","00001","00010","00100","01000","11111"],
    '3':["01110","10001","00001","00110","00001","10001","01110"],
    '4':["00010","00110","01010","10010","11111","00010","00010"],
    '5':["11111","10000","11110","00001","00001","10001","01110"],
    '6':["00110","01000","10000","11110","10001","10001","01110"],
    '7':["11111","00001","00010","00100","01000","01000","01000"],
    '8':["01110","10001","10001","01110","10001","10001","01110"],
    '9':["01110","10001","10001","01111","00001","00010","01100"],
    ' ':["00000","00000","00000","00000","00000","00000","00000"],
    '!':["00100","00100","00100","00100","00100","00000","00100"],
    '?':["01110","10001","00001","00010","00100","00000","00100"],
    '.':["00000","00000","00000","00000","00000","00110","00110"],
    ',':["00000","00000","00000","00000","00000","00110","00100"],
    ':':["00000","00110","00110","00000","00110","00110","00000"],
    ';':["00000","00110","00110","00000","00110","00110","00000"],
    '-':["00000","00000","00000","11111","00000","00000","00000"],
    '_':["00000","00000","00000","00000","00000","00000","11111"],
    '+':["00000","00100","00100","11111","00100","00100","00000"],
    '=':["00000","11111","00000","11111","00000","00000","00000"],
    '/':["00001","00010","00100","01000","10000","00000","00000"],
    '\\':["10000","01000","00100","00010","00001","00000","00000"],
    '@':["01110","10001","10111","10101","10111","10000","01110"],
    '#':["01010","11111","01010","01010","11111","01010","01010"],
    '$':["00100","01111","10100","01110","00101","11110","00100"],
    '%':["11001","11010","00100","01000","10110","10011","00000"],
    '&':["01100","10010","10100","01000","10101","10010","01101"],
    '*':["00100","10101","01110","10101","00100","00000","00000"],
    '(':["00010","00100","01000","01000","01000","00100","00010"],
    ')':["01000","00100","00010","00010","00010","00100","01000"],
    '"':["01010","01010","00000","00000","00000","00000","00000"],
    "'":["00100","00100","00000","00000","00000","00000","00000"]
  };

  // --- Build Message Matrix ---
  function buildMatrix(msg) {
    const cols = [];
    msg.split("").forEach((ch, idx, arr) => {
      const pat = font[ch] || font[' '];
      const W = pat[0].length, H = pat.length;
      for (let x = 0; x < W; x++) {
        const col = [];
        for (let y = 0; y < H; y++) {
          col.push(pat[y][x] === "1");
        }
        cols.push(col);
      }
      if (idx < arr.length - 1) {
        cols.push(new Array(H).fill(false));
      }
    });
    return cols;
  }

  let msgIndex = 0;
  let offset = numCols;
  let pixelMatrix = buildMatrix(messages[msgIndex]);

  // --- Frame Drawing ---
  function drawFrame() {
    // Очистка
    grid.forEach(row => row.forEach(cell => cell.style.backgroundColor = ""));

    // Отрисовка
    pixelMatrix.forEach((colBits, i) => {
      const x = offset + i;
      if (x < 0 || x >= numCols) return;
      const color = colors[i % colors.length];
      colBits.forEach((on, y) => {
        if (on) {
          const cell = grid[y]?.[x];
          if (cell) cell.style.backgroundColor = color;
        }
      });
    });

    // Сдвиг и смена сообщения
    offset--;
    if (offset + pixelMatrix.length < 0) {
      msgIndex = (msgIndex + 1) % messages.length;
      pixelMatrix = buildMatrix(messages[msgIndex]);
      offset = numCols;
    }
  }

  // --- Start Animation ---
  setInterval(drawFrame, interval);

})(MESSAGES, COLORS, INTERVAL);

const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('../public/eps_effect.txt');
  const fileStreamCT = fs.createReadStream('../public/eps_effect_CT.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const result = []

  for await (const line of rl) {
    result.push({
      eps: line.substring(4, 9),
      acc:  Number(line.substring(15))
    })
  }


  const rlCT = readline.createInterface({
    input: fileStreamCT,
    crlfDelay: Infinity
  });

  let i = 0

  for await (const line of rlCT) {
    result[i].accCT = Number(line.substring(15))
    i++
  }

  console.dir(result, {'maxArrayLength': null});
}

processLineByLine();
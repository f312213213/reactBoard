const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('../public/eps_effect_100.txt');
  const fileStreamCT = fs.createReadStream('../public/eps_effect_CT_100.txt');

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

// processLineByLine();

async function nb15dnn() {
  const fileStream_ct_train_acc = fs.createReadStream('../public/result150/ct_train_acc.txt');
  const fileStream_ct_train_loss = fs.createReadStream('../public/result150/ct_train_loss.txt');
  const fileStream_ori_train_acc = fs.createReadStream('../public/result150/ori_train_acc.txt');
  const fileStream_ori_train_loss = fs.createReadStream('../public/result150/ori_train_loss.txt');

  const rl_ct_train_acc = readline.createInterface({
    input: fileStream_ct_train_acc,
    crlfDelay: Infinity
  });

  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const result = []

  let r = 1

  for await (const line of rl_ct_train_acc) {
    result.push({
      epoch: r,
      accCT: Number(line)
    })
    r++
  }

  r = 0

  const rl_ct_train_loss= readline.createInterface({
    input: fileStream_ct_train_loss,
    crlfDelay: Infinity
  });

  for await (const line of rl_ct_train_loss) {
    result[r].lossCT = Number(line)
    r++
  }
  r = 0

  const rl_ori_train_acc= readline.createInterface({
    input: fileStream_ori_train_acc,
    crlfDelay: Infinity
  });

  for await (const line of rl_ori_train_acc) {
    result[r].acc = Number(line)
    r++
  }
  r = 0

  const rl_ori_train_lost = readline.createInterface({
    input: fileStream_ori_train_loss,
    crlfDelay: Infinity
  });

  for await (const line of rl_ori_train_lost) {
    result[r].loss = Number(line)
    r++
  }


  console.dir(result, {'maxArrayLength': null});
}

// nb15dnn()

async function iot23dnn() {
  const fileStream_ori_train = fs.createReadStream('../public/iot23dnn/train.txt');
  const fileStream_ct_train = fs.createReadStream('../public/iot23dnn/train_CT.txt');

  const rl_ct_train = readline.createInterface({
    input: fileStream_ct_train,
    crlfDelay: Infinity
  });

  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const result = []

  let r = 1

  for await (const line of rl_ct_train) {
    result.push({
      epoch: r,
      accCT: Number(line.substring(4, 12)),
      lossCT: Number(line.substring(18, 26))
    })
    r++
  }

  r = 0

  const rl_ori_train= readline.createInterface({
    input: fileStream_ori_train,
    crlfDelay: Infinity
  });

  for await (const line of rl_ori_train) {
    result[r].acc = Number(line.substring(4, 12))
    result[r].loss = Number(line.substring(18, 26))
    r++
  }
  r = 0


  console.dir(result, {'maxArrayLength': null});
}

// iot23dnn()

async function processBatchTrain() {
  const fileStream = fs.createReadStream('../public/batch_train.txt');
  const fileStreamCT = fs.createReadStream('../public/batch_train_CT.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const result = []
  let r = 1
  for await (const line of rl) {
    result.push({
      eps: line.substring(4, 12),
      acc:  Number(line.substring(18))
    })
  }


  const rlCT = readline.createInterface({
    input: fileStreamCT,
    crlfDelay: Infinity
  });

  let i = 0

  for await (const line of rlCT) {
    result[i].accCT = Number(line.substring(18))
    i++
  }

  console.dir(result, {'maxArrayLength': null});
}

processBatchTrain();
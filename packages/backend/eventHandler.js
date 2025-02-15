// emitされたイベントに反応する
const onMint = (senderAddress, amount0, amount1) => {
  console.log("senderAddress: ", senderAddress);
  console.log("amount0: ", amount0);
  console.log("amount1: ", amount1);
};

const onBurn = (senderAddress, amount0, amount1, to) => {
  console.log("senderAddress: ", senderAddress);
  console.log("amount0: ", amount0);
  console.log("amount1: ", amount1);
  console.log("to: ", to);
};

const onSwap = (
  senderAddress,
  amount0In,
  amount1In,
  amount0Out,
  amount1Out,
  to
) => {
  console.log("from: ", senderAddress, "to: ", to);
  if (amount0In.isZero()) console.log("jpyc(out): ", amount0Out.toString());
  if (amount0Out.isZero()) console.log("jpyc(in): ", amount0In.toString());
  if (amount1In.isZero()) console.log("usdc(out): ", amount1Out.toString());
  if (amount1Out.isZero()) console.log("usdc(in): ", amount1In.toString());
  // main.reserves[0] = main.reserves[0].add(amount0In).sub(amount0Out);
  // main.reserves[1] = main.reserves[1].add(amount1In).sub(amount1Out);
  // console.log("event: ", main.reserves[0].toString(), main.reserves[1].toString());
};

const on = (pairContract) => {
  pairContract.on("Mint", onMint);
  pairContract.on("Burn", onBurn);
  pairContract.on("Swap", onSwap);
};

exports.on = on;

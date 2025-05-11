var difficulty = 4;
var maximumNonce = 500000;
var pattern = '0'.repeat(difficulty);

const TOTAL_SUPPLY = 4200000000;
let minedSupply = 0;

function isWeedTime(date) {
  const utc = new Date(date);
  return utc.getUTCHours() === 4 && utc.getUTCMinutes() === 20;
}

function getReward(timestamp) {
  return isWeedTime(timestamp) ? 420 : 1;
}

function getText(block, chain) {
  return (
    $('#block' + block + 'chain' + chain + 'data').val() +
    $('#block' + block + 'chain' + chain + 'nonce').val() +
    $('#block' + block + 'chain' + chain + 'previous').val()
  );
}

function sha256(block, chain) {
  return CryptoJS.SHA256(getText(block, chain)).toString();
}

function updateState(block, chain) {
  const hash = $('#block' + block + 'chain' + chain + 'hash').val();
  const timestamp = parseInt($('#block' + block + 'chain' + chain + 'timestamp').val());
  const reward = getReward(timestamp);

  if (hash.startsWith(pattern)) {
    $('#block' + block + 'chain' + chain + 'well').removeClass('well-error').addClass('well-success');
    $('#block' + block + 'chain' + chain + 'reward').text('WEED Reward: ' + reward);
  } else {
    $('#block' + block + 'chain' + chain + 'well').removeClass('well-success').addClass('well-error');
    $('#block' + block + 'chain' + chain + 'reward').text('Invalid block');
  }
}

function updateHash(block, chain) {
  const hash = sha256(block, chain);
  $('#block' + block + 'chain' + chain + 'hash').val(hash);
  updateState(block, chain);
}

function updateChain(block, chain) {
  for (var x = block; x <= 5; x++) {
    if (x > 1) {
      $('#block' + x + 'chain' + chain + 'previous').val($('#block' + (x - 1) + 'chain' + chain + 'hash').val());
    }
    updateHash(x, chain);
  }
}

function mine(block, chain, isChain) {
  const timestamp = Date.now();
  $('#block' + block + 'chain' + chain + 'timestamp').val(timestamp);

  if (minedSupply >= TOTAL_SUPPLY) {
    alert('💨 No more WEED — supply cap reached!');
    $('#block' + block + 'chain' + chain + 'reward').text('No reward - cap reached');
    return;
  }

  for (var x = 0; x <= maximumNonce; x++) {
    $('#block' + block + 'chain' + chain + 'nonce').val(x);
    const hash = sha256(block, chain);
    $('#block' + block + 'chain' + chain + 'hash').val(hash);

    if (hash.startsWith(pattern)) {
      const reward = getReward(timestamp);

      if (minedSupply + reward > TOTAL_SUPPLY) {
        alert('⚠️ Not enough supply left to grant full reward.');
        $('#block' + block + 'chain' + chain + 'reward').text('Partial or no reward');
        return;
      }

      minedSupply += reward;
      $('#totalSupply').text(`🌿 Total Mined: ${minedSupply} / ${TOTAL_SUPPLY} WEED`);

      if (isChain) updateChain(block, chain);
      else updateState(block, chain);
      break;
    }
  }
}

function kilometerToMeter(kilometer) {
  if (!kilometer) {
    return "please put a kilometer to convert into meter"; //if kilometer is missing
  } else if (isNaN(kilometer)) {
    return "please give a number type parameter"; //if kilometer is not a number
  } else if (kilometer < 0) {
    return "please give a positive number"; //if kilometer is not a positive number
  } else {
    var meter = kilometer * 1000;
    return meter;
  }
}

function budgetCalculator(watchNum, phoneNum, leptopNum) {
  if (!watchNum || !phoneNum || !leptopNum) {
    return "please put all three parameter to get total cost"; //if any parameter is missing
  } else if (isNaN(watchNum) || isNaN(phoneNum) || isNaN(leptopNum)) {
    return "please give a number type parameter"; //if any parameter is not a number
  } else if (phoneNum < 0 || leptopNum < 0 || watchNum < 0) {
    return "please give a positive number"; //if parameter is not a positive number
  } else {
    var watchPrice = watchNum * 50;
    var phonePrice = phoneNum * 100;
    var leptopPrice = leptopNum * 500;
    var totalPrice = watchPrice + phonePrice + leptopPrice;
    return totalPrice;
  }
}

function hotelCost(dayInHotel) {
  var totalCost = 0;
  if (!dayInHotel) {
    return "please put a hotel days to get cost"; //if dayInHotel is missing
  } else if (isNaN(dayInHotel)) {
    return "please give a number type parameter"; //if dayInHotel is not a number
  } else if (dayInHotel < 0) {
    return "please give a positive number"; //if dayInHotel is not a positive number
  } else {
    if (dayInHotel <= 10) {
      totalCost = dayInHotel * 100;
    } else if (dayInHotel <= 20) {
      var remaining = dayInHotel - 10;
      var firstTenDays = 10 * 100;
      totalCost = remaining * 80 + firstTenDays;
    } else {
      var firstTenDays = 10 * 100;
      var secondTendays = 10 * 80;
      var aftetTwinty = dayInHotel - 20;
      totalCost = aftetTwinty * 50 + firstTenDays + secondTendays;
    }
  }
  return totalCost;
}


function megaFriend(array) {
  var longestName;
  var baseLength = 0;
  if (!Array.isArray(array)) {
    return "does not exist";
  }
  if (!array.length) {
    return "array is empty";
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element.length > baseLength) {
      baseLength = element.length;
      longestName = array[i];
    }
  }
  return longestName;
}


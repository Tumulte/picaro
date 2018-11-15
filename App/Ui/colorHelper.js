function parseHex(hex) {
  return parseInt(hex, 16);
}

function toHex(number) {
  var hex = number.toString(16);
  if (hex.length === 1) {
    hex = '0' + hex;
  }
  return hex.toUpperCase();
}
var hexToRgb = function (hex) {
  if (hex.red !== undefined) {
    return hex;
  }
  hex = hex.replace("#", "");
  if (hex.length === 3) { //if 3 digit hex : double each digit
    hex = hex.split('').map(function (letter) {
      return letter + letter + '';
    }).join('');
  }

  var red = parseHex(hex.substring(0, 2));
  var green = parseHex(hex.substring(2, 4));
  var blue = parseHex(hex.substring(4, 6));
  return {
    "red": red,
    "green": green,
    "blue": blue
  };
}
var rgbToHex = function (rgb) {
  return '#' + toHex(rgb.red) + toHex(rgb.green) + toHex(rgb.blue);
}


var rgbToHsl = function (color) {
  var rgb = hexToRgb(color);
  var rgbArray = [rgb.red / 255, rgb.green / 255, rgb.blue / 255];
  rgbArray.sort(function (a, b) {
    return a - b
  })
  var min = rgbArray[0];
  var mid = rgbArray[1];
  var max = rgbArray[2];

  var light = Math.round((min + max) * 100 / 2);
  //In case on gray
  if (max === min && mid === min) {
    return {
      "light": light,
      "saturation": 0,
      "hue": 0
    };
  }
  var saturation;
  if (light > 50) {
    saturation = (max - min) / (2 - max - min);
  } else {
    saturation = (max - min) / (max + min);
  }
  saturation = Math.round(saturation * 100);
  var hue;
  if (max === rgb.red / 255) {
    hue = (rgb.green - rgb.blue) / 255 / (max - min);
  } else if (max === rgb.green / 255) {
    hue = 2 + (rgb.blue - rgb.red) / 255 / (max - min);
  } else {
    hue = 4 + (rgb.red - rgb.green) / 255 / (max - min);
  }
  if (hue < 0) {
    hue = Math.round(hue * 60) + 360;
  } else {
    hue = Math.round(hue * 60);
  }

  return {
    "light": light,
    "saturation": saturation,
    "hue": hue
  };

}

var hslToRgb = function (hueSaturationValue) {
  var hsl = hueSaturationValue;

  var light = hsl.light / 100;
  var sat = hsl.saturation / 100;
  var hue = hsl.hue / 360;
  if (hsl.saturation === 0) {
    var lightTo255 = Math.round(light * 255);
    return {
      "red": lightTo255,
      "green": lightTo255,
      "blue": lightTo255
    }
  }
  var tempFormula; //I can't find what this is formula is supposed to be.
  if (light < 0.5) {
    tempFormula = light * (1 + sat);
  } else {
    tempFormula = light + sat - light * sat;
  }
  var tempFormula2 = 2 * light - tempFormula;
  var hueToRgb = function (tempFormula, tempFormula2, hue) {
    if (hue < 0) {
      hue += 1;
    } else if (hue > 1) {
      hue -= 1;
    }
    if (hue < 1 / 6) {
      return tempFormula + (tempFormula2 - tempFormula) * 6 * hue;
    } else if (hue < 1 / 2) {
      return tempFormula2;
    } else if (hue < 2 / 3) {
      return tempFormula + (tempFormula2 - tempFormula) * (2 / 3 - hue) * 6;
    } else {
      return tempFormula;
    }

  }
  var red = hueToRgb(tempFormula2, tempFormula, hue + 1 / 3);
  var green = hueToRgb(tempFormula2, tempFormula, hue);
  var blue = hueToRgb(tempFormula2, tempFormula, hue - 1 / 3);
  return {
    "red": Math.round(red * 255),
    "green": Math.round(green * 255),
    "blue": Math.round(blue * 255)
  }
}
module.exports = {
  "hexToRgb": hexToRgb,
  "hslToRgb": hslToRgb,
  "rgbToHsl": rgbToHsl,
  "rgbToHex": rgbToHex
}

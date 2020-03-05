import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333"
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  }
});

export const images = {
  ratings: {
    "1": require("../assets/star.png"),
    "2": require("../assets/star.png"),
    "3": require("../assets/star.png"),
    "4": require("../assets/star.png"),
    "5": require("../assets/star.png")
  },
  avatars: {
    "1": require("../assets/founders/1.jpg"),
    "2": require("../assets/founders/2.jpg"),
    "3": require("../assets/founders/3.jpg"),
    "4": require("../assets/founders/4.jpg"),
    "5": require("../assets/founders/5.jpg"),
    "6": require("../assets/founders/6.jpg"),
    "7": require("../assets/founders/7.jpg"),
    "8": require("../assets/founders/8.jpg"),
    "9": require("../assets/founders/9.jpg"),
    "10": require("../assets/founders/10.jpg"),
    "11": require("../assets/founders/11.jpg"),
    "12": require("../assets/founders/12.jpg"),
    "13": require("../assets/founders/13.jpg"),
    "14": require("../assets/founders/14.jpg"),
    "15": require("../assets/founders/15.jpg"),
    "16": require("../assets/founders/16.jpg"),
    "17": require("../assets/founders/17.jpg"),
    "18": require("../assets/founders/18.jpg"),
    "19": require("../assets/founders/19.jpg"),
    "20": require("../assets/founders/20.jpg"),
    "21": require("../assets/founders/21.jpg"),
    "22": require("../assets/founders/22.jpg"),
    "23": require("../assets/founders/23.jpg"),
    "24": require("../assets/founders/24.jpg"),
    "25": require("../assets/founders/25.jpg"),
    "26": require("../assets/founders/26.jpg"),
    "27": require("../assets/founders/27.jpg"),
    "28": require("../assets/founders/28.jpg"),
    "29": require("../assets/founders/29.jpg"),
    "30": require("../assets/founders/30.jpg"),
    "31": require("../assets/founders/31.jpg"),
    "32": require("../assets/founders/32.jpg"),
    "33": require("../assets/founders/33.jpg"),
    "34": require("../assets/founders/34.jpg"),
    "35": require("../assets/founders/35.jpg"),
    "36": require("../assets/founders/36.jpg"),
    "37": require("../assets/founders/37.jpg"),
    "38": require("../assets/founders/38.jpg"),
    "39": require("../assets/founders/39.jpg"),
    "40": require("../assets/founders/40.jpg"),
    "41": require("../assets/founders/41.jpg"),
    "42": require("../assets/founders/42.jpg"),
    "43": require("../assets/founders/43.jpg")
  },
  qrcodes: {
    "1":
      "https://quickchart.io/qr?text=https://bit.ly/3aqMldP&ecLevel=H&size=330",
    "2":
      "https://quickchart.io/qr?text=https://bit.ly/2Tr6eMt&ecLevel=H&size=330",
    "3":
      "https://quickchart.io/qr?text=https://bit.ly/2PJw8so&ecLevel=H&size=330",
    "4":
      "https://quickchart.io/qr?text=https://bit.ly/2uTP0xD&ecLevel=H&size=330",
    "5":
      "https://quickchart.io/qr?text=https://bit.ly/38n4oAg&ecLevel=H&size=330",
    "6":
      "https://quickchart.io/qr?text=https://bit.ly/2IjpwwH&ecLevel=H&size=330",
    "7":
      "https://quickchart.io/qr?text=https://bit.ly/32USVXx&ecLevel=H&size=330",
    "8":
      "https://quickchart.io/qr?text=https://bit.ly/2VHhbLj&ecLevel=H&size=330",
    "9":
      "https://quickchart.io/qr?text=https://bit.ly/2VMDXBE&ecLevel=H&size=330",
    "10":
      "https://quickchart.io/qr?text=https://bit.ly/3cukN9n&ecLevel=H&size=330",
    "11":
      "https://quickchart.io/qr?text=https://bit.ly/3cwZeVK&ecLevel=H&size=330",
    "12":
      "https://quickchart.io/qr?text=https://bit.ly/2vHkEyG&ecLevel=H&size=330",
    "13":
      "https://quickchart.io/qr?text=https://bit.ly/32OsCCm&ecLevel=H&size=330",
    "14":
      "https://quickchart.io/qr?text=https://bit.ly/2TAV5Y8&ecLevel=H&size=330",
    "15":
      "https://quickchart.io/qr?text=https://bit.ly/32USWuz&ecLevel=H&size=330",
    "16":
      "https://quickchart.io/qr?text=https://bit.ly/39q5z3c&ecLevel=H&size=330",
    "17":
      "https://quickchart.io/qr?text=https://bit.ly/2TlifD0&ecLevel=H&size=330",
    "18":
      "https://quickchart.io/qr?text=https://bit.ly/38mIwFo&ecLevel=H&size=330",
    "19":
      "https://quickchart.io/qr?text=https://bit.ly/2TqjkJU&ecLevel=H&size=330",
    "20":
      "https://quickchart.io/qr?text=https://bit.ly/2Todx7u&ecLevel=H&size=330",
    "21":
      "https://quickchart.io/qr?text=https://bit.ly/3ar5w7u&ecLevel=H&size=330",
    "22":
      "https://quickchart.io/qr?text=https://bit.ly/38mHlFN&ecLevel=H&size=330",
    "23":
      "https://quickchart.io/qr?text=https://bit.ly/3awjKEf&ecLevel=H&size=330",
    "24":
      "https://quickchart.io/qr?text=https://bit.ly/2PLe8Oi&ecLevel=H&size=330",
    "25":
      "https://quickchart.io/qr?text=https://bit.ly/2IgpGoC&ecLevel=H&size=330",
    "26":
      "https://quickchart.io/qr?text=https://bit.ly/38r5r26&ecLevel=H&size=330",
    "27":
      "https://quickchart.io/qr?text=https://bit.ly/3cvmdjP&ecLevel=H&size=330",
    "28":
      "https://quickchart.io/qr?text=https://bit.ly/2IkOWdC&ecLevel=H&size=330",
    "29":
      "https://quickchart.io/qr?text=https://bit.ly/39mVaW0&ecLevel=H&size=330",
    "30":
      "https://quickchart.io/qr?text=https://bit.ly/38plU79&ecLevel=H&size=330",
    "31":
      "https://quickchart.io/qr?text=https://bit.ly/2vHkDuC&ecLevel=H&size=330",
    "32":
      "https://quickchart.io/qr?text=https://bit.ly/38jqRhz&ecLevel=H&size=330",
    "33":
      "https://quickchart.io/qr?text=https://bit.ly/38jqROB&ecLevel=H&size=330",
    "34":
      "https://quickchart.io/qr?text=https://bit.ly/2vCBj6w&ecLevel=H&size=330",
    "35":
      "https://quickchart.io/qr?text=https://bit.ly/2Touqz6&ecLevel=H&size=330",
    "36":
      "https://quickchart.io/qr?text=https://bit.ly/3aotyji&ecLevel=H&size=330",
    "37":
      "https://quickchart.io/qr?text=https://bit.ly/3cvmd3j&ecLevel=H&size=330",
    "38":
      "https://quickchart.io/qr?text=https://bit.ly/2VKovFP&ecLevel=H&size=330",
    "39":
      "https://quickchart.io/qr?text=https://bit.ly/2vHkE1E&ecLevel=H&size=330",
    "40":
      "https://quickchart.io/qr?text=https://bit.ly/38hz06k&ecLevel=H&size=330"
  },
  avatarsTeachers: {
    "1": require("../assets/teachers/1.png"),
    "2": require("../assets/teachers/2.jpg"),
    "3": require("../assets/teachers/3.jpg")
  }
};

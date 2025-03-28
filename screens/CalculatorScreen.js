import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";

const CalculatorScreen = () => {
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState("");
  const [secondvalue, setSecondValue] = useState("");
  const [isSecondvalue, setIsSecondValue] = useState(false);

  const handleNumberPress = (num) => {
    if (isSecondvalue) {
      setSecondValue(secondvalue + num);
      setDisplay(secondvalue + num);
    } else {
      setFirstValue(firstValue + num);
      setDisplay(firstValue + num);
    }
  };

  const handleOperatorsPress = (op) => {
    if (firstValue === "") return;
    setOperator(op);
    setIsSecondValue(true);
    setDisplay(op);
  };

  const handleBrackets = (brackets) => {
    if (brackets === "(") {
      setDisplay(display + brackets);
    }
  };

  const handleEquals = () => {
    if (firstValue === "" || secondvalue === "") return;
    let result = 0;

    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondvalue);

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "÷":
        result = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setFirstValue(result.toString());
    setSecondValue("");
    setIsSecondValue(false);
    setOperator(null);
  };

  const handleDecimal = () => {
    if (isSecondvalue) {
      if (!secondvalue.includes(".")) {
        setSecondValue(secondvalue + ".");
        setDisplay(secondvalue + ".");
      }
    } else {
      if (!firstValue.includes(".")) {
        setFirstValue(firstValue + ".");
        setDisplay(firstValue + ".");
      }
    }
  };

  const handleToggleNegative = () => {
    if (isSecondvalue) {
      setSecondValue(
        secondvalue.startsWith("-") ? secondvalue.slice(1) : "-" + secondvalue
      );
      setDisplay(
        secondvalue.startsWith("-") ? secondvalue.slice(1) : "-" + secondvalue
      );
    } else {
      setFirstValue(
        firstValue.startsWith("-") ? firstValue.slice(1) : "-" + firstValue
      );
      setDisplay(
        firstValue.startsWith("-") ? firstValue.slice(1) : "-" + firstValue
      );
    }
  };

  const handleClear = () => {
    setDisplay("");
    setFirstValue("");
    setSecondValue("");
    setOperator(null);
    setIsSecondValue(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayScreen}>
        <Text style={styles.displayText}>{display || "0"}</Text>
      </View>
      <View style={styles.rows}>
        <Button
          onPress={handleClear}
          style={{ color: "#fff", backgroundColor: "#787774" }}
        >
          AC
        </Button>
        <Button
          onPress={() => handleBrackets("(")}
          style={{ color: "#fff", backgroundColor: "#787774" }}
        >
          (
        </Button>
        <Button
          onPress={() => handleBrackets(")")}
          style={{ color: "#fff", backgroundColor: "#787774" }}
        >
          )
        </Button>
        <Button
          onPress={() => handleOperatorsPress("÷")}
          style={{ color: "#fff" }}
        >
          ÷
        </Button>
      </View>
      <View style={styles.rows}>
        <Button
          onPress={() => handleNumberPress("7")}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          7
        </Button>
        <Button
          onPress={() => handleNumberPress("8")}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          8
        </Button>
        <Button
          onPress={() => handleNumberPress("9")}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          9
        </Button>
        <Button
          onPress={() => handleOperatorsPress("x")}
          style={{ color: "#fff" }}
        >
          x
        </Button>
      </View>
      <View style={styles.rows}>
        <Button
          onPress={() => handleNumberPress("4")}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          4
        </Button>
        <Button
          onPress={() => handleNumberPress("5")}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          5
        </Button>
        <Button
          onPress={() => handleNumberPress("6")}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          6
        </Button>
        <Button
          onPress={() => handleOperatorsPress("-")}
          style={{ color: "#fff" }}
        >
          -
        </Button>
      </View>
      <View style={styles.rows}>
        <Button
          onPress={() => handleNumberPress("1")}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          1
        </Button>
        <Button
          onPress={() => handleNumberPress("2")}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          2
        </Button>
        <Button
          onPress={() => handleNumberPress("3")}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          3
        </Button>
        <Button
          onPress={() => handleOperatorsPress("+")}
          style={{ color: "#fff" }}
        >
          +
        </Button>
      </View>
      <View style={styles.rows}>
        <Button
          onPress={handleToggleNegative}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          +/-
        </Button>
        <Button
          onPress={() => handleNumberPress("0")}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          0
        </Button>
        <Button
          onPress={handleDecimal}
          style={{ color: "#fff", backgroundColor: "#454441" }}
        >
          .
        </Button>
        <Button onPress={handleEquals} style={{ color: "#fff" }}>
          =
        </Button>
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    rowGap: 15,
    paddingBottom: 10,
    backgroundColor: "#000000",
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  displayScreen: {
    alignItems: "flex-end",
  },
  displayText: {
    color: "#fff",
    fontSize: 65,
  },
});

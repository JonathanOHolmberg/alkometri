import React, { useState } from 'react';

function BloodAlcoholCalculator() {
  const [result, setResult] = useState(0);
  const [inputValues, setInputValues] = useState({
    weightInput: 0,
    genderInput: 'male',
    bottlesInput: 0,
    timeInput: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const calculateBloodAlcoholLevel = () => {
    const { weightInput, genderInput, bottlesInput, timeInput } = inputValues;
    const litres = bottlesInput * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weightInput / 10;
    const gramsLeft = grams - burning * timeInput;

    let calculatedResult = 0;
    if (genderInput === 'male') {
      calculatedResult = gramsLeft / (weightInput * 0.7);
    } else if (genderInput === 'female') {
      calculatedResult = gramsLeft / (weightInput * 0.6);
    }

    if (calculatedResult < 0) {
      calculatedResult = 0;
    }

    setResult(calculatedResult.toFixed(2));
  };

  return (
    <div className="App">
      <div className="main">
        <h1>Mä oon kännissä, missä sä oot?</h1>
        <p>Laske arvioitu promillemäärä syöttämällä painosi, sukupuolesi, arvioitu kulutus ja arvioitu aikamäärä laskuriin.</p>
        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            name="weight"
            value={inputValues.weight}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Gender: </label>
          <select
            name="gender"
            value={inputValues.gender}
            onChange={handleInputChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
      </div>
      <div>
        <label>Number of Beer Bottles: </label>
        <input
          type="number"
          name="bottles"
          value={inputValues.bottles}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Time (hours): </label>
        <input
          type="number"
          name="time"
          value={inputValues.time}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={calculateBloodAlcoholLevel}>Calculate</button>
      <div>
        <label>Blood Alcohol Level: </label>
        <span>{result}</span>
      </div>
      </div>
    </div>
  );
}

export default BloodAlcoholCalculator;

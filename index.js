import { add, subtract, multiply, divide } from './scripts/operations.js';

const operate = (operator, num1, num2) => {
	switch (operator) {
		case 'ADD':
			return add(num1, num2);
		case 'SUBTRACT':
			return subtract(num1, num2);
		case 'MULTIPLY':
			return multiply(num1, num2);
		case 'DIVIDE':
			return divide(num1, num2);
	}
};

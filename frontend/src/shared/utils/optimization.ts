/**
 * Откладывает выполнение функции обратного вызова до того момента,
 * когда с последнего вызова пройдёт X миллисекунд.
 * @param {Function} callback - функция обратного вызова.
 * @param {number} delay - задержка в миллисекундах.
 */
export const debounce = <T extends (...args: any[]) => any>(callback: T, delay: number = 250) => {
	let timer: NodeJS.Timeout;

	return (...args: Parameters<T>) => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};

/**
 *
 * @param {Function} callback - функция обратного вызова.
 * @param {number} delay - задержка в миллисекундах.
 */
export const throttle = (callback: Function, delay: number = 1000) => {
	let isPaused = false;

	return (...args: any[]) => {
		if (isPaused) {
			return;
		}

		callback(...args);
		isPaused = true;

		setTimeout(() => {
			isPaused = false;
		}, delay);
	};
};

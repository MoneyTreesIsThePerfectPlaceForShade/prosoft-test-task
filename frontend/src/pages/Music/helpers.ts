export const getGreetingsText = async () => {
	try {
		const response = await fetch('http://localhost:8002/');
		const message = await response.json();

		return message.message;
	} catch {
	}
};

export const getHeroes = async (heroe: string, signal: AbortSignal) => {
	try {
		if (heroe) {
			const response = await fetch(`http://localhost:8002/heroes/${heroe}`, {signal});
			const resHeroe = await response.json();

			return resHeroe;
		}
	} catch (e) {
		console.error('Не смог получить героя', heroe, e);
	}
};
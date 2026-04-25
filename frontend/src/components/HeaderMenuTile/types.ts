export type Props = {
	/**
	 * Плитка меню в шапке.
	 */
	tile: Tile
};

/**
 * Плитка меню в шапке.
 */
export type Tile = {
	/**
   * Позиция плитки в массиве.
   */
	order: number,
	/**
   * Страница, на которую ведёт ссылка плитки.
   */
	page: string,
	/**
   * Название плитки.
   */
	title: string
};

// TODO: закомментировал, чтобы в будущем написать тесты с обёртками
// import {render, renderHook} from '@testing-library/react';
// import {ThemeProvider} from 'providers/ThemeProvider';
// import {ReactNode} from 'react';

// const getWrapper = (theme: string) => (
// 	{children}: {children: ReactNode}
// ) => <ThemeProvider defaultTheme={theme}>{children}</ThemeProvider>;

// export const renderWithProviders = (
// 	ui: ReactNode,
// 	{theme = 'light', ...options} = {}
// ) => {
// 	/**
// 	 * В контексте ThemeProvider обёртка не нужна, но в рамках курса это проходят, поэтому сделал.
// 	 */
// 	const Wrapper = getWrapper(theme);

// 	return render(ui, {wrapper: Wrapper, ...options});
// };

// export const renderHookWithProviders = (hook: any, {theme = 'light', ...options} = {}) => {
// 	const Wrapper = getWrapper(theme);

// 	return renderHook(hook, {wrapper: Wrapper, ...options});
// };

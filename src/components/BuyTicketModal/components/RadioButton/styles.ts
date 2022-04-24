import styled, { css } from 'styled-components/native';

interface BulletProps {
	isActive: boolean;
}

export const Container = styled.View`
	width: 17px;
	height: 17px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.fontAndIcon.primary};
	border-radius: 8.5px;
	justify-content: center;
	align-items: center;
`;

export const Bullet = styled.View<BulletProps>`
	width: 11px;
	height: 11px;
	border-radius: 7px;
	${({ theme, isActive }) => isActive && css`
		background-color: ${theme.colors.fontAndIcon.green};
	`};
`;

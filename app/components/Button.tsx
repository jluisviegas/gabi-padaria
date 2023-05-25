'use client';

import { type IconType } from 'react-icons';

interface ButtonProps {
	label: string;
	className?: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	small?: boolean;
	icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled,
	outline,
	small,
	icon: Icon,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`
			relative
        w-full
		  rounded-sm
        uppercase
        transition
        hover:opacity-80
		  disabled:cursor-not-allowed
		  disabled:opacity-70
        ${outline ? 'bg-primary' : 'bg-accentRed'}
        ${outline ? 'border-black' : 'border-accentRed'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
		>
			{Icon && (
				<Icon
					size={24}
					className="
            absolute
            left-4
            top-3
          "
				/>
			)}
			{label}
		</button>
	);
};

export default Button;

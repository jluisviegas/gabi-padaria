import { create } from 'zustand';

interface MobileNavProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useMobileNav = create<MobileNavProps>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useMobileNav;

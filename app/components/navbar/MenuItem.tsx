"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="
		text-md
		px-4
        py-3 
		  font-semibold
        uppercase 
        tracking-wider 
        transition
        hover:bg-neutral-100
      "
    >
      {label}
    </div>
  );
};

export default MenuItem;

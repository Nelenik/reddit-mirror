import { useEffect, useState, useRef } from "react";
import { NOOP } from "utils/noop";

//custom hook
export function useDropdown(isOpen: boolean, onOpen = NOOP, onClose = NOOP) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);

  useEffect(
    () => (isDropdownOpen ? onOpen() : onClose()),
    [isDropdownOpen, onOpen, onClose]
  );

  useEffect(() => {
    const handleDocClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleDocClick);
    return () => {
      document.removeEventListener("click", handleDocClick);
    };
  }, []);

  const handleToggle = () => {
    setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen);
  };
  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  return { isDropdownOpen, dropdownRef, handleToggle, handleClose };
}

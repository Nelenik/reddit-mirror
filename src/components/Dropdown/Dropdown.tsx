import { useDropdown } from './useDropdown';
import { NOOP } from 'utils/noop';

interface IDropdownProps {
  renderTrigger: (toggleCb: () => void, isDropdownOpen: boolean) => React.ReactElement,
  renderList: (closeCb: () => void) => React.ReactElement,
  className: string,
  isOpen?: boolean,
  onClose?: () => void,
  onOpen?: () => void
}

export function Dropdown(
  { renderTrigger,
    renderList,
    className,
    isOpen = false,
    onClose = NOOP,
    onOpen = NOOP }: IDropdownProps
) {

  const { isDropdownOpen, dropdownRef, handleToggle, handleClose } = useDropdown(isOpen, onClose, onOpen)

  return (
    <div ref={dropdownRef} className={className}>
      {renderTrigger(handleToggle, isDropdownOpen)}
      {isDropdownOpen && renderList(handleClose)}
    </div>
  );
}


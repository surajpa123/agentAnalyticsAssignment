import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Import close icon from react-icons

const Modal = ({ isOpen, onClose, children }) => {

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg relative w-[500px]">
            {/* Close button */}
            <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 focus:outline-none">
              <FaTimes />
            </button>
            {/* Modal content */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

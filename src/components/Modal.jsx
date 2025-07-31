import React from "react";
import {motion, AnimatePresence} from "framer-motion";

const Modal = ({isOpen, onClose, type, message}) => {
    // Handle escape key
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}/>

                    {/* Modal */}
                    <motion.div className="relative bg-primary rounded-lg shadow-lg max-w-sm w-full mx-4 p-6" initial={{scale: 0.9, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0.9, opacity: 0}} onClick={(e) => e.stopPropagation()}>
                        <p className="text-gray-100 text-center mb-4 text-2xl">
                            {message}
                        </p>

                        <button onClick={onClose} className="w-full py-2 px-4 bg-tertiary text-white rounded hover:bg-quaternary  transition-colors">
                            OK
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
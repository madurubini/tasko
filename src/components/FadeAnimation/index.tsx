import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeProps {
    children: ReactNode;
}

export const FadeAnimation = ({ children }: FadeProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
    >
        {children}
    </motion.div>
);

'use client'
import { Button } from "flowbite-react";
import { useEffect } from 'react';

const BackToTopButton = () => {
    useEffect(() => {}, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });

        window.history.replaceState(
            null, 
            '', 
            window.location.pathname + window.location.search
        );
    };

    return (
        <Button onClick={scrollToTop} className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800">
            Back to Top
        </Button>
    );
}

export default BackToTopButton;
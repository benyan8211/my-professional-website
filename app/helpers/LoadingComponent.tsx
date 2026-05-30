import { Spinner } from 'flowbite-react';

const LoadingComponent = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <Spinner color="info" size="xl" aria-label="Loading page" />
                <span className="mt-4 text-lg font-medium text-gray-600">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingComponent;
import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">This Page Isn't Available</h1>
                        <p className="py-6">The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
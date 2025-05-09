import React from 'react';
import { Chrono } from 'react-chrono';
import { experiences } from '../data/experiencesData';

const Experiences = () => {
    return (
        <div id="Experience" className="bg-blue-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12">
                    My Experiences
                </h2>
                <div style={{ width: '100%', height: 'auto' }}>
                    <Chrono
                        items={experiences}
                        mode="VERTICAL"
                        cardHeight={150}
                        hideControls={true}
                        disableNavOnKey
                        disableToolbar
                        scrollable={false}
                        useReadMore={false}
                        showAllCardsHorizontal={false}
                        enableOutline={false}
                        theme={{
                            primary: '#2C3E50',
                            secondary: '#F39C12',
                            cardBgColor: '#FFFFFF',
                            cardForeColor: '#2C3E50',
                            titleColor: '#F39C12',
                        }}
                    />
                </div>
            </div>
            <style global jsx>{`
                .chrono-controls, 
                .chrono-icons, 
                .chrono-container .timeline-main-wrapper .timeline-controls,
                .timeline-controls-wrapper {
                    display: none !important;
                    visibility: hidden !important;
                    opacity: 0 !important;
                    pointer-events: none !important;
                }

                /* Disable scrolling */
                .chrono-container {
                    overflow: visible !important;
                    height: auto !important;
                }

                .timeline-main-wrapper {
                    overflow: visible !important;
                    height: auto !important;
                }

                .timeline-vertical-container {
                    overflow: visible !important;
                    height: auto !important;
                }
            `}</style>
        </div>
    );
};

export default Experiences;
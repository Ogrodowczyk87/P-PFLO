import { motion } from 'framer-motion';
import { Chrono } from 'react-chrono';
import { experiences } from '../content/experiences';
import { sectionIds } from '../content/sectionIds';
import { fadeUpVariants } from '../lib/src/utils/motionVariants';

const chronoGlobalStyles = `
.chrono-controls,
.chrono-icons,
.chrono-container .timeline-main-wrapper .timeline-controls,
.timeline-controls-wrapper {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
}

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
`;

const ExperienceSection = () => {
    return (
        <motion.section
            id={sectionIds.experience}
            className="bg-cod py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUpVariants}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-poppins font-bold text-dark-blue text-center mb-12"
                    variants={fadeUpVariants}
                >
                    My Experiences
                </motion.h2>
                <motion.div style={{ width: '100%', height: 'auto' }} variants={fadeUpVariants}>
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
                            primary: '#0F172A',
                            secondary: '#2563EB',
                            cardBgColor: '#FFFFFF',
                            cardForeColor: '#0F172A',
                            titleColor: '#2563EB',
                            titleColorActive: '#FFFFFF',
                        }}
                    />
                </motion.div>
            </div>
            <style>{chronoGlobalStyles}</style>
        </motion.section>
    );
};

export default ExperienceSection;

import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

// Interface for GitHub API data
interface ContributionDay {
    date: string;
    count: number;
    level: number; // 0-4 intensity level
}

const Github = () => {
    const username = 'Ogrodowczyk87';
    const [contributionData, setContributionData] = useState<ContributionDay[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchGitHubData = async () => {
            setLoading(true);

            // Generate placeholder data
            const placeholderData = generatePlaceholderData();
            setContributionData(placeholderData);

            setLoading(false);
        };

        fetchGitHubData();
    }, [username]);

    // Function to generate placeholder data
    const generatePlaceholderData = (): ContributionDay[] => {
        const data: ContributionDay[] = [];
        const currentDate = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

        for (let d = new Date(oneYearAgo); d <= currentDate; d.setDate(d.getDate() + 1)) {
            const dateString = d.toISOString().split('T')[0];
            const dayOfWeek = d.getDay();

            // Higher activity on weekdays
            const activityProbability = [0.3, 0.6, 0.7, 0.8, 0.7, 0.6, 0.2][dayOfWeek];
            const hasActivity = Math.random() < activityProbability;

            let level = 0;
            let count = 0;

            if (hasActivity) {
                count = Math.floor(Math.random() * 12) + 1;
                if (count <= 2) level = 1;
                else if (count <= 5) level = 2;
                else if (count <= 10) level = 3;
                else level = 4;
            }

            data.push({
                date: dateString,
                count,
                level
            });
        }

        return data.sort((a, b) => a.date.localeCompare(b.date));
    };

    // Helper functions for styles
    const getLevelClass = (level: number) => {
        switch (level) {
            case 0: return 'bg-[#ebedf0]';
            case 1: return 'bg-[#9be9a8]';
            case 2: return 'bg-[#40c463]';
            case 3: return 'bg-[#30a14e]';
            case 4: return 'bg-[#216e39]';
            default: return 'bg-[#ebedf0]';
        }
    };

    // Group data by weeks
    const groupByWeeks = (data: ContributionDay[]) => {
        const weeks: ContributionDay[][] = [];
        let currentWeek: ContributionDay[] = [];

        const sortedData = [...data].sort((a, b) => a.date.localeCompare(b.date));

        sortedData.forEach((day, index) => {
            const dayDate = new Date(day.date);

            if (dayDate.getDay() === 0 || index === 0) {
                if (currentWeek.length > 0) {
                    weeks.push(currentWeek);
                }
                currentWeek = [day];
            } else {
                currentWeek.push(day);
            }

            if (index === sortedData.length - 1 && currentWeek.length > 0) {
                weeks.push(currentWeek);
            }
        });

        return weeks;
    };

    const contributionWeeks = groupByWeeks(contributionData);

    return (
        <div
            id="Github"
            className="py-16 px-4 md:px-8 bg-white"
        >
            <div className="container mx-auto bg-white/75 shadow-lg rounded-lg p-8 md:p-10 transform transition-transform hover:scale-105 hover:shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4 flex items-center justify-center">
                        <FaGithub className="mr-3" size={36} />
                        GitHub Contribution
                    </h2>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dark-blue"></div>
                    </div>
                ) : (
                    <div className="bg-white rounded-md border border-gray-200 p-6 mb-8">
                        <div className="overflow-x-auto">
                            <div className="min-w-max">
                                {/* Month labels */}
                                <div className="flex text-xs text-gray-500 mb-2 pl-10">
                                    <div className="w-6"></div>
                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                                        <div key={month} className="w-14 text-center">
                                            {month}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex">
                                    {/* Day labels */}
                                    <div className="flex flex-col mr-2 text-xs text-gray-500">
                                        <div className="h-[11px] mb-[2px]"></div>
                                        <div className="h-[11px] mb-[2px]">Mon</div>
                                        <div className="h-[11px] mb-[2px]"></div>
                                        <div className="h-[11px] mb-[2px]">Wed</div>
                                        <div className="h-[11px] mb-[2px]"></div>
                                        <div className="h-[11px] mb-[2px]">Fri</div>
                                        <div className="h-[11px] mb-[2px]"></div>
                                    </div>

                                    {/* Contribution grid */}
                                    <div className="flex gap-[2px]">
                                        {contributionWeeks.map((week, weekIndex) => (
                                            <div key={weekIndex} className="flex flex-col gap-[2px]">
                                                {week.map((day) => (
                                                    <div
                                                        key={day.date}
                                                        className={`w-[10px] h-[10px] ${getLevelClass(day.level)} rounded-sm border border-gray-200 border-opacity-50 hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer`}
                                                        title={`${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`}
                                                    ></div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex justify-end items-center mt-4 text-xs text-gray-500">
                            <span className="mr-2">Less</span>
                            <div className="w-[10px] h-[10px] bg-[#ebedf0] rounded-sm border border-gray-200"></div>
                            <div className="w-[10px] h-[10px] bg-[#9be9a8] rounded-sm border border-gray-200 mx-[2px]"></div>
                            <div className="w-[10px] h-[10px] bg-[#40c463] rounded-sm border border-gray-200 mx-[2px]"></div>
                            <div className="w-[10px] h-[10px] bg-[#30a14e] rounded-sm border border-gray-200 mx-[2px]"></div>
                            <div className="w-[10px] h-[10px] bg-[#216e39] rounded-sm border border-gray-200"></div>
                            <span className="ml-2">More</span>
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center">
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors"
                    >
                        <FaGithub className="mr-2" />
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Github;
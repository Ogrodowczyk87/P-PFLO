import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExclamationCircle } from 'react-icons/fa';

// Interfejs dla danych z GitHub API
interface ContributionDay {
    date: string;
    count: number;
    level: number; // 0-4 poziom intensywności
}

interface GitHubContributionResponse {
    data?: {
        user?: {
            contributionsCollection?: {
                contributionCalendar?: {
                    totalContributions?: number;
                    weeks?: {
                        contributionDays?: {
                            date: string;
                            contributionCount: number;
                            color: string;
                        }[];
                    }[];
                };
            };
        };
    };
    errors?: Array<{ message: string }>;
}

const Github = () => {
    const username = 'Ogrodowczyk87';
    const [contributionData, setContributionData] = useState<ContributionDay[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                setLoading(true);

                // Użyj bieżącego roku zamiast przyszłości
                const currentDate = new Date();
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

                // Dane z ostatnich 12 miesięcy
                const startDate = oneYearAgo.toISOString();
                const endDate = currentDate.toISOString();

                console.log(`Fetching data from ${startDate} to ${endDate}`);

                // Użyj zmiennej środowiskowej z prefixem Vite
                const token = import.meta.env.VITE_GITHUB_TOKEN;

                if (token) {
                    // Gdy token jest dostępny, używamy GitHub GraphQL API
                    console.log("Using GitHub API with token");

                    const query = `
                    query {
                      user(login: "${username}") {
                        contributionsCollection(from: "${startDate}", to: "${endDate}") {
                          contributionCalendar {
                            totalContributions
                            weeks {
                              contributionDays {
                                date
                                contributionCount
                                color
                              }
                            }
                          }
                        }
                      }
                    }`;

                    const response = await fetch('https://api.github.com/graphql', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `bearer ${token}`
                        },
                        body: JSON.stringify({ query })
                    });

                    if (!response.ok) {
                        throw new Error(`GitHub API error: ${response.status}`);
                    }

                    const result: GitHubContributionResponse = await response.json();

                    if (result.errors && result.errors.length > 0) {
                        throw new Error(`GitHub GraphQL error: ${result.errors[0].message}`);
                    }

                    if (result.data?.user?.contributionsCollection?.contributionCalendar?.weeks) {
                        const weeks = result.data.user.contributionsCollection.contributionCalendar.weeks;

                        let processedData: ContributionDay[] = [];
                        weeks.forEach(week => {
                            if (week.contributionDays) {
                                week.contributionDays.forEach(day => {
                                    // Mapowanie kolorów na poziomy intensywności
                                    let level = 0;
                                    if (day.contributionCount > 0) {
                                        // Przypisz poziom na podstawie koloru lub liczby kontrybucji
                                        if (day.contributionCount <= 2) level = 1;
                                        else if (day.contributionCount <= 4) level = 2;
                                        else if (day.contributionCount <= 6) level = 3;
                                        else level = 4;
                                    }

                                    processedData.push({
                                        date: day.date,
                                        count: day.contributionCount,
                                        level: level
                                    });
                                });
                            }
                        });

                        setContributionData(processedData);
                        return; // Zakończ funkcję, bo dane zostały pobrane
                    }
                }

                // Jeśli token nie jest dostępny lub wystąpił błąd, generujemy dane zastępcze
                console.log("Using generated placeholder data. For real GitHub data, set VITE_GITHUB_TOKEN in your .env file.");

                const targetYear = 2025;
                const dummyData: ContributionDay[] = [];

                // Tworzymy daty dla całego roku 2025
                const yearStart = new Date(`${targetYear}-01-01`);
                const yearEnd = new Date(`${targetYear}-12-31`);

                for (let d = new Date(yearStart); d <= yearEnd; d.setDate(d.getDate() + 1)) {
                    const dateString = d.toISOString().split('T')[0];

                    // Generujemy przykładowe dane bazujące na dniu tygodnia
                    const dayOfWeek = d.getDay();
                    // Większa szansa na aktywność w środku tygodnia niż w weekendy
                    const activityProbability = [0.3, 0.6, 0.7, 0.8, 0.7, 0.6, 0.2][dayOfWeek];
                    const hasActivity = Math.random() < activityProbability;

                    let level = 0;
                    let count = 0;

                    if (hasActivity) {
                        count = Math.floor(Math.random() * 8) + 1;
                        if (count <= 2) level = 1;
                        else if (count <= 4) level = 2;
                        else if (count <= 6) level = 3;
                        else level = 4;
                    }

                    dummyData.push({
                        date: dateString,
                        count,
                        level
                    });
                }

                // Sortujemy dane chronologicznie
                dummyData.sort((a, b) => a.date.localeCompare(b.date));
                setContributionData(dummyData);

            } catch (err: any) {
                console.error('Error fetching GitHub data:', err);
                setError(`Failed to fetch data from GitHub: ${err.message || 'Unknown error'}`);

                // W przypadku błędu również generujemy dane zastępcze
                const targetYear = 2025;
                const dummyData: ContributionDay[] = [];

                // Tworzymy daty dla całego roku 2025
                const yearStart = new Date(`${targetYear}-01-01`);
                const yearEnd = new Date(`${targetYear}-12-31`);

                for (let d = new Date(yearStart); d <= yearEnd; d.setDate(d.getDate() + 1)) {
                    const dateString = d.toISOString().split('T')[0];
                    const dayOfWeek = d.getDay();
                    const activityProbability = [0.3, 0.6, 0.7, 0.8, 0.7, 0.6, 0.2][dayOfWeek];
                    const hasActivity = Math.random() < activityProbability;

                    let level = 0;
                    let count = 0;

                    if (hasActivity) {
                        count = Math.floor(Math.random() * 8) + 1;
                        if (count <= 2) level = 1;
                        else if (count <= 4) level = 2;
                        else if (count <= 6) level = 3;
                        else level = 4;
                    }

                    dummyData.push({
                        date: dateString,
                        count,
                        level
                    });
                }

                // Sortujemy dane chronologicznie
                dummyData.sort((a, b) => a.date.localeCompare(b.date));
                setContributionData(dummyData);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubData();
    }, [username]);

    // Funkcje pomocnicze
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

    // Grupowanie danych według tygodni
    const groupByWeeks = (data: ContributionDay[]) => {
        const weeks: ContributionDay[][] = [];
        let currentWeek: ContributionDay[] = [];

        // Upewnij się, że dane są posortowane chronologicznie
        const sortedData = [...data].sort((a, b) => a.date.localeCompare(b.date));

        sortedData.forEach((day, index) => {
            const dayDate = new Date(day.date);

            // Jeśli to niedziela (0) lub pierwszy element, rozpocznij nowy tydzień
            if (dayDate.getDay() === 0 || index === 0) {
                if (currentWeek.length > 0) {
                    weeks.push(currentWeek);
                }
                currentWeek = [day];
            } else {
                currentWeek.push(day);
            }

            // Dla ostatniego elementu
            if (index === sortedData.length - 1 && currentWeek.length > 0) {
                weeks.push(currentWeek);
            }
        });

        return weeks;
    };

    const contributionWeeks = groupByWeeks(contributionData);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            id="Github"
            className="py-16 px-4 md:px-8"
        >
            <div className="container mx-auto bg-white/75 shadow-lg rounded-lg p-8 md:p-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4 flex items-center justify-center">
                        <FaGithub className="mr-3" size={36} />
                        GitHub Contributions
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        My coding activity on GitHub
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dark-blue"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 py-8 flex flex-col items-center">
                        <FaExclamationCircle size={30} className="mb-2" />
                        <p>{error}</p>
                    </div>
                ) : (
                    <>
                        {/* GitHub-like Container */}
                        <div className="border border-gray-200 rounded-md bg-white p-4 mb-8 mx-auto max-w-5xl">
                            {/* Contribution Grid */}
                            <div className="overflow-x-auto">
                                <div className="min-w-max">
                                    {/* Months Row */}
                                    <div className="flex text-xs text-gray-500 mb-1 pl-10">
                                        <div className="w-6"></div>
                                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                                            <div key={month} className="w-6" style={{ marginLeft: i === 0 ? '0' : '8px' }}>
                                                {month}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex">
                                        {/* Days Column */}
                                        <div className="flex flex-col mr-2 text-xs text-gray-500">
                                            <div className="h-[10px] text-center"></div> {/* Spacer */}
                                            <div className="h-[10px] mt-[2px] text-center">Mon</div>
                                            <div className="h-[10px] mt-[2px] text-center"></div> {/* Wed label only */}
                                            <div className="h-[10px] mt-[2px] text-center">Wed</div>
                                            <div className="h-[10px] mt-[2px] text-center"></div> {/* Empty */}
                                            <div className="h-[10px] mt-[2px] text-center">Fri</div>
                                            <div className="h-[10px] mt-[2px] text-center"></div> {/* Empty */}
                                        </div>

                                        {/* Contribution Grid */}
                                        <div className="flex gap-[3px]">
                                            {contributionWeeks.map((week, weekIndex) => (
                                                <div key={weekIndex} className="flex flex-col gap-[3px]">
                                                    {week.map((day) => (
                                                        <div
                                                            key={day.date}
                                                            className={`w-[10px] h-[10px] ${getLevelClass(day.level)} rounded-sm hover:ring-1 hover:ring-gray-400`}
                                                            title={`${day.count} contributions on ${day.date}`}
                                                            data-date={day.date}
                                                        ></div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Legend - bardziej jak na GitHub */}
                            <div className="flex justify-end items-center mt-4 text-xs text-gray-600">
                                <span className="mr-2">Less</span>
                                <div className="w-[10px] h-[10px] bg-[#ebedf0] border border-gray-200 rounded-sm"></div>
                                <div className="w-[10px] h-[10px] bg-[#9be9a8] border border-gray-200 rounded-sm mx-[3px]"></div>
                                <div className="w-[10px] h-[10px] bg-[#40c463] border border-gray-200 rounded-sm mx-[3px]"></div>
                                <div className="w-[10px] h-[10px] bg-[#30a14e] border border-gray-200 rounded-sm mx-[3px]"></div>
                                <div className="w-[10px] h-[10px] bg-[#216e39] border border-gray-200 rounded-sm"></div>
                                <span className="ml-2">More</span>
                            </div>
                        </div>

                        {/* GitHub Statystyka - dodatkowy element jak na profilu GitHub */}
                        <div className="border border-gray-200 rounded-md bg-white p-4 mb-8 mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center">
                            <div className="text-center md:text-left mb-4 md:mb-0">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {contributionData.reduce((sum, day) => sum + day.count, 0)} contributions in the last year
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Completed on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>

                            <div className="flex space-x-4">
                                <div className="text-center">
                                    <div className="text-xl font-medium text-gray-900">
                                        {contributionData.filter(day => day.count > 0).length}
                                    </div>
                                    <div className="text-xs text-gray-600">days contributed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-medium text-gray-900">
                                        {Math.max(...contributionData.map(day => day.count))}
                                    </div>
                                    <div className="text-xs text-gray-600">max in a day</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-medium text-gray-900">
                                        {contributionData.reduce((longestStreak, day, i, arr) => {
                                            if (i === 0) return day.count > 0 ? 1 : 0;

                                            const prev = arr[i - 1];
                                            const currentStreak = prev.count > 0 && day.count > 0 ?
                                                (arr[i - 1]._streak || 1) + 1 : (day.count > 0 ? 1 : 0);

                                            // Hacky way to store the current streak
                                            day._streak = currentStreak;

                                            return Math.max(longestStreak, currentStreak);
                                        }, 0)}
                                    </div>
                                    <div className="text-xs text-gray-600">longest streak</div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Call to Action */}
                <div className="text-center mt-6">
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        <FaGithub className="mr-2" />
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

// Dodaj dynamiczną właściwość dla kontynuacji obliczeń
declare module 'react' {
    interface ContributionDay {
        _streak?: number;
    }
}

export default Github;
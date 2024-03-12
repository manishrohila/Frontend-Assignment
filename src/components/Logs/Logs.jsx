import React, { useState, useEffect } from 'react';
import { MimicLogs } from '../api-mimic'
import Spinner from "../../images/Spinner.svg"
const Logs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Fetch logs data when the component mounts
        fetchLogs();
    }, []);
    const fetchLogs = async () => {
        try {
            const logsData = await MimicLogs.fetchPreviousLogs({
                startTs: Date.now() - 24 * 60 * 60 * 1000, // Example start timestamp (24 hours ago)
                endTs: Date.now(), // Example end timestamp (current time)
                limit: 100, // Example limit
            });
            setLogs(logsData.map(log => ({
                ...log,
                message: truncateMessage(log.message, 50),
                formattedTimestamp: formatTimestamp(log.timestamp)
            })));
        } catch (error) {
            console.error('Error fetching logs:', error);
        }
    };
    const truncateMessage = (message, maxLength) => {
        const words = message.split(' ');
        if (words.length > maxLength) {
            return words.slice(0, maxLength).join(' ') + '...';
        }
        return message;
    };

    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
            'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

        return `${monthName} ${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
    };
    return (
        <div className='bg-white'>
            <div className='w-[99%] mx-auto ' >
                <div className='flex justify-center text-md bg-[#0E1623] '>
                    <div>
                        <img src={Spinner} alt="spinner" className='relative mt-[4px] mr-2' />
                    </div>
                    <div>
                        <h1 className='text-[#82A0CE] font-medium'>Loading previous 100 logs</h1>
                    </div>

                </div>

                <div className='bg-[#090F17] text-white overflow-y-auto '>
                    {logs.map((log, index) => (
                        <div key={index} className="whitespace-nowrap  ml-2">|
                            <span className="ml-2 text-gray-500">{log.formattedTimestamp}  </span>  <span className="ml-2 " style={{ color: '#A8C3E8' }}>{log.message}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Logs

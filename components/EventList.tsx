import { events } from '@/constants';

const EventList = async ({ dateParam }: { dateParam: string | undefined }) => {
  const date = dateParam ? new Date(dateParam) : new Date();

  const data: EventType[] = events.filter((each) => {
    return (
      new Date(each.startTime) > new Date(date.setHours(0, 0, 0, 0)) &&
      each.startTime < new Date(date.setHours(23, 59, 59, 999))
    );
  });

  return data.map((event) => (
    <div
      className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-Sky even:border-t-Purple"
      key={event.classId}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-gray-600">{event.title}</h1>
        <span className="text-gray-300 text-xs">
          {/* Convert date to time in format 10:14 */}
          {event.startTime.toLocaleTimeString('en-UK', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
        </span>
      </div>
      <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
    </div>
  ));
};

export default EventList;

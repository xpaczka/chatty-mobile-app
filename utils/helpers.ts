type CalculateTimestamp = (messageTimestamp: string) => string;

export const calculateTimestamp: CalculateTimestamp = messageTimestamp => {
  const now = new Date();
  const messageTime = new Date(messageTimestamp).getTime();
  const timezoneOffset = now.getTimezoneOffset() * 60 * 1000;

  const difference = now.getTime() - messageTime + timezoneOffset;

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} d ago`;
  if (hours > 0) return `${hours} h ago`;
  if (minutes > 0) return `${minutes} m ago`;
  else return 'less than minute ago';
};

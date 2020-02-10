export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString
    .split('/')
    .map((value: string): number => {
      // Convert value (string) into integers and return
      return parseInt(value);
    });

    // Return a new instance of date as:
    // 'dateParts[2]' = year'; dateParts[1]' = month;
    // 'dataParts[1] - 1' = month inside date constructor is zero indexed, jan = 0
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
